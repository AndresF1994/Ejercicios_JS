//Crea una función llamada `esPar` que reciba un número y retorne `true` si es par, o `false` si es impar.
function esPar (num){
    return num % 2 == 0;
}

let val = parseInt(prompt("Digita el numero deseao: "))

let numero = esPar(val)

console.log("¿El numero es par?: "+numero)