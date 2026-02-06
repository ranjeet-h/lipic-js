var consonants = [
	"क",
	"ख",
	"ग",
	"घ",
	"ङ",
	"च",
	"छ",
	"ज",
	"झ",
	"ञ",
	"ट",
	"ठ",
	"ड",
	"ढ",
	"ण",
	"त",
	"थ",
	"द",
	"ध",
	"न",
	"प",
	"फ",
	"ब",
	"भ",
	"म",
	"य",
	"र",
	"ल",
	"व",
	"श",
	"ष",
	"स",
	"ह",
	"ळ"
];
var vowelsIndependent = [
	"अ",
	"आ",
	"इ",
	"ई",
	"उ",
	"ऊ",
	"ऋ",
	"ॠ",
	"ऌ",
	"ॡ",
	"ए",
	"ऐ",
	"ओ",
	"औ",
	"ॲ",
	"ऑ"
];
var vowelMatras = [
	"ा",
	"ि",
	"ी",
	"ु",
	"ू",
	"ृ",
	"ॄ",
	"ॢ",
	"ॣ",
	"े",
	"ै",
	"ो",
	"ौ",
	"ॅ",
	"ॉ"
];
var halant = "्";
var digits = [
	"०",
	"१",
	"२",
	"३",
	"४",
	"५",
	"६",
	"७",
	"८",
	"९"
];
var marks = {
	anusvara: "ं",
	chandrabindu: "ँ",
	visarga: "ः"
};
var base = {
	consonants: consonants,
	vowelsIndependent: vowelsIndependent,
	vowelMatras: vowelMatras,
	halant: halant,
	digits: digits,
	marks: marks
};

var a$1 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$1 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$1 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$1 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$1 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$1 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$1 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$1 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$1 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$1 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$1 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ae$1 = {
	type: "vowel",
	glyph: "ॲ",
	matra: "ॅ"
};
var aw$1 = {
	type: "vowel",
	glyph: "ऑ",
	matra: "ॉ"
};
var k$1 = {
	type: "consonant",
	glyph: "क"
};
var kh$1 = {
	type: "consonant",
	glyph: "ख"
};
var g$1 = {
	type: "consonant",
	glyph: "ग"
};
var gh$1 = {
	type: "consonant",
	glyph: "घ"
};
var ng$1 = {
	type: "consonant",
	glyph: "ङ"
};
var ch$1 = {
	type: "consonant",
	glyph: "च"
};
var chh$1 = {
	type: "consonant",
	glyph: "छ"
};
var j$1 = {
	type: "consonant",
	glyph: "ज"
};
var jh$1 = {
	type: "consonant",
	glyph: "झ"
};
var ny$1 = {
	type: "consonant",
	glyph: "ञ"
};
var T$1 = {
	type: "consonant",
	glyph: "ट"
};
var Th$1 = {
	type: "consonant",
	glyph: "ठ"
};
var D$1 = {
	type: "consonant",
	glyph: "ड"
};
var Dh$1 = {
	type: "consonant",
	glyph: "ढ"
};
var N$1 = {
	type: "consonant",
	glyph: "ण"
};
var t$1 = {
	type: "consonant",
	glyph: "त"
};
var th$1 = {
	type: "consonant",
	glyph: "थ"
};
var d$1 = {
	type: "consonant",
	glyph: "द"
};
var dh$1 = {
	type: "consonant",
	glyph: "ध"
};
var n$1 = {
	type: "consonant",
	glyph: "न"
};
var p$1 = {
	type: "consonant",
	glyph: "प"
};
var ph$1 = {
	type: "consonant",
	glyph: "फ"
};
var b$1 = {
	type: "consonant",
	glyph: "ब"
};
var bh$1 = {
	type: "consonant",
	glyph: "भ"
};
var m$1 = {
	type: "consonant",
	glyph: "म"
};
var y$1 = {
	type: "consonant",
	glyph: "य"
};
var r$1 = {
	type: "consonant",
	glyph: "र"
};
var l$1 = {
	type: "consonant",
	glyph: "ल"
};
var v$1 = {
	type: "consonant",
	glyph: "व"
};
var L$1 = {
	type: "consonant",
	glyph: "ळ"
};
var sh$1 = {
	type: "consonant",
	glyph: "श"
};
var Sh$1 = {
	type: "consonant",
	glyph: "ष"
};
var s$1 = {
	type: "consonant",
	glyph: "स"
};
var h$1 = {
	type: "consonant",
	glyph: "ह"
};
var M$1 = {
	type: "mark",
	glyph: "ं"
};
var MM$1 = {
	type: "mark",
	glyph: "ँ"
};
var H$1 = {
	type: "mark",
	glyph: "ः"
};
var phonetic_base = {
	a: a$1,
	aa: aa$1,
	i: i$1,
	ii: ii$1,
	u: u$1,
	uu: uu$1,
	ri: ri$1,
	e: e$1,
	ai: ai$1,
	o: o$1,
	au: au$1,
	ae: ae$1,
	aw: aw$1,
	k: k$1,
	kh: kh$1,
	g: g$1,
	gh: gh$1,
	ng: ng$1,
	ch: ch$1,
	chh: chh$1,
	j: j$1,
	jh: jh$1,
	ny: ny$1,
	T: T$1,
	Th: Th$1,
	D: D$1,
	Dh: Dh$1,
	N: N$1,
	t: t$1,
	th: th$1,
	d: d$1,
	dh: dh$1,
	n: n$1,
	p: p$1,
	ph: ph$1,
	b: b$1,
	bh: bh$1,
	m: m$1,
	y: y$1,
	r: r$1,
	l: l$1,
	v: v$1,
	L: L$1,
	sh: sh$1,
	Sh: Sh$1,
	s: s$1,
	h: h$1,
	M: M$1,
	MM: MM$1,
	H: H$1
};

