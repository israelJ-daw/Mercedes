class Persona{
dni;
nombre;
apellido;



constructor(nombre,dni,apellido){

    this.nombre=nombre;
    this.dni=dni;
    this.apellido=apellido;


}

notaAlta(...notas){
   let mayor=notas[0];
    
    for (let i = 0; i < notas.length; i++) {
        if (mayor<notas[i]){
            mayor=notas[i];
        }
    }
    this.mayor=mayor;
    return mayor
}

mostrar(){

    document.write(this.nombre + "<br>");

    document.write(this.dni + "<br>");

    document.write(this.apellido + "<br>");
}

mostrarnota(){

    document.write(this.mayor + "<br>");

    document.write(media  + "<br>") ;

}



notamedia(...notas){

let media=0;
let contador=0;

/* utilizo un reduce para hacer un sumatorio de todo, acumulador es el nombre que le doy a la variable que va a guardar todo primero, que empieza en 0
despues nota  esla variable de notaS que seria cada elemento y  le puedo cambiar el nombre a acumulador y todo eso se guarda en contador*/
contador=notas.reduce((acumulador, nota)=>acumulador+notas);

/* para hacer la media he usado contador que tiene toda la suma de las notas y lo e dividido entre la mitad de la array y se hace la media */
media = contador/notas.length;
º
return media;
}


}






