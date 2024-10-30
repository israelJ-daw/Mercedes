let fechaseg = prompt("Introduce los segundos");
fechaseg = parseInt(fechaseg);

let horas = Math.floor(fechaseg / 3600);
let minutos = Math.floor((fechaseg % 3600) / 60);
let segundos = fechaseg % 60;


document.write("Horas: " + horas + "<br>");
document.write("Minutos: " + minutos + "<br>");
document.write("Segundos: " + segundos);


