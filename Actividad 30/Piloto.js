class Piloto {
    constructor(nombre, escuderia) {
      this.nombre = nombre;
      this.escuderia = escuderia;
    }
  }
  
  class Clasificación extends Piloto {
    constructor(nombre, escuderia, tiempo) {
      super(nombre, escuderia);  
      this.tiempo = tiempo;
    }
  }
  
  class Carrera {
    constructor() {
      this.pilotos = [];  
    }
  
    agregarPiloto(nombre, escuderia, tiempo) {
        // Buscar si el piloto ya existe
        var pilotoExistente = this.pilotos.find(piloto => piloto.nombre === nombre);
    
        if (pilotoExistente) {
            // Si el piloto ya existe, actualizar su tiempo
            pilotoExistente.tiempo = tiempo;
            alert("Este piloto ya existe, se actualizó su tiempo");
        } else {
            // Si el piloto no existe, crear uno nuevo y añadirlo a la lista
            var nuevoPiloto = new Clasificación(nombre, escuderia, tiempo);
            this.pilotos.push(nuevoPiloto);
        }
    }


    ordenartiempo(){

        var ordenados=this.pilotos.map(piloto=>({...piloto}));
        ordenados=ordenados.sort((a,b)=>(a.tiempo - b.tiempo));

        return console.log(ordenados);
    }

    ordenarnombres(){
        var ordenados=this.pilotos.map(piloto=>({...piloto}));
        ordenados=ordenados.sort((a,b)=>(a.nombre.localeCompare(b.nombre)));
        return console.log(ordenados);
    }



    eliminar(nombre){
        var pilotoExistente = this.pilotos.find(piloto => piloto.nombre === nombre);

        if (pilotoExistente){

            var pilotos = this.pilotos.filter(piloto => piloto.nombre !== nombre);

            alert("EL piloto se a eliminado correctamente.")

            return console.log(pilotos);
        } else {

            alert("EL piloto no existe, no se puede eliminar")
        }








    }

}