const openButton = document.querySelector(".header__open");
const closeButton = document.querySelector(".header__close");
const overlay = document.querySelector(".overlay");

function openMenu() {
    const menu = document.querySelector(".header__nav");
    menu.style.display = "block";
    overlay.style.display = "block";
}
function closeMenu(){
    const menu = document.querySelector(".header__nav");
    menu.style.display = "none";
    overlay.style.display = "none";
}

openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);