// Inicializa la Actual a la Actual actual.
let Actual = new Date();

// Creamos arrays en los 2 idiomas.

const Semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];
const Meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiebre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const Week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Pedimos el formato al usuario.

let format = prompt(
  "Introduzca el formato deseado:\n - 1: DD/MM/AAAA. \n - 2: Día, Número y Mes de Año. \n - 3: Opción 2 pero en inglés."
);

// Escribe la fecha en el formato solicitado.

format == 1
  ? console.log(
      Actual.getDate() + "/" + Actual.getMonth() + "/" + Actual.getFullYear()
    )
  : format == 2
  ? console.log(
      Semana[Actual.getDay()] +
        ", " +
        Actual.getDate() +
        " de " +
        Meses[Actual.getMonth()] +
        " de " +
        Actual.getFullYear()
    )
  : format == 3
  ? console.log(
      Week[Actual.getDay()] +
        ", " +
        Months[Actual.getMonth()] +' '+
        Actual.getDate() +
        ", " +
        Actual.getFullYear()
    )
  : console.error(
      "Por favor, introduzca un valor recogido en las opciones (1-3)."
    );

//Desarrollado por Iván Escalante Sierra 2ºDAW
