/* Tanto asi que podemos extraer elementos de nuestro objeto document, como elementos y nodos
desde JS tambien podemos crear nuevos para implementarlos.
*/

//Se le especifica que elemento va a ser y se guarda en una variable o constante
const newArt = document.createElement("article")
newArt.id = "art-4" //De esta manera le podemos setear datos a sus atributos

//Las clases dentro de HTML como pueden ser varias, son consideradas listas o arreglos, por lo que se implementa otras funciones para acceder a ellas
newArt.classList.add("clase")

//Creacion de elementos HTML desde JS
const newH2 = document.createElement("h2")
const newP = document.createElement("p")

//Insertar un texto dentro del elemento
newH2.innerText = "Titulo cuarto articulo"
//Creacion de un nodo e implementacion de este, dentro del elemento
const nodeText = document.createTextNode("Descripcion del cuarto articulo")
//Manera en la que agregamos un hijo a un elemento
newP.appendChild(nodeText)

newArt.appendChild(newH2)
newArt.appendChild(newP)

//Obtenemos los nodos del div con la clase "articulos" y le agregamos los nuevos nodos creados "newArt"
const divArt = document.querySelector(".articulos")
divArt.appendChild(newArt)

//Al igual podemos eliminar hijos de elementos
const articuloEm = document.querySelector("#art-3")
divArt.removeChild(articuloEm)

//Un elemento posee atributos como una etiqueta HTML, como class,id,style,etc... asi que desde JS podemos setearle estos atributos
newArt.setAttribute("arial-label","cuarto-atributo") //Primero se dice que atributo va a ser y luego la especificacion de ese atributo