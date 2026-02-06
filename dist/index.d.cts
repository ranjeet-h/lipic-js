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

var a$x = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var ai$v = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$v = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var b$q = {
	type: "consonant",
	glyph: "ब"
};
var bh$q = {
	type: "consonant",
	glyph: "भ"
};
var ch$q = {
	type: "consonant",
	glyph: "च"
};
var chh$q = {
	type: "consonant",
	glyph: "छ"
};
var d$q = {
	type: "consonant",
	glyph: "द"
};
var D$q = {
	type: "consonant",
	glyph: "ड"
};
var dh$q = {
	type: "consonant",
	glyph: "ध"
};
var Dh$q = {
	type: "consonant",
	glyph: "ढ"
};
var e$x = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var f$b = {
	type: "consonant",
	glyph: "फ़"
};
var g$q = {
	type: "consonant",
	glyph: "ग"
};
var gh$q = {
	type: "consonant",
	glyph: "घ"
};
var gy$d = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var h$q = {
	type: "consonant",
	glyph: "ह"
};
var i$x = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var j$q = {
	type: "consonant",
	glyph: "ज"
};
var jh$q = {
	type: "consonant",
	glyph: "झ"
};
var k$q = {
	type: "consonant",
	glyph: "क"
};
var kh$q = {
	type: "consonant",
	glyph: "ख"
};
var ksh$c = {
	type: "conjunct",
	glyph: "क्ष"
};
var l$q = {
	type: "consonant",
	glyph: "ल"
};
var m$q = {
	type: "consonant",
	glyph: "म"
};
var n$q = {
	type: "consonant",
	glyph: "न"
};
var N$q = {
	type: "consonant",
	glyph: "ण"
};
var o$x = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var p$q = {
	type: "consonant",
	glyph: "प"
};
var ph$q = {
	type: "consonant",
	glyph: "फ"
};
var q$1 = {
	type: "consonant",
	glyph: "क़"
};
var r$q = {
	type: "consonant",
	glyph: "र"
};
var rh = {
	type: "consonant",
	glyph: "ढ़"
};
var ri$o = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var s$q = {
	type: "consonant",
	glyph: "स"
};
var sh$q = {
	type: "consonant",
	glyph: "श"
};
var shh = {
	type: "consonant",
	glyph: "ष"
};
var shr$c = {
	type: "conjunct",
	glyph: "श्र"
};
var t$q = {
	type: "consonant",
	glyph: "त"
};
var T$q = {
	type: "consonant",
	glyph: "ट"
};
var th$q = {
	type: "consonant",
	glyph: "थ"
};
var Th$q = {
	type: "consonant",
	glyph: "ठ"
};
var tr$c = {
	type: "conjunct",
	glyph: "त्र"
};
var u$x = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var v$q = {
	type: "consonant",
	glyph: "व"
};
var w$d = {
	type: "consonant",
	glyph: "व"
};
var y$q = {
	type: "consonant",
	glyph: "य"
};
var z$a = {
	type: "consonant",
	glyph: "ज़"
};
var hunterian = {
	a: a$x,
	ai: ai$v,
	au: au$v,
	b: b$q,
	bh: bh$q,
	ch: ch$q,
	chh: chh$q,
	d: d$q,
	D: D$q,
	dh: dh$q,
	Dh: Dh$q,
	e: e$x,
	f: f$b,
	g: g$q,
	gh: gh$q,
	gy: gy$d,
	h: h$q,
	i: i$x,
	j: j$q,
	jh: jh$q,
	k: k$q,
	kh: kh$q,
	ksh: ksh$c,
	l: l$q,
	m: m$q,
	n: n$q,
	N: N$q,
	o: o$x,
	p: p$q,
	ph: ph$q,
	q: q$1,
	r: r$q,
	rh: rh,
	ri: ri$o,
	s: s$q,
	sh: sh$q,
	shh: shh,
	shr: shr$c,
	t: t$q,
	T: T$q,
	th: th$q,
	Th: Th$q,
	tr: tr$c,
	u: u$x,
	v: v$q,
	w: w$d,
	y: y$q,
	z: z$a
};

