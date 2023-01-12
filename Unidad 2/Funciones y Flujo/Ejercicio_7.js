function Analizar(){

    let x = document.getElementById("numero").value;

    let x_parsed = parseInt(x);

    let mensaje = (x_parsed > 0) ? x + ' es positivo':
    (x_parsed==0) ? x + ' es neutral':
    x_parsed + ' es negativo';

    let elemento = document.getElementById("container");
     elemento.innerHTML = mensaje;

}