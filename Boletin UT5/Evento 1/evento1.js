function comprobar() {
    // Respuestas correctas definidas
    var correctAnswers = {
        p1: "A", // Respuesta correcta para la pregunta 1
        p2: "C"  // Respuesta correcta para la pregunta 2
    };

    // Comprobar la respuesta de la pregunta 1
    var pregunta1 = document.querySelector('input[name="p1"]:checked');
    if (pregunta1) {
        if (pregunta1.value === preguntacorrecta.p1) {
            document.getElementById("pregunta1").textContent = "Pregunta 1: ¡Correcto!";
            document.getElementById("pregunta1").style.color = "green";
        } else {
            document.getElementById("pregunta1").textContent = "Pregunta 1: Incorrecto.";
            document.getElementById("pregunta1").style.color = "red";
        }
    } 
    // Comprobar la respuesta de la pregunta 2
    var pregunta2 = document.querySelector('input[name="p2"]:checked');
    if (pregunta2) {
        if (pregunta2.value === preguntacorrecta2.p2) {
            document.getElementById("pregunta2").textContent = "Pregunta 2: ¡Correcto!";
            document.getElementById("pregunta2").style.color = "green";
        } else {
            document.getElementById("pregunta2").textContent = "Pregunta 2: Incorrecto.";
            document.getElementById("pregunta2").style.color = "red";
        }
    } 
}
