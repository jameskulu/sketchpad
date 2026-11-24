import type { Element, Erasure } from "./elements";

export interface CollabUser {
  id: string;
  name: string;
  color: string;
  pointer?: {
    wx: number;
    wy: number;
    isDrawing: boolean;
  };
  pendingEl?: Element | null;
  pendingEr?: Erasure | null;
  lastActive: number;
  isSelf?: boolean;
}

export type CollabPacket = {
  msgId: string;
  senderId: string;
} & (
  | { type: "JOIN"; user: CollabUser }
  | { type: "PRESENCE"; user: CollabUser }
  | { type: "STREAM_DRAW"; pendingEl: Element | null; pendingEr: Erasure | null }
  | { type: "ELEMENT_ADD"; element?: Element; erasure?: Erasure }
  | { type: "ELEMENTS_UPDATE"; elements: Element[]; erasures: Erasure[] }
  | { type: "CLEAR" }
  | { type: "SYNC_REQ" }
  | { type: "SYNC_RES"; targetId: string; elements: Element[]; erasures: Erasure[] }
  | { type: "LEAVE" }
);

export type CollabStatus = "disconnected" | "connecting" | "connected";

const ADJECTIVES = [
  "Curious", "Swift", "Creative", "Clever", "Gentle", "Brave", "Sunny", "Happy",
  "Chill", "Silent", "Sparkly", "Mighty", "Witty", "Calm", "Dynamic", "Artistic",
  "Dreamy", "Lively", "Wise", "Jolly", "Nimble", "Bright", "Playful", "Bold"
];

const ANIMALS = [
  "Otter", "Falcon", "Fox", "Panda", "Bear", "Owl", "Dolphin", "Penguin",
  "Koala", "Rabbit", "Lynx", "Badger", "Tiger", "Beaver", "Hedgehog", "Eagle",
  "Cheetah", "Giraffe", "Sloth", "Seal", "Hawk", "Wolf", "Deer", "Squirrel"
];

const USER_COLORS = [
  "#6366f1", // Indigo
  "#ec4899", // Pink
  "#06b6d4", // Cyan
  "#10b981", // Emerald
  "#f59e0b", // Amber
  "#8b5cf6", // Purple
  "#ef4444", // Rose
  "#3b82f6", // Blue
  "#14b8a6", // Teal
  "#f97316", // Orange
];

export function generateRandomName(): string {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `${adj} ${animal}`;
}

export function getRandomColor(): string {
  return USER_COLORS[Math.floor(Math.random() * USER_COLORS.length)];
}

const PROFILE_STORAGE_KEY = "sketchpad_collab_profile";

export function getLocalUserProfile(): { id: string; name: string; color: string } {
  if (typeof window === "undefined") {
    return { id: "p_" + Math.random().toString(36).slice(2, 10), name: "Artist", color: USER_COLORS[0] };
  }
  try {
    const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed?.id && parsed?.name && parsed?.color) {
        return parsed;
      }
    }
  } catch {
    /* fallback to create */
  }

  const profile = {
    id: "p_" + Math.random().toString(36).slice(2, 10),
    name: generateRandomName(),
    color: getRandomColor(),
  };
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
  } catch {
    /* ignore storage quota */
  }
  return profile;
}

export function saveLocalUserProfile(name: string, color?: string): { id: string; name: string; color: string } {
  const current = getLocalUserProfile();
  const updated = {
    ...current,
    name: name.trim() || current.name,
    color: color || current.color,
  };
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    /* ignore storage */
  }
  return updated;
}

export function generateRoomId(): string {
  return "room-" + Math.random().toString(36).slice(2, 8) + Math.random().toString(36).slice(2, 6);
}

export interface CollabEvents {
  onPeersChange?: (peers: CollabUser[]) => void;
  onStreamDraw?: (peerId: string, pendingEl: Element | null, pendingEr: Erasure | null) => void;
  onElementAdd?: (element?: Element, erasure?: Erasure) => void;
  onElementsUpdate?: (elements: Element[], erasures: Erasure[]) => void;
  onClear?: () => void;
  onRequestSync?: () => { elements: Element[]; erasures: Erasure[] };
  onStatusChange?: (status: CollabStatus, roomId: string | null) => void;
}

