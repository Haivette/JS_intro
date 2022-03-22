
/* -- Programa que va a evaluar un saludo, si el saludo es hola, 
imprime en la consola 'Hola' y pide con un prompt el nuevo saludo
En el momento en que deje de ser hola termina el bucle e 
imprime 'Te voy a acusar' */

let saludo = 'hola'
while(saludo === 'hola') {
    saludo = prompt 
}




/*
Practica 2: Contador de cervezas
Son administradores de un bar y por seguridad de sus clientes cuidan 
la cantidad de tragos que toman, por lo que solo tienen permitido 
vender un maximo de 7 por cliente.
Hagan un programa en el que le pregunten al cliente si quiere otro trago, 
si si quiere otro trago incrementen la su contador de tragos, 
pero si quiere otro y ya tomo 7 esta noche, mandenlo a casa
*/

let iteracion = 0;
while(iteracion < 7) {
    console.log(`Valor de iteracion: ${iteracion}`)
    iteracion = iteracion + 1
}
console.log("Ya vete a tu casa")