var a$w = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$g = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$u = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$u = {
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
var e$w = {
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
var H$t = {
	type: "mark",
	glyph: "ः"
};
var ha$6 = {
	type: "consonant",
	glyph: "ह"
};
var i$w = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$g = {
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
var M$t = {
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
var o$w = {
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
var R$b = {
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
var u$w = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$g = {
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
	a: a$w,
	A: A$g,
	ai: ai$u,
	au: au$u,
	ba: ba$6,
	bha: bha$4,
	ca: ca$6,
	cha: cha$3,
	da: da$6,
	Da: Da$5,
	dha: dha$4,
	Dha: Dha$3,
	e: e$w,
	ga: ga$6,
	Ga: Ga$3,
	gha: gha$4,
	H: H$t,
	ha: ha$6,
	i: i$w,
	I: I$g,
	ja: ja$6,
	Ja: Ja$2,
	jha: jha$4,
	jJa: jJa,
	ka: ka$6,
	kha: kha$4,
	kSa: kSa,
	la: la$6,
	lR: lR,
	M: M$t,
	ma: ma$6,
	na: na$6,
	Na: Na$5,
	o: o$w,
	pa: pa$6,
	pha: pha$4,
	R: R$b,
	ra: ra$6,
	RR: RR,
	sa: sa$6,
	Sa: Sa$2,
	ta: ta$6,
	Ta: Ta$5,
	tha: tha$4,
	Tha: Tha$3,
	tra: tra$3,
	u: u$w,
	U: U$g,
	va: va$6,
	ya: ya$6,
	za: za$4,
	zra: zra
};

var a$v = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$t = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$t = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$t = {
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
var e$v = {
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
var i$v = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$t = {
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
var o$v = {
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
var ri$n = {
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
var u$v = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$t = {
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
	a: a$v,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa$t,
	ai: ai$t,
	au: au$t,
	ba: ba$5,
	bha: bha$3,
	ca: ca$5,
	cha: cha$2,
	da: da$5,
	Da: Da$4,
	dha: dha$3,
	Dha: Dha$2,
	e: e$v,
	fa: fa$3,
	ga: ga$5,
	gha: gha$3,
	"ḥ": {
	type: "mark",
	glyph: "ः"
},
	ha: ha$5,
	i: i$v,
	"ī": {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
},
	ii: ii$t,
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
	o: o$v,
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
	ri: ri$n,
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
	u: u$v,
	"ū": {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
},
	uu: uu$t,
	va: va$5,
	ya: ya$5,
	za: za$3
};

var a$u = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$s = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$s = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$s = {
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
var e$u = {
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
var i$u = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$s = {
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
var o$u = {
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
var ri$m = {
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
var u$u = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$s = {
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
	a: a$u,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa$s,
	ai: ai$s,
	au: au$s,
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
	e: e$u,
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
	i: i$u,
	ii: ii$s,
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
	o: o$u,
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
	ri: ri$m,
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
	u: u$u,
	uu: uu$s,
	va: va$4,
	ya: ya$4,
	za: za$2
};

var a$t = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$f = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa$r = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$r = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$r = {
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
var e$t = {
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
var H$s = {
	type: "mark",
	glyph: "ः"
};
var ha$3 = {
	type: "consonant",
	glyph: "ह"
};
var i$t = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$f = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii$r = {
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
var M$s = {
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
var o$t = {
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
var u$t = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$f = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu$r = {
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
	a: a$t,
	A: A$f,
	aa: aa$r,
	ai: ai$r,
	au: au$r,
	ba: ba$3,
	bha: bha$1,
	ca: ca$3,
	Cha: Cha,
	da: da$3,
	Da: Da$2,
	dha: dha$1,
	Dha: Dha,
	e: e$t,
	fa: fa$1,
	ga: ga$3,
	Ga: Ga$2,
	gha: gha$1,
	GYa: GYa,
	H: H$s,
	ha: ha$3,
	i: i$t,
	I: I$f,
	ii: ii$r,
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
	M: M$s,
	ma: ma$3,
	na: na$3,
	Na: Na$2,
	o: o$t,
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
	u: u$t,
	U: U$f,
	uu: uu$r,
	va: va$3,
	wa: wa$2,
	xa: xa$1,
	ya: ya$3,
	za: za$1
};

var a$s = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$e = {
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
var e$s = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var E$4 = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var f$a = {
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
var H$r = {
	type: "mark",
	glyph: "ः"
};
var ha$2 = {
	type: "consonant",
	glyph: "ह"
};
var i$s = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$e = {
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
var M$r = {
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
var o$s = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var O$4 = {
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
var u$s = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$e = {
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
var x$d = {
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
	a: a$s,
	A: A$e,
	ba: ba$2,
	Ba: Ba$1,
	ca: ca$2,
	Ca: Ca$1,
	da: da$2,
	Da: Da$1,
	e: e$s,
	E: E$4,
	f: f$a,
	F: F,
	ga: ga$2,
	Ga: Ga$1,
	H: H$r,
	ha: ha$2,
	i: i$s,
	I: I$e,
	ja: ja$2,
	Ja: Ja$1,
	jYa: jYa,
	ka: ka$2,
	Ka: Ka$1,
	kza: kza,
	la: la$2,
	M: M$r,
	ma: ma$2,
	na: na$2,
	Na: Na$1,
	o: o$s,
	O: O$4,
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
	u: u$s,
	U: U$e,
	va: va$2,
	wa: wa$1,
	Wa: Wa$1,
	x: x$d,
	ya: ya$2,
	Ya: Ya,
	za: za
};

var a$r = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$q = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ai$q = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$q = {
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
var e$r = {
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
var i$r = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$q = {
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
var o$r = {
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
var u$r = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$q = {
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
	a: a$r,
	aa: aa$q,
	ai: ai$q,
	au: au$q,
	ba: ba$1,
	bha: bha,
	ca: ca$1,
	cha: cha,
	da: da$1,
	dha: dha,
	e: e$r,
	ga: ga$1,
	gha: gha,
	ha: ha$1,
	i: i$r,
	ii: ii$q,
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
	o: o$r,
	pa: pa$1,
	pha: pha,
	ra: ra$1,
	sa: sa$1,
	sra: sra,
	ta: ta$1,
	tha: tha,
	tra: tra,
	u: u$r,
	uu: uu$q,
	va: va$1,
	ya: ya$1
};

var a$q = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$d = {
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
var e$q = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var E$3 = {
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
var H$q = {
	type: "mark",
	glyph: "ः"
};
var ha = {
	type: "consonant",
	glyph: "ह"
};
var i$q = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$d = {
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
var L$4 = {
	type: "vowel",
	glyph: "ऌ",
	matra: "ॢ"
};
var la = {
	type: "consonant",
	glyph: "ल"
};
var M$q = {
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
var o$q = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var O$3 = {
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
var u$q = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$d = {
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
	a: a$q,
	A: A$d,
	ba: ba,
	Ba: Ba,
	ca: ca,
	Ca: Ca,
	da: da,
	Da: Da,
	DZa: DZa,
	e: e$q,
	E: E$3,
	fa: fa,
	Fa: Fa,
	ga: ga,
	Ga: Ga,
	gZa: gZa,
	H: H$q,
	ha: ha,
	i: i$q,
	I: I$d,
	ja: ja,
	Ja: Ja,
	jFa: jFa,
	jZa: jZa,
	ka: ka,
	Ka: Ka,
	kRa: kRa,
	kZa: kZa,
	KZa: KZa,
	L: L$4,
	la: la,
	M: M$q,
	ma: ma,
	na: na,
	Na: Na,
	o: o$q,
	O: O$3,
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
	u: u$q,
	U: U$d,
	va: va,
	wa: wa,
	Wa: Wa,
	wra: wra,
	xa: xa,
	Xa: Xa,
	ya: ya
};

var a$p = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$p = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$p = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$p = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$p = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$p = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$l = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$p = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$p = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$p = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$p = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var k$p = {
	type: "consonant",
	glyph: "क"
};
var kh$p = {
	type: "consonant",
	glyph: "ख"
};
var g$p = {
	type: "consonant",
	glyph: "ग"
};
var gh$p = {
	type: "consonant",
	glyph: "घ"
};
var ng$p = {
	type: "consonant",
	glyph: "ङ"
};
var ch$p = {
	type: "consonant",
	glyph: "च"
};
var chh$p = {
	type: "consonant",
	glyph: "छ"
};
var j$p = {
	type: "consonant",
	glyph: "ज"
};
var jh$p = {
	type: "consonant",
	glyph: "झ"
};
var ny$p = {
	type: "consonant",
	glyph: "ञ"
};
var T$p = {
	type: "consonant",
	glyph: "ट"
};
var Th$p = {
	type: "consonant",
	glyph: "ठ"
};
var D$p = {
	type: "consonant",
	glyph: "ड"
};
var Dh$p = {
	type: "consonant",
	glyph: "ढ"
};
var N$p = {
	type: "consonant",
	glyph: "ण"
};
var t$p = {
	type: "consonant",
	glyph: "त"
};
var th$p = {
	type: "consonant",
	glyph: "थ"
};
var d$p = {
	type: "consonant",
	glyph: "द"
};
var dh$p = {
	type: "consonant",
	glyph: "ध"
};
var n$p = {
	type: "consonant",
	glyph: "न"
};
var p$p = {
	type: "consonant",
	glyph: "प"
};
var ph$p = {
	type: "consonant",
	glyph: "फ"
};
var b$p = {
	type: "consonant",
	glyph: "ब"
};
var bh$p = {
	type: "consonant",
	glyph: "भ"
};
var m$p = {
	type: "consonant",
	glyph: "म"
};
var y$p = {
	type: "consonant",
	glyph: "य"
};
var r$p = {
	type: "consonant",
	glyph: "र"
};
var l$p = {
	type: "consonant",
	glyph: "ल"
};
var v$p = {
	type: "consonant",
	glyph: "व"
};
var sh$p = {
	type: "consonant",
	glyph: "श"
};
var Sh$p = {
	type: "consonant",
	glyph: "ष"
};
var s$p = {
	type: "consonant",
	glyph: "स"
};
var h$p = {
	type: "consonant",
	glyph: "ह"
};
var M$p = {
	type: "mark",
	glyph: "ं"
};
var MM$n = {
	type: "mark",
	glyph: "ँ"
};
var H$p = {
	type: "mark",
	glyph: "ः"
};
var phonetic_base$c = {
	a: a$p,
	aa: aa$p,
	i: i$p,
	ii: ii$p,
	u: u$p,
	uu: uu$p,
	ri: ri$l,
	e: e$p,
	ai: ai$p,
	o: o$p,
	au: au$p,
	k: k$p,
	kh: kh$p,
	g: g$p,
	gh: gh$p,
	ng: ng$p,
	ch: ch$p,
	chh: chh$p,
	j: j$p,
	jh: jh$p,
	ny: ny$p,
	T: T$p,
	Th: Th$p,
	D: D$p,
	Dh: Dh$p,
	N: N$p,
	t: t$p,
	th: th$p,
	d: d$p,
	dh: dh$p,
	n: n$p,
	p: p$p,
	ph: ph$p,
	b: b$p,
	bh: bh$p,
	m: m$p,
	y: y$p,
	r: r$p,
	l: l$p,
	v: v$p,
	sh: sh$p,
	Sh: Sh$p,
	s: s$p,
	h: h$p,
	M: M$p,
	MM: MM$n,
	H: H$p
};

var a$o = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$c = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa$o = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$o = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$c = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii$o = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$o = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$c = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu$o = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$k = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var R$a = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$o = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$o = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$o = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$o = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var k$o = {
	type: "consonant",
	glyph: "क"
};
var kh$o = {
	type: "consonant",
	glyph: "ख"
};
var g$o = {
	type: "consonant",
	glyph: "ग"
};
var gh$o = {
	type: "consonant",
	glyph: "घ"
};
var ng$o = {
	type: "consonant",
	glyph: "ङ"
};
var ch$o = {
	type: "consonant",
	glyph: "च"
};
var chh$o = {
	type: "consonant",
	glyph: "छ"
};
var j$o = {
	type: "consonant",
	glyph: "ज"
};
var jh$o = {
	type: "consonant",
	glyph: "झ"
};
var ny$o = {
	type: "consonant",
	glyph: "ञ"
};
var T$o = {
	type: "consonant",
	glyph: "ट"
};
var Th$o = {
	type: "consonant",
	glyph: "ठ"
};
var D$o = {
	type: "consonant",
	glyph: "ड"
};
var Dh$o = {
	type: "consonant",
	glyph: "ढ"
};
var N$o = {
	type: "consonant",
	glyph: "ण"
};
var t$o = {
	type: "consonant",
	glyph: "त"
};
var th$o = {
	type: "consonant",
	glyph: "थ"
};
var d$o = {
	type: "consonant",
	glyph: "द"
};
var dh$o = {
	type: "consonant",
	glyph: "ध"
};
var n$o = {
	type: "consonant",
	glyph: "न"
};
var p$o = {
	type: "consonant",
	glyph: "प"
};
var ph$o = {
	type: "consonant",
	glyph: "फ"
};
var b$o = {
	type: "consonant",
	glyph: "ब"
};
var bh$o = {
	type: "consonant",
	glyph: "भ"
};
var m$o = {
	type: "consonant",
	glyph: "म"
};
var y$o = {
	type: "consonant",
	glyph: "य"
};
var r$o = {
	type: "consonant",
	glyph: "र"
};
var l$o = {
	type: "consonant",
	glyph: "ल"
};
var v$o = {
	type: "consonant",
	glyph: "व"
};
var w$c = {
	type: "consonant",
	glyph: "व"
};
var sh$o = {
	type: "consonant",
	glyph: "श"
};
var S$b = {
	type: "consonant",
	glyph: "श"
};
var Sh$o = {
	type: "consonant",
	glyph: "ष"
};
var s$o = {
	type: "consonant",
	glyph: "स"
};
var h$o = {
	type: "consonant",
	glyph: "ह"
};
var M$o = {
	type: "mark",
	glyph: "ं"
};
var MM$m = {
	type: "mark",
	glyph: "ँ"
};
var H$o = {
	type: "mark",
	glyph: "ः"
};
var ksh$b = {
	type: "conjunct",
	glyph: "क्ष"
};
var x$c = {
	type: "conjunct",
	glyph: "क्ष"
};
var gy$c = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var dny$c = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var jn$b = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var tr$b = {
	type: "conjunct",
	glyph: "त्र"
};
var shr$b = {
	type: "conjunct",
	glyph: "श्र"
};
var z$9 = {
	type: "consonant",
	glyph: "ज़"
};
var f$9 = {
	type: "consonant",
	glyph: "फ़"
};
var Rr$8 = {
	type: "consonant",
	glyph: "ड़"
};
var Rh$8 = {
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
var phonetic_expanded$c = {
	a: a$o,
	A: A$c,
	aa: aa$o,
	i: i$o,
	I: I$c,
	ii: ii$o,
	u: u$o,
	U: U$c,
	uu: uu$o,
	ri: ri$k,
	R: R$a,
	e: e$o,
	ai: ai$o,
	o: o$o,
	au: au$o,
	k: k$o,
	kh: kh$o,
	g: g$o,
	gh: gh$o,
	ng: ng$o,
	ch: ch$o,
	chh: chh$o,
	j: j$o,
	jh: jh$o,
	ny: ny$o,
	T: T$o,
	Th: Th$o,
	D: D$o,
	Dh: Dh$o,
	N: N$o,
	t: t$o,
	th: th$o,
	d: d$o,
	dh: dh$o,
	n: n$o,
	p: p$o,
	ph: ph$o,
	b: b$o,
	bh: bh$o,
	m: m$o,
	y: y$o,
	r: r$o,
	l: l$o,
	v: v$o,
	w: w$c,
	sh: sh$o,
	S: S$b,
	Sh: Sh$o,
	s: s$o,
	h: h$o,
	M: M$o,
	MM: MM$m,
	H: H$o,
	ksh: ksh$b,
	x: x$c,
	gy: gy$c,
	dny: dny$c,
	jn: jn$b,
	tr: tr$b,
	shr: shr$b,
	z: z$9,
	f: f$9,
	Rr: Rr$8,
	Rh: Rh$8,
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

var a$n = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var aa$n = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var i$n = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var ii$n = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var u$n = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var uu$n = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var ri$j = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e$n = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai$n = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o$n = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au$n = {
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
var k$n = {
	type: "consonant",
	glyph: "क"
};
var kh$n = {
	type: "consonant",
	glyph: "ख"
};
var g$n = {
	type: "consonant",
	glyph: "ग"
};
var gh$n = {
	type: "consonant",
	glyph: "घ"
};
var ng$n = {
	type: "consonant",
	glyph: "ङ"
};
var ch$n = {
	type: "consonant",
	glyph: "च"
};
var chh$n = {
	type: "consonant",
	glyph: "छ"
};
var j$n = {
	type: "consonant",
	glyph: "ज"
};
var jh$n = {
	type: "consonant",
	glyph: "झ"
};
var ny$n = {
	type: "consonant",
	glyph: "ञ"
};
var T$n = {
	type: "consonant",
	glyph: "ट"
};
var Th$n = {
	type: "consonant",
	glyph: "ठ"
};
var D$n = {
	type: "consonant",
	glyph: "ड"
};
var Dh$n = {
	type: "consonant",
	glyph: "ढ"
};
var N$n = {
	type: "consonant",
	glyph: "ण"
};
var t$n = {
	type: "consonant",
	glyph: "त"
};
var th$n = {
	type: "consonant",
	glyph: "थ"
};
var d$n = {
	type: "consonant",
	glyph: "द"
};
var dh$n = {
	type: "consonant",
	glyph: "ध"
};
var n$n = {
	type: "consonant",
	glyph: "न"
};
var p$n = {
	type: "consonant",
	glyph: "प"
};
var ph$n = {
	type: "consonant",
	glyph: "फ"
};
var b$n = {
	type: "consonant",
	glyph: "ब"
};
var bh$n = {
	type: "consonant",
	glyph: "भ"
};
var m$n = {
	type: "consonant",
	glyph: "म"
};
var y$n = {
	type: "consonant",
	glyph: "य"
};
var r$n = {
	type: "consonant",
	glyph: "र"
};
var l$n = {
	type: "consonant",
	glyph: "ल"
};
var v$n = {
	type: "consonant",
	glyph: "व"
};
var L$3 = {
	type: "consonant",
	glyph: "ळ"
};
var sh$n = {
	type: "consonant",
	glyph: "श"
};
var Sh$n = {
	type: "consonant",
	glyph: "ष"
};
var s$n = {
	type: "consonant",
	glyph: "स"
};
var h$n = {
	type: "consonant",
	glyph: "ह"
};
var M$n = {
	type: "mark",
	glyph: "ं"
};
var MM$l = {
	type: "mark",
	glyph: "ँ"
};
var H$n = {
	type: "mark",
	glyph: "ः"
};
var phonetic_base$b = {
	a: a$n,
	aa: aa$n,
	i: i$n,
	ii: ii$n,
	u: u$n,
	uu: uu$n,
	ri: ri$j,
	e: e$n,
	ai: ai$n,
	o: o$n,
	au: au$n,
	ae: ae$1,
	aw: aw$1,
	k: k$n,
	kh: kh$n,
	g: g$n,
	gh: gh$n,
	ng: ng$n,
	ch: ch$n,
	chh: chh$n,
	j: j$n,
	jh: jh$n,
	ny: ny$n,
	T: T$n,
	Th: Th$n,
	D: D$n,
	Dh: Dh$n,
	N: N$n,
	t: t$n,
	th: th$n,
	d: d$n,
	dh: dh$n,
	n: n$n,
	p: p$n,
	ph: ph$n,
	b: b$n,
	bh: bh$n,
	m: m$n,
	y: y$n,
	r: r$n,
	l: l$n,
	v: v$n,
	L: L$3,
	sh: sh$n,
	Sh: Sh$n,
	s: s$n,
	h: h$n,
	M: M$n,
	MM: MM$l,
	H: H$n
};

var a$m = {
	type: "vowel",
	glyph: "अ",
	matra: ""
};
var A$b = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var aa$m = {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
};
var ae = {
	type: "vowel",
	glyph: "ॲ",
	matra: "ॅ"
};
var ai$m = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var au$m = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var aw = {
	type: "vowel",
	glyph: "ऑ",
	matra: "ॉ"
};
var b$m = {
	type: "consonant",
	glyph: "ब"
};
var bh$m = {
	type: "consonant",
	glyph: "भ"
};
var ch$m = {
	type: "consonant",
	glyph: "च"
};
var chh$m = {
	type: "consonant",
	glyph: "छ"
};
var d$m = {
	type: "consonant",
	glyph: "द"
};
var D$m = {
	type: "consonant",
	glyph: "ड"
};
var dh$m = {
	type: "consonant",
	glyph: "ध"
};
var Dh$m = {
	type: "consonant",
	glyph: "ढ"
};
var dny$b = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var e$m = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ee$2 = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var g$m = {
	type: "consonant",
	glyph: "ग"
};
var gh$m = {
	type: "consonant",
	glyph: "घ"
};
var gy$b = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var h$m = {
	type: "consonant",
	glyph: "ह"
};
var H$m = {
	type: "mark",
	glyph: "ः"
};
var i$m = {
	type: "vowel",
	glyph: "इ",
	matra: "ि"
};
var I$b = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var ii$m = {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
};
var j$m = {
	type: "consonant",
	glyph: "ज"
};
var jh$m = {
	type: "consonant",
	glyph: "झ"
};
var k$m = {
	type: "consonant",
	glyph: "क"
};
var kh$m = {
	type: "consonant",
	glyph: "ख"
};
var l$m = {
	type: "consonant",
	glyph: "ल"
};
var L$2 = {
	type: "consonant",
	glyph: "ळ"
};
var m$m = {
	type: "consonant",
	glyph: "म"
};
var M$m = {
	type: "mark",
	glyph: "ं"
};
var MM$k = {
	type: "mark",
	glyph: "ँ"
};
var n$m = {
	type: "consonant",
	glyph: "न"
};
var N$m = {
	type: "consonant",
	glyph: "ण"
};
var ng$m = {
	type: "consonant",
	glyph: "ङ"
};
var ny$m = {
	type: "consonant",
	glyph: "ञ"
};
var o$m = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var p$m = {
	type: "consonant",
	glyph: "प"
};
var ph$m = {
	type: "consonant",
	glyph: "फ"
};
var r$m = {
	type: "consonant",
	glyph: "र"
};
var R$9 = {
	type: "consonant",
	glyph: "र"
};
var ri$i = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var s$m = {
	type: "consonant",
	glyph: "स"
};
var sh$m = {
	type: "consonant",
	glyph: "श"
};
var Sh$m = {
	type: "consonant",
	glyph: "ष"
};
var t$m = {
	type: "consonant",
	glyph: "त"
};
var T$m = {
	type: "consonant",
	glyph: "ट"
};
var th$m = {
	type: "consonant",
	glyph: "थ"
};
var Th$m = {
	type: "consonant",
	glyph: "ठ"
};
var u$m = {
	type: "vowel",
	glyph: "उ",
	matra: "ु"
};
var U$b = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var uu$m = {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
};
var v$m = {
	type: "consonant",
	glyph: "व"
};
var w$b = {
	type: "consonant",
	glyph: "व"
};
var W = {
	type: "consonant",
	glyph: "व"
};
var x$b = {
	type: "conjunct",
	glyph: "क्ष"
};
var y$m = {
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
var E$2 = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var O$2 = {
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
var phonetic_expanded$b = {
	a: a$m,
	A: A$b,
	"ā": {
	type: "vowel",
	glyph: "आ",
	matra: "ा"
},
	aa: aa$m,
	ae: ae,
	ai: ai$m,
	au: au$m,
	aw: aw,
	b: b$m,
	bh: bh$m,
	ch: ch$m,
	chh: chh$m,
	d: d$m,
	D: D$m,
	dh: dh$m,
	Dh: Dh$m,
	dny: dny$b,
	e: e$m,
	ee: ee$2,
	g: g$m,
	gh: gh$m,
	gy: gy$b,
	h: h$m,
	H: H$m,
	i: i$m,
	I: I$b,
	"ī": {
	type: "vowel",
	glyph: "ई",
	matra: "ी"
},
	ii: ii$m,
	j: j$m,
	jh: jh$m,
	k: k$m,
	kh: kh$m,
	l: l$m,
	L: L$2,
	m: m$m,
	M: M$m,
	MM: MM$k,
	n: n$m,
	N: N$m,
	ng: ng$m,
	ny: ny$m,
	o: o$m,
	p: p$m,
	ph: ph$m,
	r: r$m,
	R: R$9,
	ri: ri$i,
	s: s$m,
	sh: sh$m,
	Sh: Sh$m,
	t: t$m,
	T: T$m,
	th: th$m,
	Th: Th$m,
	u: u$m,
	U: U$b,
	"ū": {
	type: "vowel",
	glyph: "ऊ",
	matra: "ू"
},
	uu: uu$m,
	v: v$m,
	w: w$b,
	W: W,
	x: x$b,
	y: y$m,
	B: B,
	G: G,
	J: J,
	K: K,
	P: P,
	V: V,
	X: X,
	Y: Y,
	E: E$2,
	O: O$2,
	Ch: Ch,
	Ph: Ph,
	Bh: Bh,
	Gh: Gh,
	Kh: Kh,
	Ny: Ny,
	Ng: Ng
};

var a$l = {
	type: "vowel",
	glyph: "অ",
	matra: ""
};
var aa$l = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var i$l = {
	type: "vowel",
	glyph: "ই",
	matra: "ি"
};
var ii$l = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var u$l = {
	type: "vowel",
	glyph: "উ",
	matra: "ু"
};
var uu$l = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var ri$h = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var e$l = {
	type: "vowel",
	glyph: "এ",
	matra: "ে"
};
var ai$l = {
	type: "vowel",
	glyph: "ঐ",
	matra: "ৈ"
};
var o$l = {
	type: "vowel",
	glyph: "ও",
	matra: "ো"
};
var au$l = {
	type: "vowel",
	glyph: "ঔ",
	matra: "ৌ"
};
var k$l = {
	type: "consonant",
	glyph: "ক"
};
var kh$l = {
	type: "consonant",
	glyph: "খ"
};
var g$l = {
	type: "consonant",
	glyph: "গ"
};
var gh$l = {
	type: "consonant",
	glyph: "ঘ"
};
var ng$l = {
	type: "consonant",
	glyph: "ঙ"
};
var ch$l = {
	type: "consonant",
	glyph: "চ"
};
var chh$l = {
	type: "consonant",
	glyph: "ছ"
};
var j$l = {
	type: "consonant",
	glyph: "জ"
};
var jh$l = {
	type: "consonant",
	glyph: "ঝ"
};
var ny$l = {
	type: "consonant",
	glyph: "ঞ"
};
var T$l = {
	type: "consonant",
	glyph: "ট"
};
var Th$l = {
	type: "consonant",
	glyph: "ঠ"
};
var D$l = {
	type: "consonant",
	glyph: "ড"
};
var Dh$l = {
	type: "consonant",
	glyph: "ঢ"
};
var N$l = {
	type: "consonant",
	glyph: "ণ"
};
var t$l = {
	type: "consonant",
	glyph: "ত"
};
var th$l = {
	type: "consonant",
	glyph: "থ"
};
var d$l = {
	type: "consonant",
	glyph: "দ"
};
var dh$l = {
	type: "consonant",
	glyph: "ধ"
};
var n$l = {
	type: "consonant",
	glyph: "ন"
};
var p$l = {
	type: "consonant",
	glyph: "প"
};
var ph$l = {
	type: "consonant",
	glyph: "ফ"
};
var b$l = {
	type: "consonant",
	glyph: "ব"
};
var bh$l = {
	type: "consonant",
	glyph: "ভ"
};
var m$l = {
	type: "consonant",
	glyph: "ম"
};
var y$l = {
	type: "consonant",
	glyph: "য"
};
var r$l = {
	type: "consonant",
	glyph: "র"
};
var l$l = {
	type: "consonant",
	glyph: "ল"
};
var v$l = {
	type: "consonant",
	glyph: "ব"
};
var sh$l = {
	type: "consonant",
	glyph: "শ"
};
var Sh$l = {
	type: "consonant",
	glyph: "ষ"
};
var s$l = {
	type: "consonant",
	glyph: "স"
};
var h$l = {
	type: "consonant",
	glyph: "হ"
};
var M$l = {
	type: "mark",
	glyph: "ং"
};
var MM$j = {
	type: "mark",
	glyph: "ঁ"
};
var H$l = {
	type: "mark",
	glyph: "ঃ"
};
var phonetic_base$a = {
	a: a$l,
	aa: aa$l,
	i: i$l,
	ii: ii$l,
	u: u$l,
	uu: uu$l,
	ri: ri$h,
	e: e$l,
	ai: ai$l,
	o: o$l,
	au: au$l,
	k: k$l,
	kh: kh$l,
	g: g$l,
	gh: gh$l,
	ng: ng$l,
	ch: ch$l,
	chh: chh$l,
	j: j$l,
	jh: jh$l,
	ny: ny$l,
	T: T$l,
	Th: Th$l,
	D: D$l,
	Dh: Dh$l,
	N: N$l,
	t: t$l,
	th: th$l,
	d: d$l,
	dh: dh$l,
	n: n$l,
	p: p$l,
	ph: ph$l,
	b: b$l,
	bh: bh$l,
	m: m$l,
	y: y$l,
	r: r$l,
	l: l$l,
	v: v$l,
	sh: sh$l,
	Sh: Sh$l,
	s: s$l,
	h: h$l,
	M: M$l,
	MM: MM$j,
	H: H$l
};

var a$k = {
	type: "vowel",
	glyph: "অ",
	matra: ""
};
var A$a = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var aa$k = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var i$k = {
	type: "vowel",
	glyph: "ই",
	matra: "ি"
};
var I$a = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var ii$k = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var u$k = {
	type: "vowel",
	glyph: "উ",
	matra: "ু"
};
var U$a = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var uu$k = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var ri$g = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var R$8 = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var e$k = {
	type: "vowel",
	glyph: "এ",
	matra: "ে"
};
var ai$k = {
	type: "vowel",
	glyph: "ঐ",
	matra: "ৈ"
};
var o$k = {
	type: "vowel",
	glyph: "ও",
	matra: "ো"
};
var au$k = {
	type: "vowel",
	glyph: "ঔ",
	matra: "ৌ"
};
var k$k = {
	type: "consonant",
	glyph: "ক"
};
var kh$k = {
	type: "consonant",
	glyph: "খ"
};
var g$k = {
	type: "consonant",
	glyph: "গ"
};
var gh$k = {
	type: "consonant",
	glyph: "ঘ"
};
var ng$k = {
	type: "consonant",
	glyph: "ঙ"
};
var ch$k = {
	type: "consonant",
	glyph: "চ"
};
var chh$k = {
	type: "consonant",
	glyph: "ছ"
};
var j$k = {
	type: "consonant",
	glyph: "জ"
};
var jh$k = {
	type: "consonant",
	glyph: "ঝ"
};
var ny$k = {
	type: "consonant",
	glyph: "ঞ"
};
var T$k = {
	type: "consonant",
	glyph: "ট"
};
var Th$k = {
	type: "consonant",
	glyph: "ঠ"
};
var D$k = {
	type: "consonant",
	glyph: "ড"
};
var Dh$k = {
	type: "consonant",
	glyph: "ঢ"
};
var N$k = {
	type: "consonant",
	glyph: "ণ"
};
var t$k = {
	type: "consonant",
	glyph: "ত"
};
var th$k = {
	type: "consonant",
	glyph: "থ"
};
var d$k = {
	type: "consonant",
	glyph: "দ"
};
var dh$k = {
	type: "consonant",
	glyph: "ধ"
};
var n$k = {
	type: "consonant",
	glyph: "ন"
};
var p$k = {
	type: "consonant",
	glyph: "প"
};
var ph$k = {
	type: "consonant",
	glyph: "ফ"
};
var b$k = {
	type: "consonant",
	glyph: "ব"
};
var bh$k = {
	type: "consonant",
	glyph: "ভ"
};
var m$k = {
	type: "consonant",
	glyph: "ম"
};
var y$k = {
	type: "consonant",
	glyph: "য"
};
var r$k = {
	type: "consonant",
	glyph: "র"
};
var l$k = {
	type: "consonant",
	glyph: "ল"
};
var v$k = {
	type: "consonant",
	glyph: "ব"
};
var w$a = {
	type: "consonant",
	glyph: "ব"
};
var sh$k = {
	type: "consonant",
	glyph: "শ"
};
var S$a = {
	type: "consonant",
	glyph: "শ"
};
var Sh$k = {
	type: "consonant",
	glyph: "ষ"
};
var s$k = {
	type: "consonant",
	glyph: "স"
};
var h$k = {
	type: "consonant",
	glyph: "হ"
};
var M$k = {
	type: "mark",
	glyph: "ং"
};
var MM$i = {
	type: "mark",
	glyph: "ঁ"
};
var H$k = {
	type: "mark",
	glyph: "ঃ"
};
var ksh$a = {
	type: "conjunct",
	glyph: "ক্ষ"
};
var x$a = {
	type: "conjunct",
	glyph: "ক্ষ"
};
var gy$a = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var dny$a = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var jn$a = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var tr$a = {
	type: "conjunct",
	glyph: "ত্র"
};
var shr$a = {
	type: "conjunct",
	glyph: "শ্র"
};
var z$8 = {
	type: "consonant",
	glyph: "জ়"
};
var f$8 = {
	type: "consonant",
	glyph: "ফ়"
};
var Rr$7 = {
	type: "consonant",
	glyph: "ড়"
};
var Rh$7 = {
	type: "consonant",
	glyph: "ঢ়"
};
var phonetic_expanded$a = {
	a: a$k,
	A: A$a,
	aa: aa$k,
	i: i$k,
	I: I$a,
	ii: ii$k,
	u: u$k,
	U: U$a,
	uu: uu$k,
	ri: ri$g,
	R: R$8,
	e: e$k,
	ai: ai$k,
	o: o$k,
	au: au$k,
	k: k$k,
	kh: kh$k,
	g: g$k,
	gh: gh$k,
	ng: ng$k,
	ch: ch$k,
	chh: chh$k,
	j: j$k,
	jh: jh$k,
	ny: ny$k,
	T: T$k,
	Th: Th$k,
	D: D$k,
	Dh: Dh$k,
	N: N$k,
	t: t$k,
	th: th$k,
	d: d$k,
	dh: dh$k,
	n: n$k,
	p: p$k,
	ph: ph$k,
	b: b$k,
	bh: bh$k,
	m: m$k,
	y: y$k,
	r: r$k,
	l: l$k,
	v: v$k,
	w: w$a,
	sh: sh$k,
	S: S$a,
	Sh: Sh$k,
	s: s$k,
	h: h$k,
	M: M$k,
	MM: MM$i,
	H: H$k,
	ksh: ksh$a,
	x: x$a,
	gy: gy$a,
	dny: dny$a,
	jn: jn$a,
	tr: tr$a,
	shr: shr$a,
	z: z$8,
	f: f$8,
	Rr: Rr$7,
	Rh: Rh$7
};

var a$j = {
	type: "vowel",
	glyph: "অ",
	matra: ""
};
var aa$j = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var i$j = {
	type: "vowel",
	glyph: "ই",
	matra: "ি"
};
var ii$j = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var u$j = {
	type: "vowel",
	glyph: "উ",
	matra: "ু"
};
var uu$j = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var ri$f = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var e$j = {
	type: "vowel",
	glyph: "এ",
	matra: "ে"
};
var ai$j = {
	type: "vowel",
	glyph: "ঐ",
	matra: "ৈ"
};
var o$j = {
	type: "vowel",
	glyph: "ও",
	matra: "ো"
};
var au$j = {
	type: "vowel",
	glyph: "ঔ",
	matra: "ৌ"
};
var k$j = {
	type: "consonant",
	glyph: "ক"
};
var kh$j = {
	type: "consonant",
	glyph: "খ"
};
var g$j = {
	type: "consonant",
	glyph: "গ"
};
var gh$j = {
	type: "consonant",
	glyph: "ঘ"
};
var ng$j = {
	type: "consonant",
	glyph: "ঙ"
};
var ch$j = {
	type: "consonant",
	glyph: "চ"
};
var chh$j = {
	type: "consonant",
	glyph: "ছ"
};
var j$j = {
	type: "consonant",
	glyph: "জ"
};
var jh$j = {
	type: "consonant",
	glyph: "ঝ"
};
var ny$j = {
	type: "consonant",
	glyph: "ঞ"
};
var T$j = {
	type: "consonant",
	glyph: "ট"
};
var Th$j = {
	type: "consonant",
	glyph: "ঠ"
};
var D$j = {
	type: "consonant",
	glyph: "ড"
};
var Dh$j = {
	type: "consonant",
	glyph: "ঢ"
};
var N$j = {
	type: "consonant",
	glyph: "ণ"
};
var t$j = {
	type: "consonant",
	glyph: "ত"
};
var th$j = {
	type: "consonant",
	glyph: "থ"
};
var d$j = {
	type: "consonant",
	glyph: "দ"
};
var dh$j = {
	type: "consonant",
	glyph: "ধ"
};
var n$j = {
	type: "consonant",
	glyph: "ন"
};
var p$j = {
	type: "consonant",
	glyph: "প"
};
var ph$j = {
	type: "consonant",
	glyph: "ফ"
};
var b$j = {
	type: "consonant",
	glyph: "ব"
};
var bh$j = {
	type: "consonant",
	glyph: "ভ"
};
var m$j = {
	type: "consonant",
	glyph: "ম"
};
var y$j = {
	type: "consonant",
	glyph: "য"
};
var r$j = {
	type: "consonant",
	glyph: "ৰ"
};
var l$j = {
	type: "consonant",
	glyph: "ল"
};
var v$j = {
	type: "consonant",
	glyph: "ৱ"
};
var sh$j = {
	type: "consonant",
	glyph: "শ"
};
var Sh$j = {
	type: "consonant",
	glyph: "ষ"
};
var s$j = {
	type: "consonant",
	glyph: "স"
};
var h$j = {
	type: "consonant",
	glyph: "হ"
};
var M$j = {
	type: "mark",
	glyph: "ং"
};
var MM$h = {
	type: "mark",
	glyph: "ঁ"
};
var H$j = {
	type: "mark",
	glyph: "ঃ"
};
var phonetic_base$9 = {
	a: a$j,
	aa: aa$j,
	i: i$j,
	ii: ii$j,
	u: u$j,
	uu: uu$j,
	ri: ri$f,
	e: e$j,
	ai: ai$j,
	o: o$j,
	au: au$j,
	k: k$j,
	kh: kh$j,
	g: g$j,
	gh: gh$j,
	ng: ng$j,
	ch: ch$j,
	chh: chh$j,
	j: j$j,
	jh: jh$j,
	ny: ny$j,
	T: T$j,
	Th: Th$j,
	D: D$j,
	Dh: Dh$j,
	N: N$j,
	t: t$j,
	th: th$j,
	d: d$j,
	dh: dh$j,
	n: n$j,
	p: p$j,
	ph: ph$j,
	b: b$j,
	bh: bh$j,
	m: m$j,
	y: y$j,
	r: r$j,
	l: l$j,
	v: v$j,
	sh: sh$j,
	Sh: Sh$j,
	s: s$j,
	h: h$j,
	M: M$j,
	MM: MM$h,
	H: H$j
};

var a$i = {
	type: "vowel",
	glyph: "অ",
	matra: ""
};
var A$9 = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var aa$i = {
	type: "vowel",
	glyph: "আ",
	matra: "া"
};
var i$i = {
	type: "vowel",
	glyph: "ই",
	matra: "ি"
};
var I$9 = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var ii$i = {
	type: "vowel",
	glyph: "ঈ",
	matra: "ী"
};
var u$i = {
	type: "vowel",
	glyph: "উ",
	matra: "ু"
};
var U$9 = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var uu$i = {
	type: "vowel",
	glyph: "ঊ",
	matra: "ূ"
};
var ri$e = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var R$7 = {
	type: "vowel",
	glyph: "ঋ",
	matra: "ৃ"
};
var e$i = {
	type: "vowel",
	glyph: "এ",
	matra: "ে"
};
var ai$i = {
	type: "vowel",
	glyph: "ঐ",
	matra: "ৈ"
};
var o$i = {
	type: "vowel",
	glyph: "ও",
	matra: "ো"
};
var au$i = {
	type: "vowel",
	glyph: "ঔ",
	matra: "ৌ"
};
var k$i = {
	type: "consonant",
	glyph: "ক"
};
var kh$i = {
	type: "consonant",
	glyph: "খ"
};
var g$i = {
	type: "consonant",
	glyph: "গ"
};
var gh$i = {
	type: "consonant",
	glyph: "ঘ"
};
var ng$i = {
	type: "consonant",
	glyph: "ঙ"
};
var ch$i = {
	type: "consonant",
	glyph: "চ"
};
var chh$i = {
	type: "consonant",
	glyph: "ছ"
};
var j$i = {
	type: "consonant",
	glyph: "জ"
};
var jh$i = {
	type: "consonant",
	glyph: "ঝ"
};
var ny$i = {
	type: "consonant",
	glyph: "ঞ"
};
var T$i = {
	type: "consonant",
	glyph: "ট"
};
var Th$i = {
	type: "consonant",
	glyph: "ঠ"
};
var D$i = {
	type: "consonant",
	glyph: "ড"
};
var Dh$i = {
	type: "consonant",
	glyph: "ঢ"
};
var N$i = {
	type: "consonant",
	glyph: "ণ"
};
var t$i = {
	type: "consonant",
	glyph: "ত"
};
var th$i = {
	type: "consonant",
	glyph: "থ"
};
var d$i = {
	type: "consonant",
	glyph: "দ"
};
var dh$i = {
	type: "consonant",
	glyph: "ধ"
};
var n$i = {
	type: "consonant",
	glyph: "ন"
};
var p$i = {
	type: "consonant",
	glyph: "প"
};
var ph$i = {
	type: "consonant",
	glyph: "ফ"
};
var b$i = {
	type: "consonant",
	glyph: "ব"
};
var bh$i = {
	type: "consonant",
	glyph: "ভ"
};
var m$i = {
	type: "consonant",
	glyph: "ম"
};
var y$i = {
	type: "consonant",
	glyph: "য"
};
var r$i = {
	type: "consonant",
	glyph: "ৰ"
};
var l$i = {
	type: "consonant",
	glyph: "ল"
};
var v$i = {
	type: "consonant",
	glyph: "ৱ"
};
var w$9 = {
	type: "consonant",
	glyph: "ৱ"
};
var sh$i = {
	type: "consonant",
	glyph: "শ"
};
var S$9 = {
	type: "consonant",
	glyph: "শ"
};
var Sh$i = {
	type: "consonant",
	glyph: "ষ"
};
var s$i = {
	type: "consonant",
	glyph: "স"
};
var h$i = {
	type: "consonant",
	glyph: "হ"
};
var M$i = {
	type: "mark",
	glyph: "ং"
};
var MM$g = {
	type: "mark",
	glyph: "ঁ"
};
var H$i = {
	type: "mark",
	glyph: "ঃ"
};
var ksh$9 = {
	type: "conjunct",
	glyph: "ক্ষ"
};
var x$9 = {
	type: "conjunct",
	glyph: "ক্ষ"
};
var gy$9 = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var dny$9 = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var jn$9 = {
	type: "conjunct",
	glyph: "জ্ঞ"
};
var tr$9 = {
	type: "conjunct",
	glyph: "ত্ৰ"
};
var shr$9 = {
	type: "conjunct",
	glyph: "শ্ৰ"
};
var z$7 = {
	type: "consonant",
	glyph: "জ়"
};
var f$7 = {
	type: "consonant",
	glyph: "ফ়"
};
var Rr$6 = {
	type: "consonant",
	glyph: "ড়"
};
var Rh$6 = {
	type: "consonant",
	glyph: "ঢ়"
};
var phonetic_expanded$9 = {
	a: a$i,
	A: A$9,
	aa: aa$i,
	i: i$i,
	I: I$9,
	ii: ii$i,
	u: u$i,
	U: U$9,
	uu: uu$i,
	ri: ri$e,
	R: R$7,
	e: e$i,
	ai: ai$i,
	o: o$i,
	au: au$i,
	k: k$i,
	kh: kh$i,
	g: g$i,
	gh: gh$i,
	ng: ng$i,
	ch: ch$i,
	chh: chh$i,
	j: j$i,
	jh: jh$i,
	ny: ny$i,
	T: T$i,
	Th: Th$i,
	D: D$i,
	Dh: Dh$i,
	N: N$i,
	t: t$i,
	th: th$i,
	d: d$i,
	dh: dh$i,
	n: n$i,
	p: p$i,
	ph: ph$i,
	b: b$i,
	bh: bh$i,
	m: m$i,
	y: y$i,
	r: r$i,
	l: l$i,
	v: v$i,
	w: w$9,
	sh: sh$i,
	S: S$9,
	Sh: Sh$i,
	s: s$i,
	h: h$i,
	M: M$i,
	MM: MM$g,
	H: H$i,
	ksh: ksh$9,
	x: x$9,
	gy: gy$9,
	dny: dny$9,
	jn: jn$9,
	tr: tr$9,
	shr: shr$9,
	z: z$7,
	f: f$7,
	Rr: Rr$6,
	Rh: Rh$6
};

var a$h = {
	type: "vowel",
	glyph: "અ",
	matra: ""
};
var aa$h = {
	type: "vowel",
	glyph: "આ",
	matra: "ા"
};
var i$h = {
	type: "vowel",
	glyph: "ઇ",
	matra: "િ"
};
var ii$h = {
	type: "vowel",
	glyph: "ઈ",
	matra: "ી"
};
var u$h = {
	type: "vowel",
	glyph: "ઉ",
	matra: "ુ"
};
var uu$h = {
	type: "vowel",
	glyph: "ઊ",
	matra: "ૂ"
};
var ri$d = {
	type: "vowel",
	glyph: "ઋ",
	matra: "ૃ"
};
var e$h = {
	type: "vowel",
	glyph: "એ",
	matra: "ે"
};
var ai$h = {
	type: "vowel",
	glyph: "ઐ",
	matra: "ૈ"
};
var o$h = {
	type: "vowel",
	glyph: "ઓ",
	matra: "ો"
};
var au$h = {
	type: "vowel",
	glyph: "ઔ",
	matra: "ૌ"
};
var k$h = {
	type: "consonant",
	glyph: "ક"
};
var kh$h = {
	type: "consonant",
	glyph: "ખ"
};
var g$h = {
	type: "consonant",
	glyph: "ગ"
};
var gh$h = {
	type: "consonant",
	glyph: "ઘ"
};
var ng$h = {
	type: "consonant",
	glyph: "ઙ"
};
var ch$h = {
	type: "consonant",
	glyph: "ચ"
};
var chh$h = {
	type: "consonant",
	glyph: "છ"
};
var j$h = {
	type: "consonant",
	glyph: "જ"
};
var jh$h = {
	type: "consonant",
	glyph: "ઝ"
};
var ny$h = {
	type: "consonant",
	glyph: "ઞ"
};
var T$h = {
	type: "consonant",
	glyph: "ટ"
};
var Th$h = {
	type: "consonant",
	glyph: "ઠ"
};
var D$h = {
	type: "consonant",
	glyph: "ડ"
};
var Dh$h = {
	type: "consonant",
	glyph: "ઢ"
};
var N$h = {
	type: "consonant",
	glyph: "ણ"
};
var t$h = {
	type: "consonant",
	glyph: "ત"
};
var th$h = {
	type: "consonant",
	glyph: "થ"
};
var d$h = {
	type: "consonant",
	glyph: "દ"
};
var dh$h = {
	type: "consonant",
	glyph: "ધ"
};
var n$h = {
	type: "consonant",
	glyph: "ન"
};
var p$h = {
	type: "consonant",
	glyph: "પ"
};
var ph$h = {
	type: "consonant",
	glyph: "ફ"
};
var b$h = {
	type: "consonant",
	glyph: "બ"
};
var bh$h = {
	type: "consonant",
	glyph: "ભ"
};
var m$h = {
	type: "consonant",
	glyph: "મ"
};
var y$h = {
	type: "consonant",
	glyph: "ય"
};
var r$h = {
	type: "consonant",
	glyph: "ર"
};
var l$h = {
	type: "consonant",
	glyph: "લ"
};
var v$h = {
	type: "consonant",
	glyph: "વ"
};
var sh$h = {
	type: "consonant",
	glyph: "શ"
};
var Sh$h = {
	type: "consonant",
	glyph: "ષ"
};
var s$h = {
	type: "consonant",
	glyph: "સ"
};
var h$h = {
	type: "consonant",
	glyph: "હ"
};
var M$h = {
	type: "mark",
	glyph: "ં"
};
var MM$f = {
	type: "mark",
	glyph: "ઁ"
};
var H$h = {
	type: "mark",
	glyph: "ઃ"
};
var phonetic_base$8 = {
	a: a$h,
	aa: aa$h,
	i: i$h,
	ii: ii$h,
	u: u$h,
	uu: uu$h,
	ri: ri$d,
	e: e$h,
	ai: ai$h,
	o: o$h,
	au: au$h,
	k: k$h,
	kh: kh$h,
	g: g$h,
	gh: gh$h,
	ng: ng$h,
	ch: ch$h,
	chh: chh$h,
	j: j$h,
	jh: jh$h,
	ny: ny$h,
	T: T$h,
	Th: Th$h,
	D: D$h,
	Dh: Dh$h,
	N: N$h,
	t: t$h,
	th: th$h,
	d: d$h,
	dh: dh$h,
	n: n$h,
	p: p$h,
	ph: ph$h,
	b: b$h,
	bh: bh$h,
	m: m$h,
	y: y$h,
	r: r$h,
	l: l$h,
	v: v$h,
	sh: sh$h,
	Sh: Sh$h,
	s: s$h,
	h: h$h,
	M: M$h,
	MM: MM$f,
	H: H$h
};

var a$g = {
	type: "vowel",
	glyph: "અ",
	matra: ""
};
var A$8 = {
	type: "vowel",
	glyph: "આ",
	matra: "ા"
};
var aa$g = {
	type: "vowel",
	glyph: "આ",
	matra: "ા"
};
var i$g = {
	type: "vowel",
	glyph: "ઇ",
	matra: "િ"
};
var I$8 = {
	type: "vowel",
	glyph: "ઈ",
	matra: "ી"
};
var ii$g = {
	type: "vowel",
	glyph: "ઈ",
	matra: "ી"
};
var u$g = {
	type: "vowel",
	glyph: "ઉ",
	matra: "ુ"
};
var U$8 = {
	type: "vowel",
	glyph: "ઊ",
	matra: "ૂ"
};
var uu$g = {
	type: "vowel",
	glyph: "ઊ",
	matra: "ૂ"
};
var ri$c = {
	type: "vowel",
	glyph: "ઋ",
	matra: "ૃ"
};
var R$6 = {
	type: "vowel",
	glyph: "ઋ",
	matra: "ૃ"
};
var e$g = {
	type: "vowel",
	glyph: "એ",
	matra: "ે"
};
var ai$g = {
	type: "vowel",
	glyph: "ઐ",
	matra: "ૈ"
};
var o$g = {
	type: "vowel",
	glyph: "ઓ",
	matra: "ો"
};
var au$g = {
	type: "vowel",
	glyph: "ઔ",
	matra: "ૌ"
};
var k$g = {
	type: "consonant",
	glyph: "ક"
};
var kh$g = {
	type: "consonant",
	glyph: "ખ"
};
var g$g = {
	type: "consonant",
	glyph: "ગ"
};
var gh$g = {
	type: "consonant",
	glyph: "ઘ"
};
var ng$g = {
	type: "consonant",
	glyph: "ઙ"
};
var ch$g = {
	type: "consonant",
	glyph: "ચ"
};
var chh$g = {
	type: "consonant",
	glyph: "છ"
};
var j$g = {
	type: "consonant",
	glyph: "જ"
};
var jh$g = {
	type: "consonant",
	glyph: "ઝ"
};
var ny$g = {
	type: "consonant",
	glyph: "ઞ"
};
var T$g = {
	type: "consonant",
	glyph: "ટ"
};
var Th$g = {
	type: "consonant",
	glyph: "ઠ"
};
var D$g = {
	type: "consonant",
	glyph: "ડ"
};
var Dh$g = {
	type: "consonant",
	glyph: "ઢ"
};
var N$g = {
	type: "consonant",
	glyph: "ણ"
};
var t$g = {
	type: "consonant",
	glyph: "ત"
};
var th$g = {
	type: "consonant",
	glyph: "થ"
};
var d$g = {
	type: "consonant",
	glyph: "દ"
};
var dh$g = {
	type: "consonant",
	glyph: "ધ"
};
var n$g = {
	type: "consonant",
	glyph: "ન"
};
var p$g = {
	type: "consonant",
	glyph: "પ"
};
var ph$g = {
	type: "consonant",
	glyph: "ફ"
};
var b$g = {
	type: "consonant",
	glyph: "બ"
};
var bh$g = {
	type: "consonant",
	glyph: "ભ"
};
var m$g = {
	type: "consonant",
	glyph: "મ"
};
var y$g = {
	type: "consonant",
	glyph: "ય"
};
var r$g = {
	type: "consonant",
	glyph: "ર"
};
var l$g = {
	type: "consonant",
	glyph: "લ"
};
var v$g = {
	type: "consonant",
	glyph: "વ"
};
var w$8 = {
	type: "consonant",
	glyph: "વ"
};
var sh$g = {
	type: "consonant",
	glyph: "શ"
};
var S$8 = {
	type: "consonant",
	glyph: "શ"
};
var Sh$g = {
	type: "consonant",
	glyph: "ષ"
};
var s$g = {
	type: "consonant",
	glyph: "સ"
};
var h$g = {
	type: "consonant",
	glyph: "હ"
};
var M$g = {
	type: "mark",
	glyph: "ં"
};
var MM$e = {
	type: "mark",
	glyph: "ઁ"
};
var H$g = {
	type: "mark",
	glyph: "ઃ"
};
var ksh$8 = {
	type: "conjunct",
	glyph: "ક્ષ"
};
var x$8 = {
	type: "conjunct",
	glyph: "ક્ષ"
};
var gy$8 = {
	type: "conjunct",
	glyph: "જ્ઞ"
};
var dny$8 = {
	type: "conjunct",
	glyph: "જ્ઞ"
};
var jn$8 = {
	type: "conjunct",
	glyph: "જ્ઞ"
};
var tr$8 = {
	type: "conjunct",
	glyph: "ત્ર"
};
var shr$8 = {
	type: "conjunct",
	glyph: "શ્ર"
};
var z$6 = {
	type: "consonant",
	glyph: "જ઼"
};
var f$6 = {
	type: "consonant",
	glyph: "ફ઼"
};
var Rr$5 = {
	type: "consonant",
	glyph: "ડ઼"
};
var Rh$5 = {
	type: "consonant",
	glyph: "ઢ઼"
};
var phonetic_expanded$8 = {
	a: a$g,
	A: A$8,
	aa: aa$g,
	i: i$g,
	I: I$8,
	ii: ii$g,
	u: u$g,
	U: U$8,
	uu: uu$g,
	ri: ri$c,
	R: R$6,
	e: e$g,
	ai: ai$g,
	o: o$g,
	au: au$g,
	k: k$g,
	kh: kh$g,
	g: g$g,
	gh: gh$g,
	ng: ng$g,
	ch: ch$g,
	chh: chh$g,
	j: j$g,
	jh: jh$g,
	ny: ny$g,
	T: T$g,
	Th: Th$g,
	D: D$g,
	Dh: Dh$g,
	N: N$g,
	t: t$g,
	th: th$g,
	d: d$g,
	dh: dh$g,
	n: n$g,
	p: p$g,
	ph: ph$g,
	b: b$g,
	bh: bh$g,
	m: m$g,
	y: y$g,
	r: r$g,
	l: l$g,
	v: v$g,
	w: w$8,
	sh: sh$g,
	S: S$8,
	Sh: Sh$g,
	s: s$g,
	h: h$g,
	M: M$g,
	MM: MM$e,
	H: H$g,
	ksh: ksh$8,
	x: x$8,
	gy: gy$8,
	dny: dny$8,
	jn: jn$8,
	tr: tr$8,
	shr: shr$8,
	z: z$6,
	f: f$6,
	Rr: Rr$5,
	Rh: Rh$5
};

var a$f = {
	type: "vowel",
	glyph: "ਅ",
	matra: ""
};
var aa$f = {
	type: "vowel",
	glyph: "ਆ",
	matra: "ਾ"
};
var i$f = {
	type: "vowel",
	glyph: "ਇ",
	matra: "ਿ"
};
var ii$f = {
	type: "vowel",
	glyph: "ਈ",
	matra: "ੀ"
};
var u$f = {
	type: "vowel",
	glyph: "ਉ",
	matra: "ੁ"
};
var uu$f = {
	type: "vowel",
	glyph: "ਊ",
	matra: "ੂ"
};
var e$f = {
	type: "vowel",
	glyph: "ਏ",
	matra: "ੇ"
};
var ai$f = {
	type: "vowel",
	glyph: "ਐ",
	matra: "ੈ"
};
var o$f = {
	type: "vowel",
	glyph: "ਓ",
	matra: "ੋ"
};
var au$f = {
	type: "vowel",
	glyph: "ਔ",
	matra: "ੌ"
};
var k$f = {
	type: "consonant",
	glyph: "ਕ"
};
var kh$f = {
	type: "consonant",
	glyph: "ਖ"
};
var g$f = {
	type: "consonant",
	glyph: "ਗ"
};
var gh$f = {
	type: "consonant",
	glyph: "ਘ"
};
var ng$f = {
	type: "consonant",
	glyph: "ਙ"
};
var ch$f = {
	type: "consonant",
	glyph: "ਚ"
};
var chh$f = {
	type: "consonant",
	glyph: "ਛ"
};
var j$f = {
	type: "consonant",
	glyph: "ਜ"
};
var jh$f = {
	type: "consonant",
	glyph: "ਝ"
};
var ny$f = {
	type: "consonant",
	glyph: "ਞ"
};
var T$f = {
	type: "consonant",
	glyph: "ਟ"
};
var Th$f = {
	type: "consonant",
	glyph: "ਠ"
};
var D$f = {
	type: "consonant",
	glyph: "ਡ"
};
var Dh$f = {
	type: "consonant",
	glyph: "ਢ"
};
var N$f = {
	type: "consonant",
	glyph: "ਣ"
};
var t$f = {
	type: "consonant",
	glyph: "ਤ"
};
var th$f = {
	type: "consonant",
	glyph: "ਥ"
};
var d$f = {
	type: "consonant",
	glyph: "ਦ"
};
var dh$f = {
	type: "consonant",
	glyph: "ਧ"
};
var n$f = {
	type: "consonant",
	glyph: "ਨ"
};
var p$f = {
	type: "consonant",
	glyph: "ਪ"
};
var ph$f = {
	type: "consonant",
	glyph: "ਫ"
};
var b$f = {
	type: "consonant",
	glyph: "ਬ"
};
var bh$f = {
	type: "consonant",
	glyph: "ਭ"
};
var m$f = {
	type: "consonant",
	glyph: "ਮ"
};
var y$f = {
	type: "consonant",
	glyph: "ਯ"
};
var r$f = {
	type: "consonant",
	glyph: "ਰ"
};
var l$f = {
	type: "consonant",
	glyph: "ਲ"
};
var v$f = {
	type: "consonant",
	glyph: "ਵ"
};
var sh$f = {
	type: "consonant",
	glyph: "ਸ਼"
};
var s$f = {
	type: "consonant",
	glyph: "ਸ"
};
var h$f = {
	type: "consonant",
	glyph: "ਹ"
};
var M$f = {
	type: "mark",
	glyph: "ਂ"
};
var MM$d = {
	type: "mark",
	glyph: "ਁ"
};
var H$f = {
	type: "mark",
	glyph: "ਃ"
};
var Sh$f = {
	type: "consonant",
	glyph: "ਸ਼"
};
var phonetic_base$7 = {
	a: a$f,
	aa: aa$f,
	i: i$f,
	ii: ii$f,
	u: u$f,
	uu: uu$f,
	e: e$f,
	ai: ai$f,
	o: o$f,
	au: au$f,
	k: k$f,
	kh: kh$f,
	g: g$f,
	gh: gh$f,
	ng: ng$f,
	ch: ch$f,
	chh: chh$f,
	j: j$f,
	jh: jh$f,
	ny: ny$f,
	T: T$f,
	Th: Th$f,
	D: D$f,
	Dh: Dh$f,
	N: N$f,
	t: t$f,
	th: th$f,
	d: d$f,
	dh: dh$f,
	n: n$f,
	p: p$f,
	ph: ph$f,
	b: b$f,
	bh: bh$f,
	m: m$f,
	y: y$f,
	r: r$f,
	l: l$f,
	v: v$f,
	sh: sh$f,
	s: s$f,
	h: h$f,
	M: M$f,
	MM: MM$d,
	H: H$f,
	Sh: Sh$f
};

var a$e = {
	type: "vowel",
	glyph: "ਅ",
	matra: ""
};
var A$7 = {
	type: "vowel",
	glyph: "ਆ",
	matra: "ਾ"
};
var aa$e = {
	type: "vowel",
	glyph: "ਆ",
	matra: "ਾ"
};
var i$e = {
	type: "vowel",
	glyph: "ਇ",
	matra: "ਿ"
};
var I$7 = {
	type: "vowel",
	glyph: "ਈ",
	matra: "ੀ"
};
var ii$e = {
	type: "vowel",
	glyph: "ਈ",
	matra: "ੀ"
};
var u$e = {
	type: "vowel",
	glyph: "ਉ",
	matra: "ੁ"
};
var U$7 = {
	type: "vowel",
	glyph: "ਊ",
	matra: "ੂ"
};
var uu$e = {
	type: "vowel",
	glyph: "ਊ",
	matra: "ੂ"
};
var e$e = {
	type: "vowel",
	glyph: "ਏ",
	matra: "ੇ"
};
var ai$e = {
	type: "vowel",
	glyph: "ਐ",
	matra: "ੈ"
};
var o$e = {
	type: "vowel",
	glyph: "ਓ",
	matra: "ੋ"
};
var au$e = {
	type: "vowel",
	glyph: "ਔ",
	matra: "ੌ"
};
var k$e = {
	type: "consonant",
	glyph: "ਕ"
};
var kh$e = {
	type: "consonant",
	glyph: "ਖ"
};
var g$e = {
	type: "consonant",
	glyph: "ਗ"
};
var gh$e = {
	type: "consonant",
	glyph: "ਘ"
};
var ng$e = {
	type: "consonant",
	glyph: "ਙ"
};
var ch$e = {
	type: "consonant",
	glyph: "ਚ"
};
var chh$e = {
	type: "consonant",
	glyph: "ਛ"
};
var j$e = {
	type: "consonant",
	glyph: "ਜ"
};
var jh$e = {
	type: "consonant",
	glyph: "ਝ"
};
var ny$e = {
	type: "consonant",
	glyph: "ਞ"
};
var T$e = {
	type: "consonant",
	glyph: "ਟ"
};
var Th$e = {
	type: "consonant",
	glyph: "ਠ"
};
var D$e = {
	type: "consonant",
	glyph: "ਡ"
};
var Dh$e = {
	type: "consonant",
	glyph: "ਢ"
};
var N$e = {
	type: "consonant",
	glyph: "ਣ"
};
var t$e = {
	type: "consonant",
	glyph: "ਤ"
};
var th$e = {
	type: "consonant",
	glyph: "ਥ"
};
var d$e = {
	type: "consonant",
	glyph: "ਦ"
};
var dh$e = {
	type: "consonant",
	glyph: "ਧ"
};
var n$e = {
	type: "consonant",
	glyph: "ਨ"
};
var p$e = {
	type: "consonant",
	glyph: "ਪ"
};
var ph$e = {
	type: "consonant",
	glyph: "ਫ"
};
var b$e = {
	type: "consonant",
	glyph: "ਬ"
};
var bh$e = {
	type: "consonant",
	glyph: "ਭ"
};
var m$e = {
	type: "consonant",
	glyph: "ਮ"
};
var y$e = {
	type: "consonant",
	glyph: "ਯ"
};
var r$e = {
	type: "consonant",
	glyph: "ਰ"
};
var l$e = {
	type: "consonant",
	glyph: "ਲ"
};
var v$e = {
	type: "consonant",
	glyph: "ਵ"
};
var w$7 = {
	type: "consonant",
	glyph: "ਵ"
};
var sh$e = {
	type: "consonant",
	glyph: "ਸ਼"
};
var S$7 = {
	type: "consonant",
	glyph: "ਸ਼"
};
var s$e = {
	type: "consonant",
	glyph: "ਸ"
};
var h$e = {
	type: "consonant",
	glyph: "ਹ"
};
var M$e = {
	type: "mark",
	glyph: "ਂ"
};
var MM$c = {
	type: "mark",
	glyph: "ਁ"
};
var H$e = {
	type: "mark",
	glyph: "ਃ"
};
var ksh$7 = {
	type: "conjunct",
	glyph: "ਕ੍ਸ਼"
};
var x$7 = {
	type: "conjunct",
	glyph: "ਕ੍ਸ਼"
};
var gy$7 = {
	type: "conjunct",
	glyph: "ਜ੍ਞ"
};
var dny$7 = {
	type: "conjunct",
	glyph: "ਜ੍ਞ"
};
var jn$7 = {
	type: "conjunct",
	glyph: "ਜ੍ਞ"
};
var tr$7 = {
	type: "conjunct",
	glyph: "ਤ੍ਰ"
};
var shr$7 = {
	type: "conjunct",
	glyph: "ਸ਼੍ਰ"
};
var z$5 = {
	type: "consonant",
	glyph: "ਜ਼"
};
var f$5 = {
	type: "consonant",
	glyph: "ਫ਼"
};
var Rr$4 = {
	type: "consonant",
	glyph: "ੜ"
};
var Rh$4 = {
	type: "consonant",
	glyph: "ੜ੍ਹ"
};
var Sh$e = {
	type: "consonant",
	glyph: "ਸ਼"
};
var phonetic_expanded$7 = {
	a: a$e,
	A: A$7,
	aa: aa$e,
	i: i$e,
	I: I$7,
	ii: ii$e,
	u: u$e,
	U: U$7,
	uu: uu$e,
	e: e$e,
	ai: ai$e,
	o: o$e,
	au: au$e,
	k: k$e,
	kh: kh$e,
	g: g$e,
	gh: gh$e,
	ng: ng$e,
	ch: ch$e,
	chh: chh$e,
	j: j$e,
	jh: jh$e,
	ny: ny$e,
	T: T$e,
	Th: Th$e,
	D: D$e,
	Dh: Dh$e,
	N: N$e,
	t: t$e,
	th: th$e,
	d: d$e,
	dh: dh$e,
	n: n$e,
	p: p$e,
	ph: ph$e,
	b: b$e,
	bh: bh$e,
	m: m$e,
	y: y$e,
	r: r$e,
	l: l$e,
	v: v$e,
	w: w$7,
	sh: sh$e,
	S: S$7,
	s: s$e,
	h: h$e,
	M: M$e,
	MM: MM$c,
	H: H$e,
	ksh: ksh$7,
	x: x$7,
	gy: gy$7,
	dny: dny$7,
	jn: jn$7,
	tr: tr$7,
	shr: shr$7,
	z: z$5,
	f: f$5,
	Rr: Rr$4,
	Rh: Rh$4,
	Sh: Sh$e
};

var a$d = {
	type: "vowel",
	glyph: "அ",
	matra: ""
};
var aa$d = {
	type: "vowel",
	glyph: "ஆ",
	matra: "ா"
};
var i$d = {
	type: "vowel",
	glyph: "இ",
	matra: "ி"
};
var ii$d = {
	type: "vowel",
	glyph: "ஈ",
	matra: "ீ"
};
var u$d = {
	type: "vowel",
	glyph: "உ",
	matra: "ு"
};
var uu$d = {
	type: "vowel",
	glyph: "ஊ",
	matra: "ூ"
};
var e$d = {
	type: "vowel",
	glyph: "எ",
	matra: "ெ"
};
var E$1 = {
	type: "vowel",
	glyph: "ஏ",
	matra: "ே"
};
var ee$1 = {
	type: "vowel",
	glyph: "ஏ",
	matra: "ே"
};
var ai$d = {
	type: "vowel",
	glyph: "ஐ",
	matra: "ை"
};
var o$d = {
	type: "vowel",
	glyph: "ஒ",
	matra: "ொ"
};
var O$1 = {
	type: "vowel",
	glyph: "ஓ",
	matra: "ோ"
};
var oo$1 = {
	type: "vowel",
	glyph: "ஓ",
	matra: "ோ"
};
var au$d = {
	type: "vowel",
	glyph: "ஔ",
	matra: "ௌ"
};
var k$d = {
	type: "consonant",
	glyph: "க"
};
var kh$d = {
	type: "consonant",
	glyph: "க"
};
var g$d = {
	type: "consonant",
	glyph: "க"
};
var gh$d = {
	type: "consonant",
	glyph: "க"
};
var ng$d = {
	type: "consonant",
	glyph: "ங"
};
var ch$d = {
	type: "consonant",
	glyph: "ச"
};
var chh$d = {
	type: "consonant",
	glyph: "ச"
};
var j$d = {
	type: "consonant",
	glyph: "ஜ"
};
var jh$d = {
	type: "consonant",
	glyph: "ச"
};
var ny$d = {
	type: "consonant",
	glyph: "ஞ"
};
var T$d = {
	type: "consonant",
	glyph: "ட"
};
var Th$d = {
	type: "consonant",
	glyph: "ட"
};
var D$d = {
	type: "consonant",
	glyph: "ட"
};
var Dh$d = {
	type: "consonant",
	glyph: "ட"
};
var N$d = {
	type: "consonant",
	glyph: "ண"
};
var t$d = {
	type: "consonant",
	glyph: "த"
};
var th$d = {
	type: "consonant",
	glyph: "த"
};
var d$d = {
	type: "consonant",
	glyph: "த"
};
var dh$d = {
	type: "consonant",
	glyph: "த"
};
var n$d = {
	type: "consonant",
	glyph: "ந"
};
var nn$1 = {
	type: "consonant",
	glyph: "ன"
};
var p$d = {
	type: "consonant",
	glyph: "ப"
};
var ph$d = {
	type: "consonant",
	glyph: "ப"
};
var b$d = {
	type: "consonant",
	glyph: "ப"
};
var bh$d = {
	type: "consonant",
	glyph: "ப"
};
var m$d = {
	type: "consonant",
	glyph: "ம"
};
var y$d = {
	type: "consonant",
	glyph: "ய"
};
var r$d = {
	type: "consonant",
	glyph: "ர"
};
var rr$1 = {
	type: "consonant",
	glyph: "ற"
};
var l$d = {
	type: "consonant",
	glyph: "ல"
};
var L$1 = {
	type: "consonant",
	glyph: "ள"
};
var ll$1 = {
	type: "consonant",
	glyph: "ள"
};
var zh$1 = {
	type: "consonant",
	glyph: "ழ"
};
var v$d = {
	type: "consonant",
	glyph: "வ"
};
var sh$d = {
	type: "consonant",
	glyph: "ஶ"
};
var Sh$d = {
	type: "consonant",
	glyph: "ஷ"
};
var s$d = {
	type: "consonant",
	glyph: "ஸ"
};
var h$d = {
	type: "consonant",
	glyph: "ஹ"
};
var M$d = {
	type: "mark",
	glyph: "ம்"
};
var H$d = {
	type: "mark",
	glyph: "ஃ"
};
var phonetic_base$6 = {
	a: a$d,
	aa: aa$d,
	i: i$d,
	ii: ii$d,
	u: u$d,
	uu: uu$d,
	e: e$d,
	E: E$1,
	ee: ee$1,
	ai: ai$d,
	o: o$d,
	O: O$1,
	oo: oo$1,
	au: au$d,
	k: k$d,
	kh: kh$d,
	g: g$d,
	gh: gh$d,
	ng: ng$d,
	ch: ch$d,
	chh: chh$d,
	j: j$d,
	jh: jh$d,
	ny: ny$d,
	T: T$d,
	Th: Th$d,
	D: D$d,
	Dh: Dh$d,
	N: N$d,
	t: t$d,
	th: th$d,
	d: d$d,
	dh: dh$d,
	n: n$d,
	nn: nn$1,
	p: p$d,
	ph: ph$d,
	b: b$d,
	bh: bh$d,
	m: m$d,
	y: y$d,
	r: r$d,
	rr: rr$1,
	l: l$d,
	L: L$1,
	ll: ll$1,
	zh: zh$1,
	v: v$d,
	sh: sh$d,
	Sh: Sh$d,
	s: s$d,
	h: h$d,
	M: M$d,
	H: H$d
};

var a$c = {
	type: "vowel",
	glyph: "அ",
	matra: ""
};
var A$6 = {
	type: "vowel",
	glyph: "ஆ",
	matra: "ா"
};
var aa$c = {
	type: "vowel",
	glyph: "ஆ",
	matra: "ா"
};
var i$c = {
	type: "vowel",
	glyph: "இ",
	matra: "ி"
};
var I$6 = {
	type: "vowel",
	glyph: "ஈ",
	matra: "ீ"
};
var ii$c = {
	type: "vowel",
	glyph: "ஈ",
	matra: "ீ"
};
var u$c = {
	type: "vowel",
	glyph: "உ",
	matra: "ு"
};
var U$6 = {
	type: "vowel",
	glyph: "ஊ",
	matra: "ூ"
};
var uu$c = {
	type: "vowel",
	glyph: "ஊ",
	matra: "ூ"
};
var e$c = {
	type: "vowel",
	glyph: "எ",
	matra: "ெ"
};
var E = {
	type: "vowel",
	glyph: "ஏ",
	matra: "ே"
};
var ee = {
	type: "vowel",
	glyph: "ஏ",
	matra: "ே"
};
var ai$c = {
	type: "vowel",
	glyph: "ஐ",
	matra: "ை"
};
var o$c = {
	type: "vowel",
	glyph: "ஒ",
	matra: "ொ"
};
var O = {
	type: "vowel",
	glyph: "ஓ",
	matra: "ோ"
};
var oo = {
	type: "vowel",
	glyph: "ஓ",
	matra: "ோ"
};
var au$c = {
	type: "vowel",
	glyph: "ஔ",
	matra: "ௌ"
};
var k$c = {
	type: "consonant",
	glyph: "க"
};
var kh$c = {
	type: "consonant",
	glyph: "க"
};
var g$c = {
	type: "consonant",
	glyph: "க"
};
var gh$c = {
	type: "consonant",
	glyph: "க"
};
var ng$c = {
	type: "consonant",
	glyph: "ங"
};
var ch$c = {
	type: "consonant",
	glyph: "ச"
};
var chh$c = {
	type: "consonant",
	glyph: "ச"
};
var j$c = {
	type: "consonant",
	glyph: "ஜ"
};
var jh$c = {
	type: "consonant",
	glyph: "ச"
};
var ny$c = {
	type: "consonant",
	glyph: "ஞ"
};
var T$c = {
	type: "consonant",
	glyph: "ட"
};
var Th$c = {
	type: "consonant",
	glyph: "ட"
};
var D$c = {
	type: "consonant",
	glyph: "ட"
};
var Dh$c = {
	type: "consonant",
	glyph: "ட"
};
var N$c = {
	type: "consonant",
	glyph: "ண"
};
var t$c = {
	type: "consonant",
	glyph: "த"
};
var th$c = {
	type: "consonant",
	glyph: "த"
};
var d$c = {
	type: "consonant",
	glyph: "த"
};
var dh$c = {
	type: "consonant",
	glyph: "த"
};
var n$c = {
	type: "consonant",
	glyph: "ந"
};
var nn = {
	type: "consonant",
	glyph: "ன"
};
var p$c = {
	type: "consonant",
	glyph: "ப"
};
var ph$c = {
	type: "consonant",
	glyph: "ப"
};
var b$c = {
	type: "consonant",
	glyph: "ப"
};
var bh$c = {
	type: "consonant",
	glyph: "ப"
};
var m$c = {
	type: "consonant",
	glyph: "ம"
};
var y$c = {
	type: "consonant",
	glyph: "ய"
};
var r$c = {
	type: "consonant",
	glyph: "ர"
};
var rr = {
	type: "consonant",
	glyph: "ற"
};
var l$c = {
	type: "consonant",
	glyph: "ல"
};
var L = {
	type: "consonant",
	glyph: "ள"
};
var ll = {
	type: "consonant",
	glyph: "ள"
};
var zh = {
	type: "consonant",
	glyph: "ழ"
};
var v$c = {
	type: "consonant",
	glyph: "வ"
};
var w$6 = {
	type: "consonant",
	glyph: "வ"
};
var sh$c = {
	type: "consonant",
	glyph: "ஶ"
};
var S$6 = {
	type: "consonant",
	glyph: "ஶ"
};
var Sh$c = {
	type: "consonant",
	glyph: "ஷ"
};
var s$c = {
	type: "consonant",
	glyph: "ஸ"
};
var h$c = {
	type: "consonant",
	glyph: "ஹ"
};
var M$c = {
	type: "mark",
	glyph: "ம்"
};
var H$c = {
	type: "mark",
	glyph: "ஃ"
};
var ksh$6 = {
	type: "conjunct",
	glyph: "க்ஷ"
};
var x$6 = {
	type: "conjunct",
	glyph: "க்ஷ"
};
var gy$6 = {
	type: "conjunct",
	glyph: "ஜ்ஞ"
};
var dny$6 = {
	type: "conjunct",
	glyph: "ஜ்ஞ"
};
var jn$6 = {
	type: "conjunct",
	glyph: "ஜ்ஞ"
};
var tr$6 = {
	type: "conjunct",
	glyph: "த்ர"
};
var shr$6 = {
	type: "conjunct",
	glyph: "ஶ்ர"
};
var z$4 = {
	type: "consonant",
	glyph: "ஃஜ"
};
var f$4 = {
	type: "consonant",
	glyph: "ஃப"
};
var phonetic_expanded$6 = {
	a: a$c,
	A: A$6,
	aa: aa$c,
	i: i$c,
	I: I$6,
	ii: ii$c,
	u: u$c,
	U: U$6,
	uu: uu$c,
	e: e$c,
	E: E,
	ee: ee,
	ai: ai$c,
	o: o$c,
	O: O,
	oo: oo,
	au: au$c,
	k: k$c,
	kh: kh$c,
	g: g$c,
	gh: gh$c,
	ng: ng$c,
	ch: ch$c,
	chh: chh$c,
	j: j$c,
	jh: jh$c,
	ny: ny$c,
	T: T$c,
	Th: Th$c,
	D: D$c,
	Dh: Dh$c,
	N: N$c,
	t: t$c,
	th: th$c,
	d: d$c,
	dh: dh$c,
	n: n$c,
	nn: nn,
	p: p$c,
	ph: ph$c,
	b: b$c,
	bh: bh$c,
	m: m$c,
	y: y$c,
	r: r$c,
	rr: rr,
	l: l$c,
	L: L,
	ll: ll,
	zh: zh,
	v: v$c,
	w: w$6,
	sh: sh$c,
	S: S$6,
	Sh: Sh$c,
	s: s$c,
	h: h$c,
	M: M$c,
	H: H$c,
	ksh: ksh$6,
	x: x$6,
	gy: gy$6,
	dny: dny$6,
	jn: jn$6,
	tr: tr$6,
	shr: shr$6,
	z: z$4,
	f: f$4
};

var a$b = {
	type: "vowel",
	glyph: "అ",
	matra: ""
};
var aa$b = {
	type: "vowel",
	glyph: "ఆ",
	matra: "ా"
};
var i$b = {
	type: "vowel",
	glyph: "ఇ",
	matra: "ి"
};
var ii$b = {
	type: "vowel",
	glyph: "ఈ",
	matra: "ీ"
};
var u$b = {
	type: "vowel",
	glyph: "ఉ",
	matra: "ు"
};
var uu$b = {
	type: "vowel",
	glyph: "ఊ",
	matra: "ూ"
};
var ri$b = {
	type: "vowel",
	glyph: "ఋ",
	matra: "ృ"
};
var e$b = {
	type: "vowel",
	glyph: "ఏ",
	matra: "ే"
};
var ai$b = {
	type: "vowel",
	glyph: "ఐ",
	matra: "ై"
};
var o$b = {
	type: "vowel",
	glyph: "ఓ",
	matra: "ో"
};
var au$b = {
	type: "vowel",
	glyph: "ఔ",
	matra: "ౌ"
};
var k$b = {
	type: "consonant",
	glyph: "క"
};
var kh$b = {
	type: "consonant",
	glyph: "ఖ"
};
var g$b = {
	type: "consonant",
	glyph: "గ"
};
var gh$b = {
	type: "consonant",
	glyph: "ఘ"
};
var ng$b = {
	type: "consonant",
	glyph: "ఙ"
};
var ch$b = {
	type: "consonant",
	glyph: "చ"
};
var chh$b = {
	type: "consonant",
	glyph: "ఛ"
};
var j$b = {
	type: "consonant",
	glyph: "జ"
};
var jh$b = {
	type: "consonant",
	glyph: "ఝ"
};
var ny$b = {
	type: "consonant",
	glyph: "ఞ"
};
var T$b = {
	type: "consonant",
	glyph: "ట"
};
var Th$b = {
	type: "consonant",
	glyph: "ఠ"
};
var D$b = {
	type: "consonant",
	glyph: "డ"
};
var Dh$b = {
	type: "consonant",
	glyph: "ఢ"
};
var N$b = {
	type: "consonant",
	glyph: "ణ"
};
var t$b = {
	type: "consonant",
	glyph: "త"
};
var th$b = {
	type: "consonant",
	glyph: "థ"
};
var d$b = {
	type: "consonant",
	glyph: "ద"
};
var dh$b = {
	type: "consonant",
	glyph: "ధ"
};
var n$b = {
	type: "consonant",
	glyph: "న"
};
var p$b = {
	type: "consonant",
	glyph: "ప"
};
var ph$b = {
	type: "consonant",
	glyph: "ఫ"
};
var b$b = {
	type: "consonant",
	glyph: "బ"
};
var bh$b = {
	type: "consonant",
	glyph: "భ"
};
var m$b = {
	type: "consonant",
	glyph: "మ"
};
var y$b = {
	type: "consonant",
	glyph: "య"
};
var r$b = {
	type: "consonant",
	glyph: "ర"
};
var l$b = {
	type: "consonant",
	glyph: "ల"
};
var v$b = {
	type: "consonant",
	glyph: "వ"
};
var sh$b = {
	type: "consonant",
	glyph: "శ"
};
var Sh$b = {
	type: "consonant",
	glyph: "ష"
};
var s$b = {
	type: "consonant",
	glyph: "స"
};
var h$b = {
	type: "consonant",
	glyph: "హ"
};
var M$b = {
	type: "mark",
	glyph: "ం"
};
var MM$b = {
	type: "mark",
	glyph: "ఁ"
};
var H$b = {
	type: "mark",
	glyph: "ః"
};
var phonetic_base$5 = {
	a: a$b,
	aa: aa$b,
	i: i$b,
	ii: ii$b,
	u: u$b,
	uu: uu$b,
	ri: ri$b,
	e: e$b,
	ai: ai$b,
	o: o$b,
	au: au$b,
	k: k$b,
	kh: kh$b,
	g: g$b,
	gh: gh$b,
	ng: ng$b,
	ch: ch$b,
	chh: chh$b,
	j: j$b,
	jh: jh$b,
	ny: ny$b,
	T: T$b,
	Th: Th$b,
	D: D$b,
	Dh: Dh$b,
	N: N$b,
	t: t$b,
	th: th$b,
	d: d$b,
	dh: dh$b,
	n: n$b,
	p: p$b,
	ph: ph$b,
	b: b$b,
	bh: bh$b,
	m: m$b,
	y: y$b,
	r: r$b,
	l: l$b,
	v: v$b,
	sh: sh$b,
	Sh: Sh$b,
	s: s$b,
	h: h$b,
	M: M$b,
	MM: MM$b,
	H: H$b
};

var a$a = {
	type: "vowel",
	glyph: "అ",
	matra: ""
};
var A$5 = {
	type: "vowel",
	glyph: "ఆ",
	matra: "ా"
};
var aa$a = {
	type: "vowel",
	glyph: "ఆ",
	matra: "ా"
};
var i$a = {
	type: "vowel",
	glyph: "ఇ",
	matra: "ి"
};
var I$5 = {
	type: "vowel",
	glyph: "ఈ",
	matra: "ీ"
};
var ii$a = {
	type: "vowel",
	glyph: "ఈ",
	matra: "ీ"
};
var u$a = {
	type: "vowel",
	glyph: "ఉ",
	matra: "ు"
};
var U$5 = {
	type: "vowel",
	glyph: "ఊ",
	matra: "ూ"
};
var uu$a = {
	type: "vowel",
	glyph: "ఊ",
	matra: "ూ"
};
var ri$a = {
	type: "vowel",
	glyph: "ఋ",
	matra: "ృ"
};
var R$5 = {
	type: "vowel",
	glyph: "ఋ",
	matra: "ృ"
};
var e$a = {
	type: "vowel",
	glyph: "ఏ",
	matra: "ే"
};
var ai$a = {
	type: "vowel",
	glyph: "ఐ",
	matra: "ై"
};
var o$a = {
	type: "vowel",
	glyph: "ఓ",
	matra: "ో"
};
var au$a = {
	type: "vowel",
	glyph: "ఔ",
	matra: "ౌ"
};
var k$a = {
	type: "consonant",
	glyph: "క"
};
var kh$a = {
	type: "consonant",
	glyph: "ఖ"
};
var g$a = {
	type: "consonant",
	glyph: "గ"
};
var gh$a = {
	type: "consonant",
	glyph: "ఘ"
};
var ng$a = {
	type: "consonant",
	glyph: "ఙ"
};
var ch$a = {
	type: "consonant",
	glyph: "చ"
};
var chh$a = {
	type: "consonant",
	glyph: "ఛ"
};
var j$a = {
	type: "consonant",
	glyph: "జ"
};
var jh$a = {
	type: "consonant",
	glyph: "ఝ"
};
var ny$a = {
	type: "consonant",
	glyph: "ఞ"
};
var T$a = {
	type: "consonant",
	glyph: "ట"
};
var Th$a = {
	type: "consonant",
	glyph: "ఠ"
};
var D$a = {
	type: "consonant",
	glyph: "డ"
};
var Dh$a = {
	type: "consonant",
	glyph: "ఢ"
};
var N$a = {
	type: "consonant",
	glyph: "ణ"
};
var t$a = {
	type: "consonant",
	glyph: "త"
};
var th$a = {
	type: "consonant",
	glyph: "థ"
};
var d$a = {
	type: "consonant",
	glyph: "ద"
};
var dh$a = {
	type: "consonant",
	glyph: "ధ"
};
var n$a = {
	type: "consonant",
	glyph: "న"
};
var p$a = {
	type: "consonant",
	glyph: "ప"
};
var ph$a = {
	type: "consonant",
	glyph: "ఫ"
};
var b$a = {
	type: "consonant",
	glyph: "బ"
};
var bh$a = {
	type: "consonant",
	glyph: "భ"
};
var m$a = {
	type: "consonant",
	glyph: "మ"
};
var y$a = {
	type: "consonant",
	glyph: "య"
};
var r$a = {
	type: "consonant",
	glyph: "ర"
};
var l$a = {
	type: "consonant",
	glyph: "ల"
};
var v$a = {
	type: "consonant",
	glyph: "వ"
};
var w$5 = {
	type: "consonant",
	glyph: "వ"
};
var sh$a = {
	type: "consonant",
	glyph: "శ"
};
var S$5 = {
	type: "consonant",
	glyph: "శ"
};
var Sh$a = {
	type: "consonant",
	glyph: "ష"
};
var s$a = {
	type: "consonant",
	glyph: "స"
};
var h$a = {
	type: "consonant",
	glyph: "హ"
};
var M$a = {
	type: "mark",
	glyph: "ం"
};
var MM$a = {
	type: "mark",
	glyph: "ఁ"
};
var H$a = {
	type: "mark",
	glyph: "ః"
};
var ksh$5 = {
	type: "conjunct",
	glyph: "క్ష"
};
var x$5 = {
	type: "conjunct",
	glyph: "క్ష"
};
var gy$5 = {
	type: "conjunct",
	glyph: "జ్ఞ"
};
var dny$5 = {
	type: "conjunct",
	glyph: "జ్ఞ"
};
var jn$5 = {
	type: "conjunct",
	glyph: "జ్ఞ"
};
var tr$5 = {
	type: "conjunct",
	glyph: "త్ర"
};
var shr$5 = {
	type: "conjunct",
	glyph: "శ్ర"
};
var phonetic_expanded$5 = {
	a: a$a,
	A: A$5,
	aa: aa$a,
	i: i$a,
	I: I$5,
	ii: ii$a,
	u: u$a,
	U: U$5,
	uu: uu$a,
	ri: ri$a,
	R: R$5,
	e: e$a,
	ai: ai$a,
	o: o$a,
	au: au$a,
	k: k$a,
	kh: kh$a,
	g: g$a,
	gh: gh$a,
	ng: ng$a,
	ch: ch$a,
	chh: chh$a,
	j: j$a,
	jh: jh$a,
	ny: ny$a,
	T: T$a,
	Th: Th$a,
	D: D$a,
	Dh: Dh$a,
	N: N$a,
	t: t$a,
	th: th$a,
	d: d$a,
	dh: dh$a,
	n: n$a,
	p: p$a,
	ph: ph$a,
	b: b$a,
	bh: bh$a,
	m: m$a,
	y: y$a,
	r: r$a,
	l: l$a,
	v: v$a,
	w: w$5,
	sh: sh$a,
	S: S$5,
	Sh: Sh$a,
	s: s$a,
	h: h$a,
	M: M$a,
	MM: MM$a,
	H: H$a,
	ksh: ksh$5,
	x: x$5,
	gy: gy$5,
	dny: dny$5,
	jn: jn$5,
	tr: tr$5,
	shr: shr$5
};

var a$9 = {
	type: "vowel",
	glyph: "ಅ",
	matra: ""
};
var aa$9 = {
	type: "vowel",
	glyph: "ಆ",
	matra: "ಾ"
};
var i$9 = {
	type: "vowel",
	glyph: "ಇ",
	matra: "ಿ"
};
var ii$9 = {
	type: "vowel",
	glyph: "ಈ",
	matra: "ೀ"
};
var u$9 = {
	type: "vowel",
	glyph: "ಉ",
	matra: "ು"
};
var uu$9 = {
	type: "vowel",
	glyph: "ಊ",
	matra: "ೂ"
};
var ri$9 = {
	type: "vowel",
	glyph: "ಋ",
	matra: "ೃ"
};
var e$9 = {
	type: "vowel",
	glyph: "ಏ",
	matra: "ೇ"
};
var ai$9 = {
	type: "vowel",
	glyph: "ಐ",
	matra: "ೈ"
};
var o$9 = {
	type: "vowel",
	glyph: "ಓ",
	matra: "ೋ"
};
var au$9 = {
	type: "vowel",
	glyph: "ಔ",
	matra: "ೌ"
};
var k$9 = {
	type: "consonant",
	glyph: "ಕ"
};
var kh$9 = {
	type: "consonant",
	glyph: "ಖ"
};
var g$9 = {
	type: "consonant",
	glyph: "ಗ"
};
var gh$9 = {
	type: "consonant",
	glyph: "ಘ"
};
var ng$9 = {
	type: "consonant",
	glyph: "ಙ"
};
var ch$9 = {
	type: "consonant",
	glyph: "ಚ"
};
var chh$9 = {
	type: "consonant",
	glyph: "ಛ"
};
var j$9 = {
	type: "consonant",
	glyph: "ಜ"
};
var jh$9 = {
	type: "consonant",
	glyph: "ಝ"
};
var ny$9 = {
	type: "consonant",
	glyph: "ಞ"
};
var T$9 = {
	type: "consonant",
	glyph: "ಟ"
};
var Th$9 = {
	type: "consonant",
	glyph: "ಠ"
};
var D$9 = {
	type: "consonant",
	glyph: "ಡ"
};
var Dh$9 = {
	type: "consonant",
	glyph: "ಢ"
};
var N$9 = {
	type: "consonant",
	glyph: "ಣ"
};
var t$9 = {
	type: "consonant",
	glyph: "ತ"
};
var th$9 = {
	type: "consonant",
	glyph: "ಥ"
};
var d$9 = {
	type: "consonant",
	glyph: "ದ"
};
var dh$9 = {
	type: "consonant",
	glyph: "ಧ"
};
var n$9 = {
	type: "consonant",
	glyph: "ನ"
};
var p$9 = {
	type: "consonant",
	glyph: "ಪ"
};
var ph$9 = {
	type: "consonant",
	glyph: "ಫ"
};
var b$9 = {
	type: "consonant",
	glyph: "ಬ"
};
var bh$9 = {
	type: "consonant",
	glyph: "ಭ"
};
var m$9 = {
	type: "consonant",
	glyph: "ಮ"
};
var y$9 = {
	type: "consonant",
	glyph: "ಯ"
};
var r$9 = {
	type: "consonant",
	glyph: "ರ"
};
var l$9 = {
	type: "consonant",
	glyph: "ಲ"
};
var v$9 = {
	type: "consonant",
	glyph: "ವ"
};
var sh$9 = {
	type: "consonant",
	glyph: "ಶ"
};
var Sh$9 = {
	type: "consonant",
	glyph: "ಷ"
};
var s$9 = {
	type: "consonant",
	glyph: "ಸ"
};
var h$9 = {
	type: "consonant",
	glyph: "ಹ"
};
var M$9 = {
	type: "mark",
	glyph: "ಂ"
};
var MM$9 = {
	type: "mark",
	glyph: "ಁ"
};
var H$9 = {
	type: "mark",
	glyph: "ಃ"
};
var phonetic_base$4 = {
	a: a$9,
	aa: aa$9,
	i: i$9,
	ii: ii$9,
	u: u$9,
	uu: uu$9,
	ri: ri$9,
	e: e$9,
	ai: ai$9,
	o: o$9,
	au: au$9,
	k: k$9,
	kh: kh$9,
	g: g$9,
	gh: gh$9,
	ng: ng$9,
	ch: ch$9,
	chh: chh$9,
	j: j$9,
	jh: jh$9,
	ny: ny$9,
	T: T$9,
	Th: Th$9,
	D: D$9,
	Dh: Dh$9,
	N: N$9,
	t: t$9,
	th: th$9,
	d: d$9,
	dh: dh$9,
	n: n$9,
	p: p$9,
	ph: ph$9,
	b: b$9,
	bh: bh$9,
	m: m$9,
	y: y$9,
	r: r$9,
	l: l$9,
	v: v$9,
	sh: sh$9,
	Sh: Sh$9,
	s: s$9,
	h: h$9,
	M: M$9,
	MM: MM$9,
	H: H$9
};

var a$8 = {
	type: "vowel",
	glyph: "ಅ",
	matra: ""
};
var A$4 = {
	type: "vowel",
	glyph: "ಆ",
	matra: "ಾ"
};
var aa$8 = {
	type: "vowel",
	glyph: "ಆ",
	matra: "ಾ"
};
var i$8 = {
	type: "vowel",
	glyph: "ಇ",
	matra: "ಿ"
};
var I$4 = {
	type: "vowel",
	glyph: "ಈ",
	matra: "ೀ"
};
var ii$8 = {
	type: "vowel",
	glyph: "ಈ",
	matra: "ೀ"
};
var u$8 = {
	type: "vowel",
	glyph: "ಉ",
	matra: "ು"
};
var U$4 = {
	type: "vowel",
	glyph: "ಊ",
	matra: "ೂ"
};
var uu$8 = {
	type: "vowel",
	glyph: "ಊ",
	matra: "ೂ"
};
var ri$8 = {
	type: "vowel",
	glyph: "ಋ",
	matra: "ೃ"
};
var R$4 = {
	type: "vowel",
	glyph: "ಋ",
	matra: "ೃ"
};
var e$8 = {
	type: "vowel",
	glyph: "ಏ",
	matra: "ೇ"
};
var ai$8 = {
	type: "vowel",
	glyph: "ಐ",
	matra: "ೈ"
};
var o$8 = {
	type: "vowel",
	glyph: "ಓ",
	matra: "ೋ"
};
var au$8 = {
	type: "vowel",
	glyph: "ಔ",
	matra: "ೌ"
};
var k$8 = {
	type: "consonant",
	glyph: "ಕ"
};
var kh$8 = {
	type: "consonant",
	glyph: "ಖ"
};
var g$8 = {
	type: "consonant",
	glyph: "ಗ"
};
var gh$8 = {
	type: "consonant",
	glyph: "ಘ"
};
var ng$8 = {
	type: "consonant",
	glyph: "ಙ"
};
var ch$8 = {
	type: "consonant",
	glyph: "ಚ"
};
var chh$8 = {
	type: "consonant",
	glyph: "ಛ"
};
var j$8 = {
	type: "consonant",
	glyph: "ಜ"
};
var jh$8 = {
	type: "consonant",
	glyph: "ಝ"
};
var ny$8 = {
	type: "consonant",
	glyph: "ಞ"
};
var T$8 = {
	type: "consonant",
	glyph: "ಟ"
};
var Th$8 = {
	type: "consonant",
	glyph: "ಠ"
};
var D$8 = {
	type: "consonant",
	glyph: "ಡ"
};
var Dh$8 = {
	type: "consonant",
	glyph: "ಢ"
};
var N$8 = {
	type: "consonant",
	glyph: "ಣ"
};
var t$8 = {
	type: "consonant",
	glyph: "ತ"
};
var th$8 = {
	type: "consonant",
	glyph: "ಥ"
};
var d$8 = {
	type: "consonant",
	glyph: "ದ"
};
var dh$8 = {
	type: "consonant",
	glyph: "ಧ"
};
var n$8 = {
	type: "consonant",
	glyph: "ನ"
};
var p$8 = {
	type: "consonant",
	glyph: "ಪ"
};
var ph$8 = {
	type: "consonant",
	glyph: "ಫ"
};
var b$8 = {
	type: "consonant",
	glyph: "ಬ"
};
var bh$8 = {
	type: "consonant",
	glyph: "ಭ"
};
var m$8 = {
	type: "consonant",
	glyph: "ಮ"
};
var y$8 = {
	type: "consonant",
	glyph: "ಯ"
};
var r$8 = {
	type: "consonant",
	glyph: "ರ"
};
var l$8 = {
	type: "consonant",
	glyph: "ಲ"
};
var v$8 = {
	type: "consonant",
	glyph: "ವ"
};
var w$4 = {
	type: "consonant",
	glyph: "ವ"
};
var sh$8 = {
	type: "consonant",
	glyph: "ಶ"
};
var S$4 = {
	type: "consonant",
	glyph: "ಶ"
};
var Sh$8 = {
	type: "consonant",
	glyph: "ಷ"
};
var s$8 = {
	type: "consonant",
	glyph: "ಸ"
};
var h$8 = {
	type: "consonant",
	glyph: "ಹ"
};
var M$8 = {
	type: "mark",
	glyph: "ಂ"
};
var MM$8 = {
	type: "mark",
	glyph: "ಁ"
};
var H$8 = {
	type: "mark",
	glyph: "ಃ"
};
var ksh$4 = {
	type: "conjunct",
	glyph: "ಕ್ಷ"
};
var x$4 = {
	type: "conjunct",
	glyph: "ಕ್ಷ"
};
var gy$4 = {
	type: "conjunct",
	glyph: "ಜ್ಞ"
};
var dny$4 = {
	type: "conjunct",
	glyph: "ಜ್ಞ"
};
var jn$4 = {
	type: "conjunct",
	glyph: "ಜ್ಞ"
};
var tr$4 = {
	type: "conjunct",
	glyph: "ತ್ರ"
};
var shr$4 = {
	type: "conjunct",
	glyph: "ಶ್ರ"
};
var z$3 = {
	type: "consonant",
	glyph: "ಸ಼"
};
var f$3 = {
	type: "consonant",
	glyph: "ಫ಼"
};
var Rr$3 = {
	type: "consonant",
	glyph: "ಡ಼"
};
var Rh$3 = {
	type: "consonant",
	glyph: "ಢ಼"
};
var phonetic_expanded$4 = {
	a: a$8,
	A: A$4,
	aa: aa$8,
	i: i$8,
	I: I$4,
	ii: ii$8,
	u: u$8,
	U: U$4,
	uu: uu$8,
	ri: ri$8,
	R: R$4,
	e: e$8,
	ai: ai$8,
	o: o$8,
	au: au$8,
	k: k$8,
	kh: kh$8,
	g: g$8,
	gh: gh$8,
	ng: ng$8,
	ch: ch$8,
	chh: chh$8,
	j: j$8,
	jh: jh$8,
	ny: ny$8,
	T: T$8,
	Th: Th$8,
	D: D$8,
	Dh: Dh$8,
	N: N$8,
	t: t$8,
	th: th$8,
	d: d$8,
	dh: dh$8,
	n: n$8,
	p: p$8,
	ph: ph$8,
	b: b$8,
	bh: bh$8,
	m: m$8,
	y: y$8,
	r: r$8,
	l: l$8,
	v: v$8,
	w: w$4,
	sh: sh$8,
	S: S$4,
	Sh: Sh$8,
	s: s$8,
	h: h$8,
	M: M$8,
	MM: MM$8,
	H: H$8,
	ksh: ksh$4,
	x: x$4,
	gy: gy$4,
	dny: dny$4,
	jn: jn$4,
	tr: tr$4,
	shr: shr$4,
	z: z$3,
	f: f$3,
	Rr: Rr$3,
	Rh: Rh$3
};

var a$7 = {
	type: "vowel",
	glyph: "അ",
	matra: ""
};
var aa$7 = {
	type: "vowel",
	glyph: "ആ",
	matra: "ാ"
};
var i$7 = {
	type: "vowel",
	glyph: "ഇ",
	matra: "ി"
};
var ii$7 = {
	type: "vowel",
	glyph: "ഈ",
	matra: "ീ"
};
var u$7 = {
	type: "vowel",
	glyph: "ഉ",
	matra: "ു"
};
var uu$7 = {
	type: "vowel",
	glyph: "ഊ",
	matra: "ൂ"
};
var ri$7 = {
	type: "vowel",
	glyph: "ഋ",
	matra: "ൃ"
};
var e$7 = {
	type: "vowel",
	glyph: "ഏ",
	matra: "േ"
};
var ai$7 = {
	type: "vowel",
	glyph: "ഐ",
	matra: "ൈ"
};
var o$7 = {
	type: "vowel",
	glyph: "ഓ",
	matra: "ോ"
};
var au$7 = {
	type: "vowel",
	glyph: "ഔ",
	matra: "ൌ"
};
var k$7 = {
	type: "consonant",
	glyph: "ക"
};
var kh$7 = {
	type: "consonant",
	glyph: "ഖ"
};
var g$7 = {
	type: "consonant",
	glyph: "ഗ"
};
var gh$7 = {
	type: "consonant",
	glyph: "ഘ"
};
var ng$7 = {
	type: "consonant",
	glyph: "ങ"
};
var ch$7 = {
	type: "consonant",
	glyph: "ച"
};
var chh$7 = {
	type: "consonant",
	glyph: "ഛ"
};
var j$7 = {
	type: "consonant",
	glyph: "ജ"
};
var jh$7 = {
	type: "consonant",
	glyph: "ഝ"
};
var ny$7 = {
	type: "consonant",
	glyph: "ഞ"
};
var T$7 = {
	type: "consonant",
	glyph: "ട"
};
var Th$7 = {
	type: "consonant",
	glyph: "ഠ"
};
var D$7 = {
	type: "consonant",
	glyph: "ഡ"
};
var Dh$7 = {
	type: "consonant",
	glyph: "ഢ"
};
var N$7 = {
	type: "consonant",
	glyph: "ണ"
};
var t$7 = {
	type: "consonant",
	glyph: "ത"
};
var th$7 = {
	type: "consonant",
	glyph: "ഥ"
};
var d$7 = {
	type: "consonant",
	glyph: "ദ"
};
var dh$7 = {
	type: "consonant",
	glyph: "ധ"
};
var n$7 = {
	type: "consonant",
	glyph: "ന"
};
var p$7 = {
	type: "consonant",
	glyph: "പ"
};
var ph$7 = {
	type: "consonant",
	glyph: "ഫ"
};
var b$7 = {
	type: "consonant",
	glyph: "ബ"
};
var bh$7 = {
	type: "consonant",
	glyph: "ഭ"
};
var m$7 = {
	type: "consonant",
	glyph: "മ"
};
var y$7 = {
	type: "consonant",
	glyph: "യ"
};
var r$7 = {
	type: "consonant",
	glyph: "ര"
};
var l$7 = {
	type: "consonant",
	glyph: "ല"
};
var v$7 = {
	type: "consonant",
	glyph: "വ"
};
var sh$7 = {
	type: "consonant",
	glyph: "ശ"
};
var Sh$7 = {
	type: "consonant",
	glyph: "ഷ"
};
var s$7 = {
	type: "consonant",
	glyph: "സ"
};
var h$7 = {
	type: "consonant",
	glyph: "ഹ"
};
var M$7 = {
	type: "mark",
	glyph: "ം"
};
var MM$7 = {
	type: "mark",
	glyph: "ഁ"
};
var H$7 = {
	type: "mark",
	glyph: "ഃ"
};
var phonetic_base$3 = {
	a: a$7,
	aa: aa$7,
	i: i$7,
	ii: ii$7,
	u: u$7,
	uu: uu$7,
	ri: ri$7,
	e: e$7,
	ai: ai$7,
	o: o$7,
	au: au$7,
	k: k$7,
	kh: kh$7,
	g: g$7,
	gh: gh$7,
	ng: ng$7,
	ch: ch$7,
	chh: chh$7,
	j: j$7,
	jh: jh$7,
	ny: ny$7,
	T: T$7,
	Th: Th$7,
	D: D$7,
	Dh: Dh$7,
	N: N$7,
	t: t$7,
	th: th$7,
	d: d$7,
	dh: dh$7,
	n: n$7,
	p: p$7,
	ph: ph$7,
	b: b$7,
	bh: bh$7,
	m: m$7,
	y: y$7,
	r: r$7,
	l: l$7,
	v: v$7,
	sh: sh$7,
	Sh: Sh$7,
	s: s$7,
	h: h$7,
	M: M$7,
	MM: MM$7,
	H: H$7
};

var a$6 = {
	type: "vowel",
	glyph: "അ",
	matra: ""
};
var A$3 = {
	type: "vowel",
	glyph: "ആ",
	matra: "ാ"
};
var aa$6 = {
	type: "vowel",
	glyph: "ആ",
	matra: "ാ"
};
var i$6 = {
	type: "vowel",
	glyph: "ഇ",
	matra: "ി"
};
var I$3 = {
	type: "vowel",
	glyph: "ഈ",
	matra: "ീ"
};
var ii$6 = {
	type: "vowel",
	glyph: "ഈ",
	matra: "ീ"
};
var u$6 = {
	type: "vowel",
	glyph: "ഉ",
	matra: "ു"
};
var U$3 = {
	type: "vowel",
	glyph: "ഊ",
	matra: "ൂ"
};
var uu$6 = {
	type: "vowel",
	glyph: "ഊ",
	matra: "ൂ"
};
var ri$6 = {
	type: "vowel",
	glyph: "ഋ",
	matra: "ൃ"
};
var R$3 = {
	type: "vowel",
	glyph: "ഋ",
	matra: "ൃ"
};
var e$6 = {
	type: "vowel",
	glyph: "ഏ",
	matra: "േ"
};
var ai$6 = {
	type: "vowel",
	glyph: "ഐ",
	matra: "ൈ"
};
var o$6 = {
	type: "vowel",
	glyph: "ഓ",
	matra: "ോ"
};
var au$6 = {
	type: "vowel",
	glyph: "ഔ",
	matra: "ൌ"
};
var k$6 = {
	type: "consonant",
	glyph: "ക"
};
var kh$6 = {
	type: "consonant",
	glyph: "ഖ"
};
var g$6 = {
	type: "consonant",
	glyph: "ഗ"
};
var gh$6 = {
	type: "consonant",
	glyph: "ഘ"
};
var ng$6 = {
	type: "consonant",
	glyph: "ങ"
};
var ch$6 = {
	type: "consonant",
	glyph: "ച"
};
var chh$6 = {
	type: "consonant",
	glyph: "ഛ"
};
var j$6 = {
	type: "consonant",
	glyph: "ജ"
};
var jh$6 = {
	type: "consonant",
	glyph: "ഝ"
};
var ny$6 = {
	type: "consonant",
	glyph: "ഞ"
};
var T$6 = {
	type: "consonant",
	glyph: "ട"
};
var Th$6 = {
	type: "consonant",
	glyph: "ഠ"
};
var D$6 = {
	type: "consonant",
	glyph: "ഡ"
};
var Dh$6 = {
	type: "consonant",
	glyph: "ഢ"
};
var N$6 = {
	type: "consonant",
	glyph: "ണ"
};
var t$6 = {
	type: "consonant",
	glyph: "ത"
};
var th$6 = {
	type: "consonant",
	glyph: "ഥ"
};
var d$6 = {
	type: "consonant",
	glyph: "ദ"
};
var dh$6 = {
	type: "consonant",
	glyph: "ധ"
};
var n$6 = {
	type: "consonant",
	glyph: "ന"
};
var p$6 = {
	type: "consonant",
	glyph: "പ"
};
var ph$6 = {
	type: "consonant",
	glyph: "ഫ"
};
var b$6 = {
	type: "consonant",
	glyph: "ബ"
};
var bh$6 = {
	type: "consonant",
	glyph: "ഭ"
};
var m$6 = {
	type: "consonant",
	glyph: "മ"
};
var y$6 = {
	type: "consonant",
	glyph: "യ"
};
var r$6 = {
	type: "consonant",
	glyph: "ര"
};
var l$6 = {
	type: "consonant",
	glyph: "ല"
};
var v$6 = {
	type: "consonant",
	glyph: "വ"
};
var w$3 = {
	type: "consonant",
	glyph: "വ"
};
var sh$6 = {
	type: "consonant",
	glyph: "ശ"
};
var S$3 = {
	type: "consonant",
	glyph: "ശ"
};
var Sh$6 = {
	type: "consonant",
	glyph: "ഷ"
};
var s$6 = {
	type: "consonant",
	glyph: "സ"
};
var h$6 = {
	type: "consonant",
	glyph: "ഹ"
};
var M$6 = {
	type: "mark",
	glyph: "ം"
};
var MM$6 = {
	type: "mark",
	glyph: "ഁ"
};
var H$6 = {
	type: "mark",
	glyph: "ഃ"
};
var ksh$3 = {
	type: "conjunct",
	glyph: "ക്ഷ"
};
var x$3 = {
	type: "conjunct",
	glyph: "ക്ഷ"
};
var gy$3 = {
	type: "conjunct",
	glyph: "ജ്ഞ"
};
var dny$3 = {
	type: "conjunct",
	glyph: "ജ്ഞ"
};
var jn$3 = {
	type: "conjunct",
	glyph: "ജ്ഞ"
};
var tr$3 = {
	type: "conjunct",
	glyph: "ത്ര"
};
var shr$3 = {
	type: "conjunct",
	glyph: "ശ്ര"
};
var phonetic_expanded$3 = {
	a: a$6,
	A: A$3,
	aa: aa$6,
	i: i$6,
	I: I$3,
	ii: ii$6,
	u: u$6,
	U: U$3,
	uu: uu$6,
	ri: ri$6,
	R: R$3,
	e: e$6,
	ai: ai$6,
	o: o$6,
	au: au$6,
	k: k$6,
	kh: kh$6,
	g: g$6,
	gh: gh$6,
	ng: ng$6,
	ch: ch$6,
	chh: chh$6,
	j: j$6,
	jh: jh$6,
	ny: ny$6,
	T: T$6,
	Th: Th$6,
	D: D$6,
	Dh: Dh$6,
	N: N$6,
	t: t$6,
	th: th$6,
	d: d$6,
	dh: dh$6,
	n: n$6,
	p: p$6,
	ph: ph$6,
	b: b$6,
	bh: bh$6,
	m: m$6,
	y: y$6,
	r: r$6,
	l: l$6,
	v: v$6,
	w: w$3,
	sh: sh$6,
	S: S$3,
	Sh: Sh$6,
	s: s$6,
	h: h$6,
	M: M$6,
	MM: MM$6,
	H: H$6,
	ksh: ksh$3,
	x: x$3,
	gy: gy$3,
	dny: dny$3,
	jn: jn$3,
	tr: tr$3,
	shr: shr$3
};

var a$5 = {
	type: "vowel",
	glyph: "ଅ",
	matra: ""
};
var aa$5 = {
	type: "vowel",
	glyph: "ଆ",
	matra: "ା"
};
var i$5 = {
	type: "vowel",
	glyph: "ଇ",
	matra: "ି"
};
var ii$5 = {
	type: "vowel",
	glyph: "ଈ",
	matra: "ୀ"
};
var u$5 = {
	type: "vowel",
	glyph: "ଉ",
	matra: "ୁ"
};
var uu$5 = {
	type: "vowel",
	glyph: "ଊ",
	matra: "ୂ"
};
var ri$5 = {
	type: "vowel",
	glyph: "ଋ",
	matra: "ୃ"
};
var e$5 = {
	type: "vowel",
	glyph: "ଏ",
	matra: "େ"
};
var ai$5 = {
	type: "vowel",
	glyph: "ଐ",
	matra: "ୈ"
};
var o$5 = {
	type: "vowel",
	glyph: "ଓ",
	matra: "ୋ"
};
var au$5 = {
	type: "vowel",
	glyph: "ଔ",
	matra: "ୌ"
};
var k$5 = {
	type: "consonant",
	glyph: "କ"
};
var kh$5 = {
	type: "consonant",
	glyph: "ଖ"
};
var g$5 = {
	type: "consonant",
	glyph: "ଗ"
};
var gh$5 = {
	type: "consonant",
	glyph: "ଘ"
};
var ng$5 = {
	type: "consonant",
	glyph: "ଙ"
};
var ch$5 = {
	type: "consonant",
	glyph: "ଚ"
};
var chh$5 = {
	type: "consonant",
	glyph: "ଛ"
};
var j$5 = {
	type: "consonant",
	glyph: "ଜ"
};
var jh$5 = {
	type: "consonant",
	glyph: "ଝ"
};
var ny$5 = {
	type: "consonant",
	glyph: "ଞ"
};
var T$5 = {
	type: "consonant",
	glyph: "ଟ"
};
var Th$5 = {
	type: "consonant",
	glyph: "ଠ"
};
var D$5 = {
	type: "consonant",
	glyph: "ଡ"
};
var Dh$5 = {
	type: "consonant",
	glyph: "ଢ"
};
var N$5 = {
	type: "consonant",
	glyph: "ଣ"
};
var t$5 = {
	type: "consonant",
	glyph: "ତ"
};
var th$5 = {
	type: "consonant",
	glyph: "ଥ"
};
var d$5 = {
	type: "consonant",
	glyph: "ଦ"
};
var dh$5 = {
	type: "consonant",
	glyph: "ଧ"
};
var n$5 = {
	type: "consonant",
	glyph: "ନ"
};
var p$5 = {
	type: "consonant",
	glyph: "ପ"
};
var ph$5 = {
	type: "consonant",
	glyph: "ଫ"
};
var b$5 = {
	type: "consonant",
	glyph: "ବ"
};
var bh$5 = {
	type: "consonant",
	glyph: "ଭ"
};
var m$5 = {
	type: "consonant",
	glyph: "ମ"
};
var y$5 = {
	type: "consonant",
	glyph: "ଯ"
};
var r$5 = {
	type: "consonant",
	glyph: "ର"
};
var l$5 = {
	type: "consonant",
	glyph: "ଲ"
};
var v$5 = {
	type: "consonant",
	glyph: "ଵ"
};
var sh$5 = {
	type: "consonant",
	glyph: "ଶ"
};
var Sh$5 = {
	type: "consonant",
	glyph: "ଷ"
};
var s$5 = {
	type: "consonant",
	glyph: "ସ"
};
var h$5 = {
	type: "consonant",
	glyph: "ହ"
};
var M$5 = {
	type: "mark",
	glyph: "ଂ"
};
var MM$5 = {
	type: "mark",
	glyph: "ଁ"
};
var H$5 = {
	type: "mark",
	glyph: "ଃ"
};
var phonetic_base$2 = {
	a: a$5,
	aa: aa$5,
	i: i$5,
	ii: ii$5,
	u: u$5,
	uu: uu$5,
	ri: ri$5,
	e: e$5,
	ai: ai$5,
	o: o$5,
	au: au$5,
	k: k$5,
	kh: kh$5,
	g: g$5,
	gh: gh$5,
	ng: ng$5,
	ch: ch$5,
	chh: chh$5,
	j: j$5,
	jh: jh$5,
	ny: ny$5,
	T: T$5,
	Th: Th$5,
	D: D$5,
	Dh: Dh$5,
	N: N$5,
	t: t$5,
	th: th$5,
	d: d$5,
	dh: dh$5,
	n: n$5,
	p: p$5,
	ph: ph$5,
	b: b$5,
	bh: bh$5,
	m: m$5,
	y: y$5,
	r: r$5,
	l: l$5,
	v: v$5,
	sh: sh$5,
	Sh: Sh$5,
	s: s$5,
	h: h$5,
	M: M$5,
	MM: MM$5,
	H: H$5
};

var a$4 = {
	type: "vowel",
	glyph: "ଅ",
	matra: ""
};
var A$2 = {
	type: "vowel",
	glyph: "ଆ",
	matra: "ା"
};
var aa$4 = {
	type: "vowel",
	glyph: "ଆ",
	matra: "ା"
};
var i$4 = {
	type: "vowel",
	glyph: "ଇ",
	matra: "ି"
};
var I$2 = {
	type: "vowel",
	glyph: "ଈ",
	matra: "ୀ"
};
var ii$4 = {
	type: "vowel",
	glyph: "ଈ",
	matra: "ୀ"
};
var u$4 = {
	type: "vowel",
	glyph: "ଉ",
	matra: "ୁ"
};
var U$2 = {
	type: "vowel",
	glyph: "ଊ",
	matra: "ୂ"
};
var uu$4 = {
	type: "vowel",
	glyph: "ଊ",
	matra: "ୂ"
};
var ri$4 = {
	type: "vowel",
	glyph: "ଋ",
	matra: "ୃ"
};
var R$2 = {
	type: "vowel",
	glyph: "ଋ",
	matra: "ୃ"
};
var e$4 = {
	type: "vowel",
	glyph: "ଏ",
	matra: "େ"
};
var ai$4 = {
	type: "vowel",
	glyph: "ଐ",
	matra: "ୈ"
};
var o$4 = {
	type: "vowel",
	glyph: "ଓ",
	matra: "ୋ"
};
var au$4 = {
	type: "vowel",
	glyph: "ଔ",
	matra: "ୌ"
};
var k$4 = {
	type: "consonant",
	glyph: "କ"
};
var kh$4 = {
	type: "consonant",
	glyph: "ଖ"
};
var g$4 = {
	type: "consonant",
	glyph: "ଗ"
};
var gh$4 = {
	type: "consonant",
	glyph: "ଘ"
};
var ng$4 = {
	type: "consonant",
	glyph: "ଙ"
};
var ch$4 = {
	type: "consonant",
	glyph: "ଚ"
};
var chh$4 = {
	type: "consonant",
	glyph: "ଛ"
};
var j$4 = {
	type: "consonant",
	glyph: "ଜ"
};
var jh$4 = {
	type: "consonant",
	glyph: "ଝ"
};
var ny$4 = {
	type: "consonant",
	glyph: "ଞ"
};
var T$4 = {
	type: "consonant",
	glyph: "ଟ"
};
var Th$4 = {
	type: "consonant",
	glyph: "ଠ"
};
var D$4 = {
	type: "consonant",
	glyph: "ଡ"
};
var Dh$4 = {
	type: "consonant",
	glyph: "ଢ"
};
var N$4 = {
	type: "consonant",
	glyph: "ଣ"
};
var t$4 = {
	type: "consonant",
	glyph: "ତ"
};
var th$4 = {
	type: "consonant",
	glyph: "ଥ"
};
var d$4 = {
	type: "consonant",
	glyph: "ଦ"
};
var dh$4 = {
	type: "consonant",
	glyph: "ଧ"
};
var n$4 = {
	type: "consonant",
	glyph: "ନ"
};
var p$4 = {
	type: "consonant",
	glyph: "ପ"
};
var ph$4 = {
	type: "consonant",
	glyph: "ଫ"
};
var b$4 = {
	type: "consonant",
	glyph: "ବ"
};
var bh$4 = {
	type: "consonant",
	glyph: "ଭ"
};
var m$4 = {
	type: "consonant",
	glyph: "ମ"
};
var y$4 = {
	type: "consonant",
	glyph: "ଯ"
};
var r$4 = {
	type: "consonant",
	glyph: "ର"
};
var l$4 = {
	type: "consonant",
	glyph: "ଲ"
};
var v$4 = {
	type: "consonant",
	glyph: "ଵ"
};
var w$2 = {
	type: "consonant",
	glyph: "ୱ"
};
var sh$4 = {
	type: "consonant",
	glyph: "ଶ"
};
var S$2 = {
	type: "consonant",
	glyph: "ଶ"
};
var Sh$4 = {
	type: "consonant",
	glyph: "ଷ"
};
var s$4 = {
	type: "consonant",
	glyph: "ସ"
};
var h$4 = {
	type: "consonant",
	glyph: "ହ"
};
var M$4 = {
	type: "mark",
	glyph: "ଂ"
};
var MM$4 = {
	type: "mark",
	glyph: "ଁ"
};
var H$4 = {
	type: "mark",
	glyph: "ଃ"
};
var ksh$2 = {
	type: "conjunct",
	glyph: "କ୍ଷ"
};
var x$2 = {
	type: "conjunct",
	glyph: "କ୍ଷ"
};
var gy$2 = {
	type: "conjunct",
	glyph: "ଜ୍ଞ"
};
var dny$2 = {
	type: "conjunct",
	glyph: "ଜ୍ଞ"
};
var jn$2 = {
	type: "conjunct",
	glyph: "ଜ୍ଞ"
};
var tr$2 = {
	type: "conjunct",
	glyph: "ତ୍ର"
};
var shr$2 = {
	type: "conjunct",
	glyph: "ଶ୍ର"
};
var z$2 = {
	type: "consonant",
	glyph: "ଜ଼"
};
var f$2 = {
	type: "consonant",
	glyph: "ଫ଼"
};
var Rr$2 = {
	type: "consonant",
	glyph: "ଡ଼"
};
var Rh$2 = {
	type: "consonant",
	glyph: "ଢ଼"
};
var phonetic_expanded$2 = {
	a: a$4,
	A: A$2,
	aa: aa$4,
	i: i$4,
	I: I$2,
	ii: ii$4,
	u: u$4,
	U: U$2,
	uu: uu$4,
	ri: ri$4,
	R: R$2,
	e: e$4,
	ai: ai$4,
	o: o$4,
	au: au$4,
	k: k$4,
	kh: kh$4,
	g: g$4,
	gh: gh$4,
	ng: ng$4,
	ch: ch$4,
	chh: chh$4,
	j: j$4,
	jh: jh$4,
	ny: ny$4,
	T: T$4,
	Th: Th$4,
	D: D$4,
	Dh: Dh$4,
	N: N$4,
	t: t$4,
	th: th$4,
	d: d$4,
	dh: dh$4,
	n: n$4,
	p: p$4,
	ph: ph$4,
	b: b$4,
	bh: bh$4,
	m: m$4,
	y: y$4,
	r: r$4,
	l: l$4,
	v: v$4,
	w: w$2,
	sh: sh$4,
	S: S$2,
	Sh: Sh$4,
	s: s$4,
	h: h$4,
	M: M$4,
	MM: MM$4,
	H: H$4,
	ksh: ksh$2,
	x: x$2,
	gy: gy$2,
	dny: dny$2,
	jn: jn$2,
	tr: tr$2,
	shr: shr$2,
	z: z$2,
	f: f$2,
	Rr: Rr$2,
	Rh: Rh$2
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
var S$1 = {
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
var ksh$1 = {
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
var jn$1 = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var tr$1 = {
	type: "conjunct",
	glyph: "त्र"
};
var shr$1 = {
	type: "conjunct",
	glyph: "श्र"
};
var z$1 = {
	type: "consonant",
	glyph: "ज़"
};
var f$1 = {
	type: "consonant",
	glyph: "फ़"
};
var Rr$1 = {
	type: "consonant",
	glyph: "ड़"
};
var Rh$1 = {
	type: "consonant",
	glyph: "ढ़"
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
	S: S$1,
	Sh: Sh$2,
	s: s$2,
	h: h$2,
	M: M$2,
	MM: MM$2,
	H: H$2,
	ksh: ksh$1,
	x: x$1,
	gy: gy$1,
	dny: dny$1,
	jn: jn$1,
	tr: tr$1,
	shr: shr$1,
	z: z$1,
	f: f$1,
	Rr: Rr$1,
	Rh: Rh$1
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
var ri = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var R = {
	type: "vowel",
	glyph: "ऋ",
	matra: "ृ"
};
var e = {
	type: "vowel",
	glyph: "ए",
	matra: "े"
};
var ai = {
	type: "vowel",
	glyph: "ऐ",
	matra: "ै"
};
var o = {
	type: "vowel",
	glyph: "ओ",
	matra: "ो"
};
var au = {
	type: "vowel",
	glyph: "औ",
	matra: "ौ"
};
var k = {
	type: "consonant",
	glyph: "क"
};
var kh = {
	type: "consonant",
	glyph: "ख"
};
var g = {
	type: "consonant",
	glyph: "ग"
};
var gh = {
	type: "consonant",
	glyph: "घ"
};
var ng = {
	type: "consonant",
	glyph: "ङ"
};
var ch = {
	type: "consonant",
	glyph: "च"
};
var chh = {
	type: "consonant",
	glyph: "छ"
};
var j = {
	type: "consonant",
	glyph: "ज"
};
var jh = {
	type: "consonant",
	glyph: "झ"
};
var ny = {
	type: "consonant",
	glyph: "ञ"
};
var T = {
	type: "consonant",
	glyph: "ट"
};
var Th = {
	type: "consonant",
	glyph: "ठ"
};
var D = {
	type: "consonant",
	glyph: "ड"
};
var Dh = {
	type: "consonant",
	glyph: "ढ"
};
var N = {
	type: "consonant",
	glyph: "ण"
};
var t = {
	type: "consonant",
	glyph: "त"
};
var th = {
	type: "consonant",
	glyph: "थ"
};
var d = {
	type: "consonant",
	glyph: "द"
};
var dh = {
	type: "consonant",
	glyph: "ध"
};
var n = {
	type: "consonant",
	glyph: "न"
};
var p = {
	type: "consonant",
	glyph: "प"
};
var ph = {
	type: "consonant",
	glyph: "फ"
};
var b = {
	type: "consonant",
	glyph: "ब"
};
var bh = {
	type: "consonant",
	glyph: "भ"
};
var m = {
	type: "consonant",
	glyph: "म"
};
var y = {
	type: "consonant",
	glyph: "य"
};
var r = {
	type: "consonant",
	glyph: "र"
};
var l = {
	type: "consonant",
	glyph: "ल"
};
var v = {
	type: "consonant",
	glyph: "व"
};
var w = {
	type: "consonant",
	glyph: "व"
};
var sh = {
	type: "consonant",
	glyph: "श"
};
var S = {
	type: "consonant",
	glyph: "श"
};
var Sh = {
	type: "consonant",
	glyph: "ष"
};
var s = {
	type: "consonant",
	glyph: "स"
};
var h = {
	type: "consonant",
	glyph: "ह"
};
var M = {
	type: "mark",
	glyph: "ं"
};
var MM = {
	type: "mark",
	glyph: "ँ"
};
var H = {
	type: "mark",
	glyph: "ः"
};
var ksh = {
	type: "conjunct",
	glyph: "क्ष"
};
var x = {
	type: "conjunct",
	glyph: "क्ष"
};
var gy = {
	type: "conjunct",
	glyph: "ज्ञ"
};
var dny = {
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
var phonetic_expanded = {
	a: a,
	A: A,
	aa: aa,
	i: i,
	I: I,
	ii: ii,
	u: u,
	U: U,
	uu: uu,
	ri: ri,
	R: R,
	e: e,
	ai: ai,
	o: o,
	au: au,
	k: k,
	kh: kh,
	g: g,
	gh: gh,
	ng: ng,
	ch: ch,
	chh: chh,
	j: j,
	jh: jh,
	ny: ny,
	T: T,
	Th: Th,
	D: D,
	Dh: Dh,
	N: N,
	t: t,
	th: th,
	d: d,
	dh: dh,
	n: n,
	p: p,
	ph: ph,
	b: b,
	bh: bh,
	m: m,
	y: y,
	r: r,
	l: l,
	v: v,
	w: w,
	sh: sh,
	S: S,
	Sh: Sh,
	s: s,
	h: h,
	M: M,
	MM: MM,
	H: H,
	ksh: ksh,
	x: x,
	gy: gy,
	dny: dny,
	jn: jn,
	tr: tr,
	shr: shr,
	z: z,
	f: f,
	Rr: Rr,
	Rh: Rh
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
    scriptId?: string;
    languageId?: string;
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
    readonly bengali: {
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
            };
        };
    };
    readonly assamese: {
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
            };
        };
    };
    readonly gujarati: {
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
            };
        };
    };
    readonly punjabi: {
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
                Sh: {
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
                Sh: {
                    type: string;
                    glyph: string;
                };
            };
        };
    };
    readonly tamil: {
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
                ee: {
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
                O: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                oo: {
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
                nn: {
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
                rr: {
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
                ll: {
                    type: string;
                    glyph: string;
                };
                zh: {
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
                ee: {
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
                O: {
                    type: string;
                    glyph: string;
                    matra: string;
                };
                oo: {
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
                nn: {
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
                rr: {
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
                ll: {
                    type: string;
                    glyph: string;
                };
                zh: {
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
            };
        };
    };
    readonly telugu: {
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
            };
        };
    };
    readonly kannada: {
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
            };
        };
    };
    readonly malayalam: {
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
            };
        };
    };
    readonly odia: {
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
            };
        };
    };
    readonly nepali: {
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
            };
        };
    };
    readonly sanskrit: {
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
            };
        };
    };
};

export { type ContentEditableEditResult, DOMIntegrator, type Edit, type EnableTransliterationOptions, type EnabledTransliteration, type EngineRuleOptions, type EngineRuntime, type HybridEngineFactoryOptions, type InputInterceptor, type InputInterceptorOptions, type InputStack, type InterceptTarget, type LanguageCode, type LanguagePackSummary, type LanguageRegistryItem, type LongestMatchResult, type NasalizationMode, type RuntimeAwareTransliterationEngine, type TextInputLike, type TransliterationEngine, type TransliterationEngineOptions, type TransliterationEntry, type TrieNode, type TrieWalker, type WasmEngineFactoryOptions, type WasmLanguagePackFactoryOptions, type WasmTrieFactoryOptions, phonetic_base$9 as assamesePhoneticBase, phonetic_expanded$9 as assamesePhoneticExpanded, phonetic_base$a as bengaliPhoneticBase, phonetic_expanded$a as bengaliPhoneticExpanded, buildTrie, compileWasmLanguageOverlayPack, compileWasmLanguagePack, compileWasmScriptBasePack, createHybridTransliterationEngine, createInputInterceptor, createInputStack, createTransliterationEngine, createWasmEngineFromLanguagePack, createWasmEngineFromLanguagePacks, createWasmTransliterationEngine, createWasmTrie, deleteAndInsert, deleteAndInsertContentEditable, base as devanagariBase, harvard_kyoto as devanagariHarvardKyoto, hunterian as devanagariHunterian, iast as devanagariIAST, iso15919 as devanagariISO15919, itrans as devanagariITRANS, slp1 as devanagariSLP1, velthuis as devanagariVelthuis, wx as devanagariWX, enableTransliteration, getEngineRuntime, getLanguage, phonetic_base$8 as gujaratiPhoneticBase, phonetic_expanded$8 as gujaratiPhoneticExpanded, phonetic_base$c as hindiPhoneticBase, phonetic_expanded$c as hindiPhoneticExpanded, inspectWasmLanguagePack, isLanguageAvailable, phonetic_base$4 as kannadaPhoneticBase, phonetic_expanded$4 as kannadaPhoneticExpanded, listLanguages, phonetic_base$3 as malayalamPhoneticBase, phonetic_expanded$3 as malayalamPhoneticExpanded, maps, phonetic_base$b as marathiPhoneticBase, phonetic_expanded$b as marathiPhoneticExpanded, phonetic_base$1 as nepaliPhoneticBase, phonetic_expanded$1 as nepaliPhoneticExpanded, phonetic_base$2 as odiaPhoneticBase, phonetic_expanded$2 as odiaPhoneticExpanded, phonetic_base$7 as punjabiPhoneticBase, phonetic_expanded$7 as punjabiPhoneticExpanded, resolveLanguageEngineConfig, phonetic_base as sanskritPhoneticBase, phonetic_expanded as sanskritPhoneticExpanded, phonetic_base$6 as tamilPhoneticBase, phonetic_expanded$6 as tamilPhoneticExpanded, phonetic_base$5 as teluguPhoneticBase, phonetic_expanded$5 as teluguPhoneticExpanded, walkLongest };
