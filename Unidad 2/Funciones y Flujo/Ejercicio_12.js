function Analize() {
    let num = document.getElementById("numero").value;

    let comprobacion = num % 2;

    let mensaje = (num==0) ? 'El número '+num+' es neutral':
    (comprobacion==0) ? 'El número '+num+' es par':
    'El número '+num+ ' no es par';

    let elemento = document.getElementById("container");
    elemento.innerHTML = mensaje;
}