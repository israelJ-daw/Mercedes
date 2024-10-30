/*Con expresiones regulares, leer desde teclado una cadena con una serie de nombres.
 Contar cuántos nombres se han leído, cuántos comienzan C.*/
let a=0;
let contadorC=0;
let nombres=prompt("Ingrese nombres separados por coma");


listanombre= /(\bC\w)*/gi;

resul=listanombre.exec(nombres);

console.log(resul);

