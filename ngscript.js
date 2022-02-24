const navbar = document.querySelector(".navbar");
const seConnecter = document.querySelector("seConnecter");
const adherer = document.querySelector("adherer");
const btnTog = document.querySelector(".navbar-toggler");

//changement du background au scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbar.style.background = "rgb(223,223,223)";
    } else {
        navbar.style.background = "transparent";
    }
});

//changement du background au click du menu Burger
btnTog.addEventListener("click", () => {
    if (btnTog.ariaExpanded == true) {
        navbar.style.background = "rgb(223,223,223)";
    } else {
        navbar.style.background = "transparent";
    }
});

//login du membre
login.addEventListener("click", (e) => {
    e.preventDefault();
    connection.innerHTML = `<form class="form-inline">
    <input type="email" name="email" id="email" class="form-control badge-pill" placeholder="Email">
    <input type="password" name="password" id="password" class="form-control badge-pill mx-3" placeholder="Mot de passe">
    <button type="submit" class="btn btn-primary circle-rounded" id="submit"><i class="fa-solid fa-chevron-right"></i></button>
    </form>`;
    form = document.querySelector("form");
    form.addEventListener("submit", () => {
        if (email.value == "test@test.fr" && password.value == "admin") {
            alert("Vous étes bien connecté");
            connection.innerHTML = `                
                <ul class="navbar-nav mx-3" id="list-connect">
                    <li class="btn btn-light nav-item mx-2 text-center justify-content-center" id="login"> <a class="nav-link calendar" href="https://calendar.google.com/calendar/u/0/r ">25/02/2022<i class="fas fa-calendar-alt mx-1"></i></a></li>
                    <li class="btn btn-primary nav-item " id="adhesion">
                        <a class="nav-link adherer " id="admin" >Admin</a>                        
                            <div class="list-group" id="sideMenu">
                                <a href="#" class="list-group-item list-group-item-action " aria-current="true">
                                Tableau de Bord
                                </a>
                                <a href="#" class="list-group-item list-group-item-action">Mon Agenda</a>
                                <a href="index.html" class="list-group-item list-group-item-action">Se Deconnecter</a>
                            </div>                      
                    </li>
                </ul> 
                <div id="menuAdmin"></div>               
            `;
        } else {
            alert("veuillez vérifier votre email et votre mot de passe");
        }
        admin.addEventListener("click", () => {
            sideMenu.classList.toggle("visible");
        });
    });
});