var a = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ae = {
	type: "vowel",
	glyph: "ॲ",
	matra: "ॅ"
};
var ai = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var aw = {
	type: "vowel",
	glyph: "ऑ",
	matra: "ॉ"
};
var b = {
	type: "consonant",
	glyph: "ब"
};
var bh = {
	type: "consonant",
	glyph: "भ"
};
var ch = {
	type: "consonant",
	glyph: "च"
};
var chh = {
	type: "consonant",
	glyph: "छ"
};
var d = {
	type: "consonant",
	glyph: "द"
};
var D = {
	type: "consonant",
	glyph: "ड"
};
var dh = {
	type: "consonant",
	glyph: "ध"
};
var Dh = {
	type: "consonant",
	glyph: "ढ"
};
var dny = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var e = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ee = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var g = {
	type: "consonant",
	glyph: "ग"
};
var gh = {
	type: "consonant",
	glyph: "घ"
};
var gy = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var h = {
	type: "consonant",
	glyph: "ह"
};
var H = {
	type: "mark",
	glyph: "ः"
};
var i = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var j = {
	type: "consonant",
	glyph: "ज"
};
var jh = {
	type: "consonant",
	glyph: "झ"
};
var k = {
	type: "consonant",
	glyph: "क"
};
var kh = {
	type: "consonant",
	glyph: "ख"
};
var l = {
	type: "consonant",
	glyph: "ल"
};
var L = {
	type: "consonant",
	glyph: "ळ"
};
var m = {
	type: "consonant",
	glyph: "म"
};
var M = {
	type: "mark",
	glyph: "ं"
};
var MM = {
	type: "mark",
	glyph: "ँ"
};
var n = {
	type: "consonant",
	glyph: "न"
};
var N = {
	type: "consonant",
	glyph: "ण"
};
var ng = {
	type: "consonant",
	glyph: "ङ"
};
var ny = {
	type: "consonant",
	glyph: "ञ"
};
var o = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var p = {
	type: "consonant",
	glyph: "प"
};
var ph = {
	type: "consonant",
	glyph: "फ"
};
var r = {
	type: "consonant",
	glyph: "र"
};
var R = {
	type: "consonant",
	glyph: "र"
};
var ri = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var s = {
	type: "consonant",
	glyph: "स"
};
var sh = {
	type: "consonant",
	glyph: "श"
};
var Sh = {
	type: "consonant",
	glyph: "ष"
};
var t = {
	type: "consonant",
	glyph: "त"
};
var T = {
	type: "consonant",
	glyph: "ट"
};
var th = {
	type: "consonant",
	glyph: "थ"
};
var Th = {
	type: "consonant",
	glyph: "ठ"
};
var u = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var v = {
	type: "consonant",
	glyph: "व"
};
var w = {
	type: "consonant",
	glyph: "व"
};
var W = {
	type: "consonant",
	glyph: "व"
};
var x = {
	type: "conjunct",
	glyph: "क्ष"
};
var y = {
	type: "consonant",
	glyph: "य"
};
var B = {
	type: "consonant",
	glyph: "ब"
};
var G = {
	type: "consonant",
	glyph: "ग"
};
var J = {
	type: "consonant",
	glyph: "ज"
};
var K = {
	type: "consonant",
	glyph: "क"
};
var P = {
	type: "consonant",
	glyph: "प"
};
var V = {
	type: "consonant",
	glyph: "व"
};
var X = {
	type: "conjunct",
	glyph: "क्ष"
};
var Y = {
	type: "consonant",
	glyph: "य"
};
var E = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var O = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var Ch = {
	type: "consonant",
	glyph: "च"
};
var Ph = {
	type: "consonant",
	glyph: "फ"
};
var Bh = {
	type: "consonant",
	glyph: "भ"
};
var Gh = {
	type: "consonant",
	glyph: "घ"
};
var Kh = {
	type: "consonant",
	glyph: "ख"
};
var Ny = {
	type: "consonant",
	glyph: "ञ"
};
var Ng = {
	type: "consonant",
	glyph: "ङ"
};
var phonetic_expanded = {
	a: a,
	A: A,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa,
	ae: ae,
	ai: ai,
	au: au,
	aw: aw,
	b: b,
	bh: bh,
	ch: ch,
	chh: chh,
	d: d,
	D: D,
	dh: dh,
	Dh: Dh,
	dny: dny,
	e: e,
	ee: ee,
	g: g,
	gh: gh,
	gy: gy,
	h: h,
	H: H,
	i: i,
	I: I,
	"ī": {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
},
	ii: ii,
	j: j,
	jh: jh,
	k: k,
	kh: kh,
	l: l,
	L: L,
	m: m,
	M: M,
	MM: MM,
	n: n,
	N: N,
	ng: ng,
	ny: ny,
	o: o,
	p: p,
	ph: ph,
	r: r,
	R: R,
	ri: ri,
	s: s,
	sh: sh,
	Sh: Sh,
	t: t,
	T: T,
	th: th,
	Th: Th,
	u: u,
	U: U,
	"ū": {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
},
	uu: uu,
	v: v,
	w: w,
	W: W,
	x: x,
	y: y,
	B: B,
	G: G,
	J: J,
	K: K,
	P: P,
	V: V,
	X: X,
	Y: Y,
	E: E,
	O: O,
	Ch: Ch,
	Ph: Ph,
	Bh: Bh,
	Gh: Gh,
	Kh: Kh,
	Ny: Ny,
	Ng: Ng
};

