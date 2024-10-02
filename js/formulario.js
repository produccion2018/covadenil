document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se envíe el formulario de inmediato

    // Validación de campos (puedes personalizar más según tus necesidades)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar la lógica para enviar el formulario a un servidor
        this.reset(); // Reinicia el formulario
    } else {
        alert('Por favor, completa todos los campos.');
    }
});



