import { describe, expect, it } from "vitest";

import assameseExpanded from "../../maps/assamese/phonetic.expanded.json";
import bengaliExpanded from "../../maps/bengali/phonetic.expanded.json";
import gujaratiExpanded from "../../maps/gujarati/phonetic.expanded.json";
import hindiExpanded from "../../maps/hindi/phonetic.expanded.json";
import kannadaExpanded from "../../maps/kannada/phonetic.expanded.json";
import malayalamExpanded from "../../maps/malayalam/phonetic.expanded.json";
import marathiExpanded from "../../maps/marathi/phonetic.expanded.json";
import nepaliExpanded from "../../maps/nepali/phonetic.expanded.json";
import odiaExpanded from "../../maps/odia/phonetic.expanded.json";
import punjabiExpanded from "../../maps/punjabi/phonetic.expanded.json";
import sanskritExpanded from "../../maps/sanskrit/phonetic.expanded.json";
import tamilExpanded from "../../maps/tamil/phonetic.expanded.json";
import teluguExpanded from "../../maps/telugu/phonetic.expanded.json";
import { createTransliterationEngine } from "../../src/engine/transliteration-engine";

type MapEntry = { type: string; glyph: string; matra?: string };
type Edit = { backspace: number; insert: string };
type ScriptProfile = { range: RegExp };

const SENTENCE_PRIMARY = "to hushAr mulagA Aja bAget khUpa phule toDato.";
const SENTENCE_PUNCTUATION = "Aja, to hushAr mulagA phule toDato!";
const SENTENCE_MIXED = "Aja 2026, to hushAr mulagA 2 phule toDato?";
const SENTENCE_MULTILINE = "to hushAr; mulagA Aja:\nphule toDato.";

const CASES: Array<{
  code: string;
  map: Record<string, MapEntry>;
  expectedPrimary: string;
  expectedPunctuation: string;
}> = [
  {
    code: "hi",
    map: hindiExpanded,
    expectedPrimary: "तो हुशार मुलगा आज बागेत खूप फुले तोडतो.",
    expectedPunctuation: "आज, तो हुशार मुलगा फुले तोडतो!"
  },
  {
    code: "mr",
    map: marathiExpanded,
    expectedPrimary: "तो हुशार मुलगा आज बागेत खूप फुले तोडतो.",
    expectedPunctuation: "आज, तो हुशार मुलगा फुले तोडतो!"
  },
  {
    code: "ne",
    map: nepaliExpanded,
    expectedPrimary: "तो हुशार मुलगा आज बागेत खूप फुले तोडतो.",
    expectedPunctuation: "आज, तो हुशार मुलगा फुले तोडतो!"
  },
  {
    code: "sa",
    map: sanskritExpanded,
    expectedPrimary: "तो हुशार मुलगा आज बागेत खूप फुले तोडतो.",
    expectedPunctuation: "आज, तो हुशार मुलगा फुले तोडतो!"
  },
  {
    code: "bn",
    map: bengaliExpanded,
    expectedPrimary: "তো হুশার মুলগা আজ বাগেত খূপ ফুলে তোডতো.",
    expectedPunctuation: "আজ, তো হুশার মুলগা ফুলে তোডতো!"
  },
  {
    code: "as",
    map: assameseExpanded,
    expectedPrimary: "তো হুশাৰ মুলগা আজ বাগেত খূপ ফুলে তোডতো.",
    expectedPunctuation: "আজ, তো হুশাৰ মুলগা ফুলে তোডতো!"
  },
  {
    code: "gu",
    map: gujaratiExpanded,
    expectedPrimary: "તો હુશાર મુલગા આજ બાગેત ખૂપ ફુલે તોડતો.",
    expectedPunctuation: "આજ, તો હુશાર મુલગા ફુલે તોડતો!"
  },
  {
    code: "pa",
    map: punjabiExpanded,
    expectedPrimary: "ਤੋ ਹੁਸ਼ਾਰ ਮੁਲਗਾ ਆਜ ਬਾਗੇਤ ਖੂਪ ਫੁਲੇ ਤੋਡਤੋ.",
    expectedPunctuation: "ਆਜ, ਤੋ ਹੁਸ਼ਾਰ ਮੁਲਗਾ ਫੁਲੇ ਤੋਡਤੋ!"
  },
  {
    code: "ta",
    map: tamilExpanded,
    expectedPrimary: "தொ ஹுஶார முலகா ஆஜ பாகெத கூப புலெ தொடதொ.",
    expectedPunctuation: "ஆஜ, தொ ஹுஶார முலகா புலெ தொடதொ!"
  },
  {
    code: "te",
    map: teluguExpanded,
    expectedPrimary: "తో హుశార ములగా ఆజ బాగేత ఖూప ఫులే తోడతో.",
    expectedPunctuation: "ఆజ, తో హుశార ములగా ఫులే తోడతో!"
  },
  {
    code: "kn",
    map: kannadaExpanded,
    expectedPrimary: "ತೋ ಹುಶಾರ ಮುಲಗಾ ಆಜ ಬಾಗೇತ ಖೂಪ ಫುಲೇ ತೋಡತೋ.",
    expectedPunctuation: "ಆಜ, ತೋ ಹುಶಾರ ಮುಲಗಾ ಫುಲೇ ತೋಡತೋ!"
  },
  {
    code: "ml",
    map: malayalamExpanded,
    expectedPrimary: "തോ ഹുശാര മുലഗാ ആജ ബാഗേത ഖൂപ ഫുലേ തോഡതോ.",
    expectedPunctuation: "ആജ, തോ ഹുശാര മുലഗാ ഫുലേ തോഡതോ!"
  },
  {
    code: "or",
    map: odiaExpanded,
    expectedPrimary: "ତୋ ହୁଶାର ମୁଲଗା ଆଜ ବାଗେତ ଖୂପ ଫୁଲେ ତୋଡତୋ.",
    expectedPunctuation: "ଆଜ, ତୋ ହୁଶାର ମୁଲଗା ଫୁଲେ ତୋଡତୋ!"
  }
];

