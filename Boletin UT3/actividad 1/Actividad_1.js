/* Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". 
Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.*/

let a=0;
let contador=0;
let contadorC=0;
let contadorÑ=0;
while(a==0){
    let nombres=prompt("Indique el nombre")
    contador=contador+1;
    if(nombres.indexOf("c")==0){
        contadorC=contadorC+1;
    }
    if(nombres.indexOf("ñ")!=-1){
        contadorÑ=contadorÑ+1;
    }
    if (nombres=="ULTIMO"){
        a=1;
        contador=contador-1;
    }
}

document.write("Palabras leidas: " + contador);
document.write("<br/>Palabras empezadas con C: " + contadorC);
document.write("<br/>Palabras que contienen Ñ: " + contadorÑ );