var num = parseInt(prompt("Ingrese un número: "));

if ( num > 1000 ) {
    alert("El número ingresado es mayor a 1000.");
}

else if (num <= 0) {
    alert("Ingrese un número mayor que 0.")
}

var text = prompt("Ingrese saludo en idioma español: ")

if ( text == "hola" || text == "Hola" || text == "HOLA") {
    alert("Respuesta correcta.")
}

else {
    alert("Incorrecto, usted ingresó saludo en otro idioma.")
}

var num2 = parseInt(prompt("Ingrese un número: "));

if (num2 >= 10 && num2 <= 50) {
    alert("El número ingresado está entre 10 y 50.");
}

else {
    alert("El número ingresado no está entre 10 y 50.");
}