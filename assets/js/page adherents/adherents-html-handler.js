//Import de ma base données d'adhérents
import {adherents} from "./adherents-data.js"

const modals = []
const btns = []
const spans =[]

for(let i=0; i<adherents.length; i++){
// Get the modal
modals[i] = document.getElementById(`myModal-${i}`);

// Get the button that opens the modal
btns[i] = document.getElementById(`myBtn-${i}`);

// Get the <span> element that closes the modal
spans[i] = document.getElementById(`closeMod-${i}`)

// When the user clicks on the button, open the modal
btns[i].addEventListener("click", function() {
  modals[i].classList.toggle("display-none")
})

// When the user clicks on <span> (x), close the modal
spans[i].onclick = function() {
  modals[i].classList.toggle("display-none")

}

//===========================================================
//.....   ⚠ ⬇ a faire fonctionner si j'ai le temps ⬇  .....\\
//===========================================================

// When the user clicks anywhere outside of the modal, close it

// window.onclick = function(event) {
//   if (event.target == modals[i]) {
//     modals[i].classList.add("display-none")
//   }
// }

}


