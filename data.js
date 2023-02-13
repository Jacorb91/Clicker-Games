localStorage.setItem("dollars", 0)
localStorage.setItem("dpc", 1)
localStorage.setItem("costone", 50)
var markdownResult;
var clicking = document.querySelector(".clicks")
var urlShare = document.querySelector(".url-to-share")
var textarea1 = document.querySelector(".textarea-result")

function clicksEarn() {
    localStorage.dollars = Number(localStorage.dollars) + Number(localStorage.dpc);
}

function buyCursor() {
    if (localStorage.dollars >= 50) {
        localStorage.dollars = Number(localStorage.dollars) - 50;
        localStorage.dpc = Number(localStorage.dpc) + 1;
        localStorage.costone = Number(localStorage.costone) * 1.5;
    }
}

function openDialog(id) {
    document.querySelector(".dialog" + id).open = true;
}

setInterval(() => {
    clicking.innerHTML = "Your Haven " + localStorage.dollars + " Dollars."
}, 100);

setInterval(() => {
    markdownResult = "@jwklong Open [Link](" + urlShare.value + ")"

    textarea1.value = markdownResult;
}, 1000);