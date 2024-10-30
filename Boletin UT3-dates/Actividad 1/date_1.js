/*Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
 */

fechana=prompt("Introduce la fecha de nacimiento");

fechana=new Date (fechana);

fechana=fechana.getTime();

fecha2=Date.now();

if (fechana<fecha2){
    alert("La fecha es correcta");
}
else {
    alert("La fecha no es correcta");
}