const btnEnviar = document.getElementById('btn-enviar');

//Validamos los ingresos
function validacion() {

    const nombre = document.getElementById('nombre');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');
    console.log(nombre, asunto, mensaje);
    
    if (nombre.value === "" || nombre.value === " ") {
      alert("Por favor, escribe tu nombre");
      nombre.focus();
      return false;
    }
      
    if (asunto.value === ""|| asunto.value === " ") {
      alert("Por favor, escribe un asunto válido");
      asunto.focus();
      return false;
    }
  
    if (mensaje.value === ""|| mensaje.value === " ") {
      alert("Por favor, escribe un mensaje válido");
      mensaje.focus();
      return false;
    }
    
    console.log(nombre, asunto, mensaje);
    return true; //Se pueden enviar los datos del formulario al servidor
  }
  
btnEnviar.addEventListener('click', validacion);