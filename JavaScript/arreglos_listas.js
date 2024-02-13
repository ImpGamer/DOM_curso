/*
Mediante el metodo .getElement indicamos que dentro de una lista de objetos se almacenaran los elementos que requerimos como
parametro, pero recordemos que son elementos es decir  etiquetas HTML solamente.
*/
//Podemos guardar en una coleccion de datos etiquetas HTML
const arts = document.getElementsByClassName("arts");
//Y de esta manera convertir nuestra lista o coleccion en un array
const artArrays = [...arts];

//Obtencion de etiquetas mediante el DOM
const articles = document.getElementsByTagName("article")

artArrays.forEach(el => console.log(el))

/* Con el metodo .querySelector nos traeremos los nodos, a comparacion de los elementos un nodo es todo dato o elemento que se encuentre como hijo
de esa consulta en parametro, es decir:
<div class="encabezado">
    <h1>Mi titulo</h1>
    <p>Esto es un texto</p>
</div>
Si por ejemplo pedimos un querySelectorAll("encabezado") estamos pidiendo todos los nodos que poseen una clase "encabezado" como atributo, sin embargo
como estamos pidiendo los nodos, sus nodos hijos de este caso el <div> tambien los va almacenar
*/
var artsNodos = document.querySelectorAll(".arts") //En este caso me trae todos los nodos de los elementos que poseen la clase "arts"

artsNodos = document.querySelector("#art-3") //Tambien podemos pedir por ID, y como buena practica solo nos deberia traer un elemento