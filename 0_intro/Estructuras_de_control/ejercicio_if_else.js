//para pasar de string a número o a otro

let edad = parseInt(prompt("Cual es tu edad"))
if (edad < 4){
    alert("Muy joven")
} else if(edad >= 4 && edad <= 99){
    alert("Diviertete")
} else {
    alert("Lo siento, pero para el domino no hay límite")
}

/* con ternarios
let edad = parseInt(prompt("Cual es tu edad?: "))

if(edad < 4) {
    alert("Eres muy joven")
} else if(edad >= 4 && edad <= 99) {
    alert("Diviertete")
} else {
    alert("Ya deberías colgar los tenis")
} */

