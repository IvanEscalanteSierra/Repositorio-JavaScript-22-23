function promedio(){
    let x = document.getElementById("nota1").value;
    let y = document.getElementById("nota2").value;
    let z = document.getElementById("nota3").value;
    let promedy = (Number(x)+Number(y)+Number(z)) / 3;

    let mensaje = (promedy < 5 && promedy >= 0) ? 'Eres repetidor':
    (promedy < 8 && promedy > 4) ? 'Lo has superado':
    (promedy > 7 && promedy <= 10) ? 'Has sido promocionado':
    'Los números son incorrectos, deben proporcionar un valor entre 1 y 10.'; 

    let elemento = document.getElementById("container");
     elemento.innerHTML = mensaje;

}