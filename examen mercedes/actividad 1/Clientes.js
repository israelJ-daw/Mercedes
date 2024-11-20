class Cliente {
    constructor(nombre, apellido, dni, citasPen, historial) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.citasPen = citasPen;
        this.historial = historial;
    }

}

class Citas {
    constructor() {
        this.clientes = [];

    }

    agregarcita(año, mes, dia) {
        var año_actual = 2024;
        var mes_actual = 11;
        var dia_actual = 11;

        if (año > año_actual) {
            if (mes > mes_actual) {
                if (dia > dia_actual) {
                    alert("Cita creada");
                    var nuevacita = new Cliente(nombre, apellido, dni, citasPen, historial)
                    this.clientes.push(nuevacita);
                }
            }

        } else {
            alert("Fecha incorrecta");


        }
    }



    recordarcita(){

        

    }
}
