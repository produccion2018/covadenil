const carrito = [];
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10.00 },
    { id: 2, nombre: 'Producto 2', precio: 15.00 },
    { id: 3, nombre: 'Producto 3', precio: 20.00 },
];

// Función para agregar producto al carrito
function agregarAlCarrito(idProducto) {
    const producto = productos.find(prod => prod.id === idProducto);
    carrito.push(producto);
    mostrarCarrito();
    Swal.fire({
        title: 'Producto agregado',
        text: `${producto.nombre} ha sido agregado al carrito`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

// Función para mostrar productos en el carrito
function mostrarCarrito() {
    const carritoLista = document.getElementById('carrito-lista');
    carritoLista.innerHTML = '';
    carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${item.nombre} - $${item.precio.toFixed(2)}
            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        carritoLista.appendChild(li);
    });
}

// Función para eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    mostrarCarrito();
    Swal.fire({
        title: 'Producto eliminado',
        text: 'El producto ha sido eliminado del carrito',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    });
}

// Función para realizar la compra
function comprar() {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No tienes productos en el carrito para comprar',
            icon: 'info',
            confirmButtonText: 'Aceptar'
        });
    } else {
        carrito.length = 0;
        mostrarCarrito();
        Swal.fire({
            title: 'Compra realizada',
            text: 'Gracias por tu compra',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    }
}

document.querySelector("svg").addEventListener("click", function() {
    Swal.fire({
        title: '¡Seleccione el producto a comprar!',
        icon: 'info',
        confirmButtonText: 'Entendido'
    });
});



