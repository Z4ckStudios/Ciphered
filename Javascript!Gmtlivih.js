var url = "https://Z4ckStudios.github.io/Ciphered/Gmtlivih";
window.history.replaceState(null, document.title, url);

var PageLoaded = localStorage.getItem("PageLoaded");
localStorage.setItem("PageLoaded", "true");

if(PageLoaded == "true")
location.replace("index.html")

var portraitIndicator = document.querySelector(".portraitIndicator");

var ecodebox = document.querySelector(".ecodebox");
var dcodebox = document.querySelector(".dcodebox");
var ecodebutton = document.querySelector(".ecodebutton");
var dcodebutton = document.querySelector(".dcodebutton");

var TabRGB = document.querySelector(".TabRGB");
var TabCaesar = document.querySelector(".TabCaesar");

ecodebutton.addEventListener("click",
function() {

    var list = {
        "A": "rgb255, 255, 255:",
        "a": "rgb255, 255, 255:",
        "B": "rgb0, 0, 180:",
        "b": "rgb0, 0, 180:",
        "C": "rgb175, 13, 102:",
        "c": "rgb175, 13, 102:",
        "D": "rgb146, 248, 70:",
        "d": "rgb146, 248, 70:",
        "E": "rgb255, 200, 47:",
        "e": "rgb255, 200, 47:",
        "F": "rgb255, 78, 40:",
        "f": "rgb255, 78, 40:",
        "G": "rgb255, 128, 0:",
        "g": "rgb255, 128, 0:",
        "H": "rgb185, 185, 185:",
        "h": "rgb185, 185, 185:",
        "I": "rgb235, 235, 222:",
        "i": "rgb235, 235, 222:",
        "J": "rgb100, 100, 100:",
        "j": "rgb100, 100, 100:",
        "K": "rgb255, 255, 0:",
        "k": "rgb255, 255, 0:",
        "L": "rgb55, 19, 112:",
        "l": "rgb55, 19, 112:",
        "M": "rgb255, 255, 150:",
        "m": "rgb255, 255, 150:",
        "N": "rgb202, 62, 94:",
        "n": "rgb202, 62, 94:",
        "O": "rgb205, 145, 63:",
        "o": "rgb205, 145, 63:",
        "P": "rgb12, 75, 100:",
        "p": "rgb12, 75, 100:",
        "Q": "rgb255, 0, 0:",
        "q": "rgb255, 0, 0:",
        "R": "rgb175, 155, 50:",
        "r": "rgb175, 155, 50:",
        "S": "rgb31, 155, 50:",
        "s": "rgb31, 155, 50:",
        "T": "rgb37, 70, 25:",
        "t": "rgb37, 70, 25:",
        "U": "rgb153, 70, 25:",
        "u": "rgb153, 70, 25:",
        "V": "rgb121, 33, 135:",
        "v": "rgb121, 33, 135:",
        "W": "rgb83, 140, 208:",
        "w": "rgb83, 140, 208:",
        "X": "rgb83, 50, 255:",
        "x": "rgb83, 50, 255:",
        "Y": "rgb0, 154, 37:",
        "y": "rgb0, 154, 37:",
        "Z": "rgb178, 220, 205:",
        "z": "rgb178, 220, 205:",

        "0": "rgb255, 0, 229:",
        "1": "rgb229, 0, 229:",
        "2": "rgb229, 255, 229:",
        "3": "rgb229, 255, 255:",
        "4": "rgb229, 255, 0:",
        "5": "rgb0, 255, 0:",
        "6": "rgb0, 229, 0:",
        "7": "rgb0, 229, 229:",
        "8": "rgb0, 229, 255:",
        "9": "rgb255, 229, 255:",

        " ": "rgb15, 15, 15:",
        ".": "rgb229, 229, 229:",
        ",": "rgb0, 0, 0:",
        "'": "rgb50, 0, 0:",
        '"': "rgb0, 50, 0:",
        ":": "rgb0, 0, 50:",
        "?": "rgb139, 12, 220:",
        "!": "rgb20, 5, 107:",
        ")": "rgb203, 239, 48:",
        "(": "rgb90, 93, 210:",
        ";": "rgb160, 49, 10:",
        
        ">": "",
        "<": "",
        "[": "",
        "]": "",
        "{": "",
        "}": "",
        "@": "",
        "#": "",
        "$": "",
        "%": "",
        "^": "",
        "&": "",
        "*": "",
        "|": "",
        "/": "",
        "~": "",
        "`": "",
        "-": "",
        "+": "",
        "_": "",
        "=": "",
        "DIV": "",
        "BR": "",
    };

    var input = ecodebox.innerHTML;
    var repECODE = input.replace
    (/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|.|,|DIV/gi,
    function (x) {return list[x];})
    dcodebox.innerHTML = repECODE;

    if(ecodebox.innerHTML.includes("<br>") ||
    ecodebox.innerHTML == "")
    {dcodebox.innerHTML = "ERROR CODE 0: No input detected.";}

    if(ecodebox.innerHTML.includes("&nbsp;") ||
    ecodebox.innerHTML.includes("<div>"))
    {dcodebox.innerHTML = "ERROR CODE 1: Stray space detected.";}
})
ecodebutton.addEventListener("mouseover",
function() {

    ecodebutton.style.background = "#ffffff";
    ecodebutton.style.color = "#000000";
    ecodebutton.style.cursor = "pointer";
})
ecodebutton.addEventListener("mouseout",
function() {

    ecodebutton.style.background = "#000000";
    ecodebutton.style.color = "#ffffff";
})

