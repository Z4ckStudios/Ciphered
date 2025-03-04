var url = "https://Z4ckStudios.github.io/Ciphered/Gmtlivih";
// window.history.replaceState(null, document.title, url);

var PageLoaded = localStorage.getItem("PageLoaded");
localStorage.setItem("PageLoaded", "true");

if(PageLoaded == "true")
location.replace("index.html")

var ecodebox = document.querySelector(".ecodebox");
var dcodebox = document.querySelector(".dcodebox");
var ecodebutton = document.querySelector(".ecodebutton");

ecodebutton.addEventListener("click",
function(e) {

    var list = {
        A: "rgb(255, 255, 255)" + " ",
        a: "rgb(255, 255, 255)" + " ",
        B: "rgb(0, 0, 180)" + " ",
        b: "rgb(0, 0, 180)" + " ",
        C: "rgb(175, 13, 102)" + " ",
        c: "rgb(175, 13, 102)" + " ",
        D: "rgb(146, 248, 70)" + " ",
        d: "rgb(146, 248, 70)" + " ",
        E: "rgb(255, 200, 47)" + " ",
        e: "rgb(255, 200, 47)" + " ",
        F: "rgb(255, 118, 0)" + " ",
        f: "rgb(255, 118, 0)" + " ",
        G: "rgb(255, 128, 0)" + " ",
        g: "rgb(255, 128, 0)" + " ",
        H: "rgb(185, 185, 185)" + " ",
        h: "rgb(185, 185, 185)" + " ",
        I: "rgb(235, 235, 222)" + " ",
        i: "rgb(235, 235, 222)" + " ",
        J: "rgb(100, 100, 100)" + " ",
        j: "rgb(100, 100, 100)" + " ",
        K: "rgb(255, 255, 0)" + " ",
        k: "rgb(255, 255, 0)" + " ",
        L: "rgb(55, 19, 112)" + " ",
        l: "rgb(55, 19, 112)" + " ",
        M: "rgb(255, 255, 150)" + " ",
        m: "rgb(255, 255, 150)" + " ",
        N: "rgb(202, 62, 94)" + " ",
        n: "rgb(202, 62, 94)" + " ",
        O: "rgb(205, 145, 63)" + " ",
        o: "rgb(205, 145, 63)" + " ",
        P: "rgb(12, 75, 100)" + " ",
        p: "rgb(12, 75, 100)" + " ",
        Q: "rgb(255, 0, 0)" + " ",
        q: "rgb(255, 0, 0)" + " ",
        R: "rgb(175, 155, 50)" + " ",
        r: "rgb(175, 155, 50)" + " ",
        S: "rgb(175, 155, 50)" + " ",
        s: "rgb(175, 155, 50)" + " ",
        T: "rgb(37, 70, 25)" + " ",
        t: "rgb(37, 70, 25)" + " ",
        U: "rgb(37, 70, 25)" + " ",
        u: "rgb(37, 70, 25)" + " ",
        V: "rgb(121, 33, 135)" + " ",
        v: "rgb(121, 33, 135)" + " ",
        W: "rgb(83, 140, 208)" + " ",
        w: "rgb(83, 140, 208)" + " ",
        X: "rgb(83, 140, 208)" + " ",
        x: "rgb(83, 140, 208)" + " ",
        Y: "rgb(0, 154, 37)" + " ",
        y: "rgb(0, 154, 37)" + " ",
        Z: "rgb(178, 220, 205)" + " ",
        z: "rgb(178, 220, 205)" + " ",

        0: "rgb(255, 0, 229)" + " ",
        1: "rgb(229, 0, 229)" + " ",
        2: "rgb(229, 255, 229)" + " ",
        3: "rgb(229, 255, 255)" + " ",
        4: "rgb(229, 255, 0)" + " ",
        5: "rgb(0, 255, 0)" + " ",
        6: "rgb(0, 229, 0)" + " ",
        7: "rgb(0, 229, 229)" + " ",
        8: "rgb(0, 229, 255)" + " ",
        9: "rgb(255, 229, 255)" + " ",

        ".": "rgb(229, 229, 229)" + " ",
        ",": "rgb(0, 0, 0)" + " ",

        " ": "",
        ":": "",
        ";": "",
        ")": "",
        "(": "",
        "[": "",
        "]": "",
        "{": "",
        "}": "",
        "!": "",
    };

    var input = ecodebox.innerHTML;
    var repECODE = input.replace
    (/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|.|,|!/gi,
    function (match) {return list[match];})
    dcodebox.innerHTML = repECODE;
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