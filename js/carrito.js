
/* Array Barra de busqueda de productos */

const Productos = [{ id: 1, producto: "Fuente modular 500w EVGA", precio: 20500, watts: "500w", marcas: "EVGA" },
{ id: 2, producto: "Fuente 800w AIGO", precio: 21800, watts: "800w", marcas: "Aigo" },
{ id: 3, producto: "Fuente modular 550w EVGA", precio: 21999, watts: "550w", marcas: "EVGA" },
{ id: 4, producto: "Fuente Akyga 600w", precio: 15990, watts: "600w", marcas: "Akyga" },
{ id: 5, producto: "Fuente MPB 750w", precio: 18800, watts: "750w", marcas: "Mpb" },
{ id: 6, producto: "Fuente Akyga 500w", precio: 8300, watts: "500w", marcas: "Akyga" }]

console.log("Fuente mejor calidad precio: ")
const Fuente500EVGA = Productos.find(producto => producto.id === 1);
console.log(Fuente500EVGA);

console.log("Fuentes de menor prestaciones: ")
const Menorprecio = Productos.filter(producto => producto.precio < 9000);
console.log(Menorprecio);

console.log("Fuentes de mayor prestaciones: ")
const Mayorprecio = Productos.filter(producto => producto.precio > 20000);
console.log(Mayorprecio);

console.log("Fuentes de 500watts: ")
const Poder = Productos.filter(producto => producto.watts === "500w");
console.log(Poder);

console.log("Fuentes de marca Akyga: ")
const Marca = Productos.filter(producto => producto.marcas === "Akyga");
console.log(Marca);


/* Ordenar Array de precios fuentes */

console.log("Ordenar productos por menor precio: ");
const Menor_precio = [20500, 21800, 18800, 15990, 21999, 8300];
console.log(Menor_precio.sort((a, b) => a - b));

console.log("Ordenar productos por mayor precio: ")
const Mayor_precio = [20500, 21800, 18800, 15990, 21999, 8300];
console.log(Mayor_precio.sort((a, b) => b - a));

/* Ingreso de fuentes a comprar y precio final */

// class Fuentepoder {
//     constructor(nombre, precio, watts) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.watts = watts;
//     }

//     sumaIva() {
//         this.precio = this.precio * 2.1;
//     }

// }

// let nombre = "";

// do {

//     nombre = prompt("Ingrese nombre del producto que desea comprar o 'salir' para culminar:");

//     if (nombre == "fuente modular 500w evga") {

//         const Fuentepoder1 = new Fuentepoder(nombre, 20500, "500watts");
//         console.log(Fuentepoder1)
//         alert("El precio del producto es: " + 20500)
//     }

//     else if (nombre == "fuente 800w aigo") {

//         const Fuentepoder2 = new Fuentepoder(nombre, 21800, "800watts");
//         console.log(Fuentepoder2)
//         alert("El precio del producto es: " + 21800)

//     }

//     else if (nombre == "fuente modular 550w evga") {

//         const Fuentepoder3 = new Fuentepoder(nombre, 21999, "550watts");
//         console.log(Fuentepoder3)
//         alert("El precio del producto es: " + 21999)

//     }

//     else if (nombre == "fuente akyga 600w") {

//         const Fuentepoder4 = new Fuentepoder(nombre, 15990, "600watts");
//         console.log(Fuentepoder4)

//     }

//     else if (nombre == "fuente mpb 750w") {

//         const Fuentepoder5 = new Fuentepoder(nombre, 18800, "750watts");
//         console.log(Fuentepoder5)

//     }

//     else if (nombre == "fuente 500w akyga") {

//         const Fuentepoder6 = new Fuentepoder(nombre, 8300, "500watts");
//         console.log(Fuentepoder6)

//     }

//     else {
//         console.log("Producto no válido")
//     }


// } while (nombre != "salir")

