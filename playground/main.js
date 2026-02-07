import {
  createHybridTransliterationEngine,
  createInputInterceptor,
  getEngineRuntime,
  listLanguages,
  resolveLanguageEngineConfig
} from "../dist/index.js";

const NATIVE_NAMES = {
  hi: "हिन्दी",
  mr: "मराठी",
  ne: "नेपाली",
  sa: "संस्कृतम्",
  bn: "বাংলা",
  as: "অসমীয়া",
  gu: "ગુજરાતી",
  pa: "ਪੰਜਾਬੀ",
  ta: "தமிழ்",
  te: "తెలుగు",
  kn: "ಕನ್ನಡ",
  ml: "മലയാളം",
  or: "ଓଡ଼ିଆ",
  kok: "कोंकणी",
  mai: "मैथिली",
  doi: "डोगरी",
  brx: "बोडो",
  sd: "सिन्धी",
  hne: "छत्तीसगढ़ी",
  bho: "भोजपुरी",
  raj: "राजस्थानी",
  awa: "अवधी",
  mni: "ꯃꯤꯇꯩꯂꯣꯟ",
  sat: "ᱥᱟᱱᱛᱟᱲᱤ",
  ur: "اردو",
  ks: "کشمیری",
  si: "සිංහල"
};

const AVAILABLE_LANGUAGES = listLanguages()
  .filter((language) => language.status === "available");

const LANGUAGE_CONFIG = Object.fromEntries(
  AVAILABLE_LANGUAGES
    .map((language) => {
      const resolved = resolveLanguageEngineConfig(language.code);
      return [
        language.code,
        {
          code: language.code,
          name: language.name,
          scriptName: language.script,
          ...resolved
        }
      ];
    })
);

function languageLabel(language) {
  const nativeName = NATIVE_NAMES[language.code];
  if (nativeName) {
    return `${language.name} (${nativeName})`;
  }
  return `${language.name} (${language.code})`;
}

function parseWasmMode(value) {
  if (value === "true") return true;
  if (value === "false") return false;
  return "auto";
}

const textarea = document.getElementById("ta");
const input = document.getElementById("txt");
const contenteditable = document.getElementById("ce");
const lang = document.getElementById("language");
const wasmModeSelect = document.getElementById("wasm-mode");
const languageCountNote = document.getElementById("language-count-note");
const supportedLanguageCount = document.getElementById("supported-language-count");
const langNote = document.getElementById("lang-note");
const scriptNote = document.getElementById("script-note");
const runtimeNote = document.getElementById("runtime-note");

for (const el of [textarea, input, contenteditable]) {
  el.setAttribute("spellcheck", "false");
  el.setAttribute("autocorrect", "off");
  el.setAttribute("autocapitalize", "none");
  el.setAttribute("autocomplete", "off");
  el.setAttribute("inputmode", "text");
}

let interceptors = [];
const packCache = new Map();
const fallbackEngines = {
  ta: null,
  txt: null,
  ce: null
};

const keystrokeBuffers = {
  ta: "",
  txt: "",
  ce: ""
};

function updateKeystrokesDisplay(elementId, keystrokesId) {
  const keystrokesDisplay = document.getElementById(keystrokesId);
  if (!keystrokesDisplay) return;

  const text = keystrokeBuffers[elementId];
  keystrokesDisplay.textContent = text || keystrokesDisplay.dataset.placeholder || "";
}

function handleKeystroke(elementId, keystrokesId, value) {
  keystrokeBuffers[elementId] += value;
  updateKeystrokesDisplay(elementId, keystrokesId);
}

function handleBackspace(elementId, keystrokesId) {
  keystrokeBuffers[elementId] = keystrokeBuffers[elementId].slice(0, -1);
  updateKeystrokesDisplay(elementId, keystrokesId);
}

function handleDeleteInputType(elementId, keystrokesId, inputType) {
  if (inputType === "deleteWordBackward") {
    keystrokeBuffers[elementId] = keystrokeBuffers[elementId].replace(/\s*\S+\s*$/, "");
    updateKeystrokesDisplay(elementId, keystrokesId);
    return;
  }

  if (inputType === "deleteHardLineBackward" || inputType === "deleteContent") {
    clearKeystrokes(elementId, keystrokesId);
    return;
  }

  handleBackspace(elementId, keystrokesId);
}

function clearKeystrokes(elementId, keystrokesId) {
  keystrokeBuffers[elementId] = "";
  updateKeystrokesDisplay(elementId, keystrokesId);
}

function getElementTextValue(element) {
  return element.isContentEditable ? element.innerText : element.value;
}