export class CollabManager {
  private localUser: CollabUser;
  private roomId: string | null = null;
  private status: CollabStatus = "disconnected";
  private peers: Map<string, CollabUser> = new Map();
  private broadcastChannel: BroadcastChannel | null = null;
  private peerInstance: any = null;
  private peerConnections: Map<string, any> = new Map();
  private isHost = false;
  private seenMsgIds: Set<string> = new Set();
  private heartbeatInterval: number | null = null;
  private lastPointerBroadcast = 0;
  private events: CollabEvents = {};

  constructor(events: CollabEvents = {}) {
    this.events = events;
    const profile = getLocalUserProfile();
    this.localUser = {
      id: profile.id,
      name: profile.name,
      color: profile.color,
      lastActive: Date.now(),
      isSelf: true,
    };
  }

  public getStatus(): CollabStatus {
    return this.status;
  }

  public getRoomId(): string | null {
    return this.roomId;
  }

  public getLocalUser(): CollabUser {
    return { ...this.localUser };
  }

  public getPeers(): CollabUser[] {
    return [
      { ...this.localUser, isSelf: true },
      ...Array.from(this.peers.values()),
    ];
  }

  public setLocalName(name: string): void {
    const trimmed = name.trim();
    if (!trimmed) return;
    this.localUser.name = trimmed;
    saveLocalUserProfile(trimmed, this.localUser.color);
    this.broadcast({
      type: "PRESENCE",
      user: { ...this.localUser },
    });
    this.notifyPeers();
  }

  public async startRoom(preferredRoomId?: string): Promise<string> {
    const roomId = preferredRoomId || generateRoomId();
    await this.joinRoom(roomId, true);
    return roomId;
  }

  public async joinRoom(roomId: string, asHost = false): Promise<void> {
    if (this.roomId === roomId && this.status === "connected") {
      return;
    }
    this.leaveRoom();

    this.roomId = roomId;
    this.isHost = asHost;
    this.setStatus("connecting");

    // 1. Setup local BroadcastChannel (for 0ms lag across tabs / local windows)
    try {
      if (typeof window !== "undefined" && "BroadcastChannel" in window) {
        this.broadcastChannel = new BroadcastChannel(`sketchpad_room_${roomId}`);
        this.broadcastChannel.onmessage = (event) => {
          this.handleIncomingPacket(event.data);
        };
      }
    } catch (e) {
      console.warn("BroadcastChannel initialization skipped:", e);
    }

    // 2. Setup WebRTC via PeerJS
    await this.initPeerJS(roomId, asHost);

    // 3. Start Heartbeat & Presence
    this.startHeartbeat();

    // 4. Broadcast JOIN and request initial snapshot from existing peers
    this.broadcast({
      type: "JOIN",
      user: { ...this.localUser },
    });
    this.broadcast({
      type: "SYNC_REQ",
    });

    this.setStatus("connected");
  }

