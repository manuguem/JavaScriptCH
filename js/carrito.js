
/* Array Barra de busqueda de productos */

const Productos = [{ id: 1, producto: "Fuente modular 500w EVGA", precio: 20500, watts: "500w", marcas: "EVGA" },
{ producto: "Fuente 800w AIGO", precio: 21800, watts: "800w", marcas: "Aigo" },
{ producto: "Fuente modular 550w EVGA", precio: 21999, watts: "550w", marcas: "EVGA" },
{ producto: "Fuente Akyga 600w", precio: 15990, watts: "600w", marcas: "Akyga" },
{ producto: "Fuente MPB 750w", precio: 18800, watts: "750w", marcas: "Mpb" },
{ producto: "Fuente Akyga 500w", precio: 8300, watts: "500w", marcas: "Akyga" }]

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


/* Ordenar Array de precios productos */

console.log("Ordenar productos por menor precio: ");
const Menor_precio = [20500, 21800, 18800, 15990, 21999, 8300];
console.log(Menor_precio.sort((a, b) => a - b));

console.log("Ordenar productos por mayor precio: ")
const Mayor_precio = [20500, 21800, 18800, 15990, 21999, 8300];
console.log(Mayor_precio.sort((a, b) => b - a));


/* Carrito de compras */

class Hardwarepart {
    constructor(name) {
        this.name = name.toLowerCase()

    }
}

const shoppingCartL = sessionStorage.getItem("shoppingC");
const shoppingCart = [];

if (shoppingCartL != null) {

    const ShoppingLObject = JSON.parse(shoppingCartL);
    for (const prod of ShoppingLObject) {
        shoppingCart.push(new Hardwarepart(prod.name));
    }
}

do {
    let answer = prompt(`Hay ${shoppingCart.length} productos en el carrito. Presione "s" para seguir "c" para culminar`).toLowerCase()
    if (answer != "s".toLowerCase()) break;

    HardwarepartName = prompt(`Ingresar nombre producto: `)
    const ProductName = new Hardwarepart(HardwarepartName);
    shoppingCart.push(ProductName);

    sessionStorage.setItem("ShoppingC", JSON.stringify(shoppingCart));

} while (true)

alert(`Usted agregó ${shoppingCart.length} productos al carrito`);


