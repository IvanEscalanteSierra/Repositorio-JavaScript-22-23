function Init() {
  const $FORM = document.getElementById("Formulary");
  const $NAME = document.getElementById("name");
  const $SURNAME = document.getElementById("surname");
  const $EMAIL = document.getElementById("email");
  const $WEB = document.getElementById("web");

  function handleSubmit(e) {
    e.preventDefault();
    const name = $NAME.value;
    const surname = $SURNAME.value;
    const email = $EMAIL.value;
    const WEB = $WEB.value;
    var prueba = true;

    name == false || isValidName(name) == false
      ? (alert(
          "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras"
        ),
        (prueba = false))
      : email == false || isValidEmail(email) == false
      ? (alert(
          "El email debe ser un valor válido : \n -Debe estar relleno \n -Debe tener el formato general de Emails"
        ),
        (prueba = false))
      : WEB == false || isValidWeb(WEB) == false
      ? (alert(
          "El Sitio WEB tiene que tener un formato válido : \n -Debe estar relleno"
        ),
        (prueba = false))
      : surname == false || isValidSurname(surname) == false
      ? (alert(
          "Los apellidos deben de ser un valor válido: \n - Debe estar relleno \n - Mínimo 1 apellido máximo 2 apellidos."
        ),
        (prueba = false))
      : "";

    if (prueba == true) {
      var regUsuario = {
        Nombre: name,
        Apellido: surname,
        Email: email,
        Web: WEB,
      };
      console.log(regUsuario);
      var newUser = JSON.stringify(regUsuario);
      console.log(newUser);

      setCookie("Usuario", name + " " + surname + " / ", "Email", email);
    } else {
      alert(
        "Error en la inserción de datos, no se puede proceder, inténtelo de nuevo."
      );
    }
  }

  function isValidName(name) {
    const validacion =
      /^(([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+)|([\a-zA-ZáéíóúñÑÁÉÍÓÚ]+\s[\a-zA-ZáéíóúñÑÁÉÍÓÚ]+))$/;
    return validacion.test(name);
  }
  function isValidSurname(surname) {
    const validacion =
      /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
    return validacion.test(surname);
  }
  function isValidWeb(WEB) {
    const validacion = /^(ftp|http|https):\/\/[^ "]+$/;
    return validacion.test(WEB);
  }
  function isValidEmail(email) {
    const validacion = /^(.+\@.+\..+)$/;
    return validacion.test(email);
  }

  function setCookie(cuser, cvalue_u, cemail, cvalue_e, exdays) {
    let d = new Date(); // Se extrae la fecha actual
    //Se le suman los días indicados por parámetro
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
    document.cookie =
      cuser + "=" + cvalue_u + cemail + " = " + cvalue_e + "; " + expires; //Se crea la cookie
  }

  $FORM.addEventListener("submit", handleSubmit);
}
