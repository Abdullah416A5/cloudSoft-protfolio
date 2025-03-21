let navBar = document.getElementById("nav-bar");
let navUl = document.getElementById("nav-ul");

navBar.onclick = function () {
    navUl.classList.toggle("show-ul");
};