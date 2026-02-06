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

var a$b = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var ai$9 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$9 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var b$4 = {
	type: "consonant",
	glyph: "ब"
};
var bh$4 = {
	type: "consonant",
	glyph: "भ"
};
var ch$4 = {
	type: "consonant",
	glyph: "च"
};
var chh$4 = {
	type: "consonant",
	glyph: "छ"
};
var d$4 = {
	type: "consonant",
	glyph: "द"
};
var D$4 = {
	type: "consonant",
	glyph: "ड"
};
var dh$4 = {
	type: "consonant",
	glyph: "ध"
};
var Dh$4 = {
	type: "consonant",
	glyph: "ढ"
};
var e$b = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var f$2 = {
	type: "consonant",
	glyph: "फ़"
};
var g$4 = {
	type: "consonant",
	glyph: "ग"
};
var gh$4 = {
	type: "consonant",
	glyph: "घ"
};
var gy$2 = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var h$4 = {
	type: "consonant",
	glyph: "ह"
};
var i$b = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var j$4 = {
	type: "consonant",
	glyph: "ज"
};
var jh$4 = {
	type: "consonant",
	glyph: "झ"
};
var k$4 = {
	type: "consonant",
	glyph: "क"
};
var kh$4 = {
	type: "consonant",
	glyph: "ख"
};
var ksh$1 = {
	type: "conjunct",
	glyph: "क्ष"
};
var l$4 = {
	type: "consonant",
	glyph: "ल"
};
var m$4 = {
	type: "consonant",
	glyph: "म"
};
var n$4 = {
	type: "consonant",
	glyph: "न"
};
var N$4 = {
	type: "consonant",
	glyph: "ण"
};
var o$b = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var p$4 = {
	type: "consonant",
	glyph: "प"
};
var ph$4 = {
	type: "consonant",
	glyph: "फ"
};
var q$1 = {
	type: "consonant",
	glyph: "क़"
};
var r$4 = {
	type: "consonant",
	glyph: "र"
};
var rh = {
	type: "consonant",
	glyph: "ढ़"
};
var ri$6 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var s$4 = {
	type: "consonant",
	glyph: "स"
};
var sh$4 = {
	type: "consonant",
	glyph: "श"
};
var shh = {
	type: "consonant",
	glyph: "ष"
};
var shr$1 = {
	type: "conjunct",
	glyph: "श्र"
};
var t$4 = {
	type: "consonant",
	glyph: "त"
};
var T$4 = {
	type: "consonant",
	glyph: "ट"
};
var th$4 = {
	type: "consonant",
	glyph: "थ"
};
var Th$4 = {
	type: "consonant",
	glyph: "ठ"
};
var tr$1 = {
	type: "conjunct",
	glyph: "त्र"
};
var u$b = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var v$4 = {
	type: "consonant",
	glyph: "व"
};
var w$2 = {
	type: "consonant",
	glyph: "व"
};
var y$4 = {
	type: "consonant",
	glyph: "य"
};
var z$1 = {
	type: "consonant",
	glyph: "ज़"
};
var hunterian = {
	a: a$b,
	ai: ai$9,
	au: au$9,
	b: b$4,
	bh: bh$4,
	ch: ch$4,
	chh: chh$4,
	d: d$4,
	D: D$4,
	dh: dh$4,
	Dh: Dh$4,
	e: e$b,
	f: f$2,
	g: g$4,
	gh: gh$4,
	gy: gy$2,
	h: h$4,
	i: i$b,
	j: j$4,
	jh: jh$4,
	k: k$4,
	kh: kh$4,
	ksh: ksh$1,
	l: l$4,
	m: m$4,
	n: n$4,
	N: N$4,
	o: o$b,
	p: p$4,
	ph: ph$4,
	q: q$1,
	r: r$4,
	rh: rh,
	ri: ri$6,
	s: s$4,
	sh: sh$4,
	shh: shh,
	shr: shr$1,
	t: t$4,
	T: T$4,
	th: th$4,
	Th: Th$4,
	tr: tr$1,
	u: u$b,
	v: v$4,
	w: w$2,
	y: y$4,
	z: z$1
};

var a$a = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$5 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$8 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$8 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ba$6 = {
	type: "consonant",
	glyph: "ब"
};
var bha$4 = {
	type: "consonant",
	glyph: "भ"
};
var ca$6 = {
	type: "consonant",
	glyph: "च"
};
var cha$3 = {
	type: "consonant",
	glyph: "छ"
};
var da$6 = {
	type: "consonant",
	glyph: "द"
};
var Da$5 = {
	type: "consonant",
	glyph: "ड"
};
var dha$4 = {
	type: "consonant",
	glyph: "ध"
};
var Dha$3 = {
	type: "consonant",
	glyph: "ढ"
};
var e$a = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ga$6 = {
	type: "consonant",
	glyph: "ग"
};
var Ga$3 = {
	type: "consonant",
	glyph: "ङ"
};
var gha$4 = {
	type: "consonant",
	glyph: "घ"
};
var H$7 = {
	type: "mark",
	glyph: "ः"
};
var ha$6 = {
	type: "consonant",
	glyph: "ह"
};
var i$a = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$5 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$6 = {
	type: "consonant",
	glyph: "ज"
};
var Ja$2 = {
	type: "consonant",
	glyph: "ञ"
};
var jha$4 = {
	type: "consonant",
	glyph: "झ"
};
var jJa = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var ka$6 = {
	type: "consonant",
	glyph: "क"
};
var kha$4 = {
	type: "consonant",
	glyph: "ख"
};
var kSa = {
	type: "conjunct",
	glyph: "क्ष"
};
var la$6 = {
	type: "consonant",
	glyph: "ल"
};
var lR = {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
};
var M$7 = {
	type: "mark",
	glyph: "ं"
};
var ma$6 = {
	type: "consonant",
	glyph: "म"
};
var na$6 = {
	type: "consonant",
	glyph: "न"
};
var Na$5 = {
	type: "consonant",
	glyph: "ण"
};
var o$a = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var pa$6 = {
	type: "consonant",
	glyph: "प"
};
var pha$4 = {
	type: "consonant",
	glyph: "फ"
};
var R$2 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var ra$6 = {
	type: "consonant",
	glyph: "र"
};
var RR = {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
};
var sa$6 = {
	type: "consonant",
	glyph: "स"
};
var Sa$2 = {
	type: "consonant",
	glyph: "ष"
};
var ta$6 = {
	type: "consonant",
	glyph: "त"
};
var Ta$5 = {
	type: "consonant",
	glyph: "ट"
};
var tha$4 = {
	type: "consonant",
	glyph: "थ"
};
var Tha$3 = {
	type: "consonant",
	glyph: "ठ"
};
var tra$3 = {
	type: "conjunct",
	glyph: "त्र"
};
var u$a = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$5 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$6 = {
	type: "consonant",
	glyph: "व"
};
var ya$6 = {
	type: "consonant",
	glyph: "य"
};
var za$4 = {
	type: "consonant",
	glyph: "श"
};
var zra = {
	type: "conjunct",
	glyph: "श्र"
};
var harvard_kyoto = {
	a: a$a,
	A: A$5,
	ai: ai$8,
	au: au$8,
	ba: ba$6,
	bha: bha$4,
	ca: ca$6,
	cha: cha$3,
	da: da$6,
	Da: Da$5,
	dha: dha$4,
	Dha: Dha$3,
	e: e$a,
	ga: ga$6,
	Ga: Ga$3,
	gha: gha$4,
	H: H$7,
	ha: ha$6,
	i: i$a,
	I: I$5,
	ja: ja$6,
	Ja: Ja$2,
	jha: jha$4,
	jJa: jJa,
	ka: ka$6,
	kha: kha$4,
	kSa: kSa,
	la: la$6,
	lR: lR,
	M: M$7,
	ma: ma$6,
	na: na$6,
	Na: Na$5,
	o: o$a,
	pa: pa$6,
	pha: pha$4,
	R: R$2,
	ra: ra$6,
	RR: RR,
	sa: sa$6,
	Sa: Sa$2,
	ta: ta$6,
	Ta: Ta$5,
	tha: tha$4,
	Tha: Tha$3,
	tra: tra$3,
	u: u$a,
	U: U$5,
	va: va$6,
	ya: ya$6,
	za: za$4,
	zra: zra
};

