/*Usa una expresión regular para eliminar todos los espacios en blanco de una cadena.
*/

let cadena = "   Hola,   esto es un   ejemplo.   ";

let cadenaSinEspacios = cadena.split(' ').join('');

document.write(cadenaSinEspacios);