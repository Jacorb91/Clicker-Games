localStorage.setItem("dollars", 0)
localStorage.setItem("dpc", 1)
localStorage.setItem("costone", 50)
var clicking = document.querySelector(".clicks")

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

setInterval(() => {
    clicking.innerHTML = "Your Haven " + localStorage.dollars + " Dollars."
}, 100);