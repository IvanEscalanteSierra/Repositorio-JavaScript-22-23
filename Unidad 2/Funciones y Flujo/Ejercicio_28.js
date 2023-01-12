let fecha = prompt("Introduzca su fecha de nacimiento:");

let fechesita = fecha.split('/');


switch (fechesita[1]) {
    case "01":
        if (fechesita[0] >= "01" && fechesita[0] <= "19") {
            alert("Tu signo es capricornio");
        } else {
            alert("Tu signo es acuario");
        }
        break;
    case "02":
        if (fechesita[0] >= "01" && fechesita[0] <= "18") {
            alert("Tu signo es acuario");
        } else {
            alert("Tu signo es piscis");
        }
        break;
    case "03":
        if (fechesita[0] >= "01" && fechesita[0] <= "20") {
            alert("Tu signo es piscis");
        } else {
            alert("Tu signo es aries");
        }
        break;
    case "04":
        if (fechesita[0] >= "01" && fechesita[0] <= "19") {
            alert("Tu signo es aries");
        } else {
            alert("Tu signo es tauro");
        }
        break;
    case "05":
        if (fechesita[0] >= "01" && fechesita[0] <= "20") {
            alert("Tu signo es tauro");
        } else {
            alert("Tu signo es geminis");
        }
        break;
    case "06":
        if (fechesita[0] >= "01" && fechesita[0] <= "20") {
            alert("Tu signo es geminis");
        } else {
            alert("Tu signo es cancer");
        }
        break;
    case "07":
        if (fechesita[0] >= "01" && fechesita[0] <= "22") {
            alert("Tu signo es cancer");
        } else {
            alert("Tu signo es leo");
        }
        break;
    case "08":
        if (fechesita[0] >= "01" && fechesita[0] <= "22") {
            alert("Tu signo es leo");
        } else {
            alert("Tu signo es virgo");
        }
        break;
    case "09":
        if (fechesita[0] >= "01" && fechesita[0] <= "22") {
            alert("Tu signo es virgo");
        } else {
            alert("Tu signo es libra");
        }
        break;
    case "10":
        if (fechesita[0] >= "01" && fechesita[0] <= "22") {
            alert("Tu signo es libra");
        } else {
            alert("Tu signo es escorpio");
        }
        break;
    case "11":
        if (fechesita[0] >= "01" && fechesita[0] <= "21") {
            alert("Tu signo es escorpio");
        } else {
            alert("Tu signo es sagitario");
        }
        break;
    case "12":
        if (fechesita[0] >= "01" && fechesita[0] <= "21") {
            alert("Tu signo es sagitario");
        } else {
            alert("Tu signo es capricornio");
        }
        break;
    default:
        alert("Has introducido un mes erróneo, revisa los datos.");
}



