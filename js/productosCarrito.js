let cart = [];

const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout');
const cartTotal = document.getElementById('cart-total');

//  SweetAlert2
function showAlert(icon, title, text) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    showConfirmButton: false,
    timer: 1500,
  });
}

// Función para actualizar el carrito en pantalla
function updateCart() {
  cartItems.innerHTML = ''; // Limpiar el carrito
  let total = 0;

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    listItem.innerHTML = `
      <span>${item.product} - $${item.price}</span>
      <button class="btn-remove" data-index="${index}">
        <i class="fas fa-trash-alt"></i> Eliminar
      </button>`;
    cartItems.appendChild(listItem);

    total += item.price;
  });

  cartTotal.innerHTML = `Total: $${total}`;

  // Mostrar el botón de checkout si el carrito no está vacío
  checkoutButton.style.display = cart.length === 0 ? 'none' : 'block';
}

// Función para manejar el click en "Añadir al carrito"
addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.getAttribute('data-product');
    const price = parseFloat(e.target.getAttribute('data-price'));

    // Añadir el producto al carrito
    cart.push({ product, price });
    updateCart();

    // Mostrar mensaje de SweetAlert2
    showAlert('success', 'Producto Añadido', `Has añadido ${product} al carrito.`);
  });
});

// Función para manejar la eliminación de un producto del carrito
cartItems.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-remove')) {
    const index = e.target.getAttribute('data-index');
    const removedProduct = cart[index].product;
    cart.splice(index, 1); // Eliminar el producto del carrito
    updateCart();

    // Mostrar mensaje de SweetAlert2
    showAlert('warning', 'Producto Eliminado', `${removedProduct} ha sido eliminado del carrito.`);
  }
});

// Finalizar la compra
checkoutButton.addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: '¡Gracias por tu compra!',
    text: 'Tu pedido ha sido procesado correctamente.',
    showConfirmButton: true,
    confirmButtonText: 'Cerrar'
  }).then(() => {
    // Limpiar el carrito después de la compra
    cart = [];
    updateCart();
  });
});
