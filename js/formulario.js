document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación simple
    if (name && email && message) {
        // Guardar en localStorage
        const contactInfo = { name, email, message };
        localStorage.setItem('contactInfo', JSON.stringify(contactInfo));

        // Mostrar respuesta
        document.getElementById('response').innerText = "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.";

        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('response').innerText = "Por favor, completa todos los campos.";
    }
});



