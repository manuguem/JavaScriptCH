let sumaTotal = 0;
let iva = 0.15


const sumar = x => sumaTotal = sumaTotal + x;
const calculo_IVA = x => calcular_iva = x * iva;
const damePrecio = (producto) => {
    switch (producto) {
        case "fuente modular 500w evga":
            return 20500;
        case "Fuente 800w AIGO":
            return 21800;
        case "fuente modular 550w evga":
            return 21900;
        case "fuente akyga 600w":
            return 15990;
        case "fuente mpb 750w":
            return 18800;
        case "fuente 500w akygo":
            return 8300;
        default:
            return 0;
    }

}

let dato = "";
do {
    dato = prompt("Ingrese producto o salir para culminar compra:");
    
    precio = damePrecio(dato);
    sumar(precio);

    console.log(sumaTotal);


} while (dato != "salir" )

let numero_iva = calculo_IVA(sumaTotal);
let total_iva = sumaTotal + numero_iva;

alert("Total con envío es: " + sumaTotal);
alert("Total con envío e IVA: " + total_iva);