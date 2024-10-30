//Calcular el área y el volumen de la esfera cuyo radio se pide al usuario
let area;
let volumen;
let radio = prompt("Escribe el radio");
let radio2 = parseFloat(radio);

area = 4 * Math.PI * Math.pow(radio2, 2);
document.write("El área de la esfera es: " + area + "<br>");

volumen = (4 / 3) * Math.PI * Math.pow(radio2, 3);
document.write("El volumen de la esfera es: " + volumen);