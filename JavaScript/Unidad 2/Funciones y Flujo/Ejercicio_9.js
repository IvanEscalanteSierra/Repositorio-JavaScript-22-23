let num = prompt("Ingresa un número positivo de 1 o 2 cifras");
let num_parse = parseInt(num);



if(Number(num)==num_parse){

let mensaje = (num.length== 1 && num>0 && num<100) ? 'El número es positivo, entero y de una cifra.':
(num.length== 2 && num>0 && num<100) ? 'El número es positivo, entero y de dos cifras.':
'El número no es positivo o posee más de 2 cifras.';
document.write(mensaje);
} else{
    alert("¡El número no es entero!")
}

