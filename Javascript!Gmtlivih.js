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
        "A": "#ffffff", // "rgb(255, 255, 255)"
        "a": "#ffffff", // "rgb(255, 255, 255)"
        "B": "#0000b4", // "rgb(0, 0, 180)"
        "b": "#0000b4", // "rgb(0, 0, 180)"
        "C": "#af0d66", // "rgb(175, 13, 102)"
        "c": "#af0d66", // "rgb(175, 13, 102)"
        "D": "#92f846", // "rgb(146, 248, 70)"
        "d": "#92f846", // "rgb(146, 248, 70)"
        "E": "#ffc82f", // "rgb(255, 200, 47)"
        "e": "#ffc82f", // "rgb(255, 200, 47)"
        "F": "#ff4e28", // "rgb(255, 78, 40)"
        "f": "#ff4e28", // "rgb(255, 78, 40)"
        "G": "#ff8000", // "rgb(255, 128, 0)"
        "g": "#ff8000", // "rgb(255, 128, 0)"
        "H": "#b9b9b9", // "rgb(185, 185, 185)"
        "h": "#b9b9b9", // "rgb(185, 185, 185)"
        "I": "#ebebde", // "rgb(235, 235, 222)"
        "i": "#ebebde", // "rgb(235, 235, 222)"
        "J": "#646464", // "rgb(100, 100, 100)"
        "j": "#646464", // "rgb(100, 100, 100)"
        "K": "#ffff00", // "rgb(255, 255, 0)"
        "k": "#ffff00", // "rgb(255, 255, 0)"
        "L": "#371370", // "rgb(55, 19, 112)"
        "l": "#371370", // "rgb(55, 19, 112)"
        "M": "#ffff96", // "rgb(255, 255, 150)"
        "m": "#ffff96", // "rgb(255, 255, 150)"
        "N": "#ca3e5e", // "rgb(202, 62, 94)"
        "n": "#ca3e5e", // "rgb(202, 62, 94)"
        "O": "#cd913f", // "rgb(205, 145, 63)"
        "o": "#cd913f", // "rgb(205, 145, 63)"
        "P": "#0c4b64", // "rgb(12, 75, 100)"
        "p": "#0c4b64", // "rgb(12, 75, 100)"
        "Q": "#ff0000", // "rgb(255, 0, 0)"
        "q": "#ff0000", // "rgb(255, 0, 0)"
        "R": "#af9b32", // "rgb(175, 155, 50)"
        "r": "#af9b32", // "rgb(175, 155, 50)"
        "S": "#1f9b32", // "rgb(31, 155, 50)"
        "s": "#1f9b32", // "rgb(31, 155, 50)"
        "T": "#254619", // "rgb(37, 70, 25)"
        "t": "#254619", // "rgb(37, 70, 25)"
        "U": "#994619", // "rgb(153, 70, 25)"
        "u": "#994619", // "rgb(153, 70, 25)"
        "V": "#792187", // "rgb(121, 33, 135)"
        "v": "#792187", // "rgb(121, 33, 135)"
        "W": "#538cd0", // "rgb(83, 140, 208)"
        "w": "#538cd0", // "rgb(83, 140, 208)"
        "X": "#5332ff", // "rgb(83, 50, 255)"
        "x": "#5332ff", // "rgb(83, 50, 255)"
        "Y": "#009a25", // "rgb(0, 154, 37)"
        "y": "#009a25", // "rgb(0, 154, 37)"
        "Z": "#b2dccd", // "rgb(178, 220, 205)"
        "z": "#b2dccd", // "rgb(178, 220, 205)"

        "0": "#ff00e5", // "rgb(255, 0, 229)"
        "1": "#e500e5", // "rgb(229, 0, 229)"
        "2": "#e5ffe5", // "rgb(229, 255, 229)"
        "3": "#e5ffff", // "rgb(229, 255, 255)"
        "4": "#e5ff00", // "rgb(229, 255, 0)"
        "5": "#00ff00", // "rgb(0, 255, 0)"
        "6": "#00e500", // "rgb(0, 229, 0)"
        "7": "#00e5e5", // "rgb(0, 229, 229)"
        "8": "#00e5ff", // "rgb(0, 229, 255)"
        "9": "#ffe5ff", // "rgb(255, 229, 255)"

        " ": "#0f0f0f", // "rgb(15, 15, 15)"
        ".": "#e5e5e5", // "rgb(229, 229, 229)"
        ",": "#000000", // "rgb(0, 0, 0)"
        "'": "#320000", // "rgb(50, 0, 0)"
        '"': "#003200", // "rgb(0, 50, 0)"
        ":": "#000032", // "rgb(0, 0, 50)"
        "?": "#8b0cdc", // "rgb(139, 12, 220)"
        "!": "#14056b", // "rgb(20, 5, 107)"
        ")": "#cbef30", // "rgb(203, 239, 48)"
        "(": "#5a5dd2", // "rgb(90, 93, 210)"
        ";": "#a0310a", // "rgb(160, 49, 10)"
        
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
    };

    var input = ecodebox.innerHTML;
    var repECODE = input.replace
    (/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|.|,/gi,
    function (x) {return list[x];})
    dcodebox.innerHTML = repECODE;

    if(ecodebox.innerHTML.includes("<br>") ||
    ecodebox.innerHTML == "")
    {dcodebox.innerHTML = "ERROR CODE 0: Corrupted input detected.";}

    if(ecodebox.innerHTML.includes("&nbsp;"))
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
        "#ffffff": // "rgb(255, 255, 255)"
        "A",
        "#0000b4": // "rgb(0, 0, 180)"
        "B",
        "#af0d66": // "rgb(175, 13, 102)"
        "C",
        "#92f846": // "rgb(146, 248, 70)"
        "D",
        "#ffc82f": // "rgb(255, 200, 47)"
        "E",
        "#ff4e28": // "rgb(255, 78, 40)"
        "F",
        "#ff8000": // "rgb(255, 128, 0)"
        "G",
        "#b9b9b9": // "rgb(185, 185, 185)"
        "H",
        "#ebebde": // "rgb(235, 235, 222)"
        "I",
        "#646464": // "rgb(100, 100, 100)"
        "J",
        "#ffff00": // "rgb(255, 255, 0)"
        "K",
        "#371370": // "rgb(55, 19, 112)"
        "L",
        "#ffff96": // "rgb(255, 255, 150)"
        "M",
        "#ca3e5e": // "rgb(202, 62, 94)"
        "N",
        "#cd913f": // "rgb(205, 145, 63)"
        "O",
        "#0c4b64": // "rgb(12, 75, 100)"
        "P",
        "#ff0000": // "rgb(255, 0, 0)"
        "Q",
        "#af9b32": // "rgb(175, 155, 50)"
        "R",
        "#1f9b32": // "rgb(31, 155, 50)"
        "S",
        "#254619": // "rgb(37, 70, 25)"
        "T",
        "#994619": // "rgb(153, 70, 25)"
        "U",
        "#792187": // "rgb(121, 33, 135)"
        "V",
        "#538cd0": // "rgb(83, 140, 208)"
        "W",
        "#5332ff": // "rgb(83, 50, 255)"
        "X",
        "#009a25": // "rgb(0, 154, 37)"
        "Y",
        "#b2dccd": // "rgb(178, 220, 205)"
        "Z",

        "#ff00e5": // "rgb(255, 0, 229)"
        "0",
        "#e500e5": // "rgb(229, 0, 229)"
        "1",
        "#e5ffe5": // "rgb(229, 255, 229)"
        "2",
        "#e5ffff": // "rgb(229, 255, 255)"
        "3",
        "#e5ff00": // "rgb(229, 255, 0)"
        "4",
        "#00ff00": // "rgb(0, 255, 0)"
        "5",
        "#00e500": // "rgb(0, 229, 0)"
        "6",
        "#00e5e5": // "rgb(0, 229, 229)"
        "7",
        "#00e5ff": // "rgb(0, 229, 255)"
        "8",
        "#ffe5ff": // "rgb(255, 229, 255)"
        "9",

        "#0f0f0f": // "rgb(15, 15, 15)"
        " ",
        "#e5e5e5": // "rgb(229, 229, 229)"
        ".",
        "#000000": // "rgb(0, 0, 0)"
        ",",
        "#320000": // "rgb(50, 0, 0)"
        "'",
        "#003200": // "rgb(0, 50, 0)"
        '"',
        "#000032": // "rgb(0, 0, 50)"
        ":",
        "#8b0cdc": // "rgb(139, 12, 220)"
        "?",
        "#14056b": // "rgb(20, 5, 107)"
        "!",
        "#cbef30": // "rgb(203, 239, 48)"
        ")",
        "#5a5dd2": // "rgb(90, 93, 210)"
        "(",
        "#a0310a": // "rgb(160, 49, 10)"
        ";",
    };

    var input = ecodebox.innerHTML;
    var repECODE = input.replace
    (//rgb255, 255, 255:|rgb0, 0, 180:|rgb175, 13, 102:|rgb146, 248, 70:|rgb255, 200, 47:|rgb255, 78, 40:|rgb255, 128, 0:|rgb185, 185, 185:|rgb235, 235, 222:|rgb100, 100, 100:|rgb255, 255, 0:|rgb55, 19, 112:|rgb255, 255, 150:|rgb202, 62, 94:|rgb205, 145, 63:|rgb12, 75, 100:|rgb255, 0, 0:|rgb175, 155, 50:|rgb31, 155, 50:|rgb37, 70, 25:|rgb153, 70, 25:|rgb121, 33, 135:|rgb83, 140, 208:|rgb83, 50, 255:|rgb0, 154, 37:|rgb178, 220, 205:|rgb255, 0, 229:|rgb229, 0, 229:|rgb229, 255, 229:|rgb229, 255, 255:|rgb229, 255, 0:|rgb0, 255, 0:|rgb0, 229, 0:|rgb0, 229, 229:|rgb0, 229, 255:|rgb255, 229, 255:|rgb15, 15, 15:|rgb229, 229, 229:|rgb0, 0, 0:|rgb50, 0, 0:|rgb0, 50, 0:|rgb0, 0, 50:|rgb139, 12, 220:|rgb20, 5, 107:|rgb203, 239, 48:|rgb90, 93, 210:|rgb160, 49, 10:
/#ffffff|#0000b4|#af0d66|#92f846|#ffc82f|#ff4e28|#ff8000|#b9b9b9|#ebebde|#646464|#ffff00|#371370|#ffff96|#ca3e5e|#cd913f|#0c4b64|#ff0000|#af9b32|#1f9b32|#254619|#994619|#792187|#538cd0|#5332ff|#009a25|#b2dccd|#ff00e5|#e500e5|#e5ffe5|#e5ffff|#e5ff00|#00ff00|#00e500|#00e5e5|#00e5ff|#ffe5ff|#0f0f0f|#e5e5e5|#000000|#320000|#003200|#000032|#8b0cdc|#14056b|#cbef30|#5a5dd2|#a0310a/gi,
    function (x) {return list[x];})

    dcodebox.innerHTML = repECODE;

    if(ecodebox.innerHTML == "<br>")
    {dcodebox.innerHTML = "";}

    var input2 = dcodebox.innerHTML.replace(/div/gi, "<div>")
    if(ecodebox.innerHTML.includes("#92f846#ebebde#792187"))
    // rgb146, 248, 70:rgb235, 235, 222:rgb121, 33, 135:
    {dcodebox.innerHTML = input2;}
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