  private async initPeerJS(roomId: string, asHost: boolean): Promise<void> {
    if (typeof window === "undefined") return;

    try {
      const peerModule = await import("peerjs");
      const PeerConstructor: any =
        (peerModule as any).Peer ||
        (peerModule as any).default?.Peer ||
        (peerModule as any).default ||
        peerModule;

      const sanitizedRoom = roomId.replace(/[^a-zA-Z0-9_-]/g, "");
      const hostPeerId = `ssp-${sanitizedRoom}-host`;
      const clientPeerId = `ssp-${sanitizedRoom}-${this.localUser.id}`;

      // Choose peer ID
      const chosenPeerId = asHost ? hostPeerId : clientPeerId;

      this.peerInstance = new PeerConstructor(chosenPeerId, {
        debug: 1,
        config: {
          iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:stun1.l.google.com:19302" },
            { urls: "stun:global.stun.twilio.com:3478" },
          ],
        },
      });

      this.peerInstance.on("open", (id: string) => {
        // If not host, connect to the host
        if (!asHost && id !== hostPeerId) {
          this.connectToPeer(hostPeerId);
        }
      });

      this.peerInstance.on("connection", (conn: any) => {
        this.setupConnection(conn);
      });

      this.peerInstance.on("error", (err: any) => {
        // If host ID was already taken when trying to be host, connect as client
        if (err?.type === "unavailable-id" && asHost) {
          this.isHost = false;
          try {
            this.peerInstance.destroy();
          } catch {}
          this.initPeerJS(roomId, false);
        }
      });
    } catch (err) {
      console.warn("PeerJS WebRTC initialization failed, falling back to BroadcastChannel:", err);
    }
  }

  private connectToPeer(targetPeerId: string): void {
    if (!this.peerInstance || this.peerConnections.has(targetPeerId)) return;
    try {
      const conn = this.peerInstance.connect(targetPeerId, {
        reliable: false, // Low latency UDP-like channel for pointer streams
      });
      this.setupConnection(conn);
    } catch (err) {
      console.warn("Failed to connect to peer:", targetPeerId, err);
    }
  }

  private setupConnection(conn: any): void {
    conn.on("open", () => {
      this.peerConnections.set(conn.peer, conn);
      // Send self presence
      try {
        const packet: CollabPacket = {
          msgId: this.nextMsgId(),
          senderId: this.localUser.id,
          type: "JOIN",
          user: { ...this.localUser },
        };
        conn.send(packet);
      } catch {}
    });

    conn.on("data", (data: any) => {
      this.handleIncomingPacket(data);
    });

    conn.on("close", () => {
      this.peerConnections.delete(conn.peer);
    });

    conn.on("error", () => {
      this.peerConnections.delete(conn.peer);
    });
  }

  public leaveRoom(): void {
    if (this.status === "disconnected") return;

    this.broadcast({ type: "LEAVE" });

    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.close();
      } catch {}
      this.broadcastChannel = null;
    }

    if (this.peerInstance) {
      try {
        this.peerInstance.destroy();
      } catch {}
      this.peerInstance = null;
    }

    this.peerConnections.clear();
    this.peers.clear();
    this.seenMsgIds.clear();

    if (this.heartbeatInterval) {
      window.clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }

    this.roomId = null;
    this.setStatus("disconnected");
    this.notifyPeers();
  }

  private setStatus(status: CollabStatus): void {
    this.status = status;
    this.events.onStatusChange?.(status, this.roomId);
  }

  private startHeartbeat(): void {
    if (this.heartbeatInterval) window.clearInterval(this.heartbeatInterval);

    this.heartbeatInterval = window.setInterval(() => {
      // 1. Send heartbeat
      this.broadcast({
        type: "PRESENCE",
        user: { ...this.localUser },
      });

      // 2. Prune inactive peers (> 14 seconds without heartbeat)
      const now = Date.now();
      let changed = false;
      for (const [id, peer] of this.peers.entries()) {
        if (now - peer.lastActive > 14000) {
          this.peers.delete(id);
          changed = true;
        }
      }
      if (changed) {
        this.notifyPeers();
      }
    }, 4000);
  }

  private nextMsgId(): string {
    return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  private broadcast(payload: Omit<CollabPacket, "msgId" | "senderId">): void {
    if (this.status === "disconnected") return;

    const packet: CollabPacket = {
      ...payload,
      msgId: this.nextMsgId(),
      senderId: this.localUser.id,
    } as CollabPacket;

    // Track own message ID
    this.seenMsgIds.add(packet.msgId);

    // 1. BroadcastChannel (same-origin / tabs)
    if (this.broadcastChannel) {
      try {
        this.broadcastChannel.postMessage(packet);
      } catch {}
    }

    // 2. WebRTC DataConnections
    for (const conn of this.peerConnections.values()) {
      try {
        if (conn.open) conn.send(packet);
      } catch {}
    }
  }

  public broadcastPointer(wx: number, wy: number, isDrawing: boolean): void {
    const now = performance.now();
    this.localUser.pointer = { wx, wy, isDrawing };

    // Throttle pointer network broadcasts to ~35ms (~28fps), perfectly smooth without network congestion
    if (now - this.lastPointerBroadcast < 35) return;
    this.lastPointerBroadcast = now;

    this.broadcast({
      type: "PRESENCE",
      user: { ...this.localUser },
    });
  }

  public broadcastStreamDraw(pendingEl: Element | null, pendingEr: Erasure | null): void {
    this.broadcast({
      type: "STREAM_DRAW",
      pendingEl,
      pendingEr,
    });
  }

  public broadcastElementAdd(element?: Element, erasure?: Erasure): void {
    this.broadcast({
      type: "ELEMENT_ADD",
      element,
      erasure,
    });
  }

  public broadcastElementsUpdate(elements: Element[], erasures: Erasure[]): void {
    this.broadcast({
      type: "ELEMENTS_UPDATE",
      elements,
      erasures,
    });
  }

  public broadcastClear(): void {
    this.broadcast({
      type: "CLEAR",
    });
  }

  private handleIncomingPacket(packet: any): void {
    if (!packet || typeof packet !== "object" || !packet.msgId || !packet.senderId) return;
    if (packet.senderId === this.localUser.id) return;

    // Deduplicate packets received over multiple transports (BroadcastChannel + WebRTC)
    if (this.seenMsgIds.has(packet.msgId)) return;
    this.seenMsgIds.add(packet.msgId);
    if (this.seenMsgIds.size > 2000) {
      const first = Array.from(this.seenMsgIds).slice(0, 500);
      for (const id of first) this.seenMsgIds.delete(id);
    }

    switch (packet.type) {
      case "JOIN":
      case "PRESENCE": {
        const u = packet.user as CollabUser;
        if (!u || !u.id) break;
        const existing = this.peers.get(u.id);
        const updated: CollabUser = {
          ...existing,
          ...u,
          lastActive: Date.now(),
          isSelf: false,
        };
        this.peers.set(u.id, updated);
        this.notifyPeers();

        // If newcomer just joined, reply with our presence
        if (packet.type === "JOIN") {
          this.broadcast({
            type: "PRESENCE",
            user: { ...this.localUser },
          });
        }
        break;
      }

      case "STREAM_DRAW": {
        const peer = this.peers.get(packet.senderId);
        if (peer) {
          peer.pendingEl = packet.pendingEl;
          peer.pendingEr = packet.pendingEr;
          peer.lastActive = Date.now();
        }
        this.events.onStreamDraw?.(packet.senderId, packet.pendingEl, packet.pendingEr);
        break;
      }

      case "ELEMENT_ADD": {
        const peer = this.peers.get(packet.senderId);
        if (peer) {
          peer.pendingEl = null;
          peer.pendingEr = null;
          peer.lastActive = Date.now();
        }
        this.events.onElementAdd?.(packet.element, packet.erasure);
        break;
      }

      case "ELEMENTS_UPDATE": {
        const peer = this.peers.get(packet.senderId);
        if (peer) peer.lastActive = Date.now();
        this.events.onElementsUpdate?.(packet.elements, packet.erasures);
        break;
      }

      case "CLEAR": {
        const peer = this.peers.get(packet.senderId);
        if (peer) peer.lastActive = Date.now();
        this.events.onClear?.();
        break;
      }

      case "SYNC_REQ": {
        if (this.events.onRequestSync) {
          const snapshot = this.events.onRequestSync();
          if (snapshot && (snapshot.elements.length > 0 || snapshot.erasures.length > 0)) {
            this.broadcast({
              type: "SYNC_RES",
              targetId: packet.senderId,
              elements: snapshot.elements,
              erasures: snapshot.erasures,
            });
          }
        }
        break;
      }

      case "SYNC_RES": {
        if (packet.targetId === this.localUser.id) {
          this.events.onElementsUpdate?.(packet.elements, packet.erasures);
        }
        break;
      }

      case "LEAVE": {
        this.peers.delete(packet.senderId);
        this.notifyPeers();
        break;
      }
    }
  }

  private notifyPeers(): void {
    this.events.onPeersChange?.(this.getPeers());
  }
}
