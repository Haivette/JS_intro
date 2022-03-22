//Array=conjunto de variables. Para agrupar valores en una sola variable
const arr1 = new Array (3)
//<undefined
const arr2 = new Array (1,2,3,4)
//<undefined
const arr3 = (1,2,3,4)
//<undefined


//Se imprimen:
console.log (arr3)
4

console.log (arr2)
Array (4)[ 1,2,3,4 ]

console.log (arr1)
//Array (3)[ <undefined × 3> ]

//Array mixto
const arrMixto = ["Ive", 25, true, () =>console.log("Hola"), "Europa"]
console.log(arrMixto)
//Array (5)[ "Ive", 25, true, () =>, "Europa" ]
arrMixto.length
5
//para imprimir un elemento del string
//recuerda que siempre se empieza a contar desde el 0, 1, 2...
arrMixto[2]
true
arrMixto[0]
Ive

//Se puede empezar a hacer desde un objeto vacío
let arregloVacio = []
console.log(arregloVacio)