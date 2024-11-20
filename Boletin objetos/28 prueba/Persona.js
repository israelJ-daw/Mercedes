class Persona{

constructor(nombre, apellido, dni){

    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
}
}

class Alumno extends Persona{
    constructor(nombre,apellido,dni,curso,notas){
        super (nombre, apellido, dni);

        this.curso=curso;
        this.notas=notas;
    }

    mostrar(){
 
        document.write("Nombre: " + this.nombre + " Apellidos: " + this.apellido + " DNI: " + this.dni + " curso: " + this.curso + " notas: " + this.notas + "<br>")

    }

   
    notamedia(...notas){
        var suma=0;
        var media=0;

        
        var suma=notas.reduce((sumatorio,nota)=>sumatorio+nota);               

        
        media=suma/notas.length;

        return document.write("La nota media es: " + media + "<br>") ;

    }

    notaalta(...notas){

        var mayor=-1;

        for (let i = 0; i < notas.length; i++) {
            if(mayor<notas[i]){
                mayor=notas[i];
            }   
        }
        return document.write("La nota mas alta es: " +  mayor);

    }


    
}