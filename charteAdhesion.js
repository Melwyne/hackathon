const styleBtnCharte = document.querySelector(".styleBtnCharte");
const closeCharte = document.querySelector(".closeCharte");
const charteRead = document.querySelector(".charteRead");
const dNone = document.querySelector(".dNone");
const adhesionPage = document.querySelector(".adhesionPage");

charteRead.addEventListener("click", ()=>{
    dNone.classList.add("dBlock");
    dNone.classList.remove("dNone");
    adhesionPage.classList.add("dNone");
})

closeCharte.addEventListener("click", ()=>{
    dNone.classList.remove("dBlock")
    dNone.classList.add("dNone");
    adhesionPage.classList.remove("dNone");
})

styleBtnCharte.addEventListener("click", ()=>{
    dNone.classList.remove("dBlock")
    dNone.classList.add("dNone");
    adhesionPage.classList.remove("dNone");
})