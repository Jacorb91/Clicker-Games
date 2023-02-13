localStorage.setItem("dollars", 0)
localStorage.setItem("dpc", 1)
var clicking = document.querySelector(".clicks")

function clicksEarn() {
    localStorage.dollars = Number(localStorage.dollars) + Number(localStorage.dpc);
}

function buyCursor() {
    localStorage.dollars = Number(localStorage.dollars) - 50;
    localStorage.dpc = Number(localStorage.dpc) + 1;
}

setInterval(() => {
    clicking.innerHTML = "Your Haven " + localStorage.dollars + " Dollars."
}, 100);