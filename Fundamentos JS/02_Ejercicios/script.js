console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
let ahora = 2024;
let fecha_nac = 2006
let resultado = ahora - fecha_nac
alert("Mi edad es: " + resultado)
    }
    
    // Ejercicio 2: Asignación de valores
    // Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
    function asignarValores() {
        let var1 = 10;
        let var2 = var1;
        alert("El valor de var2 es: " + var2)
    }
    
    // Ejercicio 3: Operaciones matemáticas
    // Instrucciones: Completa la función para realizar las siguientes operaciones:
    // Suma 'num1', 'num2'y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
    // Muestra los resultados en un mensaje.
    function realizarOperaciones() {
        let num1 = 5;
        let num2 = 10;
        let num3 = 15;
        let suma = num1 + num2 + num3;
        let resta = num1 - num3;
        let multiplicacion = num2 * num3;
        let divide = num1 / 120;
        alert("La suma es: " + suma + "\n la resta es: " + resta + "\n la multiplicacion es: " + multiplicacion + "\n la divicion es: " + divide);
    }
    
    // Ejercicio 4: Manipulación de cadenas
    // Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'numeracion'.
    // Luego, muestra la longitud del mensaje y el antepenultimo carácter en el mensaje.
    function manipularCadenas() {
        let direccion ="canto general";
        let numeracion ="0260"
        let mensaje ="la direccion es: " + direccion + " " + numeracion;
        let longitud = mensaje.length;
        alert("Mensaje: " + mensaje + "\nLongitud: " + "\nAntepenultimo Caracter: " + mensaje[32])
    }

    function sumaIndices(){
        let arreglo = [1, 2, 3, 4, 5, 6, 7];
        let resultado = arreglo[arreglo.length - 1] + arreglo[arreglo.length - 1]
        alert("El resultado de la suma de los indices es: " + resultado)
    }