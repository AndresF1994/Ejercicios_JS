// Crea una función `factorial` que reciba un número y retorne su factorial. El factorial de un número `n` 
// es el producto de todos los números positivos menores o iguales a `n`.

function factorial(n){
    if(n<0){
        return "el numero factorial no esta definido para numeros negativos";
    }
    let resultado = 1
    for(let i=1; i<=n; i++){
        resultado =resultado*i;
    }
    return resultado;
}

let entrada = parseInt(prompt("Ingresa un numero positivo:"));
let resultado = factorial(entrada)
console.log("el factorial de "+ entrada + " es " + resultado);



