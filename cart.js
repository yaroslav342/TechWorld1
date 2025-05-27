let cart_list = document.querySelector('.cart_cnt')
let cart_total = document.querySelector('.total')
let orderBtn = document.querySelector("#orderBtn")
let orderSection = document.querySelector(".order")

console.log(cart)

function get_item(item) {
    return `
    <div class="item">
    <img src="img/${item.image}" class="cart-item-img" alt="${item.title}">
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${item.title}</h3>
                    <p class="cart-item-price">Ціна за шт: ${item.price} uah</p>
                    <div class="cart-item-quantity">
                        <span>Кількість:</span>
                        <div class="quantity-control">
                            <button class="quantity-btn minus-btn">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn plus-btn">+</button>
                        </div>
                    </div>
                </div>
                <button class="remove-btn">✖</button>
    </div>`
}

function showCartList() {
    cart_list.innerHTML = ''
    for (let key in cart.items) { // проходимося по всіх ключах об'єкта cart.items
        cart_list.innerHTML += get_item(cart.items[key])
    }
    cart_total.innerHTML = cart.calculateTotal()*41
}

showCartList()

cart_list.addEventListener('change', (event) => {
        let target = event.target 
        const itemTitle = target.getAttribute('data-item')
        const newQuantity = +target.value
        if (newQuantity > 0) {
            cart.updateQuantity(itemTitle, newQuantity)
            showCartList() // Оновити список товарів у кошику
        }
    });

    //анімація появи кошика поступова поява кошика
    anime({
        targets: '.cart',
        opacity: 1, // Кінцева прозорість (1 - повністю видимий)
        duration: 500, // Тривалість анімації в мілісекундах
        easing: 'easeInOutQuad'
    })

// Assuming your cart items are rendered within a container element
const cartContainer = document.getElementById('gsik');
const cartMinus = document.getElementById('gik_minus');
const cartPlus = document.getElementById('gik_plus');


// Event listener for the delete button using event delegation
cartContainer.addEventListener('click', function(event) {
    if (event.target.classList.contains('gik_del')) {
        // Find the closest parent element with class .cart-item
        const cartItem = event.target.closest('.gik');
        let name = cartItem.querySelector(".gik_h1").innerHTML
        console.log(name)
        
        // If a cart item is found, remove it from the DOM
        if (name) {
            cart.updateQuantity(name, 0)
        }
    }
    if (event.target.classList.contains('gik_plus')) {
        // Find the closest parent element with class .cart-item
        const cartItem = event.target.closest('.gik');
        let name = cartItem.querySelector(".gik_h1").innerHTML
        let qua = cartItem.querySelector(".qua").innerHTML
        
        
        // If a cart item is found, remove it from the DOM
        if (name) {
            cart.updateQuantity(name, +qua + 1)
        }
    }

    if (event.target.classList.contains('gik_minus')) {
        // Find the closest parent element with class .cart-item
        const cartItem = event.target.closest('.gik');
        let name = cartItem.querySelector(".gik_h1").innerHTML
        let qua = cartItem.querySelector(".qua").innerHTML
        
        
        // If a cart item is found, remove it from the DOM
        if (name) {
            cart.updateQuantity(name, +qua - 1)
        }
    }
    showCartList()
    
});

