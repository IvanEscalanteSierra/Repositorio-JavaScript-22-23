/*Crea un programa en el que muestres el resultado de varias operaciones
mediante alert, mostrando el texto exacto de la operación realizada y su
resultado.
Ej:
var operacion1 = 10 == 10;
alert (“La operación 10 == 10 es” + operacion1)*/

//Operaciones

let Ope1=10 == 10
let Ope2=10 === 10
let Ope3=10 === 10.0
let Ope4=String('Laura') == String('laura')
let Ope5=String('Laura') > String('laura')
let Ope6=String('Laura') < String('laura')
let Ope7= String('123') == 123
let Ope8=String('123') === 123
let Ope9= parseInt(String('123')) === 123

//Alertas

alert('La operación 10==10 resulta en = ' + Ope1)
alert('La operación 10===10 resulta en = ' + Ope2)
alert('La operación 10===10.0 resulta en = ' + Ope3)
alert('La operación Laura==laura resulta en = ' + Ope4)
alert('La operación Laura > laura resulta en = ' + Ope5)
alert('La operación Laura < laura resulta en = ' + Ope6)
alert('La operación "123"==123 resulta en = ' + Ope7)
alert('La operación "123"===123 resulta en = ' + Ope8)
alert('La operación 123===123 resulta en = ' + Ope9)