// Unshift - agrega al inicio del array

let alumnos = ["Sergio", "Hiromi", "Luis", "Rosa","Fer"]
alumnos.unshift("Karen","Stephen")
7
console.log (alumnos)
(7)[ Karen,Stephen,Sergio,Hiromi,Luis,Rosa,Fer ]

//Shift - Va a eliminar el primero que se agregó y lo va a devolver

const AlumnoEliminado = alumnos.shift()
console.log(AlumnoEliminado)
Karen
console.log(alumnos)
(6)[ Stephen,Sergio,Hiromi,Luis,Rosa,Fer ]