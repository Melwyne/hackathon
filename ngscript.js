const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "grey";
    } else {
        navbar.style.background = "transparent";
    }
});