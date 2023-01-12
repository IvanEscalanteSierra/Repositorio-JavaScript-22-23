// Creamos un objeto Date de la fecha actual.
var Fecha = new Date();

// Declaramos la fecha del fin de curso.
var FDC = new Date("6/24/2023");

// Número de milisegundos por día
var mili = 24 * 60 * 60 * 1000;

//Efectuamos la operación
var Diferencia = (FDC.getTime() - Fecha.getTime()) / mili;

// Devuelve los días que quedan en el año
var Diferencia = Math.round(Diferencia);

//Lo mostramos por consola
console.log("Quedan " + Diferencia + " días hasta el fin de curso.");

//Desarrollado por Iván Escalante Sierra 2ºDAW