var a$9 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$7 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$7 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$7 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ba$5 = {
	type: "consonant",
	glyph: "ब"
};
var bha$3 = {
	type: "consonant",
	glyph: "भ"
};
var ca$5 = {
	type: "consonant",
	glyph: "च"
};
var cha$2 = {
	type: "consonant",
	glyph: "छ"
};
var da$5 = {
	type: "consonant",
	glyph: "द"
};
var Da$4 = {
	type: "consonant",
	glyph: "ड"
};
var dha$3 = {
	type: "consonant",
	glyph: "ध"
};
var Dha$2 = {
	type: "consonant",
	glyph: "ढ"
};
var e$9 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var fa$3 = {
	type: "consonant",
	glyph: "फ़"
};
var ga$5 = {
	type: "consonant",
	glyph: "ग"
};
var gha$3 = {
	type: "consonant",
	glyph: "घ"
};
var ha$5 = {
	type: "consonant",
	glyph: "ह"
};
var i$9 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$7 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$5 = {
	type: "consonant",
	glyph: "ज"
};
var jha$3 = {
	type: "consonant",
	glyph: "झ"
};
var ka$5 = {
	type: "consonant",
	glyph: "क"
};
var kha$3 = {
	type: "consonant",
	glyph: "ख"
};
var la$5 = {
	type: "consonant",
	glyph: "ल"
};
var ma$5 = {
	type: "consonant",
	glyph: "म"
};
var na$5 = {
	type: "consonant",
	glyph: "न"
};
var Na$4 = {
	type: "consonant",
	glyph: "ण"
};
var o$9 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var pa$5 = {
	type: "consonant",
	glyph: "प"
};
var pha$3 = {
	type: "consonant",
	glyph: "फ"
};
var qa$3 = {
	type: "consonant",
	glyph: "क़"
};
var ra$5 = {
	type: "consonant",
	glyph: "र"
};
var ri$5 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var sa$5 = {
	type: "consonant",
	glyph: "स"
};
var ta$5 = {
	type: "consonant",
	glyph: "त"
};
var Ta$4 = {
	type: "consonant",
	glyph: "ट"
};
var tha$3 = {
	type: "consonant",
	glyph: "थ"
};
var Tha$2 = {
	type: "consonant",
	glyph: "ठ"
};
var u$9 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$7 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$5 = {
	type: "consonant",
	glyph: "व"
};
var ya$5 = {
	type: "consonant",
	glyph: "य"
};
var za$3 = {
	type: "consonant",
	glyph: "ज़"
};
var iast = {
	a: a$9,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa$7,
	ai: ai$7,
	au: au$7,
	ba: ba$5,
	bha: bha$3,
	ca: ca$5,
	cha: cha$2,
	da: da$5,
	Da: Da$4,
	dha: dha$3,
	Dha: Dha$2,
	e: e$9,
	fa: fa$3,
	ga: ga$5,
	gha: gha$3,
	"ḥ": {
	type: "mark",
	glyph: "ः"
},
	ha: ha$5,
	i: i$9,
	"ī": {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
},
	ii: ii$7,
	ja: ja$5,
	jha: jha$3,
	"jña": {
	type: "conjunct",
	glyph: "ज्ञ"
},
	ka: ka$5,
	kha: kha$3,
	"kṣa": {
	type: "conjunct",
	glyph: "क्ष"
},
	"ḷ": {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
},
	la: la$5,
	"ṁ": {
	type: "mark",
	glyph: "ं"
},
	"ṃ": {
	type: "mark",
	glyph: "ं"
},
	ma: ma$5,
	na: na$5,
	Na: Na$4,
	"ña": {
	type: "consonant",
	glyph: "ञ"
},
	"ṅa": {
	type: "consonant",
	glyph: "ङ"
},
	o: o$9,
	pa: pa$5,
	pha: pha$3,
	qa: qa$3,
	"ṛ": {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
},
	"ṝ": {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
},
	ra: ra$5,
	"ṛa": {
	type: "consonant",
	glyph: "ड़"
},
	"ṛha": {
	type: "consonant",
	glyph: "ढ़"
},
	ri: ri$5,
	sa: sa$5,
	"śa": {
	type: "consonant",
	glyph: "श"
},
	"ṣa": {
	type: "consonant",
	glyph: "ष"
},
	"śra": {
	type: "conjunct",
	glyph: "श्र"
},
	ta: ta$5,
	Ta: Ta$4,
	tha: tha$3,
	Tha: Tha$2,
	u: u$9,
	"ū": {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
},
	uu: uu$7,
	va: va$5,
	ya: ya$5,
	za: za$3
};

var a$8 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$6 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$6 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$6 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ba$4 = {
	type: "consonant",
	glyph: "ब"
};
var bha$2 = {
	type: "consonant",
	glyph: "भ"
};
var ca$4 = {
	type: "consonant",
	glyph: "च"
};
var cha$1 = {
	type: "consonant",
	glyph: "छ"
};
var da$4 = {
	type: "consonant",
	glyph: "द"
};
var Da$3 = {
	type: "consonant",
	glyph: "ड"
};
var dha$2 = {
	type: "consonant",
	glyph: "ध"
};
var Dha$1 = {
	type: "consonant",
	glyph: "ढ"
};
var e$8 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var fa$2 = {
	type: "consonant",
	glyph: "फ़"
};
var ga$4 = {
	type: "consonant",
	glyph: "ग"
};
var gha$2 = {
	type: "consonant",
	glyph: "घ"
};
var ha$4 = {
	type: "consonant",
	glyph: "ह"
};
var i$8 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$6 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$4 = {
	type: "consonant",
	glyph: "ज"
};
var jha$2 = {
	type: "consonant",
	glyph: "झ"
};
var ka$4 = {
	type: "consonant",
	glyph: "क"
};
var kha$2 = {
	type: "consonant",
	glyph: "ख"
};
var la$4 = {
	type: "consonant",
	glyph: "ल"
};
var ma$4 = {
	type: "consonant",
	glyph: "म"
};
var na$4 = {
	type: "consonant",
	glyph: "न"
};
var Na$3 = {
	type: "consonant",
	glyph: "ण"
};
var o$8 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var pa$4 = {
	type: "consonant",
	glyph: "प"
};
var pha$2 = {
	type: "consonant",
	glyph: "फ"
};
var qa$2 = {
	type: "consonant",
	glyph: "क़"
};
var ra$4 = {
	type: "consonant",
	glyph: "र"
};
var ri$4 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var sa$4 = {
	type: "consonant",
	glyph: "स"
};
var ta$4 = {
	type: "consonant",
	glyph: "त"
};
var Ta$3 = {
	type: "consonant",
	glyph: "ट"
};
var tha$2 = {
	type: "consonant",
	glyph: "थ"
};
var Tha$1 = {
	type: "consonant",
	glyph: "ठ"
};
var u$8 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$6 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$4 = {
	type: "consonant",
	glyph: "व"
};
var ya$4 = {
	type: "consonant",
	glyph: "य"
};
var za$2 = {
	type: "consonant",
	glyph: "ज़"
};
var iso15919 = {
	a: a$8,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa$6,
	ai: ai$6,
	au: au$6,
	ba: ba$4,
	bha: bha$2,
	ca: ca$4,
	cha: cha$1,
	da: da$4,
	Da: Da$3,
	"ḍa": {
	type: "consonant",
	glyph: "ड"
},
	dha: dha$2,
	Dha: Dha$1,
	"ḍha": {
	type: "consonant",
	glyph: "ढ"
},
	e: e$8,
	"ē": {
	type: "vowel",
	glyph: "ए",
	matra: "े"
},
	fa: fa$2,
	ga: ga$4,
	"ġa": {
	type: "consonant",
	glyph: "ग़"
},
	gha: gha$2,
	"ḥ": {
	type: "mark",
	glyph: "ः"
},
	ha: ha$4,
	i: i$8,
	ii: ii$6,
	ja: ja$4,
	jha: jha$2,
	"jña": {
	type: "conjunct",
	glyph: "ज्ञ"
},
	ka: ka$4,
	kha: kha$2,
	"k͟ha": {
	type: "consonant",
	glyph: "ख़"
},
	"kṣa": {
	type: "conjunct",
	glyph: "क्ष"
},
	"l̥": {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
},
	la: la$4,
	"ṁ": {
	type: "mark",
	glyph: "ं"
},
	ma: ma$4,
	na: na$4,
	Na: Na$3,
	"ña": {
	type: "consonant",
	glyph: "ञ"
},
	"ṅa": {
	type: "consonant",
	glyph: "ङ"
},
	"ṇa": {
	type: "consonant",
	glyph: "ण"
},
	o: o$8,
	"ō": {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
},
	pa: pa$4,
	pha: pha$2,
	qa: qa$2,
	"r̥": {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
},
	"r̥̄": {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
},
	ra: ra$4,
	"ṛa": {
	type: "consonant",
	glyph: "ड़"
},
	"ṛha": {
	type: "consonant",
	glyph: "ढ़"
},
	ri: ri$4,
	sa: sa$4,
	"śa": {
	type: "consonant",
	glyph: "श"
},
	"ṣa": {
	type: "consonant",
	glyph: "ष"
},
	"śra": {
	type: "conjunct",
	glyph: "श्र"
},
	ta: ta$4,
	Ta: Ta$3,
	"ṭa": {
	type: "consonant",
	glyph: "ट"
},
	tha: tha$2,
	Tha: Tha$1,
	"ṭha": {
	type: "consonant",
	glyph: "ठ"
},
	u: u$8,
	uu: uu$6,
	va: va$4,
	ya: ya$4,
	za: za$2
};

