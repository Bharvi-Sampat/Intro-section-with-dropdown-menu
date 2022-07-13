const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const overlay = document.querySelector(".overlay");
let showMenu = false;

menuBtn.addEventListener("click", toggelMenu);

function toggelMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    overlay.classList.add("black-overlay");
    navItems.forEach((item) => item.classList.add("open"));
    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    overlay.classList.remove("black-overlay");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}
