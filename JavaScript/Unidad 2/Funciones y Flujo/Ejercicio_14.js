
let x = 0;
let y = 2;
var resultado = "";
var multiplos = 0;
var primos = 0;
while (x < 201) {

    resultado += x + "<br>";

    if (x % 5 == 0) {
        multiplos++;
    }

    if (primo(x)){
        primos++;
    }

    x++;
}

document.write("Hay "+multiplos+" multiplos de 5 y "+primos+" números primos.\n El bucle es el siguiente: <br>"+resultado);





function primo(num){
    for (var i = 2; i < num; i++) {
        if (num%i==0){
            return false;
        }
    };
    return true;
}