var a$7 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$4 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa$5 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$5 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$5 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ba$3 = {
	type: "consonant",
	glyph: "ब"
};
var bha$1 = {
	type: "consonant",
	glyph: "भ"
};
var ca$3 = {
	type: "consonant",
	glyph: "च"
};
var Cha = {
	type: "consonant",
	glyph: "छ"
};
var da$3 = {
	type: "consonant",
	glyph: "द"
};
var Da$2 = {
	type: "consonant",
	glyph: "ड"
};
var dha$1 = {
	type: "consonant",
	glyph: "ध"
};
var Dha = {
	type: "consonant",
	glyph: "ढ"
};
var e$7 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var fa$1 = {
	type: "consonant",
	glyph: "फ़"
};
var ga$3 = {
	type: "consonant",
	glyph: "ग"
};
var Ga$2 = {
	type: "consonant",
	glyph: "ग़"
};
var gha$1 = {
	type: "consonant",
	glyph: "घ"
};
var GYa = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var H$6 = {
	type: "mark",
	glyph: "ः"
};
var ha$3 = {
	type: "consonant",
	glyph: "ह"
};
var i$7 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$4 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii$5 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$3 = {
	type: "consonant",
	glyph: "ज"
};
var jha$1 = {
	type: "consonant",
	glyph: "झ"
};
var ka$3 = {
	type: "consonant",
	glyph: "क"
};
var Ka$2 = {
	type: "consonant",
	glyph: "ख़"
};
var kha$1 = {
	type: "consonant",
	glyph: "ख"
};
var kSha = {
	type: "conjunct",
	glyph: "क्ष"
};
var la$3 = {
	type: "consonant",
	glyph: "ल"
};
var LLi = {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
};
var M$6 = {
	type: "mark",
	glyph: "ं"
};
var ma$3 = {
	type: "consonant",
	glyph: "म"
};
var na$3 = {
	type: "consonant",
	glyph: "न"
};
var Na$2 = {
	type: "consonant",
	glyph: "ण"
};
var o$7 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var pa$3 = {
	type: "consonant",
	glyph: "प"
};
var pha$1 = {
	type: "consonant",
	glyph: "फ"
};
var qa$1 = {
	type: "consonant",
	glyph: "क़"
};
var ra$3 = {
	type: "consonant",
	glyph: "र"
};
var Ra$2 = {
	type: "consonant",
	glyph: "ड़"
};
var Rha = {
	type: "consonant",
	glyph: "ढ़"
};
var RRi = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var RRI = {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
};
var sa$3 = {
	type: "consonant",
	glyph: "स"
};
var sha = {
	type: "consonant",
	glyph: "श"
};
var Sha = {
	type: "consonant",
	glyph: "ष"
};
var shra = {
	type: "conjunct",
	glyph: "श्र"
};
var ta$3 = {
	type: "consonant",
	glyph: "त"
};
var Ta$2 = {
	type: "consonant",
	glyph: "ट"
};
var tha$1 = {
	type: "consonant",
	glyph: "थ"
};
var Tha = {
	type: "consonant",
	glyph: "ठ"
};
var tra$2 = {
	type: "conjunct",
	glyph: "त्र"
};
var u$7 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$4 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu$5 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$3 = {
	type: "consonant",
	glyph: "व"
};
var wa$2 = {
	type: "consonant",
	glyph: "व"
};
var xa$1 = {
	type: "conjunct",
	glyph: "क्ष"
};
var ya$3 = {
	type: "consonant",
	glyph: "य"
};
var za$1 = {
	type: "consonant",
	glyph: "ज़"
};
var itrans = {
	".da": {
	type: "consonant",
	glyph: "ड़"
},
	".Dha": {
	type: "consonant",
	glyph: "ढ़"
},
	".h": {
	type: "mark",
	glyph: "ः"
},
	".m": {
	type: "mark",
	glyph: "ं"
},
	".n": {
	type: "mark",
	glyph: "ं"
},
	"~na": {
	type: "consonant",
	glyph: "ञ"
},
	"~Na": {
	type: "consonant",
	glyph: "ङ"
},
	a: a$7,
	A: A$4,
	aa: aa$5,
	ai: ai$5,
	au: au$5,
	ba: ba$3,
	bha: bha$1,
	ca: ca$3,
	Cha: Cha,
	da: da$3,
	Da: Da$2,
	dha: dha$1,
	Dha: Dha,
	e: e$7,
	fa: fa$1,
	ga: ga$3,
	Ga: Ga$2,
	gha: gha$1,
	GYa: GYa,
	H: H$6,
	ha: ha$3,
	i: i$7,
	I: I$4,
	ii: ii$5,
	"j~na": {
	type: "conjunct",
	glyph: "ज्ञ"
},
	ja: ja$3,
	jha: jha$1,
	ka: ka$3,
	Ka: Ka$2,
	kha: kha$1,
	kSha: kSha,
	"L^i": {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
},
	la: la$3,
	LLi: LLi,
	M: M$6,
	ma: ma$3,
	na: na$3,
	Na: Na$2,
	o: o$7,
	pa: pa$3,
	pha: pha$1,
	qa: qa$1,
	"R^i": {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
},
	"R^I": {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
},
	ra: ra$3,
	Ra: Ra$2,
	Rha: Rha,
	RRi: RRi,
	RRI: RRI,
	sa: sa$3,
	sha: sha,
	Sha: Sha,
	shra: shra,
	ta: ta$3,
	Ta: Ta$2,
	tha: tha$1,
	Tha: Tha,
	tra: tra$2,
	u: u$7,
	U: U$4,
	uu: uu$5,
	va: va$3,
	wa: wa$2,
	xa: xa$1,
	ya: ya$3,
	za: za$1
};

var a$6 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$3 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ba$2 = {
	type: "consonant",
	glyph: "ब"
};
var Ba$1 = {
	type: "consonant",
	glyph: "भ"
};
var ca$2 = {
	type: "consonant",
	glyph: "च"
};
var Ca$1 = {
	type: "consonant",
	glyph: "छ"
};
var da$2 = {
	type: "consonant",
	glyph: "द"
};
var Da$1 = {
	type: "consonant",
	glyph: "ध"
};
var e$6 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var E$2 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var f$1 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var F = {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
};
var ga$2 = {
	type: "consonant",
	glyph: "ग"
};
var Ga$1 = {
	type: "consonant",
	glyph: "घ"
};
var H$5 = {
	type: "mark",
	glyph: "ः"
};
var ha$2 = {
	type: "consonant",
	glyph: "ह"
};
var i$6 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$3 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$2 = {
	type: "consonant",
	glyph: "ज"
};
var Ja$1 = {
	type: "consonant",
	glyph: "झ"
};
var jYa = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var ka$2 = {
	type: "consonant",
	glyph: "क"
};
var Ka$1 = {
	type: "consonant",
	glyph: "ख"
};
var kza = {
	type: "conjunct",
	glyph: "क्ष"
};
var la$2 = {
	type: "consonant",
	glyph: "ल"
};
var M$5 = {
	type: "mark",
	glyph: "ं"
};
var ma$2 = {
	type: "consonant",
	glyph: "म"
};
var na$2 = {
	type: "consonant",
	glyph: "न"
};
var Na$1 = {
	type: "consonant",
	glyph: "ङ"
};
var o$6 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var O$2 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var pa$2 = {
	type: "consonant",
	glyph: "प"
};
var Pa$1 = {
	type: "consonant",
	glyph: "फ"
};
var qa = {
	type: "consonant",
	glyph: "ड"
};
var Qa = {
	type: "consonant",
	glyph: "ढ"
};
var ra$2 = {
	type: "consonant",
	glyph: "र"
};
var Ra$1 = {
	type: "consonant",
	glyph: "ण"
};
var sa$2 = {
	type: "consonant",
	glyph: "स"
};
var Sa$1 = {
	type: "consonant",
	glyph: "श"
};
var Sra$1 = {
	type: "conjunct",
	glyph: "श्र"
};
var ta$2 = {
	type: "consonant",
	glyph: "त"
};
var Ta$1 = {
	type: "consonant",
	glyph: "थ"
};
var tra$1 = {
	type: "conjunct",
	glyph: "त्र"
};
var u$6 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$3 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$2 = {
	type: "consonant",
	glyph: "व"
};
var wa$1 = {
	type: "consonant",
	glyph: "ट"
};
var Wa$1 = {
	type: "consonant",
	glyph: "ठ"
};
var x$2 = {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
};
var ya$2 = {
	type: "consonant",
	glyph: "य"
};
var Ya = {
	type: "consonant",
	glyph: "ञ"
};
var za = {
	type: "consonant",
	glyph: "ष"
};
var slp1 = {
	a: a$6,
	A: A$3,
	ba: ba$2,
	Ba: Ba$1,
	ca: ca$2,
	Ca: Ca$1,
	da: da$2,
	Da: Da$1,
	e: e$6,
	E: E$2,
	f: f$1,
	F: F,
	ga: ga$2,
	Ga: Ga$1,
	H: H$5,
	ha: ha$2,
	i: i$6,
	I: I$3,
	ja: ja$2,
	Ja: Ja$1,
	jYa: jYa,
	ka: ka$2,
	Ka: Ka$1,
	kza: kza,
	la: la$2,
	M: M$5,
	ma: ma$2,
	na: na$2,
	Na: Na$1,
	o: o$6,
	O: O$2,
	pa: pa$2,
	Pa: Pa$1,
	qa: qa,
	Qa: Qa,
	ra: ra$2,
	Ra: Ra$1,
	sa: sa$2,
	Sa: Sa$1,
	Sra: Sra$1,
	ta: ta$2,
	Ta: Ta$1,
	tra: tra$1,
	u: u$6,
	U: U$3,
	va: va$2,
	wa: wa$1,
	Wa: Wa$1,
	x: x$2,
	ya: ya$2,
	Ya: Ya,
	za: za
};

