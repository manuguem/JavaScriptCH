class Fuentepoder {
    constructor(nombre, precio, watts) {
        this.nombre = nombre;
        this.precio = precio;
        this.watts = watts;
    }

    hablar() {
        console.log(`Producto a comprar: ${this.nombre}`);
    }

}

let nombre = "";

do {

    nombre = prompt("Ingrese nombre del producto que desea comprar o 'salir' para culminar:");

    if (nombre == "fuente modular 500w evga") {

        const Fuentepoder1 = new Fuentepoder(nombre, 20500, "500watts");
        console.log(Fuentepoder1)

    }

    else if (nombre == "fuente 800w aigo") {

        const Fuentepoder2 = new Fuentepoder(nombre, 21800, "800watts");
        console.log(Fuentepoder2)

    }

    else if (nombre == "fuente modular 550w evga") {

        const Fuentepoder3 = new Fuentepoder(nombre, 21999, "550watts");
        console.log(Fuentepoder3)

    }

    else if (nombre == "fuente akyga 600w") {

        const Fuentepoder4 = new Fuentepoder(nombre, 15990, "600watts");
        console.log(Fuentepoder4)

    }

    else if (nombre == "fuente mpb 750w") {

        const Fuentepoder5 = new Fuentepoder(nombre, 18800, "750watts");
        console.log(Fuentepoder5)

    }

    else if (nombre == "fuente 500w akyga") {

        const Fuentepoder6 = new Fuentepoder(nombre, 8300, "500watts");
        console.log(Fuentepoder6)

    }

    else {
        console.log("Producto no válido")
    }

} while (nombre != "salir")