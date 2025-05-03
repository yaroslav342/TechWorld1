let cart_products = document.querySelector('.cart_cnt')
let cart_total = document.querySelector('.total')

console.log(cart);

function get_item(item) {
    return`<div class="cart_products">
    <div class="cart_product">
        <img src="screen1.png" alt="">
        <p class="p1">
            ${item.title}
        </p>
    </div>
    <div class="price">
        <input data-item="${item.title}" type="number" min="1" value ="${item.quantity}">
        <p class="price_text" data-price ="${item.price}">${item.price * item.quantity}</p>
    </div>
</div>`
}

function showCartList() {
    cart_products.innerHTML = ''
    console.log(cart);
    for(let key in cart.items) {
        cart_list.innerHTML += get_item(cart.items[key])
    }
    cart_total.innerHTML = cart.calculateTotal()
}

showCartList()

cart_products.addEventListener('change', (event) => {
        let target = event.target
        const itemTitle = target.getAttribute('data-item')
        const newQuantity = +target.value
        if (newQuantity > 0) {
            cart.updateQuantity(itemTitle, newQuantity)
            showCartList()
        }
    })
