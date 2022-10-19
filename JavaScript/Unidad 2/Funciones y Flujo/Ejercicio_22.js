let altura = Number(prompt("Introduce tu altura"));
let edad = Number(prompt("Introduce tu edad"));
let sexo = prompt("Introduce tu género");

let calculo_h = 50+((altura-150)/4)*3 + (edad-20) / 4;
let calculo_m = 50+((altura-150)/4)*0.9 + (edad-20) / 4


let mensaje = (sexo=='hombre') ? 'Su peso ideal consta de '+calculo_h:
(sexo=='mujer') ? 'Su peso ideal consta de '+calculo_m:
'Error';

document.write(mensaje);