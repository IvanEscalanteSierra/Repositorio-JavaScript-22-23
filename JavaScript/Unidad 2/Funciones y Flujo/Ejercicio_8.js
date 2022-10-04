let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");

let mensaje = (edad>=18 && edad>0) ? 'Bienvenido '+nombre+', eres mayor de edad y has vivido '+ (edad*365)+' días':
(edad<18 && edad>0) ? 'Bienvenido '+nombre+', eres menor de edad y has vivido '+ (edad*365)+' días':
'Ha ocurrido un error al introducir la edad.';


document.write(mensaje);