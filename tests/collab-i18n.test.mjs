import test from "node:test";
import assert from "node:assert/strict";
import { uiFor, UI } from "../src/i18n/ui.ts";
import { LOCALES } from "../src/i18n/locales.ts";

const REQUIRED_STRING_KEYS = [
  "collaborate",
  "live",
  "title",
  "tabLive",
  "tabShareableLink",
  "inactiveDesc",
  "yourName",
  "namePlaceholder",
  "startLiveSession",
  "startingSession",
  "sessionActive",
  "shareLinkWithPeers",
  "copyLink",
  "copied",
  "linkCopiedNotice",
  "saveName",
  "savedName",
  "activeCollaborators",
  "stopSession",
  "followView",
  "following",
  "stopFollowing",
  "readOnlyTabDesc",
  "readOnlyLinkLabel",
  "readOnlyGenerating",
  "readOnlyCopiedNotice",
  "openPreview",
  "readOnlyNote",
  "readOnlyBannerBadge",
  "duplicateToEdit",
  "shareLinkMenu",
  "shareLinkMenuDesc",
];

test("Every supported locale has all 34 CollabUIStrings defined and non-empty", () => {
  for (const localeObj of LOCALES) {
    const code = localeObj.code;
    const ui = uiFor(code);
    assert.ok(ui, `UI missing for locale: ${code}`);
    assert.ok(ui.collab, `Collab strings missing for locale: ${code}`);

    // Verify all string keys
    for (const key of REQUIRED_STRING_KEYS) {
      const val = ui.collab[key];
      assert.ok(typeof val === "string", `Key '${key}' in locale '${code}' must be a string, got ${typeof val}`);
      assert.ok(val.trim().length > 0, `Key '${key}' in locale '${code}' must not be empty`);
    }

    // Verify onlineCount function
    assert.ok(typeof ui.collab.onlineCount === "function", `onlineCount must be a function in locale '${code}'`);
    const singleUser = ui.collab.onlineCount(1);
    assert.ok(typeof singleUser === "string" && singleUser.length > 0, `onlineCount(1) failed in locale '${code}'`);
    const multiUsers = ui.collab.onlineCount(4);
    assert.ok(typeof multiUsers === "string" && multiUsers.length > 0, `onlineCount(4) failed in locale '${code}'`);

    // Verify viewingPeer function
    assert.ok(typeof ui.collab.viewingPeer === "function", `viewingPeer must be a function in locale '${code}'`);
    const viewingStr = ui.collab.viewingPeer("Sarah");
    assert.ok(typeof viewingStr === "string" && viewingStr.includes("Sarah"), `viewingPeer("Sarah") should contain name in locale '${code}'`);
  }
});

test("Default fallback locale 'en' is returned for unknown locales", () => {
  const fallback = uiFor("unknown");
  assert.equal(fallback.collab.title, "Live Collaboration");
  assert.equal(fallback.collab.live, "Live");
  assert.equal(fallback.collab.tabShareableLink, "Shareable Link");
});
