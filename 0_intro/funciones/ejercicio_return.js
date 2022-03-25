// 1. Crear una función que reciba un array de strings y números como este [4,"dos",8,"tres",5,9,1,"cero" y nos regrese un arreglo con sólo los elementos tipo number

// Solución 1:
function filtrarArreglo(arreglo) {
    let nuevoArreglo = [];
    for(let i = 0; i < arreglo.length; i++) {
        if(typeof arreglo[i] === 'number') {
            nuevoArreglo.push(arreglo[i])
        }
    }

    return nuevoArreglo;
}

// console.log(filtrarArreglo([4, "dos", 8, "tres", 5, 9, 1, "cero", true, false, 1, 'hola', 1, 20, 20]))

let arr = [1, 2, 't', 20, true, '2', 22];
// console.log(filtrarArreglo(arr));


// Solución 2:
function transformarStringANumber(arreglo){
    return arreglo.filter(function(x){
        return typeof x === "number"
    });
    }

console.log(transformarStringANumber([4,"dos", 8,"tres", 5, 9, 1, "cero"]))

// Solución 3:
let words = [4,"dos",8,"tres",5,9,1,"cero"];
let numbers = [];
function getNumber(words){
    for(let i=0;i<words.length;i++){

        if(words[i]*0===0)
        {
            numbers.push(words[i]);
        }
    }
    return numbers;

}
console.log(getNumber(words));

// Solución 4:
function number(arr) {
    arr2=[];
    for (let i = 0; i < arr.length; i++) {
        if (typeof(arr[i])=="number") {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
arreglo=number([4,"dos",8,"tres",5,9,1,"cero"]);
console.log(arreglo);

// Solución 5:
console.log(revisarArreglo([4,"dos",8,"tres",5,9,1,"cero"]))
function revisarArreglo(arreglo){
    let arreglonumeros =[]
    for(let i=0; i<arreglo.length; i++){
    if (!isNaN(arreglo[i])) {
        arreglonumeros.push(arreglo[i])
    }
}
    return arreglonumeros
}


// 2. Crear una función que reciba un número como parámetro nos devuelva un arreglo con los números pares desde el 0 hasta el número recibido como parámetro

//Solución 1:
function crearNumeroPares(limite) {
    let pares = [];
    for(let i = 0; i <= limite; i++) {
        if(i%2 === 0) {
            pares.push(i);
        }
    }
    return pares;
}

// console.log(crearNumeroPares(9));
// console.log(crearNumeroPares(30));


function crearNumeroPares2(limite) {
    let pares = [];
    for(let i = 0; i <= limite; i+=2) {
        pares.push(i);
    }
    return pares;
}

// console.log(crearNumeroPares2(9))
// console.log(crearNumeroPares2(30))


//Solución 2:
function arregloDePares(numero){
    var arreglo = [];
    for(var i = 0; i < numero; i++){
        if (i % 2 === 0) arreglo.push(i);
        }
    return arreglo
    }
console.log(arregloDePares(20))

//Solución 3:
console.log(numerosPares(100))
function numerosPares(limite){
let pares =[]
for(let i=0; i<=limite; i++){
    if (i % 2 == 0) {
        pares.push(i)
    }
}
    return pares

}

// Solución 4:
function pares(num) {
    arr=[];
    for (let i = 0; i <= num; i++) {
        if (i%2==0) {
            arr.push(i)
        }
    }
    return arr;
}
numero=pares(10);
console.log(numero);



// 3. Crear una función que me entregue un número entero random entre 1 y 100
// Googlear Math Random

// Solución 1:
function crearNumRandom(limInferior, limSuperior) {
    let numRandom = Math.floor(Math.random() * (limSuperior - limInferior)) + limInferior;

    return numRandom;
}

console.log(crearNumRandom(1, 11));

//Solución 2
function crearNumeroRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(crearNumeroRandom(1 , 101))

//Solución 3
function random(){
    return parseInt(Math.random()*100) ;
}
numrandom=random();
console.log(numrandom);

 //Solución 4:
function rammdom(parameter){
    hello = Math.floor(Math.random() * parameter)
    return hello
}


// 4. Crear una función que me ayude a codificar un mensaje, la función debe recibir un string y entregarme el mensaje codificado, la codificación reemplaza las 'a' con 4, las 'e' con 3, las 'i' con 7, las 'o' con 6 y las 'u' con 2

// Solución 1:
let palabra = 'hola';

function codificarMensaje(palabra) {

    let palabraArray = palabra.split('');
    for(let i = 0; i < palabraArray.length; i++) {
        if(palabraArray[i] === 'a') {
            palabraArray[i] = 4;
        } else if(palabraArray[i] === 'e') {
            palabraArray[i] = 3
        } else if(palabraArray[i] === 'i') {
            palabraArray[i] = 7
        } else if(palabraArray[i] === 'o') {
            palabraArray[i] = 6
        } else if(palabraArray[i] === 'u') {
            palabraArray[i] = 2
        }
    }
    return palabraArray.join('');
}

console.log(codificarMensaje('hola'))
console.log(codificarMensaje('Murcielago'))

//Solución 2:
function codificarMensaje(palabra){
    let encriptado = palabra.replace(/a/ig, 4). replace(/e/ig, 3).replace(/i/ig, 7).replace(/o/ig, 6).replace(/u/ig, 2);
    return palabra.value = encriptado;
}
console.log(codificarMensaje('hola que hace?'));

//Solución 3:
function reemplazar(string) {
    string=string.toLowerCase();
    arr=string.split("");
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]=="a") {
            arr[i]=arr[i].replace("a",4)
        }else if (arr[i]=="e") {
            arr[i]=arr[i].replace("e",3)
        }else if(arr[i]=="i") {
            arr[i]=arr[i].replace("i",7)
        }else if(arr[i]=="o") {
            arr[i]=arr[i].replace("o",6)
        }else if(arr[i]=="u") {
            arr[i]=arr[i].replace("u",2)
        }
    }
    return arr.join('')
}
console.log(reemplazar("aeiou"));
