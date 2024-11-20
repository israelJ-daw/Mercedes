class Personas {

    constructor(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;

    }
}

class Banda {

    constructor(nombre, añofor, telefono, estilo) {
        this.nombre = nombre;
        this.añofor = añofor;
        this.telefono = telefono;
        this.estilo = estilo;

        this.personas = [];
    }

    agregar(nombre, dni) {
             for (let i = 0; i < this.personas.length; i++) {
            if (dni == this.personas[i].dni) {
                alert("Este DNI ya existe");
                return;             }
        }
    
       
        alert("Integrante Creado");
    
        
        var nuevoIntegrante = new Personas(nombre, dni);
        this.personas.push(nuevoIntegrante);
        }
    
        mostrar() {
            for (let i = 0; i < this.personas.length; i++) {
                var persona = this.personas[i]; 
                document.write(" Nombre: " + persona.nombre + " DNI: " + persona.dni);
            }
        }
    
        ordenaraño(){
            
            var ordenados=this.personas.map(banda=>({...banda}));
            ordenados=ordenados.sort((a,b)=>(a.añofor - b.añofor));
    
            return console.log(ordenados);
        }


        buscarnombre(nombre){
            for (let i = 0; i < this.personas.length; i++) {
                var persona = this.personas[i];
                if (nombre == this.personas[i].nombre){
                    document.write("Nombre: " + persona.nombre + "DNI: " + persona.dni );                }
                
                return;
            }
        }

    
    
}