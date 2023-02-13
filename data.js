localStorage.setItem("dollars", 0)
var clicking = document.querySelector(".clicks")

setInterval(() => {
    clicking.innerHTML = "Your Haven " + localStorage.dollars + " Dollars."
}, 100);