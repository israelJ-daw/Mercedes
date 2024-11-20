window.addEventListener("load", inicializar, false);

function inicializar(){
    document.getElementById("mayus").addEventListener("click",mayus,false);
}


function mayus(){

    document.getElementById("mayus").addEventListener("click",mayus,false); {

    let inputs = document.querySelectorAll("input");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" || inputs[i].type === "email" || inputs[i].type === "password" || inputs[i].type === "number") {
            inputs[i].value = inputs[i].value.toUpperCase();
        }
    }

    console.log("Datos del formulario en mayúsculas:");
    for (let i = 0; i < inputs.length; i++) {
        console.log(`${inputs[i].name}: ${inputs[i].value}`);
    }

}};