var a$5 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$4 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$4 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$4 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var ba$1 = {
	type: "consonant",
	glyph: "ब"
};
var bha = {
	type: "consonant",
	glyph: "भ"
};
var ca$1 = {
	type: "consonant",
	glyph: "च"
};
var cha = {
	type: "consonant",
	glyph: "छ"
};
var da$1 = {
	type: "consonant",
	glyph: "द"
};
var dha = {
	type: "consonant",
	glyph: "ध"
};
var e$5 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ga$1 = {
	type: "consonant",
	glyph: "ग"
};
var gha = {
	type: "consonant",
	glyph: "घ"
};
var ha$1 = {
	type: "consonant",
	glyph: "ह"
};
var i$5 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$4 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja$1 = {
	type: "consonant",
	glyph: "ज"
};
var jha = {
	type: "consonant",
	glyph: "झ"
};
var ka$1 = {
	type: "consonant",
	glyph: "क"
};
var kha = {
	type: "consonant",
	glyph: "ख"
};
var la$1 = {
	type: "consonant",
	glyph: "ल"
};
var ma$1 = {
	type: "consonant",
	glyph: "म"
};
var na$1 = {
	type: "consonant",
	glyph: "न"
};
var o$5 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var pa$1 = {
	type: "consonant",
	glyph: "प"
};
var pha = {
	type: "consonant",
	glyph: "फ"
};
var ra$1 = {
	type: "consonant",
	glyph: "र"
};
var sa$1 = {
	type: "consonant",
	glyph: "स"
};
var sra = {
	type: "conjunct",
	glyph: "श्र"
};
var ta$1 = {
	type: "consonant",
	glyph: "त"
};
var tha = {
	type: "consonant",
	glyph: "थ"
};
var tra = {
	type: "conjunct",
	glyph: "त्र"
};
var u$5 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$4 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va$1 = {
	type: "consonant",
	glyph: "व"
};
var ya$1 = {
	type: "consonant",
	glyph: "य"
};
var velthuis = {
	".da": {
	type: "consonant",
	glyph: "ड"
},
	".dha": {
	type: "consonant",
	glyph: "ढ"
},
	".h": {
	type: "mark",
	glyph: "ः"
},
	".l": {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
},
	".m": {
	type: "mark",
	glyph: "ं"
},
	".na": {
	type: "consonant",
	glyph: "ण"
},
	".r": {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
},
	".rr": {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
},
	".sa": {
	type: "consonant",
	glyph: "ष"
},
	".ta": {
	type: "consonant",
	glyph: "ट"
},
	".tha": {
	type: "consonant",
	glyph: "ठ"
},
	"~na": {
	type: "consonant",
	glyph: "ञ"
},
	a: a$5,
	aa: aa$4,
	ai: ai$4,
	au: au$4,
	ba: ba$1,
	bha: bha,
	ca: ca$1,
	cha: cha,
	da: da$1,
	dha: dha,
	e: e$5,
	ga: ga$1,
	gha: gha,
	ha: ha$1,
	i: i$5,
	ii: ii$4,
	"j~na": {
	type: "conjunct",
	glyph: "ज्ञ"
},
	ja: ja$1,
	jha: jha,
	"k.sa": {
	type: "conjunct",
	glyph: "क्ष"
},
	ka: ka$1,
	kha: kha,
	la: la$1,
	ma: ma$1,
	na: na$1,
	o: o$5,
	pa: pa$1,
	pha: pha,
	ra: ra$1,
	sa: sa$1,
	sra: sra,
	ta: ta$1,
	tha: tha,
	tra: tra,
	u: u$5,
	uu: uu$4,
	va: va$1,
	ya: ya$1
};

var a$4 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$2 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ba = {
	type: "consonant",
	glyph: "ब"
};
var Ba = {
	type: "consonant",
	glyph: "भ"
};
var ca = {
	type: "consonant",
	glyph: "च"
};
var Ca = {
	type: "consonant",
	glyph: "छ"
};
var da = {
	type: "consonant",
	glyph: "ड"
};
var Da = {
	type: "consonant",
	glyph: "ढ"
};
var DZa = {
	type: "consonant",
	glyph: "ढ़"
};
var e$4 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var E$1 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var fa = {
	type: "consonant",
	glyph: "ङ"
};
var Fa = {
	type: "consonant",
	glyph: "ञ"
};
var ga = {
	type: "consonant",
	glyph: "ग"
};
var Ga = {
	type: "consonant",
	glyph: "घ"
};
var gZa = {
	type: "consonant",
	glyph: "ग़"
};
var H$4 = {
	type: "mark",
	glyph: "ः"
};
var ha = {
	type: "consonant",
	glyph: "ह"
};
var i$4 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$2 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ja = {
	type: "consonant",
	glyph: "ज"
};
var Ja = {
	type: "consonant",
	glyph: "झ"
};
var jFa = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var jZa = {
	type: "consonant",
	glyph: "ज़"
};
var ka = {
	type: "consonant",
	glyph: "क"
};
var Ka = {
	type: "consonant",
	glyph: "ख"
};
var kRa = {
	type: "conjunct",
	glyph: "क्ष"
};
var kZa = {
	type: "consonant",
	glyph: "क़"
};
var KZa = {
	type: "consonant",
	glyph: "ख़"
};
var L$2 = {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
};
var la = {
	type: "consonant",
	glyph: "ल"
};
var M$4 = {
	type: "mark",
	glyph: "ं"
};
var ma = {
	type: "consonant",
	glyph: "म"
};
var na = {
	type: "consonant",
	glyph: "न"
};
var Na = {
	type: "consonant",
	glyph: "ण"
};
var o$4 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var O$1 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var pa = {
	type: "consonant",
	glyph: "प"
};
var Pa = {
	type: "consonant",
	glyph: "फ"
};
var PZa = {
	type: "consonant",
	glyph: "फ़"
};
var q = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var Q = {
	type: "vowel",
	glyph: "ॠ",
	matra: "ॄ"
};
var qZa = {
	type: "consonant",
	glyph: "ड़"
};
var ra = {
	type: "consonant",
	glyph: "र"
};
var Ra = {
	type: "consonant",
	glyph: "ष"
};
var sa = {
	type: "consonant",
	glyph: "स"
};
var Sa = {
	type: "consonant",
	glyph: "श"
};
var Sra = {
	type: "conjunct",
	glyph: "श्र"
};
var ta = {
	type: "consonant",
	glyph: "ट"
};
var Ta = {
	type: "consonant",
	glyph: "ठ"
};
var u$4 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$2 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var va = {
	type: "consonant",
	glyph: "व"
};
var wa = {
	type: "consonant",
	glyph: "त"
};
var Wa = {
	type: "consonant",
	glyph: "थ"
};
var wra = {
	type: "conjunct",
	glyph: "त्र"
};
var xa = {
	type: "consonant",
	glyph: "द"
};
var Xa = {
	type: "consonant",
	glyph: "ध"
};
var ya = {
	type: "consonant",
	glyph: "य"
};
var wx = {
	a: a$4,
	A: A$2,
	ba: ba,
	Ba: Ba,
	ca: ca,
	Ca: Ca,
	da: da,
	Da: Da,
	DZa: DZa,
	e: e$4,
	E: E$1,
	fa: fa,
	Fa: Fa,
	ga: ga,
	Ga: Ga,
	gZa: gZa,
	H: H$4,
	ha: ha,
	i: i$4,
	I: I$2,
	ja: ja,
	Ja: Ja,
	jFa: jFa,
	jZa: jZa,
	ka: ka,
	Ka: Ka,
	kRa: kRa,
	kZa: kZa,
	KZa: KZa,
	L: L$2,
	la: la,
	M: M$4,
	ma: ma,
	na: na,
	Na: Na,
	o: o$4,
	O: O$1,
	pa: pa,
	Pa: Pa,
	PZa: PZa,
	q: q,
	Q: Q,
	qZa: qZa,
	ra: ra,
	Ra: Ra,
	sa: sa,
	Sa: Sa,
	Sra: Sra,
	ta: ta,
	Ta: Ta,
	u: u$4,
	U: U$2,
	va: va,
	wa: wa,
	Wa: Wa,
	wra: wra,
	xa: xa,
	Xa: Xa,
	ya: ya
};

