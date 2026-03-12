"use strict";

const burger = document.querySelector(".header--burgermenu");
const hideMenu = document.querySelector("#hide-menu");

burger.addEventListener("click", () => {
    hideMenu.style.display = "flex";
});

hideMenu.addEventListener("click", () => {
  hideMenu.classList.toggle("hide");
});


document.addEventListener("keypress", (e) => {

    if (e.keyCode === 13) {
        hideMenu.style.display = "none";
        console.log("menu clicked");
    }
})