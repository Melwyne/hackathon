const form = document.querySelector("form");
    console.log(form);

form.addEventListener("submit", (e) => {
  // preventDefault empeche le rechargement de la page
  e.preventDefault();
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if ( input_name.value.length >=3 && textarea_message.value.length >= 3 && input_email.value.match(mailFormat)  ) {
    alert("Votre formulaire à été envoyé");
    input_name.value = "";
    textarea_message.value = "";
    input_email.value = "";

  } else {
    alert("Veuillez remplir correctement !");
  }
});