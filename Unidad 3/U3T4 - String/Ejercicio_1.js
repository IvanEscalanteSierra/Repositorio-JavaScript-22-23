/**
  *  @author Iván Escalante Sierra
  */

//Preguntamos al usuario por su identificación.

let nombre = String(prompt("Indique su nombre:"));
let apellidos = String(prompt("Indique sus apellidos:"));

//Calculamos la longitud de ambas respuestas para más limpieza en la alerta.

let operacion1 = nombre.length + apellidos.length;

alert("La longitud de su nombre más apellidos es de " + operacion1);

//Para los siguientes ejercicios voy a conectar las 2 variables en una.

let nombre_completo = String(nombre + " " + apellidos);

//Uso las funciones toUpperCase y toLowerCase para obtener los resultados.

let completo_mayus = nombre_completo.toUpperCase();
let completo_minus = nombre_completo.toLowerCase();

alert(
  "Nombre en minúsculas: " +
    completo_minus +
    "\nNombre en mayúsculas: " +
    completo_mayus
);

//Hago un bucle y uso el metodo split para alertar de los resultados.

let contador = 0;
let palabras = nombre_completo.split(" ");

while (contador < 3) {
  contador == 0
    ? alert("Nombre = " + palabras[contador])
    : contador == 1
    ? alert("Primer apellido = " + palabras[contador])
    : contador == 2
    ? alert("Segundo apellido = " + palabras[contador])
    : "";
  contador++;
}

//Para la siguiente tarea vamos a hacer otro bucle que nos permita recorrer el nombre completo y coger lo que queramos. (Debemos reiniciar el contador)

var Modif = "";
contador = 0;
while (contador < 3) {
  let actual = palabras[contador];

  contador == 0
    ? (Modif = actual[0])
    : contador == 1
    ? (Modif += actual)
    : contador == 2
    ? ((Modif += actual[0]), alert("Su nombre modificado es: " + Modif))
    : "";

  contador++;
}

//La siguiente propuesta es bastante fácil y similar a la anterior por lo que reutilizaremos el código.

var Modif = "";
contador = 0;
while (contador < 3) {
  let actual = palabras[contador];

  contador == 0
    ? (Modif = actual[0] + actual[1] + actual[2])
    : contador == 1
    ? (Modif += actual[0] + actual[1] + actual[2])
    : contador == 2
    ? ((Modif += actual[0] + actual[1] + actual[2]),
      alert("Su nombre modificado es: " + Modif))
    : "";

  contador++;
}

// Si quisieramos hacerlo exacto al enunciado unicamente tendríamos que usar la función toLowerCase.
//Desarrollado por Iván Escalante Sierra 2ºDAW
