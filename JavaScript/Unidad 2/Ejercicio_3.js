/* 
Escribir un programa en el cual se ingresen cuatro números enteros, calcular e
informar la suma de los dos primeros y el producto del tercero y el cuarto
*/

let Num_1 = prompt('Introduce el primer número:')
let Num_2 = prompt('Introduce el segundo número:')
let Num_3 = prompt('Introduce el tercero número:')
let Num_4 = prompt('Introduce el cuarto número:')

document.write('Suma:'+"<br/>")
document.write('La suma de los 2 primeros números resulta en= '+ (Number(Num_1)+Number(Num_2))+"<br/>")
document.write('Multiplicación:'+"<br/>")
document.write('El producto de la multiplicación de los 2 últimos resulta en= '+ (Number(Num_3)*Number(Num_4)))
