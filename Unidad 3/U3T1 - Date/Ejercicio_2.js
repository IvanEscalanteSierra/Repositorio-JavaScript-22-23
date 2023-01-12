//Creamos el objeto base para las fechas y le pedimos la fecha al usuario.
let Actual = new Date();
let cumpleaños = prompt('Escriba el día de su cumpleaños:');

//Cogemos día y mes por separado  procedemos a montar un bucle que recorra todos los años desde el actual hasta el 2100.

let datos = cumpleaños.split('/');

var contador = 0;
let anyo = Actual.getFullYear();
let Aux = new Date(cumpleaños[0],cumpleaños[1],anyo);
for(i = anyo;i <2100; i++){
    Aux.setFullYear(i);
    if(Aux.getDay()==0){
        contador++;
    }
}

//Imprimimos el resultado por consola.

console.log('Hay '+contador+' ocasiones donde la fecha cae en domingo.');

//Desarrollado por Iván Escalante Sierra 2ºDAW