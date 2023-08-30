"use strict";

const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function () {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove("active");
})