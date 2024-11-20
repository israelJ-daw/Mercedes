/*Crear un clase Alumno con su nombre, DNI, ... 
(objeto Persona), curso y notas de cada módulo. 
Crear su constructor y un método para imprimir un Alumno,
otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota en varios módulos). 
 */

var alumno1= new Alumno("Israel" , "Jimenez" , "1234" , "2 DAW" , 10);

alumno1.notamedia();

alumno1.mostrar();

alumno1.notaalta(6,2);