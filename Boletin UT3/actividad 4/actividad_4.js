/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. 
Realiza un script que extraiga la cadena que se encuentra entre los paréntesis.
 Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo 
 “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer
  paréntesis hasta el final.
 */

let texto=prompt("Introduce texto");
let texto2;

let inicio=texto.indexOf("(");

let fin=texto.indexOf(")");



if (inicio != -1 && fin != -1 && fin>inicio){
    texto2=texto.substring(inicio+1, fin);
}


document.write(texto2);