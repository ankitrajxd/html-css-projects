"use strict";

const menu = document.querySelector(".menu");
const list = document.querySelector(".list");
const button = document.querySelector(".btn");

const aboutBtn = document.querySelector(".about_btn");
const about = document.querySelector(".About");

// implementing nav menu on mobile devices
menu.addEventListener("click", function () {
  list.classList.toggle("hidden");
  button.classList.toggle("hidden");
});

aboutBtn.addEventListener("click", function () {
  about.scrollIntoView({ behavior: "smooth" });
});
