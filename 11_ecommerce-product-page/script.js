"use strict";

const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector(".cart");
const cartOverview = document.querySelector(".cart-overview");
const previewImg = document.querySelector(".preview");
const thumbnail = document.querySelectorAll(".thumb_images-1");
const closePreview = document.querySelector(".close-preview");
const overlay1 = document.querySelector(".overlay1");

menuBtn.addEventListener("click", function () {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

cart.addEventListener("click", () => {
  cartOverview.classList.toggle("show");
});

thumbnail.forEach((thumbnail) =>
  thumbnail.addEventListener("click", () => {
    previewImg.classList.add("show-preview");
  })
);

closePreview.addEventListener("click", () => {
  previewImg.classList.remove("show-preview");
});

overlay1.addEventListener("click", () => {
  previewImg.classList.toggle("show-preview");
});
