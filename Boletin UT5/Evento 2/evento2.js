function actualizarContador() {
    var maximo = 145;
    var texto_sms = document.getElementById("texto_sms");
    var caracteres_restantes = maximo - texto_sms.value.length;
    var contador_caracteres = document.getElementById("contador_caracteres");
    
    // Actualizamos el texto con el número de caracteres restantes
    contador_caracteres.textContent = "Caracteres restantes: " + caracteres_restantes;
}
