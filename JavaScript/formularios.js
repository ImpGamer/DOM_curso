const myForm = document.getElementById("form")

myForm.children //Obtiene los elementos (etiquetas HTML) hijos del elemento o nodo
myForm.childNodes //Obtiene los nodos hijos del elemento

//Podemos acceder al contenido de un input
let valorUserName = myForm.querySelector("#username").value

//Agarramos un nodo y le cambiamos el tipo de input que sera
myForm.querySelector("#contrasena").type = "text"

//Y asi podemos acceder a cualquier atributo de cualquier tipo de nuestro nodo u elemento
//Le cambiamos que la contrasena sea obligatoria o posee el atributo required
myForm.querySelector("#contrasena").required = true

//Dentro de variables o constantes podemos guardar cualquier tipo de input de un formulario
const myCheckBox = myForm.querySelector("#aceptar")
//Sin embargo dentro de los tipo checkbox o radiobutton la propiedad o metodo .value no me retornan un valor exacto, asi que lo cambiamos por .check