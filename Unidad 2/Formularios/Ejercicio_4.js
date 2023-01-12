const $FORM = document.getElementById("Formulary");
const $FECHA = document.getElementById("date");
const $COCINERO = document.getElementById("cocinero");
const $DESTINATARIO = document.getElementById("destinatario");
const $PESO = document.getElementById("peso");
const $COMPO = document.getElementById("compo");
const $BANCO = document.getElementById("banco");

function handleSubmit(e) {
  e.preventDefault();
  const date = $FECHA.value;
  const cocinero = $COCINERO.value;
  const destinatario = $DESTINATARIO.value;
  const peso = $PESO.value;
  const compo = $COMPO.value;
  const banco = $BANCO.value;
  var prueba = true;

  date == false
    ? (alert(
        "La fecha de creación debe de ser un valor válido: \n - Debe estar relleno. \n - Debe presentar el formato dd/mm/aaaa"
      ),
      (prueba = false))
    : cocinero == false || isValidCocinero(cocinero) == false
    ? (alert(
        "El cocinero debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el formato AA*1234"
      ),
      (prueba = false))
    : peso == false || isValidPeso(peso) == false
    ? (alert(
        "El peso de la bolsa tiene que tener un formato válido : \n -Debe estar relleno \n -Debe presentar un valor entre 100 y 5000."
      ),
      (prueba = false))
    : destinatario == false || isValidDestinatario(destinatario) == false
    ? (alert(
        "El destinatario debe de ser un valor válido: \n - Debe estar relleno. \n - Debe presentar el formato correcto"
      ),
      (prueba = false))
    : compo == false || isValidCompo(compo) == false
    ? (alert(
        "La composición debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el formato correcto."
      ),
      (prueba = false))
    : "";
  // No sé hacer el número de cuenta.

  if (prueba == true) {
    var regUsuario = {
      Fecha_de_creación: date,
      Cocinero: cocinero,
      Peso: peso,
      Destinatario: destinatario,
      Composición: compo,
      Nº_Banco: banco,
    };
    console.log(regUsuario);
    var newUser = JSON.stringify(regUsuario);
    console.log(newUser);

    localStorage.setItem("date", newUser.date);
    localStorage.setItem("cocinero", newUser.cocinero);
    localStorage.setItem("destinatario", newUser.destinatario);
    localStorage.setItem("peso", newUser.peso);
    localStorage.setItem("compo", newUser.compo);
    localStorage.setItem("banco", newUser.banco);
  } else {
    alert(
      "Error en la inserción de datos, no se puede proceder, inténtelo de nuevo."
    );
  }
}

function isValidDestinatario(destinatario) {
  const validacion = /^([A-Z]{2}|[A-Z]{3})+_[a-záéíóúñ]+:[0-9]{4}$/;
  return validacion.test(destinatario);
}

function isValidCocinero(cocinero) {
  const validacion = /^[A-Z]{2}\W[0-9]{4}$/;
  return validacion.test(cocinero);
}

function isValidCompo(compo) {
  const validacion = /^[0-9]+g(([A-Z]{1}|[A-Z]{2})([A-Z]{1}|[A-Z]{2}))$/;
  return validacion.test(compo);
}

function isValidPeso(peso) {
  let siono = false;

  if (peso >= 100 && peso <= 5000) {
    siono = true;
  }

  return siono;
}

function recharge() {
  $FECHA.value = localStorage.getItem("date");
  $COCINERO.value = localStorage.getItem("cocinero");
  $DESTINATARIO.value = localStorage.getItem("destinatario");
  $PESO.value = localStorage.getItem("peso");
  $COMPO.value = localStorage.getItem("compo");
  $BANCO.value = localStorage.getItem("banco");
}

$FORM.addEventListener("submit", handleSubmit);
