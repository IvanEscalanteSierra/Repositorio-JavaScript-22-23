function calcular() {

    let texto = document.getElementById("texto").value;
    let array = texto.split(',');

    let suma = 0;
    array.forEach(element => {
        suma += Number(element);
    });

    media = suma / array.length;

    array.sort();

    document.getElementById("div").innerHTML = "Suma: " + suma + "<br>" +
        "Media: " + media + "<br>" + "Máximo valor: " + array[array.length - 1]
        + "<br>" + "Mínimo valor: " + array[0];

}

let reload = () => { document.getElementById("div").innerHTML = ""; document.getElementById("texto").value = ""; };