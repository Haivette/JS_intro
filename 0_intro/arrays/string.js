// Para pasar de String a Arrays
let alumnosString = "Sergio, Hiromi, Luis, Rosa, Fer"
let alumnos = alumnosString.split(", ")
console.log(alumnos)
(5)[ Sergio,Hiromi,Luis,Rosa,Fer ]

let parametrosBusqueda = "precio=234&color=rojo&tamano=mediano"
let parametros = parametrosBusqueda.split("&")
console.log(parametros)
Array (3)[ precio=234,color=rojo,tamano=mediano ]

// Al revés
console.log(parametros.join("&"))
//precio=234&color=rojo&tamano=mediano