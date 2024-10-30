/*Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano 
y calcule e imprima el cuadrante al que pertenece dicho punto. También debe detectar cuando está en el origen o sobre un eje. */

let x=prompt("Indique la X");
let y=prompt("Indique la Y");
x2=parseInt(x);
y2=parseInt(y);

//definimos los ejes
if (x2==0 && y2==0){
    alert("Se encuentra en el origen");
}
if (x2==0 && y2 > 0){
    alert ("Se encuetra en el Eje X");
}
if (x2==0 && y2 < 0){
    alert ("Se encuetra en el Eje X");
}

if (x2 > 0 && y2==0){
    alert ("Se encuetra en el Eje Y");
}

if (x2 < 0 && y2==0){
    alert ("Se encuetra en el Eje Y");
}

//definimos los cuadrantes


if (x2 > 0 && y2 > 0) {
    alert("El punto se encuentra en el cuadradante 1");
}

if (x2 > 0 && y2 < 0) {
    alert ("El punto se encuentra en el cuadrante 4");
}

if (x2 < 0 && y2 > 0) {
    alert ("El punto se encuentra en el cuadrante 2");
}

if (x2 < 0 && y2 < 0) {
    alert ("El punto se encuentra en el cuadrante 3");
}