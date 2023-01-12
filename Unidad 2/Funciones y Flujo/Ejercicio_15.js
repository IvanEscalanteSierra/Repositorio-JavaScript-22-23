let day = prompt("Indica el día que quieres de la semana");
let transformed_day = day.toLowerCase();
let semana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
var respuesta;


for (let i = 0; i < 8; i++) {

    if (transformed_day == 'domingo') {
        respuesta = semana[0];
    } else if (semana[i] == transformed_day) {
        respuesta = semana[i + 1]
    }

}

document.write("El día que buscas es "+respuesta);
