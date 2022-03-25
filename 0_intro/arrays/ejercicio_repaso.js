/* Dado un arreglo de calificaciones obtener la calificación máxima, mínima y promedio
*Nota: sólo con for, no se vale usar funciones que ya existan */

//Solución 1 

// // Creamos un arreglo con calificaciones ordenadas aleatoriamente
// var calificaciones = [90, 8, 10, 40, 100];
// // var calificacionesOrdenadasMenorAMayor = [8, 10, 40, 90, 100]
// // calificaciones.length = 5 elementos
// // primer elemento -> calificaciones[0]
// // último elemento -> calificaciones[4]
// // último elemento -> calificaciones[longitudDelArreglo - 1]
// // console.log(calificaciones);

// // Ordenamos de menor a mayor los valores del array
// var calificacionesOrdenadas = calificaciones.sort(function(a, b){return a-b});
// // var calificacionesOrdenadasMenorAMayor = [8, 10, 40, 90, 100]

// // Tomamos el último elemento del array ordenado, tomando en cuenta que será el mayor
// var numMayor = calificacionesOrdenadas[calificacionesOrdenadas.length -1];
// console.log('numMayor', numMayor);

// // Tomamor el primer elemento del array ordenado, tomando en cuenta que será el menor
// var numMenor = calificacionesOrdenadas[0];
// console.log('numMenor', numMenor);

// // Para obtener el promedio necesitamos una variable que nos ayude a almacenar la suma de los números
// var sumatoria = 0;

// for (var i = 0; i < calificaciones.length; i++) {
//     sumatoria = sumatoria + calificaciones[i];
// }

// var promedio = sumatoria/calificaciones.length;
// console.log('promedio', promedio);


var calificaciones = [100, 90, 80, 50, 90, 95, 60, 30];
console.log(calificaciones);

//Ordenando de mayor a menor

var calificacionesOrdenadas = calificaciones.sort(function(a,b){return a-b})
console.log(calificacionesOrdenadas);

var numMayor = calificacionesOrdenadas[7];
console.log('numMayor', numMayor)



// Solución 2:

let calificaciones = [9,10,10,9,8,9,6,7,8,9]
let promedio = 0
let suma = 0
let max= 0
let min= calificaciones[0]
let cantidad = calificaciones.length
for(i=0; i<cantidad; i++){
    suma += calificaciones[i];
    if (calificaciones[i] > max){
        max = calificaciones[i];
    }
    if (calificaciones[i] < min) {
        min = calificaciones[i];
    }
}
promedio = suma / cantidad;
alert(`El promedio de calificaciones es ${promedio}, el maximo es ${max} y el minimo es ${min}`)






/*  Con ayuda de los ciclos, imprimir la serie Fibonacci 0,1,1,2,3,5,8,13,21,...
*puedes poner un tope de cuántos elementos de la serie quieres 

Se empieza con numero
a = 0
b = 1
Al terminar
a = b
y...
b = a + b

 */

//Solución 2

let fib = []
fib[0] = 0
fib[1] = 1
for (let i = 2; i <= 10;i++){
  fib[i] = fib[i-2] + fib[i-1]
  console.log(fib[i])
}







/* 
Crea un programa con ayuda de iteraciones que muestre en la consola una pirámide de asteriscos como la siguiente:

    *
   ***
  *****
 *******
*********
 */







/* 
EJERCICIO 4
Mostrar en la consola la table de un número (del 1 al 10)
// Tabla del 2
// 1 x 2 = 2
// 2 x 2 = 4
// 3 x 2 = 6 
// .
// .
// 10 x 2 = 20
 */








// EJERCICIO 5
// Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene
// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a
// hacer un algoritmo que haga esto por el?







//Escribir todos los números que terminan en 0 y estén entre 2 y 121