interface TrieNode<TValue> {
    children: Map<string, TrieNode<TValue>>;
    terminal: null | {
        key: string;
        value: TValue;
    };
}
interface LongestMatchResult<TValue> {
    isPrefix: boolean;
    matched: boolean;
    key: string;
    value: TValue | null;
    length: number;
}
declare function buildTrie<TValue>(expandedMap: Record<string, TValue>): TrieNode<TValue>;
declare function walkLongest<TValue>(root: TrieNode<TValue>, input: string, startIndex?: number): LongestMatchResult<TValue>;

interface InputStack {
    push(char: string): void;
    pop(): string | undefined;
    clear(): void;
    toString(): string;
    size(): number;
    isEmpty(): boolean;
}
declare function createInputStack(): InputStack;

type NasalizationMode = "anusvara" | "panchamakshar";
interface EngineRuleOptions {
    enableNukta: boolean;
    nasalizationMode: NasalizationMode;
    enableLigatureCollapse: boolean;
    enableSchwaDeletion: boolean;
}

type Edit$1 = {
    backspace: number;
    insert: string;
};
interface TransliterationEntry {
    type: string;
    glyph: string;
    matra?: string;
}
interface TransliterationEngineOptions {
    expandedMap: Record<string, TransliterationEntry>;
    trie?: TrieNode<TransliterationEntry>;
    rules?: {
        enableNukta?: boolean;
        nasalizationMode?: NasalizationMode;
        enableLigatureCollapse?: boolean;
        enableSchwaDeletion?: boolean;
    };
}
interface TransliterationEngine {
    processChar(char: string): Edit$1;
    processText(text: string): Edit$1;
    backspace(): Edit$1;
    commit(): Edit$1;
    reset(): void;
}
declare function createTransliterationEngine(options: TransliterationEngineOptions): TransliterationEngine;

