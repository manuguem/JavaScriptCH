let sumaTotal = 0;

const suma = x => sumaTotal = sumaTotal + x;
const acumPrecio = (producto) => {

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
    dato = prompt("Ingrese producto:");
    
    precio = acumPrecio(dato);
    suma(precio);

    console.log(sumaTotal);


} while (dato != "salir" )

alert("Total con envío es: " + sumaTotal);
