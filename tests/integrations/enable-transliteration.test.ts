// @vitest-environment jsdom
import { describe, expect, it } from "vitest";

import { enableTransliteration } from "../../src/integrations/enable-transliteration";

function beforeInput(target: EventTarget, data: string): InputEvent {
  const evt = new InputEvent("beforeinput", {
    bubbles: true,
    cancelable: true,
    inputType: "insertText",
    data
  });
  target.dispatchEvent(evt);
  return evt;
}

describe("enableTransliteration", () => {
  it("attaches to selected controls by language short code", async () => {
    const textarea = document.createElement("textarea");
    textarea.value = "";
    textarea.setSelectionRange(0, 0);
    document.body.appendChild(textarea);

    const enabled = await enableTransliteration({
      language: "hi",
      elements: [textarea],
      engineFactoryOptions: { preferWasm: false }
    });

    expect(enabled.attachedCount).toBe(1);
    const evt = beforeInput(textarea, "k");
    expect(evt.defaultPrevented).toBe(true);
    expect(textarea.value).toBe("क");

    enabled.detach();
  });

  it("throws for planned but unavailable language code", async () => {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);

    await expect(
      enableTransliteration({
        language: "ne",
        elements: [textarea],
        engineFactoryOptions: { preferWasm: false }
      })
    ).rejects.toThrow("planned but not available");
  });
});