dcodebutton.addEventListener("click",
function() {

    var list = {
        "rgb255, 255, 255:": "A",
        "rgb0, 0, 180:": "B",
        "rgb175, 13, 102:": "C",
        "rgb146, 248, 70:": "D",
        "rgb255, 200, 47:": "E",
        "rgb255, 78, 40:": "F",
        "rgb255, 128, 0:": "G",
        "rgb185, 185, 185:": "H",
        "rgb235, 235, 222:": "I",
        "rgb100, 100, 100:": "J",
        "rgb255, 255, 0:": "K",
        "rgb55, 19, 112:": "L",
        "rgb255, 255, 150:": "M",
        "rgb202, 62, 94:": "N",
        "rgb205, 145, 63:": "O",
        "rgb12, 75, 100:": "P",
        "rgb255, 0, 0:": "Q",
        "rgb175, 155, 50:": "R",
        "rgb31, 155, 50:": "S",
        "rgb37, 70, 25:": "T",
        "rgb153, 70, 25:": "U",
        "rgb121, 33, 135:": "V",
        "rgb83, 140, 208:": "W",
        "rgb83, 50, 255:": "X",
        "rgb0, 154, 37:": "Y",
        "rgb178, 220, 205:": "Z",

        "rgb255, 0, 229:": "0",
        "rgb229, 0, 229:": "1",
        "rgb229, 255, 229:": "2",
        "rgb229, 255, 255:": "3",
        "rgb229, 255, 0:": "4",
        "rgb0, 255, 0:": "5",
        "rgb0, 229, 0:": "6",
        "rgb0, 229, 229:": "7",
        "rgb0, 229, 255:": "8",
        "rgb255, 229, 255:": "9",

        "rgb15, 15, 15:": " ",
        "rgb229, 229, 229:": ".",
        "rgb0, 0, 0:": ",",
        "rgb50, 0, 0:": "'",
        "rgb0, 50, 0:": '"',
        "rgb0, 0, 50:": ":",
        "rgb139, 12, 220:": "?",
        "rgb20, 5, 107:": "!",
        "rgb203, 239, 48:": ")",
        "rgb90, 93, 210:": "(",
        "rgb160, 49, 10:": ";",
    };

    var input = ecodebox.innerHTML;
    var repECODE = input.replace
    (/rgb255, 255, 255:|rgb0, 0, 180:|rgb175, 13, 102:|rgb146, 248, 70:|rgb255, 200, 47:|rgb255, 78, 40:|rgb255, 128, 0:|rgb185, 185, 185:|rgb235, 235, 222:|rgb100, 100, 100:|rgb255, 255, 0:|rgb55, 19, 112:|rgb255, 255, 150:|rgb202, 62, 94:|rgb205, 145, 63:|rgb12, 75, 100:|rgb255, 0, 0:|rgb175, 155, 50:|rgb31, 155, 50:|rgb37, 70, 25:|rgb153, 70, 25:|rgb121, 33, 135:|rgb83, 140, 208:|rgb83, 50, 255:|rgb0, 154, 37:|rgb178, 220, 205:|rgb255, 0, 229:|rgb229, 0, 229:|rgb229, 255, 229:|rgb229, 255, 255:|rgb229, 255, 0:|rgb0, 255, 0:|rgb0, 229, 0:|rgb0, 229, 229:|rgb0, 229, 255:|rgb255, 229, 255:|rgb15, 15, 15:|rgb229, 229, 229:|rgb0, 0, 0:|rgb50, 0, 0:|rgb0, 50, 0:|rgb0, 0, 50:|rgb139, 12, 220:|rgb20, 5, 107:|rgb203, 239, 48:|rgb90, 93, 210:|rgb160, 49, 10:/gi,
    function (x) {return list[x];})

    dcodebox.innerHTML = repECODE;

    if(ecodebox.innerHTML == "<br>")
    {dcodebox.innerHTML = "";}
})
dcodebutton.addEventListener("mouseover",
function() {

    dcodebutton.style.background = "white";
    dcodebutton.style.color = "black";
    dcodebutton.style.cursor = "pointer";
})
dcodebutton.addEventListener("mouseout",
function() {

    dcodebutton.style.background = "black";
    dcodebutton.style.color = "white";
})

