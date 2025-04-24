// Crea una función llamada `sumar` que reciba dos números como parámetros y retorne su suma.

function sumar (a,b){
    return a+b;
}

let val_1= parseFloat(prompt("Ingresa el primer numero: "));
let val_2= parseFloat(prompt("Ingresa el segundo numero: "));

let resultado = sumar(val_1,val_2);

//alert("la suma es: "+resultado)
console.log ("la suma es: "+resultado)