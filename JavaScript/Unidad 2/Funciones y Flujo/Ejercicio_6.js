
function sorted(){

let x = document.getElementById("1").value;
let y = document.getElementById("2").value;
let z = document.getElementById("3").value;

let mensaje = (Number(x) > Number(y) && Number(x) > Number(z)) ? 'El valor más alto es '+ x:
(Number(y) > Number(z) && Number(y) > Number(x)) ? 'El valor más alto es '+ y:
(Number(z) > Number(y) && Number(z) > Number(x)) ? 'El valor más alto es '+ z:
'Ha ocurrido un error.'; 

let elemento = document.getElementById("container");
     elemento.innerHTML = mensaje;

}