TabCaesar.addEventListener("click",
function() {

    ecodebox.style.display = "none";
    dcodebox.style.display = "none";
    ecodebutton.style.display = "none";
    dcodebutton.style.display = "none";

    TabRGB.style.background = "black";
    TabRGB.style.color = "white";
    TabRGB.style.marginTop = "95px";

    TabCaesar.style.background = "white";
    TabCaesar.style.color = "black";
})
TabCaesar.addEventListener("mouseover",
function() {
    
    TabCaesar.style.cursor = "pointer";

    if(TabCaesar.style.background == "white")
    {return;}
    else
    {TabCaesar.style.background = "white";
    TabCaesar.style.color = "black";
    TabCaesar.style.marginTop = "85px";}
})
TabCaesar.addEventListener("mouseout",
function() {

    if(ecodebutton.style.display == "none")
    {return;}
    else
    {TabCaesar.style.background = "black";
    TabCaesar.style.color = "white";
    TabCaesar.style.marginTop = "95px";}
})

TabRGB.addEventListener("click",
function() {

    ecodebox.style.display = "inline";
    dcodebox.style.display = "inline";
    ecodebutton.style.display = "inline";
    dcodebutton.style.display = "inline";

    TabCaesar.style.background = "black";
    TabCaesar.style.color = "white";
    TabCaesar.style.marginTop = "95px";

    TabRGB.style.background = "white";
    TabRGB.style.color = "black";
})
TabRGB.addEventListener("mouseover",
function() {
    
    TabRGB.style.cursor = "pointer";

    if(TabRGB.style.background == "white")
    {return;}
    else
    {TabRGB.style.background = "white";
    TabRGB.style.color = "black";
    TabRGB.style.marginTop = "85px";}
})
TabRGB.addEventListener("mouseout",
function() {

    if(ecodebutton.style.display == "inline")
    {return;}
    else
    if(ecodebutton.style.display == "none")
    {TabRGB.style.background = "black";
    TabRGB.style.color = "white";
    TabRGB.style.marginTop = "95px";}
})