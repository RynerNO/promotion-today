const mobileNavButton = document.querySelector("#show-mobile-nav")
const mobileMenuSlide = document.querySelector("#mobile-menu-slide")
mobileNavButton.addEventListener("click", () => {
    mobileMenuSlide.classList.toggle("mobile-nav__slide_hidden")
})