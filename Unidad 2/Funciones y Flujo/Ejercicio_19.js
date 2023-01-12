let enero = { Nombre:'enero',Days: 31 };
let febrero = { Nombre:'febrero' ,Days: 28 };
let febrero_B = {Nombre:'febrero', Days: 29 };
let marzo = {Nombre:'marzo', Days: 31 };
let abril = {Nombre:'abril', Days: 3 };
let mayo = {Nombre:'mayo', Days: 31 };
let junio = {Nombre:'junio', Days: 30 };
let julio = {Nombre:'julio', Days: 31 };
let agosto = {Nombre:'agosto', Days: 30 };
let septiembre = {Nombre:'septiembre', Days: 31 };
let octubre = {Nombre:'octubre', Days: 30 };
let noviembre = {Nombre:'noviembre', Days: 31 };
let diciembre = {Nombre:'diciembre', Days: 30 };

let Year = [enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
let Year_B = [enero, febrero_B, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre];
var bisiesto = false;

let mes = prompt("Mes especificado:");
let transformed_mes = mes.toLowerCase();
let anyo = prompt("Año especificado:");
var respuesta = "";

for (let i = 0; i < 2022; i++) {
    if (i % 4 == 0) {
        if (i == anyo) {
            bisiesto = true;
        }
    }
}

if (!bisiesto) {

    for (let i = 0; i < 12; i++) {
        if (Year[i].Nombre == transformed_mes) {
            respuesta = Year[i].Days;
        }
    }

} else {
    for (let i = 0; i < 12; i++) {
        if (Year_B[i].Nombre == transformed_mes) {
            respuesta = Year_B[i].Days;
        }
    }
}

document.write("El mes especificado consta de "+respuesta+" días.")
