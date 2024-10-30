/*Escriba un algoritmo que lea un instante de tiempo dado en
 horas y minutos y escriba como respuesta los mensajes “Buenos días” 
“Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas
    
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

let tiempo=prompt("Indica que hora es");
let tiempo2=prompt("Indica que minuto es");

let tiempoHora=parseInt(tiempo);
let tiempoMin=parseInt(tiempo2);

if (tiempoHora >= 7 && tiempoHora < 14) {

{
    if (tiempoMin>=30){
        alert("Buenos dias")
    }
    else {
        alert("Buenas noches")
    }
}
}

if (tiempoHora >= 14 && tiempoHora < 20) {
   


    if (tiempoMin==00 && tiempoHora==14){
        alert("Buenos dias")
    }
    if (tiempoMin==01 && tiempoHora==14){
        alert ("Buenas tardes")
    }
    else{
        alert("Buenas tardes")
    }
}

 if (tiempoHora >= 20 && tiempoHora <= 23) {
   if (tiempoMin>30){
    alert("Buenas noches")
    
}
else {
    alert("Buenas noches")
}
 }if (tiempoHora >= 14 && tiempoHora < 20) {
   


    if (tiempoMin==00 && tiempoHora==14){
        alert("Buenos dias")
    }
    if (tiempoMin==01 && tiempoHora==14){
        alert ("Buenas tardes")
    }
    else{
        alert("Buenas tardes")
    }
}

 if (tiempoHora >= 20 && tiempoHora <= 23) {
   if (tiempoMin>30){
    alert("Buenas noches")
    
}
else {
    alert("Buenas noches")
}
 }if (tiempoHora >= 14 && tiempoHora < 20) {
   


    if (tiempoMin==00 && tiempoHora==14){
        alert("Buenos dias")
    }
    if (tiempoMin==01 && tiempoHora==14){
        alert ("Buenas tardes")
    }
    else{
        alert("Buenas tardes")
    }
}

 if (tiempoHora => 20 && tiempoHora <= 23) {
   if (tiempoMin=<30){
    alert("Buenas noches")
   }
}
if (tiempoMin>30){
    alert("Buenas tardes")
}
else {
    alert("Buenas noches")
}