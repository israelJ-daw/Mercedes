/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula
 */

class Alumno {
    nombre
    apellido
    dni
    nota


    constructor(nombre,apellido,dni,nota){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.nota=nota;

    }

}


class Aula{
    constructor(){
        this.alumnos=[];
    }


    agregaralumno(nombre, apellido, dni , nota){
        var nuevoAlumno = new Alumno(nombre,apellido, dni , nota) 
        this.alumnos.push(nuevoAlumno);

    }

    mostrar() {
        for (let i = 0; i < this.alumnos.length; i++) {
            var alumno = this.alumnos[i]; 
            document.write(" Nombre: " + alumno.nombre + " Apellido: " + alumno.apellido + " DNI: " + alumno.dni + " Nota: " + alumno.nota);
        }
    }

    buscardni(dni){
        for (let i = 0; i < this.alumnos.length; i++) {
            var alumno = this.alumnos[i];
            if (dni == this.alumnos[i].dni){
                document.write("Nombre: " + alumno.nombre + "Apellido: " + alumno.apellido + "DNI: " + alumno.dni + "Nota: " + alumno.nota);
            }
            
            return;
        }
    }

    ordenarapellidos(){
        var ordenado=this.alumnos.map(alumno=>({...alumno}));
        ordenado=ordenado.sort((a,b)=>(a.apellido.localeCompare(b.apellido)));


        // Construir la cadena de texto con la información ordenada
        let resultado = "Ordenado por apellidos es:\n";
    
        // Iterar sobre el array ordenado y concatenar la información de cada alumno
        ordenado.forEach(alumno => {
            resultado += `Nombre: ${alumno.nombre}, Apellido: ${alumno.apellido}, DNI: ${alumno.dni}, Nota: ${alumno.nota}\n`;
        });
    
        // Retornar la cadena resultante
        return document.write(resultado)
    }
    

}
