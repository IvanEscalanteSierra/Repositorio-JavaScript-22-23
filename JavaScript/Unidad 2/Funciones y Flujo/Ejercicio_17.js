let nombre= prompt("Nombre:");
let preguntas= prompt("Preguntas que se realizaron:");
let respuestas= prompt("Respuestas que acertó:");
let aspirante = {Nombre: nombre, Preguntas_Realizadas: preguntas, Preguntas_acertadas: respuestas};

let prueba = aspirante.Preguntas_acertadas / aspirante.Preguntas_Realizadas;

let final = (prueba>=0.9) ? 'superior':
(prueba>=0.75 && prueba<0.9) ? 'medio':
(prueba>=0.5 && prueba <0.75) ? 'bajo':
(prueba<0.5) ? 'fuera de nivel':
''

document.write("El aspirante "+aspirante.Nombre+" presenta un porcentaje "+ final+".")