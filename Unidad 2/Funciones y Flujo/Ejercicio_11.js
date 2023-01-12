let dia = prompt("Introduzca el día de la fecha deseada, por favor:");
let mes = prompt("Introduzca el mes de la fecha deseada, por favor:");
let year = prompt("Introduzca el año de la fecha deseada, por favor:");

let dia_parse = parseInt(dia);
let mes_parse = parseInt(mes);
let year_parse = parseInt(year);

let mensaje = (dia== 25 && mes==12) ? 'Esa fecha era navidad en el año '+year_parse :
(dia!=dia_parse || mes!= mes_parse || year!= year_parse) ? 'Cagaste Light':
'Ese día no era Navidad, lo sentimos, ahora morirá.';

document.write(mensaje);