// Función que compara dos mensajes y muestra las diferencias
function modificarMensaje() {
    // Definición de los mensajes inicial y modificado
    const mensajeInicial = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Somos", "nosotros", "todos", "los", "estudiantes", "de", "programación", "los", "mejores", "del mundo"];
    let eliminados = []; // Arreglo para almacenar palabras eliminadas
    let agregados = []; // Arreglo para almacenar palabras agregadas

    // Comparación de cada palabra en los mensajes
    for (let i = 0; i < mensajeModificado.length; i++) {
        if (mensajeInicial[i] !== mensajeModificado[i]) {
            eliminados.push(mensajeInicial[i]); // Se añade la palabra eliminada
            agregados.push(mensajeModificado[i]); // Se añade la palabra agregada
        }
    }

    // Mostrar mensajes y diferencias
    alert("Mensaje inicial: " + mensajeInicial.join(" ") + "\n" +
          "Mensaje modificado: " + mensajeModificado.join(" ") + "\n" +
          "Eliminados: " + eliminados.join(", ") + "\n" +
          "Agregados: " + agregados.join(", "));
}

// Función que realiza operaciones en un arreglo numérico
function operandoMetodos() {
    // Creación de un arreglo inicial con números aleatorios
    const arrInicial = Array(10).fill().map(() => Math.floor(Math.random() * 100));
    let arrFinal = [...arrInicial]; // Clonar el arreglo inicial
    const operaciones = [
        [() => arrFinal.push(Math.floor(Math.random() * 100))], // Añadir al final
        [() => arrFinal.unshift(Math.floor(Math.random() * 100))], // Añadir al principio
        [() => arrFinal.shift()], // Eliminar el primer elemento
        [() => arrFinal.pop()] // Eliminar el último elemento
    ];
    let eliminados = []; // Arreglo para almacenar valores eliminados
    let agregados = []; // Arreglo para almacenar valores agregados
    let suma = 0; // Variable para calcular la suma de los elementos

    // Realizar las operaciones en el arreglo
    for (let operacion of operaciones) {
        operacion[0](); // Ejecutar la operación
        suma += arrFinal[arrFinal.length - 1]; // Actualizar la suma
        eliminados.push(arrFinal.shift()); // Añadir el valor eliminado
        agregados.push(arrFinal.pop()); // Añadir el valor agregado
    }

    // Mostrar arreglo inicial, final, valores eliminados, valores agregados y suma
    alert("Arreglo inicial: " + arrInicial.join(" ") + "\n" +
          "Arreglo final: " + arrFinal.join(" ") + "\n" +
          "Valores eliminados: " + eliminados.join(", ") + "\n" +
          "Valores agregados: " + agregados.join(", ") + "\n" +
          "Suma de los elementos: " + suma);
}