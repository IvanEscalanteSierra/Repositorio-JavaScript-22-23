/*
Realizar un programa que lea cuatro valores numéricos decimales e informar la
suma y producto de los cuatro y resta de los dos primeros y división de los dos
últimos.
*/

let Num_1 = prompt('Introduce el primer número:');
let Num_2 = prompt('Introduce el segundo número:');
let Num_3 = prompt('Introduce el tercero número:');
let Num_4 = prompt('Introduce el cuarto número:');

//Suma
document.write('La suma de los 4 valores especificados da= '+(parseFloat(Num_1)+parseFloat(Num_2)+parseFloat(Num_3)+parseFloat(Num_4))+"<br/>");

//Multiplicación
document.write('El producto de los 4 valores especificados da= '+(parseFloat(Num_1)*parseFloat(Num_2)*parseFloat(Num_3)*parseFloat(Num_4))+"<br/>");

//Resta
document.write('La resta de los 2 primeros valores da= '+(parseFloat(Num_1)-parseFloat(Num_2))+"<br/>");

//División
document.write('La división de los 2 últimos valores da= '+(parseFloat(Num_3)/parseFloat(Num_4))+"<br/>");