/**
 * 
 * @autor Iván Escalante Sierra 2ºDAW 
 *
 */

/**
 * * Función para probar si el Slug actual coincide con el que se le pasa.
 * @param {String} url 
 * @returns true si el Slug coincide o false si no.
 */

function proveSlug(url) {
  //Obtenemos el slug de la página actual.
  let url_local = window.location.pathname;
  let prueba = true;
  //Comparamos ambos slugs y devolvemos true o false en la variable prueba.
  url === url_local ? (prueba = true) : (prueba = false);
  return prueba;
}

function EJ1() {
  let url = prompt("Dime el slug:");
  console.log(proveSlug(url));
}

/**
 * * Función para probar si el DNI es válido mediante expresiones regulares.
 * @param {String} dni 
 * @returns true si el DNI es válido o false si no lo es.
 */

function proveDNI_NIE(dni) {
  var numero, let, letra;
  //Creamos la expresión regular del dni para poder diferenciar.
  var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

  //Lo volvemos a mayúsculas por si acaso.
  dni = dni.toUpperCase();

  if (expresion_regular_dni.test(dni) === true) {
    numero = dni.substr(0, dni.length - 1);
    numero = numero.replace("X", 0);
    numero = numero.replace("Y", 1);
    numero = numero.replace("Z", 2);
    let = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero, numero + 1);
    if (letra != let) {
      alert('Dni erróneo, la letra del NIF no se corresponde');
      return false;
    } else {
      alert('Dni correcto');
      return true;
    }
  } else {
    alert('Dni erroneo, formato no válido');
    return false;
  }
}

function EJ2() {
  let dni = prompt("Dime el DNI:");
  console.log(proveDNI_NIE(dni));
}

/**
 * * Función para comparar 2 cadenas y ver si son la misma a pesar de ciertas diferencias.
 * @param {String} cadena1 
 * @param {String} cadena2 
 * @returns true si son iguales o false si no lo son.
 */

function proveCads(cadena1, cadena2) {
  let prueba = false;
  //Creamos las variables que vamos a recorrer.
  let vocales = "aeiou";
  let acentuadas = "áéíóú";
  let letras = "abcdefghijklmnñopqrstuvwxyzáéíóú";


  //Pasamos ambas cadenas a minúsculas.
  let cadena1_min = cadena1.toLowerCase();
  let cadena2_min = cadena2.toLowerCase();
  let cadena1_min_se = "";
  let cadena2_min_se = "";

  for (let i = 0; i < cadena1.length; i++) {
    //Crearemos varias variables para poder condicionar la entrada de datos a las variables finales.
    let aux = true;
    let aux_especiales = false;

    if (cadena1_min[i] != " ") {
      for (let z = 0; z < letras.length; z++) {
        if (cadena1_min[i] == letras[z]) {
          //Si no es un espacio, es minúscula y coincide con alguna letra de la cadena se añade.
          aux_especiales = true;
        }
      }

      for (let x = 0; x < acentuadas.length; x++) {
        if (cadena1_min[i] == acentuadas[x]) {
          //Si no es un espacio, es minúscula y coincide con alguna letra de la cadena de acentuadas pasa a ser el valor auxiliar aparte de dar valor a variable auxiliar.
          aux = false;
          cadena1_min_se += vocales[x];
        }
      }
      if (aux && aux_especiales) {
        //Si todo es correcto se añade.
        cadena1_min_se += cadena1_min[i];
      }
    }
  }

// Se repite de nuevo para la segunda cadena

  for (let i = 0; i < cadena2.length; i++) {
    let aux = true;
    let aux_especiales = false;
    if (cadena2_min[i] != " ") {
      for (let z = 0; z < letras.length; z++) {
        if (cadena2_min[i] == letras[z]) {
          aux_especiales = true;
        }
      }

      for (let x = 0; x < acentuadas.length; x++) {
        if (cadena2_min[i] == acentuadas[x]) {
          aux = false;
          cadena2_min_se += vocales[x];
        }
      }

      if (aux && aux_especiales) {
        cadena2_min_se += cadena2_min[i];
      }
    }
  }

  cadena1_min_se == cadena2_min_se ? (prueba = true) : (prueba = false);

  return prueba;
}

