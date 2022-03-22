// Concat: lo responde pero no almacena
let alumnos = ["Sergio", "Hiromi", "Luis", "Rosa","Fer"]
alumnos.concat('Ignacio', 'Ander', 'Iris')
(8)[ Sergio,Hiromi,Luis,Rosa,Fer,Ignacio,Ander,Iris ]

//Para almacenar el resultado
let alumnos2 = alumnos.concat('Ignacio', 'Ander', 'Iris')
console.log(alumnos2)
(8)[ Sergio,Hiromi,Luis,Rosa,Fer,Ignacio,Ander,Iris ]

let alumnos3 = alumnos.concat(['Ignacio', 'Ander', 'Iris'])
console.log(alumnos3)
(8)[ Sergio,Hiromi,Luis,Rosa,Fer,Ignacio,Ander,Iris ]

//Diferencia con push
alumnos.push(['Ignacio', 'Ander', 'Iris'])
6
console.log(alumnos)
/*[
    "Sergio",
    "Hiromi",
    "Luis",
    "Rosa",
    "Fer",
    [
      "Ignacio",
      "Ander",
      "Iris"
    ]
  ]*/

