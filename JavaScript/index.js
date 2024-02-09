//La funcion innerText solo me traer el texto contenido dentro de la etiqueta
console.log(document.body.children[0].innerText)
document.body.children[0].innerText = "Nuevo Texto"
//El atributo innerHTML me trae todos los hijos que contiene la etiqueta incluyendo textos
const route = document.location.href

console.log(document.body.children[1].innerHTML)
document.body.children[1].children[0].innerText = route

//De esta manera solo accedemos a los estilos y lo modfiicamos pero no accedemos al archivo CSS, se sobreescribe
//document.body.style.backgroundColor = "red"
//Aqui si accedemos al archivo CSS incluso lo modificamos
//document.styleSheets[0].cssRules[0].style.backgroundColor = "skyblue"

const animation = () => {
    if(document.body.style.backgroundColor === "skyblue") {
        document.body.style.backgroundColor = "tomato"
        document.body.children[2].style.color = "yellow"
    } else {
        document.body.style.backgroundColor = "skyblue"
        document.body.children[2].style.color = "blue"
    }
}
setInterval(animation,1000)