/*DOM*/

// const padre = document.getElementById('dad');
// const dad = ["<p class='khulaYellow'>Rango de precio</p>", "$6000 a $10000", "$10000 a $20000", "$20000 a $50000", "$50000 a $100000"];
// for (const rango of dad) {
//     const p = document.createElement('p');
//     p.innerHTML = rango
//     padre.appendChild(p);
// }

let contadorCarrito = 0;

let carrito = document.getElementById("btn-carrito");

carrito.addEventListener("click", respCarrito);

function respCarrito () {
    contadorCarrito += 1;
    carrito.innerHTML = "Agregar a carrito: " +contadorCarrito;
}