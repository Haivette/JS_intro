const button = document.getElementById('colorChange')
const eventFunction = function () {
    document.body.style = `background-color: ${color}`;
}

button.addEventListener("click", () => eventFunction('red'));
button.addEventListener("dblclick", () => eventFunction('green'));
button.addEventListener("mouseover", () => eventFunction('blue'));