const EXPECTED_MIXED: Record<string, string> = {
  hi: "आज 2026, तो हुशार मुलगा 2 फुले तोडतो?",
  mr: "आज 2026, तो हुशार मुलगा 2 फुले तोडतो?",
  ne: "आज 2026, तो हुशार मुलगा 2 फुले तोडतो?",
  sa: "आज 2026, तो हुशार मुलगा 2 फुले तोडतो?",
  bn: "আজ 2026, তো হুশার মুলগা 2 ফুলে তোডতো?",
  as: "আজ 2026, তো হুশাৰ মুলগা 2 ফুলে তোডতো?",
  gu: "આજ 2026, તો હુશાર મુલગા 2 ફુલે તોડતો?",
  pa: "ਆਜ 2026, ਤੋ ਹੁਸ਼ਾਰ ਮੁਲਗਾ 2 ਫੁਲੇ ਤੋਡਤੋ?",
  ta: "ஆஜ 2026, தொ ஹுஶார முலகா 2 புலெ தொடதொ?",
  te: "ఆజ 2026, తో హుశార ములగా 2 ఫులే తోడతో?",
  kn: "ಆಜ 2026, ತೋ ಹುಶಾರ ಮುಲಗಾ 2 ಫುಲೇ ತೋಡತೋ?",
  ml: "ആജ 2026, തോ ഹുശാര മുലഗാ 2 ഫുലേ തോഡതോ?",
  or: "ଆଜ 2026, ତୋ ହୁଶାର ମୁଲଗା 2 ଫୁଲେ ତୋଡତୋ?"
};

const EXPECTED_MULTILINE: Record<string, string> = {
  hi: "तो हुशार; मुलगा आज:\nफुले तोडतो.",
  mr: "तो हुशार; मुलगा आज:\nफुले तोडतो.",
  ne: "तो हुशार; मुलगा आज:\nफुले तोडतो.",
  sa: "तो हुशार; मुलगा आज:\nफुले तोडतो.",
  bn: "তো হুশার; মুলগা আজ:\nফুলে তোডতো.",
  as: "তো হুশাৰ; মুলগা আজ:\nফুলে তোডতো.",
  gu: "તો હુશાર; મુલગા આજ:\nફુલે તોડતો.",
  pa: "ਤੋ ਹੁਸ਼ਾਰ; ਮੁਲਗਾ ਆਜ:\nਫੁਲੇ ਤੋਡਤੋ.",
  ta: "தொ ஹுஶார; முலகா ஆஜ:\nபுலெ தொடதொ.",
  te: "తో హుశార; ములగా ఆజ:\nఫులే తోడతో.",
  kn: "ತೋ ಹುಶಾರ; ಮುಲಗಾ ಆಜ:\nಫುಲೇ ತೋಡತೋ.",
  ml: "തോ ഹുശാര; മുലഗാ ആജ:\nഫുലേ തോഡതോ.",
  or: "ତୋ ହୁଶାର; ମୁଲଗା ଆଜ:\nଫୁଲେ ତୋଡତୋ."
};

