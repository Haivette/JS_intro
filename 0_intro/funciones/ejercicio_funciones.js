// 1. Crear una función que nos muestre en consola los días de la semana.

// Solución 1
function mostrarDiasDeLaSemana () {
    console.log ('lunes')
    console.log ('martes')
    console.log ('miércoles')
    console.log ('jueves')
    console.log ('viernes')
    console.log ('sábado')
    console.log ('domingo')
}

mostrarDiasDeLaSemana()

// Solución 2 
function mostrarDias () {
    let dias = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    for(let i = 0; i < dias.length; i++) {
        console.log(dias[i]);
    }
}

// mostrarDias();


// NOTA iterar arrays
// let nombres = ['Ana', 'Luis', 'Diego'];
// console.log(nombres)
// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[2])


// Rapido arreglo de nombre

let nombres = ['Ana','Luis', 'Ivy'];
console.log(nombres)
console.log(nombres[0])  //Ana
console.log(nombres[1])  //Luis
console.log(nombres[2])  //Ivy


// 2. Crear una función que nos muestre un numero A, un numero B y la suma de A y B

// Solución 1
function numeros() {
    let A = 2;
    let B = 3;
    console.log(A + B)
    }

numeros()

// Solución 2

function mostrarSuma () {
    // Opción 1
    // let numA = 10;
    // let numB = 5;
    // let suma = numA + numB;
    // Opción 2
    let numA = prompt('Ingresa el primer número');
    let numB = prompt('Ingresa el segundo número');
    let suma = parseInt(numA) + parseInt(numB);

    console.log(`La suma de ${numA} + ${numB} es igual a ${suma}`)
}

// mostrarSuma();
// mostrarSuma();


// 3. Crear una función que nos muestre la longitud de un arreglo que tú crearás

function mostrarLongitudArreglo () {
    let arreglo = [1, 4, 5, 5, 7, 8, 8, 1, 2, 4, 10, 10, 10];
    console.log(arreglo.length);
}

mostrarLongitudArreglo();
mostrarLongitudArreglo();
mostrarLongitudArreglo();
mostrarLongitudArreglo();