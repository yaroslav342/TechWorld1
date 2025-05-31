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


async function getProductsPhone() {
    let responce = await fetch("store_phone.json");
    let products = await responce.json();
    return products;
};

function getCardHTMLPhone(product) {
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

getProductsPhone().then(function(products) {
    let productsList = document.querySelector('.phone')
    if (productsList) {
        products.forEach(function(product){
            productsList.innerHTML += getCardHTMLPhone(product)
        })
    }

    let buyButtons = document.querySelectorAll('.phone .cart-btn')
    if (buyButtons){
        buyButtons.forEach(function (button){
            button.addEventListener('click', addToCart)
        });
    }
})

async function getProductsKeyboard() {
    let responce = await fetch("store_keyboard.json");
    let products = await responce.json();
    return products;
};

function getCardHTMLKeyboard(product) {
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

getProductsKeyboard().then(function(products) {
    let productsList = document.querySelector('.keyboard')
    if (productsList) {
        products.forEach(function(product){
            productsList.innerHTML += getCardHTMLKeyboard(product)
        })
    }

    let buyButtons = document.querySelectorAll('.keyboard .cart-btn')
    if (buyButtons){
        buyButtons.forEach(function (button){
            button.addEventListener('click', addToCart)
        });
    }
})


async function getProductsMouse() {
    let responce = await fetch("store_mouse.json");
    let products = await responce.json();
    return products;
};

function getCardHTMLMouse(product) {
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

getProductsMouse().then(function(products) {
    let productsList = document.querySelector('.mouse')
    if (productsList) {
        products.forEach(function(product){
            productsList.innerHTML += getCardHTMLMouse(product)
        })
    }

    let buyButtons = document.querySelectorAll('.mouse .cart-btn')
    if (buyButtons){
        buyButtons.forEach(function (button){
            button.addEventListener('click', addToCart)
        });
    }
})

const cartBtn = document.querySelector('.crt');

// Навішуємо обробник подій на клік кнопки "Кошик"
cartBtn.addEventListener("click", function () {
    // Переходимо на сторінку кошика
    window.location.assign('cart2.html');
});

// Створення класу кошика
class ShoppingCart {
    constructor() {
        this.items = {};
        this.cartCounter = document.querySelector('.cart-counter');// отримуємо лічильник кількості товарів у кошику
        this.cartElement = document.querySelector('#cart-items'); 
        this.loadCartFromCookies(); // завантажуємо з кукі-файлів раніше додані в кошик товари
    }

    // Додавання товару до кошика
    addItem(item) {
        if (this.items[item.title]) {
            this.items[item.title].quantity += 1; // Якщо товар вже є, збільшуємо його кількість на одиницю
        } else {
            this.items[item.title] = item; // Якщо товару немає в кошику, додаємо його
            this.items[item.title].quantity = 1;
        }
        this.updateCounter(); // Оновлюємо лічильник товарів
        this.saveCartToCookies();
    }

    // Зміна кількості товарів товарів
    updateQuantity(itemTitle, newQuantity) {
        if (this.items[itemTitle]) {
            this.items[itemTitle].quantity = newQuantity;
            if (this.items[itemTitle].quantity == 0) {
                delete this.items[itemTitle];
            }
            this.updateCounter();
            this.saveCartToCookies();
        }
    }

    // Оновлення лічильника товарів
    updateCounter() {
        let count = 0;
        for (let key in this.items) { // проходимося по всіх ключах об'єкта this.items
            count += this.items[key].quantity; // рахуємо кількість усіх товарів
        }
        this.cartCounter.innerHTML = count; // оновлюємо лічильник на сторінці
    }

    // Зберігання кошика в кукі
    saveCartToCookies() {
        let cartJSON = JSON.stringify(this.items);
        document.cookie = `cart=${cartJSON}; max-age=${60 * 60 * 24 * 7}; path=/`;
    }

    // Завантаження кошика з кукі
    loadCartFromCookies() {
        let cartCookie = getCookieValue('cart');
        if (cartCookie && cartCookie !== '') {
            this.items = JSON.parse(cartCookie);
            this.updateCounter();
        }
    }
    // Обчислення загальної вартості товарів у кошику
    calculateTotal() {
        let total = 0;
        for (let key in this.items) { // проходимося по всіх ключах об'єкта this.items
            total += this.items[key].price * this.items[key].quantity; // рахуємо вартість усіх товарів
        }
        return total;
    }
}

// Створення об'єкта кошика 
let cart = new ShoppingCart();


// Функція для додавання товару до кошика при кліку на кнопку "Купити"
function addToCart(event) {
    // Отримуємо дані про товар з data-атрибута кнопки
    const productData = event.target.getAttribute('data-product');
    const product = JSON.parse(productData);

    // Додаємо товар до кошика
    cart.addItem(product);
    console.log(cart);
}