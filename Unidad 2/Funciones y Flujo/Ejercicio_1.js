/* 
Crear dos input de números y un botón, al pulsar el botón, mostrar en un alert
quien es el mayor de los dos.
*/

function comparar() {

    let x = document.getElementById("valor_1").value;
    let y = document.getElementById("valor_2").value;

    if(x>y){
    alert(x + " es mayor.");
    } else if(y>x){
        alert(y + " es mayor.");
    } else {
        alert("Ambos números son iguales.")
    }
}
