window.addEventListener("load", inicializar, false);

function inicializar() {

    //inicio la funcion mayus
    document.getElementById("mayus").addEventListener("click", mayus, false);

    //inicio la funcion carcularEdad
    document.getElementById("fechaNacimiento").addEventListener("change", calcularEdad, false);
}


function mayus(event) {
    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        if (
            inputs[i].type === "text" ||
            inputs[i].type === "email" ||
            inputs[i].type === "password" ||
            inputs[i].type === "number"
        ) {
            inputs[i].value = inputs[i].value.toUpperCase();
        }
    }

    document.write("Datos del formulario en mayúsculas:");
    for (let i = 0; i < inputs.length; i++) {
        document.write(`${inputs[i].name}: ${inputs[i].value}`);
    }
}

function calcularEdad() {
    // Obtener la fecha de nacimiento que el usuario escribió en el formulario.
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Crear un objeto de tipo "Date" con la fecha de nacimiento (en formato "YYYY-MM-DD").
    let fechaNacimientoDate = new Date(fechaNacimiento);

    // Obtener la fecha actual del sistema (cuando la persona está usando la página).
    let fechaActual = new Date();

    // Calcular la diferencia en años entre el año actual y el año de nacimiento.
    let edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();

    // Verificar si ya pasó el cumpleaños de este año, si no, restar un año a la edad.
    let mesActual = fechaActual.getMonth();
    let mesNacimiento = fechaNacimientoDate.getMonth();
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimientoDate.getDate())) {
        edad--;
    }

    // Poner la edad calculada en el campo de texto de "edad".
    document.getElementById("edad").value = edad;
}


