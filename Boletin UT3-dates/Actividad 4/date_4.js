/*Calcular de un cojunto de fechas la menor la mayor yt la diferencia en segundos entre amabs. */

let segundos1;
let segundos2;
let segundostotal;
let fecha=prompt("Indique una fecha");
fecha=new Date(fecha);

let fecha2=prompt("Indique otra fecha");
fecha2=new Date(fecha2);

fecha=fecha.getime();
fecha2=fecha2.getime();

segundos1=fecha.getSeconds();
segundos2=fecha2.getSeconds();
segundostotal=segundos1-segundos2;

if(fecha<fecha2){
    document.write("La segunda fecha es mmas grande y la diferencia de segudos es de " + segundostotal);
}
else{
    document.write("La primera fecha es mas grande y esta es la diferencia de segundos " + segundostotal);
}

