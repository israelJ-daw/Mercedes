/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año 
y calcule cuál de ellas es anterior a la otra.
 */

fecha=prompt("Introduce fecha1");
fecha=new Date(fecha);

fecha2=prompt("Introduce fecha2");
fecha2=new Date(fecha2);

fecha=fecha.getTime();
fecha2=fecha2.getTime();

if (fecha<fecha2){
    alert("La primera fecha es mayor que la segunda");

}
else {
    alert("La segunda fecha es mayor que la primera")
}