function EJ3() {
  let c1 = prompt("Dime la primera cadena:");
  let c2 = prompt("Dime la primera cadena:");
  console.log(proveCads(c1, c2));
}

/**
 * * Función para revisar inserción de datos del formulario.
 * @returns avisos de si las validaciones son correctas o no.
 */

function tryData() {

  //Recogemos el contenido de los campos.

  const user = document.getElementById("usuario").value;
  const pswd = document.getElementById("pswd").value;
  //Creamos la variable que será nuestro condicional.
  let prueba = true;

  //Hacemos las comprobaciones que se nos piden.
  user == false || isValidUser(user) == false
    ? (alert("El usuario es incorrecto debido a algún error en la validación."),
      (prueba = false))
    : pswd == false || isValidPswd(pswd) == false
    ? (alert(
        "La contraseña es incorrecta debido a algún error en la validación."
      ),
      (prueba = false))
    : console.log("Las validaciones son correctas.");

  if (prueba) {
    //Si todas las comprobaciones estaban correctas se procede a realizar lo que se nos pidió.
    document.cookie = "fecha_Login=" + new Date();
    document.cookie = document.getElementById("checksession").checked
      ? "keepsessionopen=true"
      : "keepsessionopen=false";

    const usr = document.getElementById("usuario").value;
    const psw = document.getElementById("pswd").value;

    alert(`Usuario: ${usr}, Contraseña: ${psw}`);
  }
}

//Para que al cargar la ventana se recargue la información.

window.onload = (event) => {
  if (getCookie("keepsessionopen") === "false") {
    const fechaLogin = new Date(getCookie("fechaLogin"));

    //Comprueba que no hayan pasado más de 5 minutos desde el último login.
    if (new Date() - fechaLogin >= 300000) {
      alert("Su sesión ha expirado.");
    }
  }
};

/**
 * * Función para recuperar la cookie.
 * @param {String} cname 
 */

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";"); //Divide la cookie separando por ;
  for (let i = 0; i < ca.length; i++) {
    //Recorre cada trozo de la cookie
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
      //Si encuentra el campo buscado lo devuelve.
      return c.substring(name.length, c.length); 
  }
  return "";
}

/**
 * * Función para validar el usuario.
 * @param {String} user 
 * @returns true o false según la validación.
 */
function isValidUser(user) {
  const validacion = /^[a-z\d\-]+$/;
  return validacion.test(user);
}


/**
 * * Función para validar la contraseña.
 * @param {String} pswd 
 * @returns true o false según la validación.
 */
function isValidPswd(pswd) {
  const validacion = /^(?=.*\d)(?=.*\W)(?=.*[A-Z])\S{6,}$/;
  return validacion.test(pswd);
}

/**
 * * Función para validar la información dada en el ejercicio 5. 
 * @returns true o false según la validación.
 */
function tryex5() {

  //Recogemos la información de todos los campos de valor.

  const fesha = new Date(document.getElementById("date").value);
  const email = document.getElementById("mail").value;
  const web = document.getElementById("web").value;
  const pswd = document.getElementById("pswd").value;
  const pswd2 = document.getElementById("pswd2").value;

  //Se realizan las comprobaciones necesarias.

  isUpAge(fesha) == false
    ? alert("No eres mayor de edad.")
    : isValidWeb(web) == false
    ? alert("La página web no posee el formato correcto.")
    : isValidWeb(email) == false
    ? alert("El email no posee el formato correcto.")
    : samepswd(pswd, pswd2) == false
    ? alert("Las contraseñas no coinciden.")
    : alert("Todo está en orden, registro exitoso.");
}

