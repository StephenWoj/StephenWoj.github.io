const Links= document.querySelector(".Links");
const menuItems = document.querySelectorAll(".menuItem");
const menu= document.querySelector(".menu");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (Links.classList.contains("showMenu")) {
    Links.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    Links.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

menu.addEventListener("click", toggleMenu);