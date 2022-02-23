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
    <input type="text" class="form-control badge-pill" placeholder="Email">
    <input type="password" name="" id="" class="form-control badge-pill">
    <button type="submit" class="btn btn-primary circle-rounded" id="submit"><i class="fa-solid fa-chevron-right"></i></button>
</form>`;
    form = document.querySelector("form");
    form.addEventListener("submit", () => {
        alert("Formulaire bien envoyé");
        connection.innerHTML = `
                <div id="connection">
                <ul class="navbar-nav mx-3" id="list-connect">
                    <li class="btn btn-light nav-item mx-2 text-center justify-content-center" id="login"> <a class="nav-link seConnecter" href="# ">25/02/2022</a></li>
                    <li class="btn btn-primary nav-item " id="adhesion">
                        <a class="nav-link adherer " href="admin.html">Admin</a>
                    </li>
                </ul>
            </div>`;
    });
});