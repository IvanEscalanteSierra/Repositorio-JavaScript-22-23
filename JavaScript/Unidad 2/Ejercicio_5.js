/*
Desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador.
Ingresar por teclado un precio con decimales y la cantidad sin decimales, es decir un entero
*/

let precio = prompt('Introduzca el precio del artículo:');
let unidades = prompt('Introduzca el número de unidades que va a comprar:');

//Pago exacto

document.write('La cantidad exacta que debe abonar es de '+ (parseFloat(precio)*parseInt(unidades)) +' €.')