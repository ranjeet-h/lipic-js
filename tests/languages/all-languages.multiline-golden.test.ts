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

const INPUT_ONE = "namaste dosto\nAja mausam sundar hai.";
const INPUT_TWO = "bharat me swagat hai\nprithvi sundar hai.";

const CASES: Array<{
  code: string;
  languageId: string;
  map: Record<string, MapEntry>;
  expectedOne: string;
  expectedTwo: string;
}> = [
  {
    code: "hi",
    languageId: "hindi",
    map: hindiExpanded,
    expectedOne: "नमस्ते दोस्तो\nआज मौसम सुंदर है.",
    expectedTwo: "भारत मे स्वागत है\nपृथ्वी सुंदर है."
  },
  {
    code: "mr",
    languageId: "marathi",
    map: marathiExpanded,
    expectedOne: "नमस्ते दोस्तो\nआज मौसम सुंदर है.",
    expectedTwo: "भरत मे स्वगत है\nपृथ्वि सुंदर है."
  },
  {
    code: "ne",
    languageId: "nepali",
    map: nepaliExpanded,
    expectedOne: "नमस्ते दोस्तो\nआज मौसम सुंदर है.",
    expectedTwo: "भरत मे स्वगत है\nपृथ्वि सुंदर है."
  },
  {
    code: "sa",
    languageId: "sanskrit",
    map: sanskritExpanded,
    expectedOne: "नमस्ते दोस्तो\nआज मौसम सुन्दर है.",
    expectedTwo: "भरत मे स्वगत है\nपृथ्वि सुन्दर है."
  },
  {
    code: "bn",
    languageId: "bengali",
    map: bengaliExpanded,
    expectedOne: "নমস্তে দোস্তো\nআজ মৌসম সুংদর হৈ.",
    expectedTwo: "ভরত মে স্বগত হৈ\nপৃথ্বি সুংদর হৈ."
  },
  {
    code: "as",
    languageId: "assamese",
    map: assameseExpanded,
    expectedOne: "নমস্তে দোস্তো\nআজ মৌসম সুংদৰ হৈ.",
    expectedTwo: "ভৰত মে স্ৱগত হৈ\nপৃথ্ৱি সুংদৰ হৈ."
  },
  {
    code: "gu",
    languageId: "gujarati",
    map: gujaratiExpanded,
    expectedOne: "નમસ્તે દોસ્તો\nઆજ મૌસમ સુંદર હૈ.",
    expectedTwo: "ભરત મે સ્વગત હૈ\nપૃથ્વિ સુંદર હૈ."
  },
  {
    code: "pa",
    languageId: "punjabi",
    map: punjabiExpanded,
    expectedOne: "ਨਮਸ੍ਤੇ ਦੋਸ੍ਤੋ\nਆਜ ਮੌਸਮ ਸੁੰਦਰ ਹੈ.",
    expectedTwo: "ਭਰਤ ਮੇ ਸ੍ਵਗਤ ਹੈ\nਪ੍ਰਿਥ੍ਵਿ ਸੁੰਦਰ ਹੈ."
  },
  {
    code: "ta",
    languageId: "tamil",
    map: tamilExpanded,
    expectedOne: "நமஸ்தெ தொஸ்தொ\nஆஜ மௌஸம ஸுந்தர ஹை.",
    expectedTwo: "பரத மெ ஸ்வகத ஹை\nப்ரித்வி ஸுந்தர ஹை."
  },
  {
    code: "te",
    languageId: "telugu",
    map: teluguExpanded,
    expectedOne: "నమస్తే దోస్తో\nఆజ మౌసమ సుందర హై.",
    expectedTwo: "భరత మే స్వగత హై\nపృథ్వి సుందర హై."
  },
  {
    code: "kn",
    languageId: "kannada",
    map: kannadaExpanded,
    expectedOne: "ನಮಸ್ತೇ ದೋಸ್ತೋ\nಆಜ ಮೌಸಮ ಸುಂದರ ಹೈ.",
    expectedTwo: "ಭರತ ಮೇ ಸ್ವಗತ ಹೈ\nಪೃಥ್ವಿ ಸುಂದರ ಹೈ."
  },
  {
    code: "ml",
    languageId: "malayalam",
    map: malayalamExpanded,
    expectedOne: "നമസ്തേ ദോസ്തോ\nആജ മൌസമ സുംദര ഹൈ.",
    expectedTwo: "ഭരത മേ സ്വഗത ഹൈ\nപൃഥ്വി സുംദര ഹൈ."
  },
  {
    code: "or",
    languageId: "odia",
    map: odiaExpanded,
    expectedOne: "ନମସ୍ତେ ଦୋସ୍ତୋ\nଆଜ ମୌସମ ସୁଂଦର ହୈ.",
    expectedTwo: "ଭରତ ମେ ସ୍ୱଗତ ହୈ\nପୃଥ୍ଵି ସୁଂଦର ହୈ."
  }
];

function applyEdit(host: string, edit: Edit): string {
  return `${host.slice(0, Math.max(0, host.length - edit.backspace))}${edit.insert}`;
}

function transliterateByTyping(
  input: string,
  map: Record<string, MapEntry>,
  languageId: string
): string {
  const engine = createTransliterationEngine({ expandedMap: map, languageId });
  let host = "";
  for (const ch of input) {
    host = applyEdit(host, engine.processChar(ch));
  }
  return host;
}

function transliterateByPaste(
  input: string,
  map: Record<string, MapEntry>,
  languageId: string
): string {
  const engine = createTransliterationEngine({ expandedMap: map, languageId });
  return applyEdit("", engine.processText(input));
}

describe("all languages multiline golden transliteration", () => {
  it("maps roman multiline text to expected script text (typing path)", () => {
    for (const testCase of CASES) {
      expect(transliterateByTyping(INPUT_ONE, testCase.map, testCase.languageId), testCase.code).toBe(testCase.expectedOne);
      expect(transliterateByTyping(INPUT_TWO, testCase.map, testCase.languageId), testCase.code).toBe(testCase.expectedTwo);
    }
  });

  it("maps roman multiline text to expected script text (paste path)", () => {
    for (const testCase of CASES) {
      expect(transliterateByPaste(INPUT_ONE, testCase.map, testCase.languageId), testCase.code).toBe(testCase.expectedOne);
      expect(transliterateByPaste(INPUT_TWO, testCase.map, testCase.languageId), testCase.code).toBe(testCase.expectedTwo);
    }
  });

  it("keystroke and paste outputs stay identical for multiline text", () => {
    for (const testCase of CASES) {
      expect(transliterateByTyping(INPUT_ONE, testCase.map, testCase.languageId), testCase.code).toBe(
        transliterateByPaste(INPUT_ONE, testCase.map, testCase.languageId)
      );
      expect(transliterateByTyping(INPUT_TWO, testCase.map, testCase.languageId), testCase.code).toBe(
        transliterateByPaste(INPUT_TWO, testCase.map, testCase.languageId)
      );
    }
  });
});
