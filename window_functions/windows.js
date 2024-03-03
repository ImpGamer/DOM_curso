const newWindow = window.open("https://ed.team")

//newWindow.open()
console.log(newWindow.closed)

/*De esta manera podemos abrir una nueva ventana al usuario, donde le indicamos la ruta absoluta
de la pagina que abrira, con que atribut "targe" lo abrira, como blanket o self, y el tamano de la ventana
que tendra, si no especificamos valor lo hara a pantalla completa, ademas de que si no especificamos unidad
de tamano, lo interpretara como pixeles*/
window.open("https://ed.team","_blanck","height=300","width=400")
//Podemos consultar el historial de nuestro sitio web por parte del usuario
const windowHistorial = window.history
//Lo hacemos retroceder a la anterior ventana donde estuvo
windowHistorial.back()
//Lo hacemos volver a la ultima ventana donde estuvo
windowHistorial.forward()