/* Para comprobar si un año es o no bisiesto se usa la siguiente regla:
 “Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. 
 Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.*/

 let l=0;
 let año;
 año=prompt("Indique el año");
 parseInt(año);

 año2=año%4;

 if(año2==0){
    l=1;
    if (l==1){
        alert("El año es bisiesto");
    }
 }
 else{
  alert("El año no es bisiesto") 
 }
