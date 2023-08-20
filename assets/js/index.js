const hamburgerIcon = document.querySelector('.nav__hamburger__icon');
const hamburgerMenu = document.querySelector('.nav__hamburger__menu');
const header = document.querySelector('header')
hamburgerIcon.addEventListener("click", function(){ 
    hamburgerMenu.classList.toggle("active")
    header.classList.toggle("active")
});

document.querySelectorAll(".nav__link").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active")
    header.classList.remove("active")
}))