/**
 * * Función para validar las contraseñas.
 * @param {String} pswd1 
 * @param {String} pswd2 
 * @returns true o false según la validación.
 */

function samepswd(pswd1, pswd2) {
  if (pswd1 == pswd2) {
    return true;
  } else {
    return false;
  }
}

/**
 * * Función para validar la edad.
 * @param {String} fesha 
 * @returns true o false según la validación.
 */

function isUpAge(fesha) {
  const actual = new Date();
  let prueba = actual - fesha;
  let prueba2 = Number(prueba) / 31557600000;
  let condision = true;
  prueba2 >= 18 ? (condision = true) : (condision = false);
}

/**
 * * Función para validar la web.
 * @param {*} WEB 
 * @returns true o false según la validación.
 */

function isValidWeb(WEB) {
  const validacion = /^(ftp|http|https):\/\/www\..+\..+$/;
  return validacion.test(WEB);
}

/**
 * * Función para validar el email.
 * @param {*} email
 * @returns true o false según la validación.
 */

function isValidEmail(email) {
  const validacion = /^(.+\@.+\..+)$/;
  return validacion.test(email);
}

// Se programa la orden de confirmación antes de salir (si hay datos introducidos que vayan a perderse).

window.onbeforeunload = preguntarAntesDeSalir;

/**
 * * Función para confirmar la salida. 
 * @returns mensaje de la confirmación.
 */

function preguntarAntesDeSalir() {
  return "¿Seguro que quieres salir?";
}


/**
 * * Función para sacar la diferencia entre la fecha actual y la que se nos da.
 * @param {String} fechesita
 * @returns mensaje con el tiempo que queda. 
 */

function tillDate(fechesita) {
  //Dividimos la fecha y la almacenamos.
  let datos = fechesita.split("/");
  //Creamos las 2 fechas que van a compararse.
  let actual = new Date();
  let objetivo = new Date();
  objetivo.setDate(datos[0]);
  objetivo.setMonth(datos[1] - 1);
  objetivo.setFullYear(datos[2]);

  //Se realizan las operaciones.

  let dias = objetivo.getDate() - actual.getDate() - 1;
  let horas = 24 - actual.getHours();
  let minutos = 60 - actual.getMinutes();
  let secs = 60 - actual.getSeconds();

  let prueba = objetivo.getFullYear() - actual.getFullYear();

  //Realizamos un condicional por si la diferencia es negativa.

  prueba < 0
    ? alert(
        "Esa fecha ha pasado hace " +
          prueba * -1 +
          " años," +
          dias +
          " días, " +
          horas +
          " horas, " +
          minutos +
          " minutos y " +
          secs +
          " segundos para llegar a esa fecha."
      )
    : alert(
        "Quedan " +
          dias +
          " días, " +
          horas +
          " horas, " +
          minutos +
          " minutos y " +
          secs +
          " segundos para llegar a esa fecha."
      );
}

function EJ6() {
  let fechesita = prompt("Introduce la fecha en formato xx/xx/xxxx:");
  tillDate(fechesita);
}


/**
 * * Función para darle un nuevo formato a la fecha que se dé.
 * @param {String} fecha
 * @returns fecha formateada.
 */

function formatearFecha(fecha) {
  // Almacenamos la información dividiendo la cadena que se ha introducido y creamos el array de meses que se usará para el formato.
  const datos = fecha.split("/");
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let fechaFormateada;

  let fechaAux = new Date(datos[2], datos[1] - 1, datos[0]);
  // Se procede al formateo.
  fechaFormateada =
    meses[fechaAux.getMonth()] + " del " + fechaAux.getFullYear() + ".";
  alert(datos[0] + " de " + fechaFormateada);
}

function EJ7() {
  const fecha = prompt("Introduce la fecha con formato xx/xx/xxxx:");
  formatearFecha(fecha);
}

/**
 * * Función para crear una nueva pestaña y darle contenido.
 */

