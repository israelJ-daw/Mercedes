/* Diseñar un script que lea una dirección de email y la valide.
 No se terminará hasta introducir una dirección correcta*/

let email;

do {
    email = prompt("Introduce tu dirección de email:");

    if (email != /[a-z\.0-9]+@/gm) {
        alert("Email no válido, debe contener '@' y terminar con .com, .es, .org, .net, .info, o .biz.");
    }
} while (!email!=/[a-z\.0-9]+@/gm) 

document.write("Email válido: " + email);
