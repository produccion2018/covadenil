const botonModo = document.getElementById('boton-modo');
const iconoModo = document.getElementById('icono-modo');

botonModo.addEventListener('click', () => {
 
  // Verifico si el modo oscuro está activado
  if (localStorage.getItem('modo-oscuro') === 'true') {
    // Desactiva el modo oscuro
    localStorage.setItem('modo-oscuro', 'false');
    document.body.classList.remove('modo-oscuro-activado');
    iconoModo.classList.remove('fa-sun');
    iconoModo.classList.add('fa-moon');
  } else {
    
    // Activa el modo oscuro
    localStorage.setItem('modo-oscuro', 'true');
    document.body.classList.add('modo-oscuro-activado');
    iconoModo.classList.remove('fa-moon');
    iconoModo.classList.add('fa-sun');
  }
});

// Verifica si el modo oscuro está activado al cargar la página
if (localStorage.getItem('modo-oscuro') === 'true') {
  document.body.classList.add('modo-oscuro-activado');
  iconoModo.classList.remove('fa-moon');
  iconoModo.classList.add('fa-sun');
}