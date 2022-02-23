const navbar = document.querySelector(".navbar");
const seConnecter = document.querySelector("seConnecter");
const adherer = document.querySelector("adherer");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "rgb(223,223,223)";
    } else {
        navbar.style.background = "transparent";
    }
});

login.addEventListener("click", () => {
    connection.innerHTML = `<form class="form-inline" action="#" method="get">
    <input type="email" name="email" id="email" class="form-control badge-pill" placeholder="Email">
    <input type="password" name="password" id="password" class="form-control badge-pill">
    <button type="submit" class="btn btn-primary circle-rounded" id="submit"><i class="fa-solid fa-chevron-right"></i></button>
</form>`;
    form = document.querySelector("form");
    form.addEventListener("submit", () => {
        if (email.value == "test@test.fr" && password.value == "admin") {
            alert("Vous étes bien connecté");
            connection.innerHTML = `
                <div id="connection">
                <ul class="navbar-nav mx-3" id="list-connect">
                    <li class="btn btn-light nav-item mx-2 text-center justify-content-center" id="login"> <a class="nav-link calendar" href="https://calendar.google.com/calendar/u/0/r ">25/02/2022<i class="fas fa-calendar-alt"></i></a></li>
                    <li class="btn btn-primary nav-item " id="adhesion">
                        <a class="nav-link adherer " href="admin.html">Admin</a>
                    </li>
                </ul>
            </div>`;
        } else {
            alert("veuillez vérifier votre email et votre mot de passe");
        }
    });
});