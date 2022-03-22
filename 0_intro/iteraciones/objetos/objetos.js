//Para crear un objeto vacío

const objeto = new Object();

/* En la consola:
undefined
>typeof(objeto)
<"objeto"
>console.log(objeto)
Object{}
 */

const objeto2 = {}

/* En la consola:
undefined
>typeof(objeto2)
<"objeto"
>console.log(objeto2)
Object{}
 */


//Para crear un objeto con propiedad llave y valor:

const modulo = {
    titulo: "intro a JS",
    duracionSemanas: 4,
    yaTermino: false
}

/* En la consola:
undefined
>typeof(modulo)
<"objeto"
>console.log(modulo)
Object{
    duracionSemanas:4
    titulo:intro a JS
    yaTermino:false
}
 */

/*
Acceso por puntos:

modulo.titulo
"intro a JS"
console.log(`Este es mi módulo actual ${modulo.titulo}`)
Este es mi módulo actual intro a JS

Acceso por corchetes:
modulo["duracionSemanas"]

*/

const mascota = {
    nombre: "Bolis",
    jugueteFavorito: "Cables",
    raza: {
        color: "negro",
        tamano: "mediano"
    }
}
//console.log(mascota)
// Object { jugueteFavorito:"Cables",nombre:"Bolis",raza: Object }
// mascota.raza.tamano
//"mediano"
//mascota["raza"]["tamano"]
//"mediano"

//Para reasignar valores:
mascota.edad = 6
console.log(masota)
//Object { edad:6,jugueteFavorito:"Cables",nombre:"Bolis",raza: Object }
mascota["raza"]["nombre"] = prompt ("Cual es el nombre de la raza")
<"conejin"
>console.log(mascota)
/*  Object{
    edad:6
    jugueteFavorito:Cables
    nombre:Bolis
    raza: Object {
        color:negro
        nombre:conejin
        tamano:mediano
    }
}  */

//Para eliminar una propiedad:

>delete mascota.jugueteFavorito
<true
console.log(mascota)
//Object { edad:6,nombre:"Bolis",raza: Object}