const SCRIPT_PROFILE: Record<string, ScriptProfile> = {
  hi: { range: /[\u0900-\u097F]/u },
  mr: { range: /[\u0900-\u097F]/u },
  ne: { range: /[\u0900-\u097F]/u },
  sa: { range: /[\u0900-\u097F]/u },
  bn: { range: /[\u0980-\u09FF]/u },
  as: { range: /[\u0980-\u09FF]/u },
  gu: { range: /[\u0A80-\u0AFF]/u },
  pa: { range: /[\u0A00-\u0A7F]/u },
  ta: { range: /[\u0B80-\u0BFF]/u },
  te: { range: /[\u0C00-\u0C7F]/u },
  kn: { range: /[\u0C80-\u0CFF]/u },
  ml: { range: /[\u0D00-\u0D7F]/u },
  or: { range: /[\u0B00-\u0B7F]/u }
};

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterateByTyping(input: string, map: Record<string, MapEntry>): string {
  const engine = createTransliterationEngine({ expandedMap: map });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

function transliterateByPaste(input: string, map: Record<string, MapEntry>): string {
  const engine = createTransliterationEngine({ expandedMap: map });
  const edit = engine.processText(input);
  return applyEdit("", edit);
}

describe("all language sentence regressions", () => {
  it("matches expected sentence outputs with per-keystroke typing", () => {
    for (const testCase of CASES) {
      const profile = SCRIPT_PROFILE[testCase.code];

      const typedPrimary = transliterateByTyping(SENTENCE_PRIMARY, testCase.map);
      expect(typedPrimary, testCase.code).toBe(testCase.expectedPrimary);
      expect(typedPrimary, `${testCase.code} primary should not remain roman`).not.toBe(SENTENCE_PRIMARY);
      expect(profile.range.test(typedPrimary), `${testCase.code} primary should contain script chars`).toBe(true);

      const typedPunctuation = transliterateByTyping(SENTENCE_PUNCTUATION, testCase.map);
      expect(typedPunctuation, testCase.code).toBe(testCase.expectedPunctuation);
      expect(typedPunctuation, `${testCase.code} punctuation should not remain roman`).not.toBe(SENTENCE_PUNCTUATION);
      expect(profile.range.test(typedPunctuation), `${testCase.code} punctuation should contain script chars`).toBe(true);

      const typedMixed = transliterateByTyping(SENTENCE_MIXED, testCase.map);
      expect(typedMixed, testCase.code).toBe(EXPECTED_MIXED[testCase.code]);
      expect(typedMixed, `${testCase.code} mixed should not remain roman`).not.toBe(SENTENCE_MIXED);
      expect(profile.range.test(typedMixed), `${testCase.code} mixed should contain script chars`).toBe(true);

      const typedMultiline = transliterateByTyping(SENTENCE_MULTILINE, testCase.map);
      expect(typedMultiline, testCase.code).toBe(EXPECTED_MULTILINE[testCase.code]);
      expect(typedMultiline, `${testCase.code} multiline should not remain roman`).not.toBe(SENTENCE_MULTILINE);
      expect(profile.range.test(typedMultiline), `${testCase.code} multiline should contain script chars`).toBe(true);
    }
  });

  it("matches expected sentence outputs with processText (paste path)", () => {
    for (const testCase of CASES) {
      expect(transliterateByPaste(SENTENCE_PRIMARY, testCase.map), testCase.code).toBe(
        testCase.expectedPrimary
      );
      expect(transliterateByPaste(SENTENCE_PUNCTUATION, testCase.map), testCase.code).toBe(
        testCase.expectedPunctuation
      );
      expect(transliterateByPaste(SENTENCE_MIXED, testCase.map), testCase.code).toBe(
        EXPECTED_MIXED[testCase.code]
      );
      expect(transliterateByPaste(SENTENCE_MULTILINE, testCase.map), testCase.code).toBe(
        EXPECTED_MULTILINE[testCase.code]
      );
    }
  });

  it("keystroke and paste paths are identical for all scenarios", () => {
    for (const testCase of CASES) {
      expect(transliterateByTyping(SENTENCE_PRIMARY, testCase.map), testCase.code).toBe(
        transliterateByPaste(SENTENCE_PRIMARY, testCase.map)
      );
      expect(transliterateByTyping(SENTENCE_PUNCTUATION, testCase.map), testCase.code).toBe(
        transliterateByPaste(SENTENCE_PUNCTUATION, testCase.map)
      );
      expect(transliterateByTyping(SENTENCE_MIXED, testCase.map), testCase.code).toBe(
        transliterateByPaste(SENTENCE_MIXED, testCase.map)
      );
      expect(transliterateByTyping(SENTENCE_MULTILINE, testCase.map), testCase.code).toBe(
        transliterateByPaste(SENTENCE_MULTILINE, testCase.map)
      );
    }
  });
});
