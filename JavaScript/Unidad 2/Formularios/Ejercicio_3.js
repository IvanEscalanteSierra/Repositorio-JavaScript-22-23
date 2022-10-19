const $FORM = document.getElementById("Formulary");
const $NAME = document.getElementById("name");
const $EMAIL = document.getElementById("email");
const $WEB = document.getElementById("web");
const $DNI = document.getElementById("DNI");
const $FECHA = document.getElementById("date");
const $PSWD = document.getElementById("pswd");

function handleSubmit(e) {
  e.preventDefault();
  const name = $NAME.value;
  const email = $EMAIL.value;
  const WEB = $WEB.value;
  const DNI = $DNI.value;
  const date = $FECHA.value;
  const pswd = $PSWD.value;
  var prueba = true;

  name == false || isValidName(name) == false
    ? (alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por mínimo un nombre y un apellido"
      ),
      (prueba = false))
    : email == false || isValidEmail(email) == false
    ? (alert(
        "El email debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el formato general de Emails"
      ),
      (prueba = false))
    : WEB == false || isValidWeb(WEB) == false
    ? (alert(
        "El Sitio WEB tiene que tener un formato válido : \n -Debe estar relleno \n -Debe presentar https:// antes."
      ),
      (prueba = false))
    : date == false
    ? (alert(
        "La fecha de nacimiento debe de ser un valor válido: \n - Debe estar relleno."
      ),
      (prueba = false))
    : DNI == false || isValidDNI(DNI) == false
    ? (alert(
        "El DNI debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el siguiente formato XX.XXX.XXX-A"
      ),
      (prueba = false))
    : pswd == false || isValidPassword(pswd) == false
    ? (alert(
        "La contraseña debe ser un valor válido : \n -Debe estar relleno \n -Debe ocupar entre 8 y 10 caracteres"
      ),
      (prueba = false))
    : "";

  if (prueba == true) {
    var regUsuario = {
      DNI: DNI,
      Nombre: name,
      Email: email,
      Web: WEB,
      Fecha_Nacimiento: date,
      Contraseña: pswd,
    };
    console.log(regUsuario);

    var newUser = JSON.stringify(regUsuario);
    console.log(newUser);

    //Ejercicio de API:

    sessionStorage["Usuario"] = newUser;
  } else {
    alert(
      "Error en la inserción de datos, no se puede proceder, inténtelo de nuevo."
    );
  }
}

function recharge() {
  $DNI.value = sessionStorage.getItem("DNI");
  $NAME.value = sessionStorage.getItem("name");
  $FECHA.value = sessionStorage.getItem("date");
  $EMAIL.value = sessionStorage.getItem("email");
  $WEB.value = sessionStorage.getItem("WEB");
  $PSWD.value = sessionStorage.getItem("pswd");
}

function isValidName(name) {
  const validacion =
    //A sabe por qué no me deja meter 2 nombres.
    /^(([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+)) | (([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+)) | (([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+))s$/;
  return validacion.test(name);
}
function isValidWeb(WEB) {
  const validacion = /^(ftp|http|https):\/\/www\..+\..+$/;
  return validacion.test(WEB);
}
function isValidEmail(email) {
  const validacion = /^(.+\@.+\..+)$/;
  return validacion.test(email);
}
function isValidDNI(DNI) {
  const validacion = /^[0-9]{2}[.][0-9]{3}[.][0-9]{3}[-][A-Z]$/;
  return validacion.test(DNI);
}
function isValidPassword(pswd) {
  //Lo hacemos de forma distinta para tener más posibilidades a la hora de resolver problemas.

  var prueba2 = false;

  if (pswd.length >= 8 && pswd.length <= 10) {
    prueba2 = true;
  }
  return prueba2;
}

$FORM.addEventListener("submit", handleSubmit);
