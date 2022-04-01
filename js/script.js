const mobileMenu = document.querySelector("#mobileMenu")
const toggleMenu = document.querySelector("#toggleMenu")
const mobileIcon = document.querySelector("#mobileIcon")

toggleMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("hide")
    mobileMenu.classList.toggle("nav-effect")
    mobileIcon.classList.toggle("fa-bars")
    mobileIcon.classList.toggle("fa-close")
})