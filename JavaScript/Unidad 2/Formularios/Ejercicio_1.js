const $FORM = document.getElementById("Formulary");
const $DNI = document.getElementById("DNI");
const $NAME = document.getElementById("Name");
const $SURNAME = document.getElementById("Surname");
const $TELEF = document.getElementById("Tel");
const $COMMENTS = document.getElementById("comentario");
const $HOUR = document.getElementById("Hour");
//La siguiente constante pertenece al ejercicio 2 de cookies.
const $COOK = document.getElementById("cook");

function handleSubmit(e) {
  e.preventDefault();

  const name = $NAME.value;
  const DNI = $DNI.value;
  const surname = $SURNAME.value;
  const tel = $TELEF.value;
  const hour = $HOUR.value;
  const comentario = $COMMENTS.value;
  var prueba = true;

  name == false || isValidName(name) == false
    ? (alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
      ),
      (prueba = false))
    : DNI == false || isValidDNI(DNI) == false
    ? (alert(
        "El DNI debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el siguiente formato XX.XXX.XXX-A"
      ),
      (prueba = false))
    : isValidTel(tel) == false
    ? (alert(
        "El teléfono tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener el siguiente formato +34 XXXXXXXXX"
      ),
      (prueba = false))
    : surname == false || isValidSurname(surname) == false
    ? (alert(
        "Los apellidos deben de ser un valor válido: \n - Debe estar relleno \n - Mínimo 1 apellido máximo 2 apellidos."
      ),
      (prueba = false))
    : hour == false
    ? (alert("Debe introducir una hora válida."), (prueba = false))
    : (prueba = true);

  if (prueba) {
    var regUsuario = {
      Nombre: name,
      Apellido: surname,
      DNI: DNI,
      Teléfono: tel,
      Comentario: comentario,
      Hora: hour,
    };
    console.log(regUsuario);
    var newUser = JSON.stringify(regUsuario);
    console.log(newUser);
    setCookie("usuario", regUsuario.Nombre + "/" + regUsuario.Apellido, 1);
  }

  checkCookie();
  document.getElementById("cook").innerHTML = $COOK.value;
}

function isValidName(name) {
  const validacion =
    /^(([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
  return validacion.test(name);
}
function isValidSurname(surname) {
  const validacion = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
  return validacion.test(surname);
}
function isValidTel(tel) {
  const validacion = /^\+\d{2,3}\s\d{9}$/;
  return validacion.test(tel);
}
function isValidDNI(DNI) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
  return validacion.test(DNI);
}

$FORM.addEventListener("submit", handleSubmit);

//La siguientes funciones pertenecen al ejercicio 2 de cookies.

function checkCookie() {
  let contador = getCookie("wronged");
  if (contador == "") {
    setCookie("wronged", 1, 1);
  } else {
    setCookie("wronged", ++contador, 1);
  }
  $COOK.value = getCookie("wronged");
}

function reloadCook() {
  setCookie("wronged", 0, 1);
}

function setCookie(cname, cvalue, exdays) {
  let d = new Date(); // Se extrae la fecha actual
  //Se le suman los días indicados por parámetro
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
  document.cookie = cname + "=" + cvalue + "; " + expires; //Se crea la cookie
}
