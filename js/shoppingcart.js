const clickButton = document.querySelectorAll('.btnCompra')
const tbody = document.querySelector('.tbody')
let shoppingCart = []

clickButton.forEach(button => {
    button.addEventListener('click', addToshoppingCart)
})

function addToshoppingCart(e) {
    const button = e.target
    const item = button.closest('.product-item')
    const itemTitle = item.querySelector('.title').textContent;
    const itemPrices = item.querySelector('.price').textContent;
    const itemImages = item.querySelector('.img-s').src;

    const newItem = {
        title: itemTitle,
        price: itemPrices,
        images: itemImages,
        quantity: 1

    }
    additemshoppingCart(newItem)
    //Animate CSS
    $('.btn2').show().animate({ marginTop: "-13px" }, 200).animate({ marginTop: "3px" }, 300);

    //jQuery CLICK method

    // $(".btnCompra").click(function () { 
    //     alert("Tienes en el carrito: "+ itemTitle);
    // });

}

function additemshoppingCart(newItem) {
    const inputElement = tbody.getElementsByClassName('input_element')
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].title.trim() === newItem.title.trim()) {
            shoppingCart[i].quantity++;
            const inputValue = inputElement[i]
            inputValue.value++;
            TotalshoppingCart()
            return null;

        }
    }

    shoppingCart.push(newItem)
    rendershoppingCart()
}
//RENDER PRODUCTOS
function rendershoppingCart() {
    tbody.innerHTML = ''
    shoppingCart.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemshoppingCart')
        const Content = `

        <th scope="row"></th>
        <td class="table_products">
            <img src=${item.images} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table_prices">${item.price}</td>
        <td class="table_quantity">
            <input type="number" min="1" value=${item.quantity} class="input_element">
            <button class="delete btnCompra btn-danget">X</button>
        </td>

        `
        tr.innerHTML = Content;
        tbody.append(tr)
        tr.querySelector('.delete').addEventListener('click', removeItemshoppingCart)
        tr.querySelector('.input_element').addEventListener('change', addQuantity)
    })
    TotalshoppingCart()
}
//TOTAL PRODUCTOS
function TotalshoppingCart() {
    let Total = 0;
    const itemTotalshopCart = document.querySelector('.itemTotalshopCart')
    shoppingCart.forEach((item) => {
        const price = Number(item.price.replace("$", ''))
        Total = Total + price * item.quantity
    })

    itemTotalshopCart.innerHTML = `Total $${Total}`
    addLocalStorage()

}
//ELIMINAR OBJETOS
function removeItemshoppingCart(e) {
    const buttonDelete = e.target
    const tr = buttonDelete.closest('.itemshoppingCart')
    const title = tr.querySelector('.title').textContent;
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].title.trim() === title.trim()) {
            shoppingCart.splice(i, 1)
        }
    }
    tr.remove()
    TotalshoppingCart()

}

//SUMA Y RESTA DESDE EL CARRITO con flechas hacia arriba y abajo

function addQuantity(e) {
    const addInput = e.target
    const tr = addInput.closest('.itemshoppingCart')
    const title = tr.querySelector('.title').textContent;
    shoppingCart.forEach(item => {
        if (item.title.trim() === title) {
            addInput.value < 1 ? (addInput.value = 1) : addInput.value
            item.quantity = addInput.value;
            TotalshoppingCart()
        }
    })
}

function addLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}

window.onload = function () {
    const storage = JSON.parse(localStorage.getItem('shoppingCart'));
    if (storage) {
        shoppingCart = storage;
        rendershoppingCart()
    }
}