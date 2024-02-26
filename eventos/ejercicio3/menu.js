const inputHideMenu = document.getElementById("hide-menu")
inputHideMenu.addEventListener("click",esconderMenu)
const inputShowMenu = document.getElementById("menu-show")
inputShowMenu.addEventListener("click",mostrarMenu)

function esconderMenu() {
    const nav = document.getElementById("mainMenu")
    nav.classList.add("hide")
}
function mostrarMenu() {
    const nav = document.getElementById("mainMenu")
    nav.classList.remove("hide")

    /*
    Funcion de la lista que intercambia, es decir si posee esa clase la elimina, en caso que no
    la agrega. Es como hacer una condicional pero mas simplifcada
        nav.classList.toggle("hide")
    */
}