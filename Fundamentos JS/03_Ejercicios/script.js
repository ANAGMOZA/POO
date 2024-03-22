function modificarMensaje() {
    const mensaje = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    const mensajeModificado = ["Hola", "a", "todos", "los", "estudiantes", "de", "programación", "de", "4to", "C"];
    let valoresEliminados = [];

    // Guarda valores eliminados
    valoresEliminados = mensajeModificado.splice(0, 2);
    valoresEliminados = valoresEliminados.concat(mensajeModificado.splice(-4));

    // Agregar valores nuevos
    mensajeModificado.unshift("Somos", "Nosotros");
    mensajeModificado.push("Los", "Estudiantes", "De", "Programacion", "Los", "Mejores", "Del mundo");

    alert(`Mensaje inicial:\n ${mensaje}`);
    alert(`Valores eliminados:\n  ${valoresEliminados}`);
    alert(`Mensaje modificado:\n  ${mensajeModificado}`);
}

function operandoMetodos() {
    let elementos = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

    // Metodo push()
    let agregados = [22, 24, 26, 28, 30];
    elementos.push(...agregados);

    alert(`El método push() sirve para agregar uno o más elementos al final de un arreglo:\n ${elementos}\nValores agregados: ${agregados}`);

    // Metodo unshift()
    let inicioAgregados = [-8, -6, -4, -2, 0];
    elementos.unshift(...inicioAgregados);

    alert(`El método unshift() sirve para agregar uno o más elementos al inicio de un arreglo:\n ${elementos}\nValores agregados: ${inicioAgregados}`);

    // Metodo shift()
    let primerValor = [elementos.shift()];

    alert(`El método shift() sirve para eliminar el primer elemento de un arreglo:\n ${elementos}\nEl valor eliminado es: ${primerValor}`);

    // Metodo pop()
    const eliminados = [elementos.pop()];

    alert(`El método pop() sirve para eliminar el último elemento de un arreglo:\n ${elementos}\nEl valor eliminado es: ${eliminados}`);
}