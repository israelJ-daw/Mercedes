/*Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso
 Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente. */

let n1=prompt("Escriba un numero de 2 caracteres");
let n2=parseInt(n1);
let total=0;
if (n2==0){
    alert ("No se puede dividir por 0")
}

total=1/n2;

document.write ("el inverso del numero seria: " + total );

