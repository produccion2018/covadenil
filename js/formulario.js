document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Validación de los campos
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        // Si hay campos vacíos, mostramos un mensaje de alerta
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Por favor, completa todos los campos.',
        });
    } else {
        // Si todo está bien, mostramos un mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje Enviado!',
            text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
        }).then(() => {
            // Limpiar el formulario
            document.getElementById('contact-form').reset();
        });
    }
});
