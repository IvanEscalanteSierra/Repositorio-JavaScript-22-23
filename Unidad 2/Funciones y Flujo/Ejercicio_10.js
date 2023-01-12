let num = prompt("Ingresa un número positivo de 1, 2 o 3 cifras.");
let num_parse = parseInt(num);



if(Number(num)==num_parse){

let mensaje = (num.length== 1 && num>0 && num<1000) ? 'El número es positivo, entero y de una cifra.':
(num.length== 2 && num>0 && num<1000) ? 'El número es positivo, entero y de dos cifras.':
(num.length== 3 && num>0 && num<1000) ? 'El número es positivo, entero y de tres cifras.':
'El número no es positivo o posee más de 3 cifras.';
document.write(mensaje);
} else{ 
    alert("¡El número no es entero!")
}