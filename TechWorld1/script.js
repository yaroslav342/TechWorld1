async function getProductsLap() {
    let responce = await fetch("store_db.json");
    let products = await responce.json();
    return products;
};

function getCardHTMLLap(product) {
    let productData = JSON.stringify(product)

    return `
    <div class="item_card">
                <img class="item" src="img/${product.image}" alt="">
                <p>
                    ${product.title}
                </p>
                <div class="price_cnt">
                    <h2> ${product.price} ₴</h2>
                    <button class=""cart-btn" type="button" data-product='${productData}'><img src="img/cart.png" alt=""></button>
                </div>
            </div>    
    `
}

getProductsLap().then(function(products) {
    let productsList = document.querySelector('.laptops')
    if (productsList) {
        products.forEach(function(product){
            productsList.innerHTML += getCardHTMLLap(product)
        })
    }

    let buyButtons = document.querySelectorAll('.laptops .cart-btn')
    if (buyButtons){
        buyButtons.forEach(function (button){
            button.addEventListener('click', addToCart)
        });
    }
})

async function getProductsScreen() {
    let responce = await fetch("store_screen.json");
    let products = await responce.json();
    return products;
};

function getCardHTMLScreen(product) {
    let productData = JSON.stringify(product)

    return `
    <div class="item_card">
                <img class="item" src="img/${product.image}" alt="">
                <p>
                    ${product.title}
                </p>
                <div class="price_cnt">
                    <h2> ${product.price} ₴</h2>
                    <button class=""cart-btn" type="button" data-product='${productData}'><img src="img/cart.png" alt=""></button>
                </div>
            </div>    
    `
}

getProductsScreen().then(function(products) {
    let productsList = document.querySelector('.screen')
    if (productsList) {
        products.forEach(function(product){
            productsList.innerHTML += getCardHTMLScreen(product)
        })
    }

    let buyButtons = document.querySelectorAll('.screen .cart-btn')
    if (buyButtons){
        buyButtons.forEach(function (button){
            button.addEventListener('click', addToCart)
        });
    }
})
