import {
  createHybridTransliterationEngine,
  createInputInterceptor,
  getEngineRuntime,
  hindiPhoneticExpanded,
  marathiPhoneticExpanded
} from "../dist/index.js";

function getExpandedMap(languageCode) {
  if (languageCode === "mr") return marathiPhoneticExpanded;
  // Nepali/Sanskrit data is not added yet; use Hindi Devanagari map for now.
  return hindiPhoneticExpanded;
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
const langNote = document.getElementById("lang-note");
const runtimeNote = document.getElementById("runtime-note");

let interceptors = [];
const packCache = new Map();

async function makeEngine(languageCode, wasmMode) {
  return createHybridTransliterationEngine(
    { expandedMap: getExpandedMap(languageCode) },
    {
      scriptId: "devanagari",
      languageId: languageCode,
      packCache,
      isWasm: wasmMode
    }
  );
}

function updateRuntimeNote(engines, wasmMode) {
  const runtimes = engines.map((engine) => getEngineRuntime(engine));
  const unique = Array.from(new Set(runtimes));
  runtimeNote.textContent = `WASM mode: ${String(wasmMode)} | Runtime: ${unique.join(", ")} (${runtimes.length} engine(s))`;
}

async function attachForLanguage(languageCode, wasmMode) {
  for (const interceptor of interceptors) interceptor.detach();

  const [textareaEngine, inputEngine, contenteditableEngine] = await Promise.all([
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode),
    makeEngine(languageCode, wasmMode)
  ]);
  updateRuntimeNote([textareaEngine, inputEngine, contenteditableEngine], wasmMode);

  interceptors = [
    createInputInterceptor({ element: textarea, engine: textareaEngine }),
    createInputInterceptor({ element: input, engine: inputEngine }),
    createInputInterceptor({ element: contenteditable, engine: contenteditableEngine })
  ];
  for (const interceptor of interceptors) interceptor.attach();

  if (languageCode === "ne" || languageCode === "sa") {
    langNote.textContent = `${languageCode} currently uses Hindi Devanagari map fallback.`;
    return;
  }
  langNote.textContent = `${languageCode} transliteration active.`;
}

await attachForLanguage(lang.value, parseWasmMode(wasmModeSelect.value));

const onSelectionChange = async () => {
  const wasmMode = parseWasmMode(wasmModeSelect.value);
  await attachForLanguage(lang.value, wasmMode);
  console.log("Selected language:", lang.value, "WASM mode:", wasmMode);
};

lang.addEventListener("change", onSelectionChange);
wasmModeSelect.addEventListener("change", onSelectionChange);
