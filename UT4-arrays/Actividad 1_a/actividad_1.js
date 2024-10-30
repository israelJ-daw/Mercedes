//Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.

/*Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva 
el parámetro de menor valor pasado a la función.
 */

function elmenor (...arrayNum){

    let ordenado = arrayNum.sort();
    
    return ordenado[0];
}

document.write(elmenor(2,10,4,5,1))
