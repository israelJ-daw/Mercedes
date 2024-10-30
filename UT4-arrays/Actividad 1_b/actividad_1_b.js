/*Escribe una función llamada colocaEnMedio que acepte como parámetros 
dos arrays y devuelva el primer array con todos los valores del segundo array colocados en el centro del primer array. 
 */

function colacaEnMedio(array1, array2){

    var medio=array1.length/2;

    array1.splice(medio,0,array2);

    return array1;
}

var array1=[1,2,5,6];
var array2=[3,4];

document.write("La array entera es " + colacaEnMedio(array1,array2));