function setElementTextValue(element, value) {
  if (element.isContentEditable) {
    element.innerText = value;
    return;
  }
  element.value = value;
}

function setCaretToEnd(element) {
  if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
    const pos = element.value.length;
    element.setSelectionRange(pos, pos);
    return;
  }

  if (element.isContentEditable) {
    const selection = window.getSelection();
    if (!selection) return;
    const range = document.createRange();
    range.selectNodeContents(element);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}

function repairNativeLeakIfNeeded(element, elementId) {
  const fallbackEngine = fallbackEngines[elementId];
  if (!fallbackEngine) return;

  const currentValue = getElementTextValue(element) || "";
  if (!/[A-Za-z]/.test(currentValue)) return;

  fallbackEngine.reset();
  const repaired = fallbackEngine.processText(currentValue).insert;
  fallbackEngine.commit();

  if (repaired === currentValue) return;

  setElementTextValue(element, repaired);
  setCaretToEnd(element);
}

function updateCharacterCount(elementId, counterId) {
  const element = document.getElementById(elementId);
  const counter = document.getElementById(counterId);
  if (!element || !counter) return;

  const text = getElementTextValue(element) || "";
  const count = text.length;
  counter.textContent = `${count} character${count !== 1 ? "s" : ""}`;
}

window.copyToClipboard = function(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const text = getElementTextValue(element) || "";
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    const button = event.currentTarget;
    const originalHTML = button.innerHTML;
    button.innerHTML = `
      <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
      </svg>
    `;
    setTimeout(() => {
      button.innerHTML = originalHTML;
    }, 1500);
  }).catch((err) => {
    console.error("Failed to copy:", err);
  });
};

window.clearAllInputs = function() {
  textarea.value = "";
  input.value = "";
  contenteditable.innerText = "";

  clearKeystrokes("ta", "ta-keystrokes");
  clearKeystrokes("txt", "txt-keystrokes");
  clearKeystrokes("ce", "ce-keystrokes");

  updateCharacterCount("ta", "ta-counter");
  updateCharacterCount("txt", "txt-counter");
  updateCharacterCount("ce", "ce-counter");

  textarea.focus();
};

function setupEventListeners() {
  const attachTracking = (element, elementId, keystrokesId, counterId) => {
    element.addEventListener("beforeinput", (evt) => {
      if (!(evt instanceof InputEvent)) return;

      if (evt.inputType.startsWith("delete")) {
        handleDeleteInputType(elementId, keystrokesId, evt.inputType);
        return;
      }

      if (
        evt.inputType === "insertText" ||
        evt.inputType === "insertReplacementText" ||
        evt.inputType === "insertCompositionText" ||
        evt.inputType === "insertFromComposition"
      ) {
        handleKeystroke(elementId, keystrokesId, evt.data ?? "");
        return;
      }

      if (evt.inputType === "insertFromPaste" && typeof evt.data === "string") {
        handleKeystroke(elementId, keystrokesId, evt.data);
      }
    });

    element.addEventListener("input", () => {
      repairNativeLeakIfNeeded(element, elementId);
      updateCharacterCount(elementId, counterId);
    });
  };

  attachTracking(textarea, "ta", "ta-keystrokes", "ta-counter");
  attachTracking(input, "txt", "txt-keystrokes", "txt-counter");
  attachTracking(contenteditable, "ce", "ce-keystrokes", "ce-counter");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
} else {
  setupEventListeners();
}

updateCharacterCount("ta", "ta-counter");
updateCharacterCount("txt", "txt-counter");
updateCharacterCount("ce", "ce-counter");
updateKeystrokesDisplay("ta", "ta-keystrokes");
updateKeystrokesDisplay("txt", "txt-keystrokes");
updateKeystrokesDisplay("ce", "ce-keystrokes");

let keyboardRefVisible = false;

window.toggleKeyboardRef = function() {
  keyboardRefVisible = !keyboardRefVisible;
  const content = document.getElementById("keyboard-ref-content");
  const arrow = document.getElementById("keyboard-ref-arrow");

  if (keyboardRefVisible) {
    content.classList.remove("hidden");
    arrow.classList.add("rotate-180");
    loadKeyboardReference();
  } else {
    content.classList.add("hidden");
    arrow.classList.remove("rotate-180");
  }
};

