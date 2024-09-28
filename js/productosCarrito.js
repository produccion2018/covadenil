let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price} x ${item.quantity} `;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCart(item.name);
        
        li.appendChild(removeButton);
        cartList.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: $${total}`;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productName, productPrice) {
    const product = cart.find(item => item.name === productName);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    total += productPrice;
    updateCart();
}

function removeFromCart(productName) {
    const productIndex = cart.findIndex(item => item.name === productName);
    if (productIndex > -1) {
        total -= cart[productIndex].price * cart[productIndex].quantity;
        cart.splice(productIndex, 1);
    }
    updateCart();
}

function pay() {
    if (total > 0) {
        alert(`¡Muchas gracias por su compra! Total: $${total}`);
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert('Su carrito está vacío.');
    }
}

updateCart();
