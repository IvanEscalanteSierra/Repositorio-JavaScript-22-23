/**
  *  @author Iván Escalante Sierra
  */

//Empezamos por pedirle el número al usuario.

let num = Number(prompt("Introduzca el número deseado:"));

//Lo siguiente será sacar su valor exponencial:

console.log(
  "Valor exponencial del número introducido = " + num.toExponential()
);

//Ahora sacaremos su valor pero con 4 decimales:

console.log("Número introducido con 4 decimales = " + num.toFixed(4));

//Ahora sacaremos su valor pero pasado a binario:

console.log("Número introducido transformado a binario = " + num.toString(2));

//Ahora sacaremos su valor pero pasado a octal:

console.log("Número introducido transformado a octal = " + num.toString(8));

//Ahora sacaremos su valor pero pasado a hexadecimal:

console.log(
  "Número introducido transformado a hexadecimal = " + num.toString(16)
);

//Desarrollado por Iván Escalante Sierra 2ºDAW
