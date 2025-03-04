var url = "https://Z4ckStudios.github.io/Ciphered/";
// window.history.replaceState(null, document.title, url);

var CurrentPos = localStorage.getItem("CurrentPos");
localStorage.setItem("PageLoaded", "false");

var CipheredZS = document.querySelector(".GmtlivihZS");

var list = [
    "G_",//1
    "Gm_",//2
    "Gmt_",//3
    "Gmtl_",//4
    "Gmtli_",//5
    "Gmtliv_",//6
    "Gmtlivi_",//7
    "Gmtlivih_",//8
    "Gmtlivih _",//9
    "Gmtlivih -_",//10
    "Gmtlivih - _",//11
    "Gmtlivih - D_",//12
    "Gmtlivih - D4_",//13
    "Gmtlivih - D4g_",//14
    "Gmtlivih - D4go_",//15
    "Gmtlivih - D4go _",//16
    "Gmtlivih - D4go W_",//17
    "Gmtlivih - D4go Wx_",//18
    "Gmtlivih - D4go Wxy_",//19
    "Gmtlivih - D4go Wxyh_",//20
    "Gmtlivih - D4go Wxyhm_",//21
    "Gmtlivih - D4go Wxyhms_",//22
];
var LGZS = 22;

var listTransform1 = [
    "Gmtlivih - D4go Wxyhmsw",//17
    "Gmtlivih - D4go Wxyhmsv",//16
    "Gmtlivih - D4go Wxyhmrv",//15
    "Gmtlivih - D4go Wxyhlrv",//14
    "Gmtlivih - D4go Wxyglrv",//13
    "Gmtlivih - D4go Wxxglrv",//12
    "Gmtlivih - D4go Wwxglrv",//11
    "Gmtlivih - D4gn Vwxglrv",//10
    "Gmtlivih - D4fn Vwxglrv",//9
    "Gmtlivih - C4fn Vwxglrv",//8
    "Gmtlivig - C4fn Vwxglrv",//7
    "Gmtlivhg - C4fn Vwxglrv",//6
    "Gmtliuhg - C4fn Vwxglrv",//5
    "Gmtlhuhg - C4fn Vwxglrv",//4
    "Gmtkhuhg - C4fn Vwxglrv",//3
    "Gmskhuhg - C4fn Vwxglrv",//2
    "Glskhuhg - C4fn Vwxglrv",//1
];
var LT1 = 17;

var listTransform2 = [
    "Flskhuhg - C4fn Vwxglru",//17
    "Flskhuhg - C4fn Vwxglqu",//16
    "Flskhuhg - C4fn Vwxgkqu",//15
    "Flskhuhg - C4fn Vwxfkqu",//14
    "Flskhuhg - C4fn Vwwfkqu",//13
    "Flskhuhg - C4fn Vvwfkqu",//12
    "Flskhuhg - C4fn Uvwfkqu",//11
    "Flskhuhg - C4fm Uvwfkqu",//10
    "Flskhuhg - C4em Uvwfkqu",//9
    "Flskhuhg - B4em Uvwfkqu",//8
    "Flskhuhf - B4em Uvwfkqu",//7
    "Flskhugf - B4em Uvwfkqu",//6
    "Flskhtgf - B4em Uvwfkqu",//5
    "Flskgtgf - B4em Uvwfkqu",//4
    "Flsjgtgf - B4em Uvwfkqu",//3
    "Flrjgtgf - B4em Uvwfkqu",//2
    "Fkrjgtgf - B4em Uvwfkqu",//1
];
var LT2 = 17;

