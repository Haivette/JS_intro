/* Practica 3: Alta de alumnos
Inicien un arreglo vacio de alumnos
Con un ciclo while pregunten si quieren dar de alta un nuevo alumnos, si si, 
agreguen  un nuevo objeto alumno al arreglo, pidiendo su nombre y apellido por prompt, 
si no, terminen el ciclo e impriman la lista de alumnos
Si quieren dar el extra mille, entonces al salir del ciclo con un ciclo for, 
iteren sobre todos los elementos del arreglo e impriman nombre y aprellido concatenado con template string */

let alumnos = [];
let agregarNuevoAlumno = "si";

while (agregarNuevoAlumno === "si") {
    alumnos.push({
        nombre: prompt("Ingresa el nombre del alumno: "),
        apellido: prompt("Ingresa el apellido del alumno: ")
    });
    agregarNuevoAlumno = prompt("Quieres añadir a un nuevo alumno?: ");
}

for(i = 0; i < alumnos.length; i++) {
    console.log(`El alumno ${i+1} es: ${alumnos[i].nombre} ${alumnos[i]["apellido"]}`);
}

// OR




