//Import de ma base données d'adhérents
import {adherents} from "./adherents-data.js"

let monHtml = ``

//Création de chaque adhérent en itérant sur la longueure de ma Bd
for(let i=0; i < adherents.length ; i++){

    monHtml += (`<!-- Trigger/Open The Modal -->
    <div  class="vignette">
<img id="myBtn-${i}" src="${adherents[i].photo}" alt="">
<p>${adherents[i].prenom} ${adherents[i].nom}</p>
</div>

<!-- The Modal -->
<div id="myModal-${i}" class="modal display-none">

<!-- Modal content -->
<div class="modal-content ">
    <span id=closeMod-${i} class="close">&times;</span>
    <div id="text-wrapper">
        <h2>${adherents[i].prenom} ${adherents[i].nom}</h2>
        <p>
            ${adherents[i].description}
        </p>
        <h3>Coordonnées:</h3>
        <p>📧 Mail: ${adherents[i].mail}</p>
        <p>📞 Téléphone: ${adherents[i].tel}</p>  
        <h3>Site internet:</h3>
        <p>🌐 ${adherents[i].siteWeb}</p> 
        <h3>Réseaux sociaux:</h3>
        <div id="social-links">
            <a href=""><img src="../img/img footer/facebook.png" alt="Logo facebook de L’Escale Tiers-Lieu"></a>
            <a href=""><img src="../img/img footer/linkedin.png" alt="Logo linkedin de L’Escale Tiers-Lieu"></a>
            <a href=""><img src="../img/img footer/instagram.png" alt="Logo instagram de L’Escale Tiers-Lieu"></a>
        </div>

    </div>
    <img src="${adherents[i].photo}" alt="">
</div>
</div>`
)

}


//Ecriture de "monHtml" dans l'élément DOM "adherents-wrapper" 
document.getElementsByClassName("adherents-wrapper")[0]
.innerHTML = monHtml

