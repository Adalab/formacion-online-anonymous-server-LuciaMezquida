"use strict";

const menuBtn = document.querySelector(".js-menu-btn");
const closeBtn = document.querySelector(".js-close-btn");
const menuNav = document.querySelector(".js-nav");

menuBtn.addEventListener("click", () => {
  menuNav.classList.remove("hidden");
  menuBtn.classList.add("hidden");
  // menuBtn.classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  menuNav.classList.add("hidden");
  menuBtn.classList.remove("hidden");
});
