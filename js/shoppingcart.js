const padre = document.getElementById('dad');
const dad = ["<p class='khulaYellow'>Rango de precio</p>", "$6000 a $10000", "$10000 a $20000", "$20000 a $50000", "$50000 a $100000"];
for (const rango of dad) {
    const p = document.createElement('p');
    p.innerHTML = rango
    padre.appendChild(p);
}
const clickButton = document.querySelectorAll('.btnCompra')
const tbody = document.querySelector('.tbody')
let shoppingCart = []

clickButton.forEach(button => {
    button.addEventListener('click', addToshoppingCart)
})

function addToshoppingCart(e) {
    const button = e.target
    const item = button.closest('.general-GridChildren')
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
            return null;
        }
    }

    shoppingCart.push(newItem)
    rendershoppingCart()
}

function rendershoppingCart() {
    tbody.innerHTML = ''
    shoppingCart.map(item => {
        const tr = document.createElement('tr')
        tr.classList.add('itemshoppingCart')
        const Content = `

        <th scope="row">1</th>
        <td class="table_products">
            <img src=${item.images} alt="">
            <h6 class="title">${item.title}</h6>
        </td>
        <td class="table_prices">${item.price}</td>
        <td class="table_quantity">
            <input type="number" min="1" value=${item.quantity} class="input_element">
            <button class="delete btnCompra btn-danger">X</button>
        </td>

        `
        tr.innerHTML = Content;
        tbody.append(tr)

    })
    
}

$(document).ready(function() {
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    
    $('.category_item .').click(function() {
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        $('.category_item .').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        $('.product-item').hide();
        $('.product-item[category="'+catProduct+'"]').show();
    });
});