let sumaTotal = 0;
let iva = 0.15


<<<<<<< HEAD
const sumar = x => sumaTotal = sumaTotal + x;
const calculo_IVA = x => calcular_iva = x * iva;
const damePrecio = (producto) => {
=======
const suma = x => sumaTotal = sumaTotal + x;
const acumPrecio = (producto) => {

>>>>>>> 7a34bca571390ebbae536fa178093d63dbdefedf
    switch (producto) {
        case "Fuente Modular 500w EVGA":
            return 20500;
        case "Fuente 800w AIGO":
            return 21800;
        case "Fuente modular 550w EVGA":
            return 21900;
        case "Fuente Akyga 600w":
            return 15990;
        case "Fuente MPB 750W":
            return 18800;
        case "Fuente 500w Akygo":
            return 8300;
        default:
            return 0;
    }

}

let dato = "";
do {
    dato = prompt("Ingrese producto o salir para culminar compra:");
    
    precio = acumPrecio(dato);
    suma(precio);

    console.log(sumaTotal);


} while (dato != "salir" )

<<<<<<< HEAD
let numero_iva = calculo_IVA(sumaTotal);
let total_iva = sumaTotal + numero_iva;

alert("Total con envío es: " + sumaTotal);
alert("Total con envío e IVA: " + total_iva);
=======
alert("Total con envío es: " + sumaTotal);
>>>>>>> 7a34bca571390ebbae536fa178093d63dbdefedf
