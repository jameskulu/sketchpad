import { CollabManager, getLocalUserProfile, saveLocalUserProfile, type CollabUser } from "./collab";
import type { Sketchpad } from "./sketchpad";
import { uiFor } from "../i18n/ui";
import type { Locale } from "../i18n/locales";

export function initCollabUI(pad: Sketchpad, locale: Locale = "en"): CollabManager {
  const ui = uiFor(locale);
  const collabBtn = document.getElementById("collab-btn") as HTMLButtonElement | null;
  const collabPulse = document.getElementById("collab-pulse-dot") as HTMLElement | null;
  const collabBadge = document.getElementById("collab-badge") as HTMLElement | null;
  const activeUsersBar = document.getElementById("collab-active-users") as HTMLElement | null;
  const dialog = document.getElementById("collab-dialog") as HTMLDialogElement | null;
  const closeBtn = document.getElementById("collab-dialog-close") as HTMLButtonElement | null;

  const viewInactive = document.getElementById("collab-view-inactive") as HTMLElement | null;
  const viewActive = document.getElementById("collab-view-active") as HTMLElement | null;

  const nameInputInactive = document.getElementById("collab-user-name-input") as HTMLInputElement | null;
  const colorDotInactive = document.getElementById("collab-self-color-dot") as HTMLElement | null;
  const startBtn = document.getElementById("collab-start-btn") as HTMLButtonElement | null;

  const shareLinkInput = document.getElementById("collab-share-link") as HTMLInputElement | null;
  const copyBtn = document.getElementById("collab-copy-btn") as HTMLButtonElement | null;
  const copyNotice = document.getElementById("collab-copy-notice") as HTMLElement | null;

  const nameInputActive = document.getElementById("collab-name-edit-input") as HTMLInputElement | null;
  const colorDotActive = document.getElementById("collab-self-color-dot-active") as HTMLElement | null;
  const saveNameBtn = document.getElementById("collab-save-name-btn") as HTMLButtonElement | null;

  const usersCountTag = document.getElementById("collab-users-count") as HTMLElement | null;
  const usersList = document.getElementById("collab-users-list") as HTMLElement | null;
  const stopBtn = document.getElementById("collab-stop-btn") as HTMLButtonElement | null;

  const followPill = document.getElementById("follow-pill") as HTMLElement | null;
  const followPillText = document.getElementById("follow-pill-text") as HTMLElement | null;
  const followPillDot = document.getElementById("follow-pill-dot") as HTMLElement | null;
  const followStopBtn = document.getElementById("follow-stop-btn") as HTMLButtonElement | null;

  // Tabs & Shareable Link Elements
  const tabLive = document.getElementById("tab-collab-live") as HTMLButtonElement | null;
  const tabReadonly = document.getElementById("tab-collab-readonly") as HTMLButtonElement | null;
  const paneLive = document.getElementById("pane-collab-live") as HTMLElement | null;
  const paneReadonly = document.getElementById("pane-collab-readonly") as HTMLElement | null;
  const readonlyLinkInput = document.getElementById("collab-readonly-link-input") as HTMLInputElement | null;
  const readonlyCopyBtn = document.getElementById("collab-readonly-copy-btn") as HTMLButtonElement | null;
  const readonlyCopyNotice = document.getElementById("collab-readonly-copy-notice") as HTMLElement | null;
  const readonlyPreviewBtn = document.getElementById("collab-readonly-preview-btn") as HTMLAnchorElement | null;

  async function updateShareableLink(): Promise<string> {
    if (readonlyLinkInput) {
      readonlyLinkInput.value = ui.collab.readOnlyGenerating;
    }
    let url = "";
    try {
      if (typeof (pad as any).createShareableLink === "function") {
        url = await (pad as any).createShareableLink();
      } else if (typeof (window as any).__storyboard?.createShareableLink === "function") {
        url = await (window as any).__storyboard.createShareableLink();
      }
    } catch (err) {
      console.warn("Failed to generate share link:", err);
    }
    if (url && readonlyLinkInput) {
      readonlyLinkInput.value = url;
      if (readonlyPreviewBtn) {
        readonlyPreviewBtn.href = url;
      }
    }
    return url;
  }

  function switchTab(target: "live" | "readonly") {
    if (target === "live") {
      tabLive?.classList.add("is-active");
      tabLive?.setAttribute("aria-selected", "true");
      tabReadonly?.classList.remove("is-active");
      tabReadonly?.setAttribute("aria-selected", "false");
      if (paneLive) paneLive.hidden = false;
      if (paneReadonly) paneReadonly.hidden = true;
    } else {
      tabReadonly?.classList.add("is-active");
      tabReadonly?.setAttribute("aria-selected", "true");
      tabLive?.classList.remove("is-active");
      tabLive?.setAttribute("aria-selected", "false");
      if (paneReadonly) paneReadonly.hidden = false;
      if (paneLive) paneLive.hidden = true;
      updateShareableLink();
    }
  }

  tabLive?.addEventListener("click", () => switchTab("live"));
  tabReadonly?.addEventListener("click", () => switchTab("readonly"));

  readonlyCopyBtn?.addEventListener("click", async () => {
    if (!readonlyLinkInput?.value || readonlyLinkInput.value.startsWith("Generating") || readonlyLinkInput.value === ui.collab.readOnlyGenerating) {
      await updateShareableLink();
    }
    if (!readonlyLinkInput?.value) return;
    try {
      await navigator.clipboard.writeText(readonlyLinkInput.value);
      readonlyCopyBtn.textContent = ui.collab.copied;
      if (readonlyCopyNotice) readonlyCopyNotice.hidden = false;
      setTimeout(() => {
        if (readonlyCopyBtn) readonlyCopyBtn.textContent = ui.collab.copyLink;
        if (readonlyCopyNotice) readonlyCopyNotice.hidden = true;
      }, 2500);
    } catch {
      readonlyLinkInput.select();
      document.execCommand("copy");
    }
  });

  window.addEventListener("sketchpad:opensharelink", async () => {
    dialog?.showModal();
    switchTab("readonly");
    const link = await updateShareableLink();
    if (link && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(link);
        if (readonlyCopyBtn) readonlyCopyBtn.textContent = ui.collab.copied;
        if (readonlyCopyNotice) readonlyCopyNotice.hidden = false;
        setTimeout(() => {
          if (readonlyCopyBtn) readonlyCopyBtn.textContent = ui.collab.copyLink;
          if (readonlyCopyNotice) readonlyCopyNotice.hidden = true;
        }, 2500);
      } catch {
        /* ignore */
      }
    }
  });

  let currentPeers: CollabUser[] = [];
  let currentFollowingId: string | null = null;

  const profile = getLocalUserProfile();
  if (nameInputInactive) nameInputInactive.value = profile.name;
  if (colorDotInactive) colorDotInactive.style.backgroundColor = profile.color;
  if (nameInputActive) nameInputActive.value = profile.name;
  if (colorDotActive) colorDotActive.style.backgroundColor = profile.color;

  const collab = new CollabManager({
    onStatusChange: (status, roomId) => {
      const isConnected = status === "connected";
      if (collabPulse) collabPulse.hidden = !isConnected;
      if (collabBadge) collabBadge.hidden = !isConnected;
      if (activeUsersBar) activeUsersBar.hidden = !isConnected;

      if (viewInactive) viewInactive.hidden = isConnected;
      if (viewActive) viewActive.hidden = !isConnected;

      if (isConnected && roomId) {
        const url = new URL(window.location.href);
        url.hash = `room=${roomId}`;
        const roomUrl = url.href;
        if (shareLinkInput) shareLinkInput.value = roomUrl;
        if (window.location.hash !== `#room=${roomId}`) {
          history.replaceState(null, "", `#room=${roomId}`);
        }
      } else {
        if (window.location.hash.includes("room=")) {
          history.replaceState(null, "", window.location.pathname + window.location.search);
        }
      }
    },

    onPeersChange: (peers) => {
      currentPeers = peers;
      pad.updateCollabPeers(peers);
      renderActiveUsers(peers);
    },

    onStreamDraw: (peerId, pendingEl, pendingEr) => {
      // Stream draw handled in sketchpad
      const p = currentPeers.find((u) => u.id === peerId);
      if (p) {
        p.pendingEl = pendingEl;
        p.pendingEr = pendingEr;
      }
      pad.updateCollabPeers(currentPeers);
    },

    onElementAdd: (el, er) => {
      pad.applyRemoteElementAdd(el, er);
    },

    onElementsUpdate: (elements, erasures) => {
      pad.applyRemoteElementsUpdate(elements, erasures);
    },

    onClear: () => {
      pad.applyRemoteClear();
    },

    onRequestSync: () => {
      const snap = pad.getSnapshot();
      return { elements: snap.elements, erasures: snap.erasures };
    },
  });

  pad.setCollabManager(collab);

  function renderActiveUsers(peers: CollabUser[]) {
    const total = peers.length;
    if (collabBadge) {
      collabBadge.textContent = String(total);
      collabBadge.hidden = total <= 1;
    }
    if (usersCountTag) {
      usersCountTag.textContent = ui.collab.onlineCount(total);
    }

    // 1. Render Top Header Avatars
    if (activeUsersBar) {
      activeUsersBar.innerHTML = "";
      peers.forEach((peer) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "collab-user-avatar";
        if (peer.id === currentFollowingId) {
          btn.classList.add("is-following");
        }
        btn.style.backgroundColor = peer.color;
        btn.title = peer.isSelf ? peer.name : `${peer.name} — ${ui.collab.followView}`;
        btn.setAttribute("aria-label", btn.title);

        const initial = document.createElement("span");
        initial.textContent = (peer.name.charAt(0) || "U").toUpperCase();
        btn.appendChild(initial);

        if (peer.id === currentFollowingId) {
          const eye = document.createElement("span");
          eye.className = "collab-eye-indicator";
          eye.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
          btn.appendChild(eye);
        }

        btn.addEventListener("click", () => {
          if (peer.isSelf) {
            // Open modal to view profile
            dialog?.showModal();
          } else {
            pad.followPeer(peer.id);
          }
        });

        activeUsersBar.appendChild(btn);
      });
    }

    // 2. Render Dialog List
    if (usersList) {
      usersList.innerHTML = "";
      peers.forEach((peer) => {
        const row = document.createElement("div");
        row.className = "collab-user-row";

        const left = document.createElement("div");
        left.className = "collab-user-info";

        const dot = document.createElement("span");
        dot.className = "collab-user-row-avatar";
        dot.style.backgroundColor = peer.color;
        dot.textContent = (peer.name.charAt(0) || "U").toUpperCase();

        const nameSpan = document.createElement("span");
        nameSpan.className = "collab-user-name";
        nameSpan.textContent = peer.name;

        left.append(dot, nameSpan);
        row.appendChild(left);

        if (!peer.isSelf) {
          const followBtn = document.createElement("button");
          followBtn.type = "button";
          const isFollowingThis = peer.id === currentFollowingId;
          followBtn.className = `collab-follow-btn ${isFollowingThis ? "is-following" : ""}`;
          followBtn.textContent = isFollowingThis ? ui.collab.following : ui.collab.followView;
          followBtn.addEventListener("click", () => {
            pad.followPeer(peer.id);
            dialog?.close();
          });
          row.appendChild(followBtn);
        }

        usersList.appendChild(row);
      });
    }
  }

  // Follow Mode Event Listeners
  window.addEventListener("sketchpad:followchange", (e: any) => {
    const { followingPeerId, peerName, peerColor } = e.detail || {};
    currentFollowingId = followingPeerId;

    if (followingPeerId) {
      if (followPill) {
        followPill.hidden = false;
        if (followPillText) followPillText.textContent = ui.collab.viewingPeer(peerName || "Peer");
        if (followPillDot && peerColor) followPillDot.style.backgroundColor = peerColor;
      }
    } else {
      if (followPill) followPill.hidden = true;
    }
    renderActiveUsers(currentPeers);
  });

  if (followStopBtn) {
    followStopBtn.addEventListener("click", () => {
      pad.followPeer(null);
    });
  }

  // Dialog Controls
  collabBtn?.addEventListener("click", () => {
    if (dialog?.open) {
      dialog.close();
    } else {
      dialog?.showModal();
    }
  });

  closeBtn?.addEventListener("click", () => {
    dialog?.close();
  });

  dialog?.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });

  startBtn?.addEventListener("click", async () => {
    const chosenName = nameInputInactive?.value.trim() || generateRandomName();
    collab.setLocalName(chosenName);
    if (nameInputActive) nameInputActive.value = chosenName;
    startBtn.disabled = true;
    startBtn.textContent = ui.collab.startingSession;
    try {
      await collab.startRoom();
    } finally {
      startBtn.disabled = false;
      startBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5L20 7"/></svg> ${ui.collab.startLiveSession}`;
    }
  });

  saveNameBtn?.addEventListener("click", () => {
    const updated = nameInputActive?.value.trim();
    if (updated) {
      collab.setLocalName(updated);
      saveNameBtn.textContent = ui.collab.savedName;
      setTimeout(() => {
        if (saveNameBtn) saveNameBtn.textContent = ui.collab.saveName;
      }, 1200);
    }
  });

  copyBtn?.addEventListener("click", async () => {
    if (!shareLinkInput?.value) return;
    try {
      await navigator.clipboard.writeText(shareLinkInput.value);
      copyBtn.textContent = ui.collab.copied;
      if (copyNotice) copyNotice.hidden = false;
      setTimeout(() => {
        if (copyBtn) copyBtn.textContent = ui.collab.copyLink;
        if (copyNotice) copyNotice.hidden = true;
      }, 2500);
    } catch {
      shareLinkInput.select();
      document.execCommand("copy");
    }
  });

  stopBtn?.addEventListener("click", () => {
    collab.leaveRoom();
    pad.followPeer(null);
    dialog?.close();
  });

  // Auto-connect if URL has #room=... or ?room=...
  if (typeof window !== "undefined") {
    const hashOrQuery = window.location.hash || window.location.search;
    const match = hashOrQuery.match(/[#&?]room=([^&]+)/);
    if (match && match[1]) {
      collab.joinRoom(match[1]);
    }
  }

  return collab;
}

function generateRandomName(): string {
  const ADJS = ["Curious", "Swift", "Creative", "Brave", "Sunny", "Happy", "Wise", "Clever"];
  const NOUNS = ["Otter", "Falcon", "Fox", "Panda", "Bear", "Owl", "Dolphin", "Penguin"];
  return `${ADJS[Math.floor(Math.random() * ADJS.length)]} ${NOUNS[Math.floor(Math.random() * NOUNS.length)]}`;
}
