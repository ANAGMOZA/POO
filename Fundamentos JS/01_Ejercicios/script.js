//Ejercicios creacion de variables

//Una variable global de tipo
var global ="Global";
//Variable local
let local ="Local";
//Constante
const constante ="Constante";

console.log("Variables: Global:" + global + "-Local: " + local + " - Constante: " + constante );

//Variable numero decimal
let numeroDecimal = 3;
//Variable cadena de texto
let cadenaTexto ="Hola Mundo!";
//Variable booleano
let booleano ="true";
//variable arreglo
let arreglo =[ 1, 2, 3, 4, 5];
//Variable objeto
let objeto ={ nombre: "Angel", edad: 17};
//variable indefinida
let indefinida;
//Variable nulo
let nulo = null;
//Definicion de funcion
function operacion(num1, num2){
    return num1 + num2;
}

console.log("Variables:\nEntero:" + numeroDecimal +"\ncadenaTexto: " + cadenaTexto + "\nbooleano: " + booleano + "\narreglo: " + arreglo + "\nobjeto: " + JSON.stringify(objeto) + "\nindefinida:" + indefinida + "\nnulo: " + nulo + "\nresultado de funcion: " + operacion(10,5));

console.log( operacion(10,5) ); 