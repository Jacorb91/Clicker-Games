localStorage.setItem("dollars", 0)
var clicking = document.querySelector(".clicks")

function clicksEarn() {
    localStorage.dollars = Number(localStorage.dollars) + 1;
}

setInterval(() => {
    clicking.innerHTML = "Your Haven " + localStorage.dollars + " Dollars."
}, 100);