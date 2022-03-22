//Slice : devolver elementos desde una posicion hasta donde lo definamos
Sergio,Hiromi,Luis,Rosa,Fer
let alumnosSlice = alumnos.slice(1,3)
console.log(alumnosSlice)
(2)[ Hiromi,Luis ]

alumnosSlice.unshift(prompt("Ingresa un nevo alumno:"))
3
console.log(alumnosSlice)
(3)[ Mar,Hiromi,Luis ]

slice(posicionInicio, posicionFinal)