function neww() {
  const ventana = window.open(
    "",
    "",
    "_blank, toolbar=0,url=0, width=400, height=500"
  );
  // Guardamos el contenido del html en una variable.
  const past = document.getElementById("div_ej").innerHTML;
  // Procedemos a escribir en la nueva pestaña.
  ventana.document.write("<html><body><div>");
  ventana.document.write(past);
  ventana.document.write("</div></body></html>");
  // Añadimos la opción de impresión.
  ventana.print();
}

// Creamos la clase Runner.

class Runner {
  constructor(name, surname, event, date, number, StartTime, EndTime) {
    this.name = String(name);
    this.surname = String(surname);
    this.event = String(event);
    this.date = new Date(date);
    this.number = Number(number);
    this.StartTime = new Date(StartTime);
    this.EndTime = new Date(EndTime);
  }

// Para calcular la marca creamos un método que le reste a la fecha de finalizado la de inicio.

  calcularMarca() {
    if (this.StartTime == null || this.EndTime == null) {
      return "00:00:00";
    } else {
      let horas1 = this.StartTime.getHours();
      let horas2 = this.EndTime.getHours();
      let minutos1 = this.StartTime.getMinutes();
      let minutos2 = this.EndTime.getMinutes();
      let segundos1 = this.StartTime.getSeconds();
      let segundos2 = this.EndTime.getSeconds();

      let prueba1 = Number(horas2) - Number(horas1);
      let prueba2 = Number(minutos2) - Number(minutos1);
      let prueba3 = Number(segundos2) - Number(segundos1);

      return prueba1 + ":" + prueba2 + ":" + prueba3;
    }
  }
}

function EJ9() {
  let fecha1 = new Date(2001, 11, 14);
  let fecha2 = new Date(2002, 11, 14, 13, 23, 12);
  let fecha3 = new Date(2002, 11, 14, 14, 24, 13);

  let corredor = new Runner(
    "Iván",
    "Escalante",
    "Fire Race",
    fecha1,
    17,
    fecha2,
    fecha3
  );
  console.log(corredor.calcularMarca());
}

/**
 * * Función para buscar Corredores por su nombre en un array para saber su posición. 
 * @param {Array} Corredores 
 * @param {String} Runner 
 * @returns la posición del corredor en el array ordenado.
 */

function searchRunner(Corredores, Runner) {
  let posi = "nada";
  Corredores.sort((a, b) => b.calcularMarca() < a.calcularMarca());
  for (let i = 0; i < Corredores.length; i++) {
    if (Corredores[i].name == Runner) {
      posi = i + 1;
      break;
    }
  }

  if (posi == "nada") {
    return "El corredor no se ha encontrado.";
  } else {
    return "Posición: " + posi;
  }
}

function EJ10() {
  let runner = prompt("Introduce el nombre del corredor que deseas buscar:");

  let fecha1 = new Date(2001, 11, 14);
  let fecha2 = new Date(2002, 11, 14, 13, 23, 12);
  let fecha3 = new Date(2002, 11, 14, 14, 24, 13);
  let fecha4 = new Date(2002, 11, 14, 18, 10, 13);
  let fecha5 = new Date(2002, 11, 14, 13, 26, 13);

  let corredor = new Runner(
    "Iván",
    "Escalante",
    "Fire Race",
    fecha1,
    17,
    fecha2,
    fecha3
  );
  let corredor2 = new Runner(
    "ElÚltimo",
    "Escalante",
    "Fire Race",
    fecha1,
    17,
    fecha2,
    fecha4
  );
  let corredor3 = new Runner(
    "ElPrimero",
    "Escalante",
    "Fire Race",
    fecha1,
    17,
    fecha2,
    fecha5
  );

  let arrayCorredores = [corredor, corredor2, corredor3];

  console.log(searchRunner(arrayCorredores, runner));
}

// Desarrollado por Iván Escalante Sierra 2ºDAW.