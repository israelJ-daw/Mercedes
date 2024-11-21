function cambiarFondo() {
    const colorSeleccionado = document.querySelector('input[name="color"]:checked').value; // Obtenemos el valor del color seleccionado
    document.body.style.backgroundColor = colorSeleccionado; // Cambiamos el fondo del body al color seleccionado
}
