//Pedimos el formato al usuario.

let format = prompt('Introduzca el formato que desee:\n - 1: XX:XX:XX. \n - 2: XX:XX (AM-PM).')

// Inicializa la fecha a la actual.

const Actual = new Date();

// Inicializamos los datos para las horas.

let hora = Actual.getHours();
let minutos = Actual.getMinutes();
let segundos = Actual.getSeconds();

// Comprobamos en qué franja de día estamos.

let esPM = hora >= 12 ;
if (esPM) hora -= 12;

// Se añade un 0 antes de los valores si son menos que 10 para respetar el formato.

(hora < 10) ? hora = "0" + hora:
(minutos < 10) ? minutos = "0" + minutos:
(segundos < 10) ? segundos = "0" + segundos:
'';

// Escribe la hora en el formato solicitado.

let resultado;

(format == 1) ?
resultado = hora+':'+minutos+':'+segundos:
(format == 2) ? (esPM ? resultado = hora+':'+minutos + 'PM' : resultado = hora+':'+minutos+':'+segundos+ 'AM'):
'';


console.log(resultado);

//Desarrollado por Iván Escalante Sierra 2ºDAW