/*Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A.
 Suponemos que una palabra está separada de otra por uno o más espacios
, un tabulador y el texto acaba con un punto, no existe ningún punto y aparte y las palabras son todas correctas.*/
let contador=0;
let contadorA=0;

let texto=prompt("Añade palabras");

texto=texto.trim;

let ax="";
for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i)!="."){
        ax=ax+texto.charAt(i);

    }
}
 
for (let a = 0; a < ax.length; a++) {
        if (a==" "){
            contador=contador+1;

        }
        

        if (a=="A"){
            contadorA=contadorA+1;
        }
    
}   

document.write("Palabras contadas: " + contador);
document.write("<Br>Palabras con la A: " + contadorA);
