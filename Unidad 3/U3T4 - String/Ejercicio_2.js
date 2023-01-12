/**
  *  @author Iván Escalante Sierra
  */

//Vamos a crear un bucle que solo cese cuando la contraseña sea correcta:

let comprobacion = false;
let numeros = "1234567890";
let simbolos = "-_@#$%&";

while (!comprobacion) {
  // Creamos la variable en la que se almacenará la contraseña o el intento de ella.

  let pswd = prompt(
    "Introduzca la contraseña, recuerde que debe cumplir con los siguientes requisitos:\n - Tiene entre 8 y 16 caracteres. \n - Tiene una letra mayúscula. \n - Tiene una letra minúscula. \n - Tiene un número. \n - Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand."
  );

  //Hacemos las comprobaciones de mayúsculas y minúsculas.

  let comprobacion_minus = pswd.toLowerCase();
  let comprobacion_mayus = pswd.toUpperCase();

  //Para comprobar si tiene números usaremos bucles anidados y un array con los números.

  let comprobacion_nums = false;

  for (let i = 0; i < pswd.length; i++) {
    for (let x = 0; x < numeros.length; x++) {
      if (pswd[i] == numeros[x]) {
        comprobacion_nums = true;
      }
    }
  }

  //La siguiente parte es similar a la anterior, con otros bucles anidados lo conseguiremos facilmente.

  let comprobacion_simb = false;

  for (let i = 0; i < pswd.length; i++) {
    for (let x = 0; x < simbolos.length; x++) {
      if (pswd[i] == simbolos[x]) {
        comprobacion_simb = true;
      }
    }
  }

  //Comprobamos si todo está en orden y si es así el bucle terminará y dará lugar al mensaje final.

  pswd.length > 16 || pswd.length < 8
    ? alert(
        "Su contraseña no es segura: La longitud de la contraseña no es correcta."
      )
    : comprobacion_minus == pswd
    ? alert(
        "Su contraseña no es segura: Se le ha olvidado introducir una mayúscula."
      )
    : comprobacion_mayus == pswd
    ? alert(
        "Su contraseña no es segura: Se le ha olvidado introducir una minúscula."
      )
    : !comprobacion_nums
    ? alert(
        "Su contraseña no es segura: Se le ha olvidado introducir un número."
      )
    : !comprobacion_simb
    ? alert(
        "Su contraseña no es segura: Se le ha olvidado introducir un símbolo."
      )
    : (comprobacion = true);
}

alert(
  "Felicidades, su contraseña es segura y cumple con todos los requisitos."
);

//Desarrollado por Iván Escalante Sierra 2ºDAW
