
const saludar = () => alert(`Has presionado el boton para saludar`)

const inputUsuario = document.getElementById("inputUsuario")

//1 Parametro => Que tipo de evento leera
//2 Parametro => Funcion que ejecutara cuando ese evento se escuche
inputUsuario.addEventListener("click",saludar)
inputUsuario.addEventListener("mouseenter",overMouse)

function overMouse() {
    console.log(`Evento funcionando`)
    const formulario = document.getElementById("formulario")

    const newP = document.createElement("p")
    newP.textContent = "Estas escribiendo el usuario"
    newP.style.color = "red"

    formulario.appendChild(newP)
    inputUsuario.removeEventListener("mouseenter",overMouse)
}