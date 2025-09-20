"use strict"
const icone = document.querySelector(".icone");
// const bakhsh1 = document.querySelector(".bakhsh");

window.addEventListener("scroll", function () {
    if (window.pageYOffset>300) {
        icone.classList.add("active")
    } else {
        icone.classList.remove("active")
    }
    
})