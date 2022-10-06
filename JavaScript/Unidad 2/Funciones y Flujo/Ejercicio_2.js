let total = "";

function add() {
    let name = document.getElementById("nombre").value;
    let punto = "<li>" + name + "</li>";

    total += punto;

    document.getElementById("lista").innerHTML = total;
}