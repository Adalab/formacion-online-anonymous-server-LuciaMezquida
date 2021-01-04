"use strict";

const menuBtn = document.querySelector(".js-menu-btn");
const menuNav = document.querySelector(".js-nav");

menuBtn.addEventListener("click", () => {
  console.log("hola");
  menuNav.classList.toggle("hidden");
});
