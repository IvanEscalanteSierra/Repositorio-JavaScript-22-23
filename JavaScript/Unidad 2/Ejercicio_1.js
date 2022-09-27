/* Crea un programa en el que crees 4 variables de tipo cadena con los siguientes valores: “Hola”, “7”, “13”, y “Adios”.
Muestra en un alert una frase que incluya comillas simples.
Muestra en un alert que ocupe una línea las variables 1ª y 4ª separadas por un
salto de línea.
Muestra en un alert la suma de las variables 2ª y 3ª.
Muestra en un alert la suma de todas las variables */

let Valor_1 = "Hola"
let Valor_2 = "7"
let Valor_3 = "13"
let Valor_4 = "Adios"

//Alerta 1:

alert('Hola que tál "Michael Jackson" ?')

//Alerta 2:

alert(Valor_1 + "\n" + Valor_4)

// Alerta 3:

let Suma_23 = Number(Valor_2) + Number(Valor_3)
alert('La suma de los valores 2 y 3 es: '+Suma_23)

// Alerta 4:

let SumaGeneral = Valor_1+Valor_2+Valor_3+Valor_4

alert('La suma de todos los valores es: '+ SumaGeneral)