var a$3 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$3 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$3 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$3 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$3 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$3 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$3 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$3 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$3 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$3 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$3 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var k$3 = {
	type: "consonant",
	glyph: "क"
};
var kh$3 = {
	type: "consonant",
	glyph: "ख"
};
var g$3 = {
	type: "consonant",
	glyph: "ग"
};
var gh$3 = {
	type: "consonant",
	glyph: "घ"
};
var ng$3 = {
	type: "consonant",
	glyph: "ङ"
};
var ch$3 = {
	type: "consonant",
	glyph: "च"
};
var chh$3 = {
	type: "consonant",
	glyph: "छ"
};
var j$3 = {
	type: "consonant",
	glyph: "ज"
};
var jh$3 = {
	type: "consonant",
	glyph: "झ"
};
var ny$3 = {
	type: "consonant",
	glyph: "ञ"
};
var T$3 = {
	type: "consonant",
	glyph: "ट"
};
var Th$3 = {
	type: "consonant",
	glyph: "ठ"
};
var D$3 = {
	type: "consonant",
	glyph: "ड"
};
var Dh$3 = {
	type: "consonant",
	glyph: "ढ"
};
var N$3 = {
	type: "consonant",
	glyph: "ण"
};
var t$3 = {
	type: "consonant",
	glyph: "त"
};
var th$3 = {
	type: "consonant",
	glyph: "थ"
};
var d$3 = {
	type: "consonant",
	glyph: "द"
};
var dh$3 = {
	type: "consonant",
	glyph: "ध"
};
var n$3 = {
	type: "consonant",
	glyph: "न"
};
var p$3 = {
	type: "consonant",
	glyph: "प"
};
var ph$3 = {
	type: "consonant",
	glyph: "फ"
};
var b$3 = {
	type: "consonant",
	glyph: "ब"
};
var bh$3 = {
	type: "consonant",
	glyph: "भ"
};
var m$3 = {
	type: "consonant",
	glyph: "म"
};
var y$3 = {
	type: "consonant",
	glyph: "य"
};
var r$3 = {
	type: "consonant",
	glyph: "र"
};
var l$3 = {
	type: "consonant",
	glyph: "ल"
};
var v$3 = {
	type: "consonant",
	glyph: "व"
};
var sh$3 = {
	type: "consonant",
	glyph: "श"
};
var Sh$3 = {
	type: "consonant",
	glyph: "ष"
};
var s$3 = {
	type: "consonant",
	glyph: "स"
};
var h$3 = {
	type: "consonant",
	glyph: "ह"
};
var M$3 = {
	type: "mark",
	glyph: "ं"
};
var MM$3 = {
	type: "mark",
	glyph: "ँ"
};
var H$3 = {
	type: "mark",
	glyph: "ः"
};
var phonetic_base$1 = {
	a: a$3,
	aa: aa$3,
	i: i$3,
	ii: ii$3,
	u: u$3,
	uu: uu$3,
	ri: ri$3,
	e: e$3,
	ai: ai$3,
	o: o$3,
	au: au$3,
	k: k$3,
	kh: kh$3,
	g: g$3,
	gh: gh$3,
	ng: ng$3,
	ch: ch$3,
	chh: chh$3,
	j: j$3,
	jh: jh$3,
	ny: ny$3,
	T: T$3,
	Th: Th$3,
	D: D$3,
	Dh: Dh$3,
	N: N$3,
	t: t$3,
	th: th$3,
	d: d$3,
	dh: dh$3,
	n: n$3,
	p: p$3,
	ph: ph$3,
	b: b$3,
	bh: bh$3,
	m: m$3,
	y: y$3,
	r: r$3,
	l: l$3,
	v: v$3,
	sh: sh$3,
	Sh: Sh$3,
	s: s$3,
	h: h$3,
	M: M$3,
	MM: MM$3,
	H: H$3
};

