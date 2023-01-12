/**
 *  @author Iván Escalante Sierra
 */

// Le pedimos al usuario que elija el cálculo deseado.

let opcion = prompt(
  "Introduce el calculo que quieres hacer: \n - 1: Potencia \n - 2: Raíz \n - 3: Redondeo \n - 4: Trigonometría"
);

// Se crea el condicional que operará con las opciones.

if (opcion == 1) {
  let Base = prompt("Introduce la base:");
  let Expo = prompt("Introduce el exponencial:");

  console.log(
    "La potencia de " + Base + " elevado a " + Expo + " es: " + Math.pow(Base, Expo)
  );
} else if (opcion == 2) {
  let Positive = prompt("Introduce un número:");

  if (Positive > 0) {
    let Raiz = Math.sqrt(Positive);
    console.log("La raíz de " + Positive + " es: " + Raiz);
  } else {
    console.error(
      Positive + " es inferior a 0, por favor introduzca un número adecuado."
    );
  }
} else if (opcion == 3) {
  let Decimal = prompt("Introduce un Decimal:");

  if (Decimal % 1 != 0) {
    
    let Redondeoent = Math.round(Decimal);
    let Redondeoalta = Math.floor(Decimal);
    let Redondeobaja = Math.ceil(Decimal);

    console.log(
      "El rendondeo al entero del número " + Decimal + " es: " + Redondeoent
    );
    console.log(
      "El rendondeo al alta del número " + Decimal + " es: " + Redondeoalta
    );
    console.log(
      "El rendondeo al bajo del número " + Decimal + " es: " + Redondeobaja
    );
  } else {
    console.error("El número introducido no es Decimal.");
  }
} else if (opcion == 4) {
  let Ang = prompt("Introduce un ángulo (0-360)");

  if (Ang >= 0 && Ang <= 360) {
    let Sen = Math.sin(Ang);
    let Cos = Math.cos(Ang);
    let Tan = Math.tan(Ang);

    console.log(
      "El valor trigonométrico seno del ángulo " + Ang + " es de: " + Sen
    );
    console.log(
      "El valor trigonométrico coseno del ángulo " + Ang + " es de: " + Cos
    );
    console.log(
      "El valor trigonométrico tangente del ángulo " + Ang + " es de: " + Tan
    );
  } else {
    console.error("El ángulo introducido " + Ang + " esta fuera del rango");
  }
}

//Desarrollado por Iván Escalante Sierra 2ºDAW
