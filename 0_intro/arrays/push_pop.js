// Push: Agrega - nos permite agregar uno o más elementos al final del array

let alumnos = ["Sergio", "Hiromi", "Luis", "Rosa","Fer"]
alumnos.push("Luna","Chris")
7
alumnos.length
7

// POP: Elimina- nos dice el último elemento que quitó
alumnos.pop()
"Chris"
console.log(alumnos)
(6)[ Sergio,Hiromi,Luis,Rosa,Fer,Luna ]


let ultimoAlumnoEliminado =alumnos.pop()
console.log(ultimoAlumnoEliminado)
Luna //porque el pop elimina y nos regresa el último que quedó