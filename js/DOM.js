/*DOM*/

const padre = document.getElementById('dad');
const dad = ["<p class='khulaYellow'>Rango de precio</p>", "$6000 a $10000", "$10000 a $20000", "$20000 a $50000", "$50000 a $100000"];
for (const rango of dad) {
    const p = document.createElement('p');
    p.innerHTML = rango
    padre.appendChild(p);
}

/* Event contador carrito */

let contadorMSI = 0;

let msi = document.getElementById("btn-msi");

msi.addEventListener("click", respMsi);

function respMsi() {
    contadorMSI += 1;
    msi.innerHTML = "Agregar a carrito: " + contadorMSI;
}

let contadorRedragon = 0;

let redragon = document.getElementById("btn-redragon");

redragon.addEventListener("click", respRedragon);

function respRedragon() {
    contadorRedragon += 1;
    redragon.innerHTML = "Agregar a carrito: " + contadorRedragon;
}

let contadorAsus = 0;

let asus = document.getElementById("btn-asus");

asus.addEventListener("click", respAsus);

function respAsus() {
    contadorAsus += 1;
    asus.innerHTML = "Agregar a carrito: " + contadorAsus;
}