async function loadKeyboardReference() {
  const languageCode = lang.value;
  const config = getLanguageConfig(languageCode);

  try {
    const map = config.expandedMap;

    const vowels = [];
    const consonants = [];
    const marks = [];
    const conjuncts = [];

    for (const [key, value] of Object.entries(map)) {
      if (value.type === "vowel") vowels.push({ key, ...value });
      else if (value.type === "consonant") consonants.push({ key, ...value });
      else if (value.type === "mark") marks.push({ key, ...value });
      else if (value.type === "conjunct") conjuncts.push({ key, ...value });
    }

    renderKeyboardSection("keyboard-ref-vowels", "Vowels", vowels);
    renderKeyboardSection("keyboard-ref-consonants", "Consonants", consonants);
    renderKeyboardSection("keyboard-ref-marks", "Marks", marks);
    renderKeyboardSection("keyboard-ref-conjuncts", "Conjuncts", conjuncts);
  } catch (error) {
    console.error("Failed to load keyboard reference:", error);
  }
}

function renderKeyboardSection(containerId, title, items) {
  const container = document.getElementById(containerId);
  if (!container || items.length === 0) {
    if (container) container.innerHTML = "";
    return;
  }

  const itemsHtml = items.map((item) => `
    <div class="flex items-center justify-between py-2 px-3 bg-stone-50 rounded-lg hover:bg-amber-50 transition-colors group">
      <span class="keyboard-key group-hover:border-amber-300 transition-colors">${escapeHtml(item.key)}</span>
      <span class="text-lg font-medium text-stone-900">${item.glyph}</span>
    </div>
  `).join("");

  container.innerHTML = `
    <h3 class="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">${title}</h3>
    <div class="grid grid-cols-2 gap-2">
      ${itemsHtml}
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function getLanguageConfig(languageCode) {
  return LANGUAGE_CONFIG[languageCode] ?? LANGUAGE_CONFIG.hi;
}

function populateLanguageOptions() {
  const count = AVAILABLE_LANGUAGES.length;
  if (languageCountNote) {
    languageCountNote.textContent = `${count} supported languages`;
  }
  if (supportedLanguageCount) {
    supportedLanguageCount.textContent = `${count} languages supported`;
  }

  const current = lang.value || "hi";
  const options = AVAILABLE_LANGUAGES.map((language) => {
    const selected = language.code === current ? " selected" : "";
    return `<option value="${language.code}"${selected}>${escapeHtml(languageLabel(language))}</option>`;
  });

  lang.innerHTML = options.join("");
  if (!LANGUAGE_CONFIG[lang.value]) {
    lang.value = "hi";
  }
}

async function makeEngine(languageCode, wasmMode) {
  const config = getLanguageConfig(languageCode);
  return createHybridTransliterationEngine(
    { expandedMap: config.expandedMap },
    {
      scriptId: config.scriptId,
      languageId: config.languageId,
      packCache,
      isWasm: wasmMode
    }
  );
}

function updateRuntimeNote(engines, wasmMode, config) {
  const runtimes = engines.map((engine) => getEngineRuntime(engine));
  const unique = Array.from(new Set(runtimes));
  runtimeNote.textContent = `WASM mode: ${String(wasmMode)} | Runtime: ${unique.join(", ")} (${runtimes.length} engine(s)) | scriptId=${config.scriptId} languageId=${config.languageId}`;
}

async function attachForLanguage(languageCode, wasmMode) {
  const config = getLanguageConfig(languageCode);
  for (const interceptor of interceptors) interceptor.detach();

  const [
    textareaEngine,
    inputEngine,
    contenteditableEngine,
    textareaFallbackEngine,
    inputFallbackEngine,
    contenteditableFallbackEngine
  ] = await Promise.all([
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode)
  ]);
  updateRuntimeNote([textareaEngine, inputEngine, contenteditableEngine], wasmMode, config);

  fallbackEngines.ta = textareaFallbackEngine;
  fallbackEngines.txt = inputFallbackEngine;
  fallbackEngines.ce = contenteditableFallbackEngine;

  interceptors = [
    createInputInterceptor({ element: textarea, engine: textareaEngine }),
    createInputInterceptor({ element: input, engine: inputEngine }),
    createInputInterceptor({ element: contenteditable, engine: contenteditableEngine })
  ];
  for (const interceptor of interceptors) interceptor.attach();

  langNote.textContent = `${config.name} (${languageCode}) transliteration active.`;
  scriptNote.textContent = `Script: ${config.scriptName} | Engine config: ${config.scriptId}/${config.languageId}`;
}

populateLanguageOptions();
await attachForLanguage(lang.value, parseWasmMode(wasmModeSelect.value));

const onSelectionChange = async () => {
  const wasmMode = parseWasmMode(wasmModeSelect.value);
  await attachForLanguage(lang.value, wasmMode);

  if (keyboardRefVisible) {
    loadKeyboardReference();
  }
};

lang.addEventListener("change", onSelectionChange);
wasmModeSelect.addEventListener("change", onSelectionChange);
