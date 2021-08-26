for (let i = 1; i <= 5; i++) {
    let num = (parseInt(prompt("Ingrese numero:")));
    let resultado = num + i;
    alert(num + "+" + i + "=" + resultado);
}

let nombre;
do {
    nombre = prompt("Ingrese nombre:");
    alert("Su nombre es: " + nombre);

} while (nombre != "ESC");

let hola = "Hola"
let veces = (parseInt(prompt("Ingrese numero de veces que se repita Hola:")));
for (let i = 0; i < veces; i++) {
    alert(hola);
}