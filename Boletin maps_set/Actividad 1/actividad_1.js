/*
Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera: 
("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.z

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos

*/

const dwecl = new Map();

dwecl.set('DAW', 'Desarollo Aplicaiones Web');
dwecl.set('DWS', 'Desarrollo Web Entorno Servidor');
dwecl.set('WID', 'Web Interface Design');


for (let i  of dwecl) {
    
    dwecl.get('DAW')
            
    
    console.log(i);dwecl.get('DAW')
            
    console.log(dwecl.get(i));


    for (let j in dwecl) {
        
        if (j=='DAW'){
            dwecl.delete('DAW')
        
            
        }

        

    }
}



