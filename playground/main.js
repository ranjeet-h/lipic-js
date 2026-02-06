import {
  assamesePhoneticExpanded,
  bengaliPhoneticExpanded,
  createHybridTransliterationEngine,
  createInputInterceptor,
  gujaratiPhoneticExpanded,
  getEngineRuntime,
  hindiPhoneticExpanded,
  kannadaPhoneticExpanded,
  malayalamPhoneticExpanded,
  marathiPhoneticExpanded,
  nepaliPhoneticExpanded,
  odiaPhoneticExpanded,
  punjabiPhoneticExpanded,
  sanskritPhoneticExpanded,
  tamilPhoneticExpanded,
  teluguPhoneticExpanded
} from "../dist/index.js";

const LANGUAGE_CONFIG = {
  hi: { name: "Hindi", scriptName: "Devanagari", scriptId: "devanagari", languageId: "hindi", expandedMap: hindiPhoneticExpanded },
  mr: { name: "Marathi", scriptName: "Devanagari", scriptId: "devanagari", languageId: "marathi", expandedMap: marathiPhoneticExpanded },
  ne: { name: "Nepali", scriptName: "Devanagari", scriptId: "devanagari", languageId: "nepali", expandedMap: nepaliPhoneticExpanded },
  sa: { name: "Sanskrit", scriptName: "Devanagari", scriptId: "devanagari", languageId: "sanskrit", expandedMap: sanskritPhoneticExpanded },
  bn: { name: "Bengali", scriptName: "Bengali", scriptId: "bengali", languageId: "bengali", expandedMap: bengaliPhoneticExpanded },
  as: { name: "Assamese", scriptName: "Bengali", scriptId: "bengali", languageId: "assamese", expandedMap: assamesePhoneticExpanded },
  gu: { name: "Gujarati", scriptName: "Gujarati", scriptId: "gujarati", languageId: "gujarati", expandedMap: gujaratiPhoneticExpanded },
  pa: { name: "Punjabi", scriptName: "Gurmukhi", scriptId: "gurmukhi", languageId: "punjabi", expandedMap: punjabiPhoneticExpanded },
  ta: { name: "Tamil", scriptName: "Tamil", scriptId: "tamil", languageId: "tamil", expandedMap: tamilPhoneticExpanded },
  te: { name: "Telugu", scriptName: "Telugu", scriptId: "telugu", languageId: "telugu", expandedMap: teluguPhoneticExpanded },
  kn: { name: "Kannada", scriptName: "Kannada", scriptId: "kannada", languageId: "kannada", expandedMap: kannadaPhoneticExpanded },
  ml: { name: "Malayalam", scriptName: "Malayalam", scriptId: "malayalam", languageId: "malayalam", expandedMap: malayalamPhoneticExpanded },
  or: { name: "Odia", scriptName: "Odia", scriptId: "odia", languageId: "odia", expandedMap: odiaPhoneticExpanded }
};

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
const langNote = document.getElementById("lang-note");
const scriptNote = document.getElementById("script-note");
const runtimeNote = document.getElementById("runtime-note");

let interceptors = [];
const packCache = new Map();

function getLanguageConfig(languageCode) {
  return LANGUAGE_CONFIG[languageCode] ?? LANGUAGE_CONFIG.hi;
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

  const [textareaEngine, inputEngine, contenteditableEngine] = await Promise.all([
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode)
  ]);
  updateRuntimeNote([textareaEngine, inputEngine, contenteditableEngine], wasmMode, config);

  interceptors = [
    createInputInterceptor({ element: textarea, engine: textareaEngine }),
    createInputInterceptor({ element: input, engine: inputEngine }),
    createInputInterceptor({ element: contenteditable, engine: contenteditableEngine })
  ];
  for (const interceptor of interceptors) interceptor.attach();

  langNote.textContent = `${config.name} (${languageCode}) transliteration active.`;
  scriptNote.textContent = `Script: ${config.scriptName} | Engine config: ${config.scriptId}/${config.languageId}`;
}

await attachForLanguage(lang.value, parseWasmMode(wasmModeSelect.value));

const onSelectionChange = async () => {
  const wasmMode = parseWasmMode(wasmModeSelect.value);
  await attachForLanguage(lang.value, wasmMode);
  console.log("Selected language:", lang.value, "WASM mode:", wasmMode);
};

lang.addEventListener("change", onSelectionChange);
wasmModeSelect.addEventListener("change", onSelectionChange);
