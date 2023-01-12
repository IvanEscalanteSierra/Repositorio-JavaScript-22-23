let Money = 50;

while (Money > 0 && Money < 200) {

    let Moneyapuesta = prompt("Introduce el dinero que quieres apostar");
    Money = Money - parseInt(Moneyapuesta);
    let apuestan = prompt("¿Cuanto apuestas del 1 al 6?");
    let numero = Math.floor(Math.random() * (7 - 1) + 1);

    alert("Tienes: " + Money + "$");
    alert(" El número ganador es: " + numero);
    if (parseInt(apuestan) == numero) {
        Money += parseInt(Moneyapuesta) * 2;
        alert("Has acertado y ahora tienes " + Money + "$");
    }

}

alert("Has perdido, posees una cantidad de: " + Money + "$");