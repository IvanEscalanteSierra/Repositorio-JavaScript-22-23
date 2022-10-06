function Analize() {

    let palabra = document.getElementById("texto").value;
    let contador = 0;
    let aux = 0;
    let suma = 0;

    let arrayaux = new Array(54);
    let abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N','Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    for (let i = 0; i < abecedario.length; i++) {
        contador = 0;
        for (let x = 0; x < palabra.length; x++) {
            if (palabra[x] == abecedario[i]) {
                contador++;
            }

        }
        arrayaux[aux] = contador;
        aux++;
    }


    for (let a = 0; a < abecedario.length; a++) {
        document.write(abecedario[a] + " = " + arrayaux[a] + " | ");
        if(a==26){
            document.write('<br>')
        }
    }
    document.write('<br>')


    for (let e = 0; e < arrayaux.length; e++) {
        suma += arrayaux[e];
    }

    let porcentaje;

    for (let r = 0; r < arrayaux.length; r++) {
        if (arrayaux[r] != 0) {
            porcentaje = (arrayaux[r] / suma) * 100;
            document.write(abecedario[r] + " tiene un porcentaje de: " + porcentaje + "% <br>");
        }
    }


}