type TextInputLike = HTMLInputElement | HTMLTextAreaElement;
declare function deleteAndInsert(el: TextInputLike, backspace: number, insert: string): {
    start: number;
    end: number;
};
declare class DOMIntegrator {
    private readonly element?;
    constructor(element?: TextInputLike);
    deleteAndInsert(el: TextInputLike, backspace: number, insert: string): {
        start: number;
        end: number;
    };
    deleteAndInsert(backspace: number, insert: string): {
        start: number;
        end: number;
    };
}

type InterceptTarget = TextInputLike | HTMLElement;
interface InputInterceptorOptions {
    element: InterceptTarget;
    engine: TransliterationEngine;
    enabled?: boolean;
    onEditApplied?: (edit: Edit$1) => void;
    onBypass?: (reason: "disabled" | "modifier" | "composition" | "unsupported-target" | "selection") => void;
}
interface InputInterceptor {
    attach(): void;
    detach(): void;
    isAttached(): boolean;
}
declare function createInputInterceptor(options: InputInterceptorOptions): InputInterceptor;

interface ContentEditableEditResult {
    collapsed: boolean;
    applied: boolean;
}
declare function deleteAndInsertContentEditable(root: HTMLElement, backspace: number, insert: string): ContentEditableEditResult;

type Edit = {
    backspace: number;
    insert: string;
};
declare const maps: {
    readonly devanagari: {
        readonly base: {
            consonants: string[];
            vowelsIndependent: string[];
            vowelMatras: string[];
            halant: string;
            digits: string[];
            marks: {
                anusvara: string;
                chandrabindu: string;
                visarga: string;
            };
        };
    };
    readonly marathi: {
        readonly phonetic: {
            readonly base: {
                a: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                aa: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                i: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ii: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                u: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                uu: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ri: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ai: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                au: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ae: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                aw: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                k: {
                    type: string;
                    glyph: string;
                };
                kh: {
                    type: string;
                    glyph: string;
                };
                g: {
                    type: string;
                    glyph: string;
                };
                gh: {
                    type: string;
                    glyph: string;
                };
                ng: {
                    type: string;
                    glyph: string;
                };
                ch: {
                    type: string;
                    glyph: string;
                };
                chh: {
                    type: string;
                    glyph: string;
                };
                j: {
                    type: string;
                    glyph: string;
                };
                jh: {
                    type: string;
                    glyph: string;
                };
                ny: {
                    type: string;
                    glyph: string;
                };
                T: {
                    type: string;
                    glyph: string;
                };
                Th: {
                    type: string;
                    glyph: string;
                };
                D: {
                    type: string;
                    glyph: string;
                };
                Dh: {
                    type: string;
                    glyph: string;
                };
                N: {
                    type: string;
                    glyph: string;
                };
                t: {
                    type: string;
                    glyph: string;
                };
                th: {
                    type: string;
                    glyph: string;
                };
                d: {
                    type: string;
                    glyph: string;
                };
                dh: {
                    type: string;
                    glyph: string;
                };
                n: {
                    type: string;
                    glyph: string;
                };
                p: {
                    type: string;
                    glyph: string;
                };
                ph: {
                    type: string;
                    glyph: string;
                };
                b: {
                    type: string;
                    glyph: string;
                };
                bh: {
                    type: string;
                    glyph: string;
                };
                m: {
                    type: string;
                    glyph: string;
                };
                y: {
                    type: string;
                    glyph: string;
                };
                r: {
                    type: string;
                    glyph: string;
                };
                l: {
                    type: string;
                    glyph: string;
                };
                v: {
                    type: string;
                    glyph: string;
                };
                L: {
                    type: string;
                    glyph: string;
                };
                sh: {
                    type: string;
                    glyph: string;
                };
                Sh: {
                    type: string;
                    glyph: string;
                };
                s: {
                    type: string;
                    glyph: string;
                };
                h: {
                    type: string;
                    glyph: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                MM: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
            };
            readonly expanded: {
                a: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                A: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ā: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                aa: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ae: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ai: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                au: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                aw: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                b: {
                    type: string;
                    glyph: string;
                };
                bh: {
                    type: string;
                    glyph: string;
                };
                ch: {
                    type: string;
                    glyph: string;
                };
                chh: {
                    type: string;
                    glyph: string;
                };
                d: {
                    type: string;
                    glyph: string;
                };
                D: {
                    type: string;
                    glyph: string;
                };
                dh: {
                    type: string;
                    glyph: string;
                };
                Dh: {
                    type: string;
                    glyph: string;
                };
                dny: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ee: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                g: {
                    type: string;
                    glyph: string;
                };
                gh: {
                    type: string;
                    glyph: string;
                };
                gy: {
                    type: string;
                    glyph: string;
                };
                h: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
                i: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                I: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ī: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ii: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                j: {
                    type: string;
                    glyph: string;
                };
                jh: {
                    type: string;
                    glyph: string;
                };
                k: {
                    type: string;
                    glyph: string;
                };
                kh: {
                    type: string;
                    glyph: string;
                };
                l: {
                    type: string;
                    glyph: string;
                };
                L: {
                    type: string;
                    glyph: string;
                };
                m: {
                    type: string;
                    glyph: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                MM: {
                    type: string;
                    glyph: string;
                };
                n: {
                    type: string;
                    glyph: string;
                };
                N: {
                    type: string;
                    glyph: string;
                };
                ng: {
                    type: string;
                    glyph: string;
                };
                ny: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                p: {
                    type: string;
                    glyph: string;
                };
                ph: {
                    type: string;
                    glyph: string;
                };
                r: {
                    type: string;
                    glyph: string;
                };
                R: {
                    type: string;
                    glyph: string;
                };
                ri: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                s: {
                    type: string;
                    glyph: string;
                };
                sh: {
                    type: string;
                    glyph: string;
                };
                Sh: {
                    type: string;
                    glyph: string;
                };
                t: {
                    type: string;
                    glyph: string;
                };
                T: {
                    type: string;
                    glyph: string;
                };
                th: {
                    type: string;
                    glyph: string;
                };
                Th: {
                    type: string;
                    glyph: string;
                };
                u: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                U: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ū: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                uu: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                v: {
                    type: string;
                    glyph: string;
                };
                w: {
                    type: string;
                    glyph: string;
                };
                W: {
                    type: string;
                    glyph: string;
                };
                x: {
                    type: string;
                    glyph: string;
                };
                y: {
                    type: string;
                    glyph: string;
                };
                B: {
                    type: string;
                    glyph: string;
                };
                G: {
                    type: string;
                    glyph: string;
                };
                J: {
                    type: string;
                    glyph: string;
                };
                K: {
                    type: string;
                    glyph: string;
                };
                P: {
                    type: string;
                    glyph: string;
                };
                V: {
                    type: string;
                    glyph: string;
                };
                X: {
                    type: string;
                    glyph: string;
                };
                Y: {
                    type: string;
                    glyph: string;
                };
                E: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                O: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                Ch: {
                    type: string;
                    glyph: string;
                };
                Ph: {
                    type: string;
                    glyph: string;
                };
                Bh: {
                    type: string;
                    glyph: string;
                };
                Gh: {
                    type: string;
                    glyph: string;
                };
                Kh: {
                    type: string;
                    glyph: string;
                };
                Ny: {
                    type: string;
                    glyph: string;
                };
                Ng: {
                    type: string;
                    glyph: string;
                };
            };
        };
    };
};

export { type ContentEditableEditResult, DOMIntegrator, type Edit, type EngineRuleOptions, type InputInterceptor, type InputInterceptorOptions, type InputStack, type InterceptTarget, type LongestMatchResult, type NasalizationMode, type TextInputLike, type TransliterationEngine, type TransliterationEngineOptions, type TransliterationEntry, type TrieNode, buildTrie, createInputInterceptor, createInputStack, createTransliterationEngine, deleteAndInsert, deleteAndInsertContentEditable, base as devanagariBase, maps, phonetic_base as marathiPhoneticBase, phonetic_expanded as marathiPhoneticExpanded, walkLongest };
