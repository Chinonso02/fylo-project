const navLinks = document.querySelector(".links")
const navOpen = document.querySelector(".ri-menu-line")
const navClose = document.querySelector(".ri-close-line")

function opennav(){
    navLinks.style.top = "4%"
    navOpen.style.display = "none"
    navClose.style.display = "block"
}

function closeNav(){
    navLinks.style.top = "-4%"
    navOpen.style.display = "block"
    navClose.style.display = "none"
}