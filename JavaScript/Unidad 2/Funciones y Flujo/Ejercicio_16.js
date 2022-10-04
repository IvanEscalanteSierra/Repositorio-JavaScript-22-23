function Analize(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    let suma = Number(num1) + Number(num2);
    let multi = suma * num3;

    let mensaje = (num1==num2 && num1==num3) ? 'Los 2 primeros números suman '+ suma +' que multiplicado por el tercero da '+multi:
    'Los números no son iguales';


    let elemento = document.getElementById("container");
    elemento.innerHTML= mensaje;
}