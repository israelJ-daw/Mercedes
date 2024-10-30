/*Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas.
 Después el programa debe mostrar la edad del usuario por pantalla.
 */
 
 let datos=prompt("Introduce tus datos separados por comas");

 datos=input.split(',');

 let nombre=datos[0];

 let profesión=datos[1];

 let edad=datos[2];

 document.write("Tu edad es: " + edad);




