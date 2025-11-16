//Validar el formulario de registro desde cliente

// Este código se ejecuta cuando el documento ha cargado
(function () {
  'use strict'

  // Seleccionamos el formulario
  const formulario = document.querySelector('form');

  // Seleccionamos los campos de contraseña
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('password_confirm');

  // Evento que se dispara al enviar el formulario
  formulario.addEventListener('submit', function (event) {

    // Comprobamos la validación HTML
    // (campos required, pattern, minlength, etc.)
    if (!formulario.checkValidity()) {
      event.preventDefault(); // Detiene el envío
      event.stopPropagation(); // Evita que se propague el evento
    }

    // Comprobamos que las contraseñas coinciden 
    if (password.value !== passwordConfirm.value) {
      event.preventDefault();  // Bloquea el envío si son distintas
      event.stopPropagation();
      passwordConfirm.classList.add('is-invalid'); // Resalta en rojo
    } else {
      passwordConfirm.classList.remove('is-invalid');
    }

    // Activamos los estilos de validación de Bootstrap (muestra los campos que están bien en verde y mal en rojo)
    formulario.classList.add('was-validated');
  }, false);
})();

//Para mostrar el valor del control delizante en tiempo real

const slider = document.getElementById('valoracion');
const output = document.getElementById('valorValoracion');

// Si existen en la página (por seguridad), los conectamos
if (slider && output) {
  output.textContent = slider.value; // Valor inicial
  slider.addEventListener('input', function () {
    output.textContent = slider.value;
  });
}