var listTransform3 = [
    "Ekrjgtgf - B4em Uvwfkqt",//17
    "Ekrjgtgf - B4em Uvwfkpt",//16
    "Ekrjgtgf - B4em Uvwfjpt",//15
    "Ekrjgtgf - B4em Uvwejpt",//14
    "Ekrjgtgf - B4em Uvvejpt",//13
    "Ekrjgtgf - B4em Uuvejpt",//12
    "Ekrjgtgf - B4em Tuvejpt",//11
    "Ekrjgtgf - B4el Tuvejpt",//10
    "Ekrjgtgf - B4dl Tuvejpt",//9
    "Ekrjgtgf - A4dl Tuvejpt",//8
    "Ekrjgtge - A4dl Tuvejpt",//7
    "Ekrjgtfe - A4dl Tuvejpt",//6
    "Ekrjgsfe - A4dl Tuvejpt",//5
    "Ekrjfsfe - A4dl Tuvejpt",//4
    "Ekrifsfe - A4dl Tuvejpt",//3
    "Ekqifsfe - A4dl Tuvejpt",//2
    "Ejqifsfe - A4dl Tuvejpt",//1
];
var LT3 = 17;

var listTransform4 = [
    "Djqifsfe - A4dl Tuvejps",//17
    "Djqifsfe - A4dl Tuvejos",//16
    "Djqifsfe - A4dl Tuveios",//15
    "Djqifsfe - A4dl Tuvdios",//14
    "Djqifsfe - A4dl Tuudios",//13
    "Djqifsfe - A4dl Ttudios",//12
    "Djqifsfe - A4dl Studios",//11
    "Djqifsfe - A4dk Studios",//10
    "Djqifsfe - A4ck Studios",//9
    "Djqifsfe - Z4ck Studios",//8
    "Djqifsfd - Z4ck Studios",//7
    "Djqifsed - Z4ck Studios",//6
    "Djqifred - Z4ck Studios",//5
    "Djqiered - Z4ck Studios",//4
    "Djqhered - Z4ck Studios",//3
    "Djphered - Z4ck Studios",//2
    "Diphered - Z4ck Studios",//1
];
var LT4 = 17;

var timer = 0;
const timerInterval = setInterval(timerInt, 25);

function timerInt() {
    timer++

    if(timer > 0) {CipheredZS.innerHTML = "_";}
    if(timer > 20) {CipheredZS.innerHTML = "";}
    if(timer > 40) {CipheredZS.innerHTML = "_";}
    if(timer > 60) {CipheredZS.innerHTML = "";}
    if(timer > 80) {CipheredZS.innerHTML = "_";}

    if(timer > 100)
    {LGZS = LGZS < list.length ? ++LGZS : LGZS - LGZS;
    CipheredZS.innerHTML = list[LGZS];}

    if(timer > 122) {CipheredZS.innerHTML = "Gmtlivih - D4go Wxyhmsw";}
    
    if(timer > 130)
    {LT1 = LT1 < listTransform1.length ? ++LT1 : LT1 - LT1;
    CipheredZS.innerHTML = listTransform1[LT1];}

    if(timer > 147) {CipheredZS.innerHTML = "Flskhuhg - C4fn Vwxglrv";}

    if(timer > 150)
    {LT2 = LT2 < listTransform2.length ? ++LT2 : LT2 - LT2;
    CipheredZS.innerHTML = listTransform2[LT2];}

    if(timer > 167) {CipheredZS.innerHTML = "Ekrjgtgf - B4em Uvwfkqu";}

    if(timer > 170)
    {LT3 = LT3 < listTransform3.length ? ++LT3 : LT3 - LT3;
    CipheredZS.innerHTML = listTransform3[LT3];}

    if(timer > 187) {CipheredZS.innerHTML = "Djqifsfe - A4dl Tuvejpt";}

    if(timer > 190)
    {LT4 = LT4 < listTransform4.length ? ++LT4 : LT4 - LT4;
    CipheredZS.innerHTML = listTransform4[LT4];}

    if(timer > 207) {CipheredZS.innerHTML = "Ciphered - Z4ck Studios";}

    if(timer > 300)
    {location.replace("Gmtlivih.html");
    clearInterval(timerInterval);}
}