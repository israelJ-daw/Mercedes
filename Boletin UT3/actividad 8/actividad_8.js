/*Realizar un programa que compruebe si una palabra es palíndromo,
 es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....
 */


let palabra = "RADAR";

let esPalindromo = palabra === palabra.split('').reverse();

if (esPalindromo) {
 document.write("Es un palindromo ")
}   
 else {
    document.write("No es polindromo");
    }
