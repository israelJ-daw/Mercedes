function validarFormulario() {
    const nombre = document.getElementById("nombre").value;  // Obtenemos el valor del campo de nombre
    const mensajeError = document.getElementById("mensaje_error");  // Obtenemos el elemento de error

    // Validamos que el campo no esté vacío y que el nombre esté en mayúsculas
    if (nombre === "" || nombre !== nombre.toUpperCase()) {
        mensajeError.style.display = "inline";  // Mostramos el mensaje de error
        return false;  // Evitamos que se envíe el formulario
    }

    mensajeError.style.display = "none";  // Ocultamos el mensaje de error si todo está bien
}
