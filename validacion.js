const btnEnviar = document.getElementById("btn-enviar");

//Validamos los ingresos
function validacion() {
  const nombre = document.getElementById("nombre");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");
  console.log(nombre, asunto, mensaje);

  if (nombre.value === "" || nombre.value === " ") {
    alert("Por favor, escribe tu nombre");
    nombre.focus();
    return false;
  }

  if (asunto.value === "" || asunto.value === " ") {
    alert("Por favor, escribe un asunto válido");
    asunto.focus();
    return false;
  }

  if (mensaje.value === "" || mensaje.value === " ") {
    alert("Por favor, escribe un mensaje válido");
    mensaje.focus();
    return false;
  }

  console.log(nombre, asunto, mensaje);
  return true; //Se pueden enviar los datos del formulario al servidor
}

btnEnviar.addEventListener("click", validacion);

// Menú hamburguesa para móviles (abre/cierra al presionar el botón o el h1)
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.menu__list');
  const titulo = document.querySelector('.header h1');
  function toggleMenu() {
    menu.classList.toggle('menu__list--open');
  }
  if (titulo && menu) {
    titulo.style.cursor = "pointer";
    titulo.addEventListener('click', toggleMenu);
  }
});

// Footer: año actual
document.getElementById("anio-actual").textContent = new Date().getFullYear();
