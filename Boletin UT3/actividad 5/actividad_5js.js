/* Realiza un script que pida una cadena de texto y la devuelva al revés.
 Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
*/

let texto=prompt("Introduce cadena");
let texto2="";

for (let index = texto.length-1 ; index >= 0; index--) {
    
    texto2+=texto[index];
    
}

document.write(texto2);