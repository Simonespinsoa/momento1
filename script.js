function CalcularPromedio(notas){
    let suma = 0;
    for (let n of notas){
        suma += n;
    }
    return parseFloat((suma / notas.length).toFixed(2));// uso fixed para redondear el resultado
}

function obtenerDesempeño(promedio){
    if(promedio >= 0 && promedio <= 2.9) return "insuficiente";
    if (promedio >= 3.0 && promedio <= 3.9) return "suficiente";
    if (promedio >= 4.0 && promedio <= 4.6) return "bueno";
    if (promedio >= 4.7 && promedio <= 5.0) return "excelente";
    return "promedio inválido";
}

function estadoEstudiante(promedio){
    return promedio >= 3.0 ? "aprobado" : "reprobado";
}

let cantidadEstudiantes = 3;
let estudiantes = [];

for (let i = 0; i < cantidadEstudiantes; i++){
    console.log(`\nregistro del estudiante ${i + 1}`);

    let nombre = prompt("ingrese el nombre del estudiante:");
    let documento = prompt("ingrese el documento del estudiante:");

    let cantidadNotas;
    do{
        cantidadNotas = parseInt(prompt("ingrese la cantidad de notas (mínimo 5):"));
    }while (isNaN(cantidadNotas) || cantidadNotas !== 5);

    let notas = [];
    for (let j = 0; j < cantidadNotas; j++){
        let nota;
        do{
            nota = parseFloat(prompt(`ingrese la nota ${j + 1} (entre 0 y 5):`));
        }while (isNaN(nota) || nota < 0 || nota > 5);
        notas.push(nota);
    }

    let promedio = CalcularPromedio(notas);
    let desempeño = obtenerDesempeño(promedio);
    let estado = estadoEstudiante(promedio);

    estudiantes.push({//cada vez que se ingresa una nota valida o informacion se guarda en el metodo o array
        nombre: nombre,
        documento: documento,
        notas: notas,
        promedio: promedio,
        desempeño: desempeño,
        estado: estado
    });

    console.log("\nReporte academico");
    console.log("--------------------------");
    console.log(`Nombre: ${nombre}`);
    console.log(`Documento: ${documento}`);
    console.log(`Notas: ${notas.join(", ")}`);
    console.log(`Promedio: ${promedio}`);
    console.log(`Desempeño: ${desempeño}`);
    console.log(`Estado: ${estado}`);
    console.log("--------------------------");
}

let mejor = estudiantes[0];
let peor = estudiantes[0];

for (let est of estudiantes){
    if (est.promedio > mejor.promedio) mejor = est;
    if (est.promedio < peor.promedio) peor = est;
}

console.log("\nResumen final");
console.log("--------------------------");
console.log(`mejor promedio: ${mejor.nombre} (${mejor.promedio})`);
console.log(`peor promedio: ${peor.nombre} (${peor.promedio})`);
