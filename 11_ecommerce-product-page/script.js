"use strict";


const body = document.querySelector('body')
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close");
const menuBtn = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const cart = document.querySelector('.cart')
const cartOverview = document.querySelector('.cart-overview')



menuBtn.addEventListener("click", function () {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("active");
});

overlay.addEventListener('click', () => {
  sidebar.classList.remove("active");
})

cart.addEventListener('click', () => {
  cartOverview.classList.toggle('show')
})