var a$2 = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$1 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa$2 = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$2 = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$1 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii$2 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$2 = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$1 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu$2 = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$2 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var R$1 = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$2 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$2 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$2 = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$2 = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var k$2 = {
	type: "consonant",
	glyph: "क"
};
var kh$2 = {
	type: "consonant",
	glyph: "ख"
};
var g$2 = {
	type: "consonant",
	glyph: "ग"
};
var gh$2 = {
	type: "consonant",
	glyph: "घ"
};
var ng$2 = {
	type: "consonant",
	glyph: "ङ"
};
var ch$2 = {
	type: "consonant",
	glyph: "च"
};
var chh$2 = {
	type: "consonant",
	glyph: "छ"
};
var j$2 = {
	type: "consonant",
	glyph: "ज"
};
var jh$2 = {
	type: "consonant",
	glyph: "झ"
};
var ny$2 = {
	type: "consonant",
	glyph: "ञ"
};
var T$2 = {
	type: "consonant",
	glyph: "ट"
};
var Th$2 = {
	type: "consonant",
	glyph: "ठ"
};
var D$2 = {
	type: "consonant",
	glyph: "ड"
};
var Dh$2 = {
	type: "consonant",
	glyph: "ढ"
};
var N$2 = {
	type: "consonant",
	glyph: "ण"
};
var t$2 = {
	type: "consonant",
	glyph: "त"
};
var th$2 = {
	type: "consonant",
	glyph: "थ"
};
var d$2 = {
	type: "consonant",
	glyph: "द"
};
var dh$2 = {
	type: "consonant",
	glyph: "ध"
};
var n$2 = {
	type: "consonant",
	glyph: "न"
};
var p$2 = {
	type: "consonant",
	glyph: "प"
};
var ph$2 = {
	type: "consonant",
	glyph: "फ"
};
var b$2 = {
	type: "consonant",
	glyph: "ब"
};
var bh$2 = {
	type: "consonant",
	glyph: "भ"
};
var m$2 = {
	type: "consonant",
	glyph: "म"
};
var y$2 = {
	type: "consonant",
	glyph: "य"
};
var r$2 = {
	type: "consonant",
	glyph: "र"
};
var l$2 = {
	type: "consonant",
	glyph: "ल"
};
var v$2 = {
	type: "consonant",
	glyph: "व"
};
var w$1 = {
	type: "consonant",
	glyph: "व"
};
var sh$2 = {
	type: "consonant",
	glyph: "श"
};
var S = {
	type: "consonant",
	glyph: "श"
};
var Sh$2 = {
	type: "consonant",
	glyph: "ष"
};
var s$2 = {
	type: "consonant",
	glyph: "स"
};
var h$2 = {
	type: "consonant",
	glyph: "ह"
};
var M$2 = {
	type: "mark",
	glyph: "ं"
};
var MM$2 = {
	type: "mark",
	glyph: "ँ"
};
var H$2 = {
	type: "mark",
	glyph: "ः"
};
var ksh = {
	type: "conjunct",
	glyph: "क्ष"
};
var x$1 = {
	type: "conjunct",
	glyph: "क्ष"
};
var gy$1 = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var dny$1 = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var jn = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var tr = {
	type: "conjunct",
	glyph: "त्र"
};
var shr = {
	type: "conjunct",
	glyph: "श्र"
};
var z = {
	type: "consonant",
	glyph: "ज़"
};
var f = {
	type: "consonant",
	glyph: "फ़"
};
var Rr = {
	type: "consonant",
	glyph: "ड़"
};
var Rh = {
	type: "consonant",
	glyph: "ढ़"
};
var namaste = {
	type: "word",
	glyph: "नमस्ते"
};
var bharat = {
	type: "word",
	glyph: "भारत"
};
var bhaarat = {
	type: "word",
	glyph: "भारत"
};
var gyan = {
	type: "word",
	glyph: "ज्ञान"
};
var jnan = {
	type: "word",
	glyph: "ज्ञान"
};
var shakti = {
	type: "word",
	glyph: "शक्ति"
};
var rishi = {
	type: "word",
	glyph: "ऋषि"
};
var kshatriya = {
	type: "word",
	glyph: "क्षत्रिय"
};
var sundar = {
	type: "word",
	glyph: "सुंदर"
};
var dharma = {
	type: "word",
	glyph: "धर्म"
};
var karma = {
	type: "word",
	glyph: "कर्म"
};
var mausam = {
	type: "word",
	glyph: "मौसम"
};
var prithvi = {
	type: "word",
	glyph: "पृथ्वी"
};
var bhasha = {
	type: "word",
	glyph: "भाषा"
};
var ladka = {
	type: "word",
	glyph: "लड़का"
};
var khushi = {
	type: "word",
	glyph: "खुशी"
};
var waqt = {
	type: "word",
	glyph: "वक़्त"
};
var zindagi = {
	type: "word",
	glyph: "ज़िंदगी"
};
var gaav = {
	type: "word",
	glyph: "गाँव"
};
var gaon = {
	type: "word",
	glyph: "गाँव"
};
var manzil = {
	type: "word",
	glyph: "मंज़िल"
};
var safar = {
	type: "word",
	glyph: "सफ़र"
};
var ishq = {
	type: "word",
	glyph: "इश्क़"
};
var khwab = {
	type: "word",
	glyph: "ख़्वाब"
};
var swagat = {
	type: "word",
	glyph: "स्वागत"
};
var phonetic_expanded$1 = {
	a: a$2,
	A: A$1,
	aa: aa$2,
	i: i$2,
	I: I$1,
	ii: ii$2,
	u: u$2,
	U: U$1,
	uu: uu$2,
	ri: ri$2,
	R: R$1,
	e: e$2,
	ai: ai$2,
	o: o$2,
	au: au$2,
	k: k$2,
	kh: kh$2,
	g: g$2,
	gh: gh$2,
	ng: ng$2,
	ch: ch$2,
	chh: chh$2,
	j: j$2,
	jh: jh$2,
	ny: ny$2,
	T: T$2,
	Th: Th$2,
	D: D$2,
	Dh: Dh$2,
	N: N$2,
	t: t$2,
	th: th$2,
	d: d$2,
	dh: dh$2,
	n: n$2,
	p: p$2,
	ph: ph$2,
	b: b$2,
	bh: bh$2,
	m: m$2,
	y: y$2,
	r: r$2,
	l: l$2,
	v: v$2,
	w: w$1,
	sh: sh$2,
	S: S,
	Sh: Sh$2,
	s: s$2,
	h: h$2,
	M: M$2,
	MM: MM$2,
	H: H$2,
	ksh: ksh,
	x: x$1,
	gy: gy$1,
	dny: dny$1,
	jn: jn,
	tr: tr,
	shr: shr,
	z: z,
	f: f,
	Rr: Rr,
	Rh: Rh,
	namaste: namaste,
	bharat: bharat,
	bhaarat: bhaarat,
	gyan: gyan,
	jnan: jnan,
	shakti: shakti,
	rishi: rishi,
	kshatriya: kshatriya,
	sundar: sundar,
	dharma: dharma,
	karma: karma,
	mausam: mausam,
	prithvi: prithvi,
	bhasha: bhasha,
	ladka: ladka,
	khushi: khushi,
	waqt: waqt,
	zindagi: zindagi,
	gaav: gaav,
	gaon: gaon,
	manzil: manzil,
	safar: safar,
	ishq: ishq,
	khwab: khwab,
	swagat: swagat
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

interface WasmTrieBindings {
    walk_longest(input: string, startIndex: number): unknown;
}
interface WasmTrieModule {
    WasmTrie: new (expandedMap: Record<string, unknown>) => WasmTrieBindings;
    default?: () => Promise<unknown> | unknown;
}
interface WasmTrieFactoryOptions {
    moduleLoader?: () => Promise<WasmTrieModule>;
    fallbackToJs?: boolean;
}
interface TrieWalker<TValue> {
    walkLongest(input: string, startIndex?: number): LongestMatchResult<TValue>;
}
declare function createWasmTrie<TValue>(expandedMap: Record<string, TValue>, options?: WasmTrieFactoryOptions): Promise<TrieWalker<TValue>>;

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
type EngineRuntime = "js" | "wasm" | "hybrid";
interface RuntimeAwareTransliterationEngine extends TransliterationEngine {
    getRuntime(): EngineRuntime;
}
declare function getEngineRuntime(engine: TransliterationEngine): EngineRuntime;
declare function createTransliterationEngine(options: TransliterationEngineOptions): TransliterationEngine;

type WasmMode = "auto" | boolean;
interface HybridEngineFactoryOptions {
    wasm?: WasmMode;
    isWasm?: WasmMode;
    preferWasm?: boolean;
    fallbackToJs?: boolean;
    moduleLoader?: () => Promise<unknown>;
    scriptId?: string;
    languageId?: string;
    scriptBaseMap?: TransliterationEngineOptions["expandedMap"];
    languageOverlayMap?: TransliterationEngineOptions["expandedMap"];
    packCache?: Map<string, Uint8Array>;
    packCacheKey?: string;
}
declare function createHybridTransliterationEngine(options: TransliterationEngineOptions, factoryOptions?: HybridEngineFactoryOptions): Promise<TransliterationEngine>;

interface WasmEngineBindings {
    process_char(ch: string): unknown;
    process_text(text: string): unknown;
    backspace(): unknown;
    commit(): unknown;
    reset(): void;
}
interface WasmEngineModule {
    Engine: new (expandedMap: Record<string, unknown>, rules?: Record<string, unknown>) => WasmEngineBindings;
    default?: () => Promise<unknown> | unknown;
}
interface WasmEngineFactoryOptions {
    moduleLoader?: () => Promise<WasmEngineModule>;
    fallbackToJs?: boolean;
}
declare function createWasmTransliterationEngine(options: TransliterationEngineOptions, factoryOptions?: WasmEngineFactoryOptions): Promise<TransliterationEngine>;

interface WasmLanguagePackModule {
    compile_language_pack(expandedMap: Record<string, unknown>, scriptId: string, languageId: string, rules?: Record<string, unknown>): Uint8Array | number[];
    compile_script_base_pack(expandedMap: Record<string, unknown>, scriptId: string): Uint8Array | number[];
    compile_language_overlay_pack(expandedMap: Record<string, unknown>, scriptId: string, languageId: string, rules?: Record<string, unknown>): Uint8Array | number[];
    merge_language_packs(basePackBytes: Uint8Array, overlayPackBytes: Uint8Array): Uint8Array | number[];
    inspect_language_pack(packBytes: Uint8Array): unknown;
    Engine: {
        fromLanguagePack(packBytes: Uint8Array): {
            process_char(ch: string): unknown;
            process_text(text: string): unknown;
            backspace(): unknown;
            commit(): unknown;
            reset(): void;
        };
        fromLanguagePacks(basePackBytes: Uint8Array, overlayPackBytes: Uint8Array): {
            process_char(ch: string): unknown;
            process_text(text: string): unknown;
            backspace(): unknown;
            commit(): unknown;
            reset(): void;
        };
    };
    default?: () => Promise<unknown> | unknown;
}
interface LanguagePackSummary {
    schema_version: number;
    kind: "full" | "script_base" | "language_overlay";
    script_id: string;
    language_id: string;
    entries: number;
    has_rules: boolean;
}
interface WasmLanguagePackFactoryOptions {
    moduleLoader?: () => Promise<WasmLanguagePackModule>;
    fallbackToJs?: boolean;
}
declare function compileWasmLanguagePack(options: TransliterationEngineOptions & {
    scriptId: string;
    languageId: string;
}, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<Uint8Array>;
declare function compileWasmScriptBasePack(options: {
    expandedMap: Record<string, unknown>;
    scriptId: string;
}, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<Uint8Array>;
declare function compileWasmLanguageOverlayPack(options: TransliterationEngineOptions & {
    scriptId: string;
    languageId: string;
}, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<Uint8Array>;
declare function inspectWasmLanguagePack(packBytes: Uint8Array, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<LanguagePackSummary>;
declare function createWasmEngineFromLanguagePack(packBytes: Uint8Array, fallbackOptions?: TransliterationEngineOptions, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<TransliterationEngine>;
declare function createWasmEngineFromLanguagePacks(basePackBytes: Uint8Array, overlayPackBytes: Uint8Array, fallbackOptions?: TransliterationEngineOptions, factoryOptions?: WasmLanguagePackFactoryOptions): Promise<TransliterationEngine>;

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

type LanguageCode = "hi" | "mr" | "ne" | "sa" | "bn" | "as" | "gu" | "pa" | "ta" | "te" | "kn" | "ml" | "or";
type LanguageStatus = "available" | "planned";
interface LanguageRegistryItem {
    code: LanguageCode;
    name: string;
    script: string;
    status: LanguageStatus;
}
declare function listLanguages(): LanguageRegistryItem[];
declare function getLanguage(code: LanguageCode): LanguageRegistryItem;
declare function isLanguageAvailable(code: LanguageCode): boolean;
declare function resolveLanguageEngineConfig(code: LanguageCode): {
    expandedMap: TransliterationEngineOptions["expandedMap"];
    scriptId: string;
    languageId: string;
};

interface EnableTransliterationOptions {
    language: LanguageCode;
    selector?: string;
    elements?: Iterable<InterceptTarget>;
    enabled?: boolean;
    rules?: TransliterationEngineOptions["rules"];
    engineFactoryOptions?: Omit<HybridEngineFactoryOptions, "scriptId" | "languageId" | "scriptBaseMap" | "languageOverlayMap">;
    onEditApplied?: (edit: Edit$1) => void;
    onBypass?: (reason: "disabled" | "modifier" | "composition" | "unsupported-target" | "selection") => void;
}
interface EnabledTransliteration {
    language: LanguageCode;
    attachedCount: number;
    detach(): void;
}
declare function enableTransliteration(options: EnableTransliterationOptions): Promise<EnabledTransliteration>;

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
        readonly schemes: {
            readonly iast: {
                a: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                bha: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                cha: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                dha: {
                    type: string;
                    glyph: string;
                };
                Dha: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                fa: {
                    type: string;
                    glyph: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                gha: {
                    type: string;
                    glyph: string;
                };
                ḥ: {
                    type: string;
                    glyph: string;
                };
                ha: {
                    type: string;
                    glyph: string;
                };
                i: {
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
                ja: {
                    type: string;
                    glyph: string;
                };
                jha: {
                    type: string;
                    glyph: string;
                };
                jña: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                kha: {
                    type: string;
                    glyph: string;
                };
                kṣa: {
                    type: string;
                    glyph: string;
                };
                ḷ: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                ṁ: {
                    type: string;
                    glyph: string;
                };
                ṃ: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                ña: {
                    type: string;
                    glyph: string;
                };
                ṅa: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                pha: {
                    type: string;
                    glyph: string;
                };
                qa: {
                    type: string;
                    glyph: string;
                };
                ṛ: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ṝ: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                ṛa: {
                    type: string;
                    glyph: string;
                };
                ṛha: {
                    type: string;
                    glyph: string;
                };
                ri: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                śa: {
                    type: string;
                    glyph: string;
                };
                ṣa: {
                    type: string;
                    glyph: string;
                };
                śra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
                    type: string;
                    glyph: string;
                };
                tha: {
                    type: string;
                    glyph: string;
                };
                Tha: {
                    type: string;
                    glyph: string;
                };
                u: {
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
                va: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
                za: {
                    type: string;
                    glyph: string;
                };
            };
            readonly iso15919: {
                a: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                bha: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                cha: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                ḍa: {
                    type: string;
                    glyph: string;
                };
                dha: {
                    type: string;
                    glyph: string;
                };
                Dha: {
                    type: string;
                    glyph: string;
                };
                ḍha: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ē: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                fa: {
                    type: string;
                    glyph: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                ġa: {
                    type: string;
                    glyph: string;
                };
                gha: {
                    type: string;
                    glyph: string;
                };
                ḥ: {
                    type: string;
                    glyph: string;
                };
                ha: {
                    type: string;
                    glyph: string;
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
                ja: {
                    type: string;
                    glyph: string;
                };
                jha: {
                    type: string;
                    glyph: string;
                };
                jña: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                kha: {
                    type: string;
                    glyph: string;
                };
                k͟ha: {
                    type: string;
                    glyph: string;
                };
                kṣa: {
                    type: string;
                    glyph: string;
                };
                l̥: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                ṁ: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                ña: {
                    type: string;
                    glyph: string;
                };
                ṅa: {
                    type: string;
                    glyph: string;
                };
                ṇa: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ō: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                pha: {
                    type: string;
                    glyph: string;
                };
                qa: {
                    type: string;
                    glyph: string;
                };
                r̥: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                r̥̄: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                ṛa: {
                    type: string;
                    glyph: string;
                };
                ṛha: {
                    type: string;
                    glyph: string;
                };
                ri: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                śa: {
                    type: string;
                    glyph: string;
                };
                ṣa: {
                    type: string;
                    glyph: string;
                };
                śra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
                    type: string;
                    glyph: string;
                };
                ṭa: {
                    type: string;
                    glyph: string;
                };
                tha: {
                    type: string;
                    glyph: string;
                };
                Tha: {
                    type: string;
                    glyph: string;
                };
                ṭha: {
                    type: string;
                    glyph: string;
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
                va: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
                za: {
                    type: string;
                    glyph: string;
                };
            };
            readonly harvardKyoto: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                bha: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                cha: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                dha: {
                    type: string;
                    glyph: string;
                };
                Dha: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                Ga: {
                    type: string;
                    glyph: string;
                };
                gha: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
                ha: {
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
                ja: {
                    type: string;
                    glyph: string;
                };
                Ja: {
                    type: string;
                    glyph: string;
                };
                jha: {
                    type: string;
                    glyph: string;
                };
                jJa: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                kha: {
                    type: string;
                    glyph: string;
                };
                kSa: {
                    type: string;
                    glyph: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                lR: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                pha: {
                    type: string;
                    glyph: string;
                };
                R: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                RR: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                Sa: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
                    type: string;
                    glyph: string;
                };
                tha: {
                    type: string;
                    glyph: string;
                };
                Tha: {
                    type: string;
                    glyph: string;
                };
                tra: {
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
                va: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
                za: {
                    type: string;
                    glyph: string;
                };
                zra: {
                    type: string;
                    glyph: string;
                };
            };
            readonly itrans: {
                ".da": {
                    type: string;
                    glyph: string;
                };
                ".Dha": {
                    type: string;
                    glyph: string;
                };
                ".h": {
                    type: string;
                    glyph: string;
                };
                ".m": {
                    type: string;
                    glyph: string;
                };
                ".n": {
                    type: string;
                    glyph: string;
                };
                "~na": {
                    type: string;
                    glyph: string;
                };
                "~Na": {
                    type: string;
                    glyph: string;
                };
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
                aa: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                bha: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                Cha: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                dha: {
                    type: string;
                    glyph: string;
                };
                Dha: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                fa: {
                    type: string;
                    glyph: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                Ga: {
                    type: string;
                    glyph: string;
                };
                gha: {
                    type: string;
                    glyph: string;
                };
                GYa: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
                ha: {
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
                ii: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                "j~na": {
                    type: string;
                    glyph: string;
                };
                ja: {
                    type: string;
                    glyph: string;
                };
                jha: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                Ka: {
                    type: string;
                    glyph: string;
                };
                kha: {
                    type: string;
                    glyph: string;
                };
                kSha: {
                    type: string;
                    glyph: string;
                };
                "L^i": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                LLi: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                pha: {
                    type: string;
                    glyph: string;
                };
                qa: {
                    type: string;
                    glyph: string;
                };
                "R^i": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                "R^I": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                Ra: {
                    type: string;
                    glyph: string;
                };
                Rha: {
                    type: string;
                    glyph: string;
                };
                RRi: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                RRI: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                sha: {
                    type: string;
                    glyph: string;
                };
                Sha: {
                    type: string;
                    glyph: string;
                };
                shra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
                    type: string;
                    glyph: string;
                };
                tha: {
                    type: string;
                    glyph: string;
                };
                Tha: {
                    type: string;
                    glyph: string;
                };
                tra: {
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
                uu: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                va: {
                    type: string;
                    glyph: string;
                };
                wa: {
                    type: string;
                    glyph: string;
                };
                xa: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
                za: {
                    type: string;
                    glyph: string;
                };
            };
            readonly velthuis: {
                ".da": {
                    type: string;
                    glyph: string;
                };
                ".dha": {
                    type: string;
                    glyph: string;
                };
                ".h": {
                    type: string;
                    glyph: string;
                };
                ".l": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ".m": {
                    type: string;
                    glyph: string;
                };
                ".na": {
                    type: string;
                    glyph: string;
                };
                ".r": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ".rr": {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ".sa": {
                    type: string;
                    glyph: string;
                };
                ".ta": {
                    type: string;
                    glyph: string;
                };
                ".tha": {
                    type: string;
                    glyph: string;
                };
                "~na": {
                    type: string;
                    glyph: string;
                };
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
                ba: {
                    type: string;
                    glyph: string;
                };
                bha: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                cha: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                dha: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                gha: {
                    type: string;
                    glyph: string;
                };
                ha: {
                    type: string;
                    glyph: string;
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
                "j~na": {
                    type: string;
                    glyph: string;
                };
                ja: {
                    type: string;
                    glyph: string;
                };
                jha: {
                    type: string;
                    glyph: string;
                };
                "k.sa": {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                kha: {
                    type: string;
                    glyph: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                pha: {
                    type: string;
                    glyph: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                sra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                tha: {
                    type: string;
                    glyph: string;
                };
                tra: {
                    type: string;
                    glyph: string;
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
                va: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
            };
            readonly slp1: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                Ba: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                Ca: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                E: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                f: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                F: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                Ga: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
                ha: {
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
                ja: {
                    type: string;
                    glyph: string;
                };
                Ja: {
                    type: string;
                    glyph: string;
                };
                jYa: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                Ka: {
                    type: string;
                    glyph: string;
                };
                kza: {
                    type: string;
                    glyph: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                O: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                Pa: {
                    type: string;
                    glyph: string;
                };
                qa: {
                    type: string;
                    glyph: string;
                };
                Qa: {
                    type: string;
                    glyph: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                Ra: {
                    type: string;
                    glyph: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                Sa: {
                    type: string;
                    glyph: string;
                };
                Sra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
                    type: string;
                    glyph: string;
                };
                tra: {
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
                va: {
                    type: string;
                    glyph: string;
                };
                wa: {
                    type: string;
                    glyph: string;
                };
                Wa: {
                    type: string;
                    glyph: string;
                };
                x: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
                Ya: {
                    type: string;
                    glyph: string;
                };
                za: {
                    type: string;
                    glyph: string;
                };
            };
            readonly wx: {
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
                ba: {
                    type: string;
                    glyph: string;
                };
                Ba: {
                    type: string;
                    glyph: string;
                };
                ca: {
                    type: string;
                    glyph: string;
                };
                Ca: {
                    type: string;
                    glyph: string;
                };
                da: {
                    type: string;
                    glyph: string;
                };
                Da: {
                    type: string;
                    glyph: string;
                };
                DZa: {
                    type: string;
                    glyph: string;
                };
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                E: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                fa: {
                    type: string;
                    glyph: string;
                };
                Fa: {
                    type: string;
                    glyph: string;
                };
                ga: {
                    type: string;
                    glyph: string;
                };
                Ga: {
                    type: string;
                    glyph: string;
                };
                gZa: {
                    type: string;
                    glyph: string;
                };
                H: {
                    type: string;
                    glyph: string;
                };
                ha: {
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
                ja: {
                    type: string;
                    glyph: string;
                };
                Ja: {
                    type: string;
                    glyph: string;
                };
                jFa: {
                    type: string;
                    glyph: string;
                };
                jZa: {
                    type: string;
                    glyph: string;
                };
                ka: {
                    type: string;
                    glyph: string;
                };
                Ka: {
                    type: string;
                    glyph: string;
                };
                kRa: {
                    type: string;
                    glyph: string;
                };
                kZa: {
                    type: string;
                    glyph: string;
                };
                KZa: {
                    type: string;
                    glyph: string;
                };
                L: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                la: {
                    type: string;
                    glyph: string;
                };
                M: {
                    type: string;
                    glyph: string;
                };
                ma: {
                    type: string;
                    glyph: string;
                };
                na: {
                    type: string;
                    glyph: string;
                };
                Na: {
                    type: string;
                    glyph: string;
                };
                o: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                O: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                pa: {
                    type: string;
                    glyph: string;
                };
                Pa: {
                    type: string;
                    glyph: string;
                };
                PZa: {
                    type: string;
                    glyph: string;
                };
                q: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                Q: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                qZa: {
                    type: string;
                    glyph: string;
                };
                ra: {
                    type: string;
                    glyph: string;
                };
                Ra: {
                    type: string;
                    glyph: string;
                };
                sa: {
                    type: string;
                    glyph: string;
                };
                Sa: {
                    type: string;
                    glyph: string;
                };
                Sra: {
                    type: string;
                    glyph: string;
                };
                ta: {
                    type: string;
                    glyph: string;
                };
                Ta: {
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
                va: {
                    type: string;
                    glyph: string;
                };
                wa: {
                    type: string;
                    glyph: string;
                };
                Wa: {
                    type: string;
                    glyph: string;
                };
                wra: {
                    type: string;
                    glyph: string;
                };
                xa: {
                    type: string;
                    glyph: string;
                };
                Xa: {
                    type: string;
                    glyph: string;
                };
                ya: {
                    type: string;
                    glyph: string;
                };
            };
            readonly hunterian: {
                a: {
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
                e: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                f: {
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
                gy: {
                    type: string;
                    glyph: string;
                };
                h: {
                    type: string;
                    glyph: string;
                };
                i: {
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
                ksh: {
                    type: string;
                    glyph: string;
                };
                l: {
                    type: string;
                    glyph: string;
                };
                m: {
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
                q: {
                    type: string;
                    glyph: string;
                };
                r: {
                    type: string;
                    glyph: string;
                };
                rh: {
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
                shh: {
                    type: string;
                    glyph: string;
                };
                shr: {
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
                tr: {
                    type: string;
                    glyph: string;
                };
                u: {
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
                y: {
                    type: string;
                    glyph: string;
                };
                z: {
                    type: string;
                    glyph: string;
                };
            };
        };
    };
    readonly hindi: {
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
                I: {
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
                U: {
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
                R: {
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
                w: {
                    type: string;
                    glyph: string;
                };
                sh: {
                    type: string;
                    glyph: string;
                };
                S: {
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
                ksh: {
                    type: string;
                    glyph: string;
                };
                x: {
                    type: string;
                    glyph: string;
                };
                gy: {
                    type: string;
                    glyph: string;
                };
                dny: {
                    type: string;
                    glyph: string;
                };
                jn: {
                    type: string;
                    glyph: string;
                };
                tr: {
                    type: string;
                    glyph: string;
                };
                shr: {
                    type: string;
                    glyph: string;
                };
                z: {
                    type: string;
                    glyph: string;
                };
                f: {
                    type: string;
                    glyph: string;
                };
                Rr: {
                    type: string;
                    glyph: string;
                };
                Rh: {
                    type: string;
                    glyph: string;
                };
                namaste: {
                    type: string;
                    glyph: string;
                };
                bharat: {
                    type: string;
                    glyph: string;
                };
                bhaarat: {
                    type: string;
                    glyph: string;
                };
                gyan: {
                    type: string;
                    glyph: string;
                };
                jnan: {
                    type: string;
                    glyph: string;
                };
                shakti: {
                    type: string;
                    glyph: string;
                };
                rishi: {
                    type: string;
                    glyph: string;
                };
                kshatriya: {
                    type: string;
                    glyph: string;
                };
                sundar: {
                    type: string;
                    glyph: string;
                };
                dharma: {
                    type: string;
                    glyph: string;
                };
                karma: {
                    type: string;
                    glyph: string;
                };
                mausam: {
                    type: string;
                    glyph: string;
                };
                prithvi: {
                    type: string;
                    glyph: string;
                };
                bhasha: {
                    type: string;
                    glyph: string;
                };
                ladka: {
                    type: string;
                    glyph: string;
                };
                khushi: {
                    type: string;
                    glyph: string;
                };
                waqt: {
                    type: string;
                    glyph: string;
                };
                zindagi: {
                    type: string;
                    glyph: string;
                };
                gaav: {
                    type: string;
                    glyph: string;
                };
                gaon: {
                    type: string;
                    glyph: string;
                };
                manzil: {
                    type: string;
                    glyph: string;
                };
                safar: {
                    type: string;
                    glyph: string;
                };
                ishq: {
                    type: string;
                    glyph: string;
                };
                khwab: {
                    type: string;
                    glyph: string;
                };
                swagat: {
                    type: string;
                    glyph: string;
                };
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

export { type ContentEditableEditResult, DOMIntegrator, type Edit, type EnableTransliterationOptions, type EnabledTransliteration, type EngineRuleOptions, type EngineRuntime, type HybridEngineFactoryOptions, type InputInterceptor, type InputInterceptorOptions, type InputStack, type InterceptTarget, type LanguageCode, type LanguagePackSummary, type LanguageRegistryItem, type LongestMatchResult, type NasalizationMode, type RuntimeAwareTransliterationEngine, type TextInputLike, type TransliterationEngine, type TransliterationEngineOptions, type TransliterationEntry, type TrieNode, type TrieWalker, type WasmEngineFactoryOptions, type WasmLanguagePackFactoryOptions, type WasmTrieFactoryOptions, buildTrie, compileWasmLanguageOverlayPack, compileWasmLanguagePack, compileWasmScriptBasePack, createHybridTransliterationEngine, createInputInterceptor, createInputStack, createTransliterationEngine, createWasmEngineFromLanguagePack, createWasmEngineFromLanguagePacks, createWasmTransliterationEngine, createWasmTrie, deleteAndInsert, deleteAndInsertContentEditable, base as devanagariBase, harvard_kyoto as devanagariHarvardKyoto, hunterian as devanagariHunterian, iast as devanagariIAST, iso15919 as devanagariISO15919, itrans as devanagariITRANS, slp1 as devanagariSLP1, velthuis as devanagariVelthuis, wx as devanagariWX, enableTransliteration, getEngineRuntime, getLanguage, phonetic_base$1 as hindiPhoneticBase, phonetic_expanded$1 as hindiPhoneticExpanded, inspectWasmLanguagePack, isLanguageAvailable, listLanguages, maps, phonetic_base as marathiPhoneticBase, phonetic_expanded as marathiPhoneticExpanded, resolveLanguageEngineConfig, walkLongest };
