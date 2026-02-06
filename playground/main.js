import {
  createInputInterceptor,
  createTransliterationEngine,
  hindiPhoneticExpanded,
  marathiPhoneticExpanded
} from "../dist/index.js";

function getExpandedMap(language) {
  if (language === "marathi") return marathiPhoneticExpanded;
  // Nepali/Sanskrit data is not added yet; use Hindi Devanagari map for now.
  return hindiPhoneticExpanded;
}

const textarea = document.getElementById("ta");
const input = document.getElementById("txt");
const contenteditable = document.getElementById("ce");
const lang = document.getElementById("language");
const langNote = document.getElementById("lang-note");

let interceptors = [];

function makeEngine(language) {
  return createTransliterationEngine({ expandedMap: getExpandedMap(language) });
}

function attachForLanguage(language) {
  for (const interceptor of interceptors) interceptor.detach();
  interceptors = [
    createInputInterceptor({ element: textarea, engine: makeEngine(language) }),
    createInputInterceptor({ element: input, engine: makeEngine(language) }),
    createInputInterceptor({ element: contenteditable, engine: makeEngine(language) })
  ];
  for (const interceptor of interceptors) interceptor.attach();

  if (language === "nepali" || language === "sanskrit") {
    langNote.textContent = `${language[0].toUpperCase()}${language.slice(1)} currently uses Hindi Devanagari map fallback.`;
    return;
  }
  langNote.textContent = `${language[0].toUpperCase()}${language.slice(1)} transliteration active.`;
}

attachForLanguage(lang.value);

lang.addEventListener("change", () => {
  attachForLanguage(lang.value);
  console.log("Selected language:", lang.value);
});
