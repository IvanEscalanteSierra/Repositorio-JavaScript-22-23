let marca = prompt("Introduce la marca del vehículo:");
let modelo = prompt("Introduce el modelo del vehículo:");


let mensaje = (marca=='Renault') ? 'Obtiene un 15% de descuento.':
(marca=='Ford' && modelo=='Fiesta') ? 'Obtiene un 7% de descuento':
(marca=='Ford' && modelo=='Focus') ? 'Obtiene un 10% de descuento':
'Ha obtenido un descuento del 5%.';


document.write(mensaje);