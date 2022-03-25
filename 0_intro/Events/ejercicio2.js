/* Agregue una etiqueta <script> en la parte inferior de la página para su código
Crear una funcion que resuelva cada una de las operaciones
Al dar clic a cada uno de los botones calcular la operacion correspondiente y pintar el resultado en el #solution
BONUS! Hacer que el calculo de la operación se haga cuando se presione la tecla que viene en el comentario
Recuerden que para detectar teclas el evento es onkeypress para inline y atributo... y keypress para addEventListener */

const solution = document.getElementById("solution");

const squareButton = document.getElementById("square-button");
const halfButton = document.getElementById("half-button");
const percentButton = document.getElementById("percent-button");
const areaButton = document.getElementById("area-button");

function square() {
  const number = document.getElementById("square").value;
  console.log(number);
  solution.innerHTML = `El resultado es <strong>${number ** 2}</strong>`;
}

function halfNumber() {
  const number = document.getElementById("half").value;
  solution.innerHTML = `El resultado es <strong>${number / 2}</strong>`;
}

function percentage() {
  const percentage = document.getElementById("percentage").value;
  const entireValue = document.getElementById("entireValue").value;
  solution.innerHTML = `El resultado es <strong>${
    (percentage * entireValue) / 100
  }</strong>`;
}

function circleArea() {
  const radius = document.getElementById("radius").value;
  solution.innerHTML = `El area del circulo es <strong>${
    radius ** 2 * Math.PI
  }</strong>`;
}

function checkKey(e) {
  switch (e.key) {
    case 'a':
      square();
      break;
    case 'b':
      halfNumber();
      break;
    case 'c':
      percentage();
      break;
    case 'd':
      circleArea();
      break;
    default:
      break;
  }
}

squareButton.addEventListener("click", square);
halfButton.addEventListener("dblclick", halfNumber);
percentButton.addEventListener("mouseover", percentage);
areaButton.addEventListener("click", circleArea);

document.body.addEventListener("keypress", checkKey);