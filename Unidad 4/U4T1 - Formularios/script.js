window.onload = initListeners;

function disco() {
  this.name = "";
  this.group = "";
  this.year = "";
  this.type = "";
  this.localization = 0;
  this.lend = false;

  //Métodos

  this.diskstats = function (name, group, year, type, localization) {
    this.name = name;
    this.group = group;
    this.year = year;
    this.type = type;
    this.localization = localization;
  };

  this.site = function (localization) {
    this.localization = localization;
  };

  this.lended = function () {
    this.lend ? (this.lend = false) : (this.lend = true);
  };

  this.infodisk = function () {
    console.log(
      "Disco [" +
        "Nombre: " +
        this.name +
        ", Grupo: " +
        this.group +
        ", Año: " +
        this.year +
        ", Tipo: " +
        this.type +
        ", Localización: " +
        this.localization +
        ", Prestado: " +
        this.lend +
        ".]"
    );
  };
}

function almacenar() {
  let nombre = document.getElementById("name").value;
  let artista = document.getElementById("group").value;
  let anyo = document.getElementById("year").value;
  let tipo = document.getElementById("type").value;
  let localisasion = document.getElementById("type").value;
  let prestado = document.getElementById("lend");

  prestado.checked ? (prestado = true) : (prestado = false);

  let disk = new disco();
  disk.diskstats(nombre, artista, anyo, tipo, localisasion, prestado);
  disk.infodisk();
}

function initListeners(){
  const inputs = document.getElementsByTagName("input");
  formulario.addEventListener("submit", analizar, false);
  //Ejercicio 4
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("keyup", validar, false);
  }
}

const formulario = document.getElementById("form");

function analizar() {
  const name = document.getElementById("name").value;
  const group = document.getElementById("group").value;
  const year = document.getElementById("year").value;
  const local = document.getElementById("local").value;
  const type = document.getElementById("type").value;

  let prueba = true;

  name == false || campo20(name) == false
    ? (alert(
        "El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe tener un máximo de 20 caracteres"
      ),
      (prueba = false))
    : group == false || campo20(group) == false
    ? (alert(
        "El grupo debe ser un valor válido : \n -Debe estar relleno \n -Debe tener un máximo de 20 caracteres"
      ),
      (prueba = false))
    : year == false || year4(year) == false
    ? (alert(
        "El año de salida tiene que tener un formato válido : \n -Debe estar relleno \n -Debe tener 4 caracteres númericos."
      ),
      (prueba = false))
    : typeof local == NaN && local != false
    ? (alert(
        "La localización debe de ser un valor válido: \n - Debe ser númerico."
      ),
      (prueba = false))
    : type == false || types(type) == false
    ? (alert(
        "El tipo debe ser un valor válido: \n - Debe ser un valor de los asignados."
      ),
      (prueba = false))
    : console.log("Datos introducidos correctamente");

  if (prueba) {
    alert("Felicidades, has insertado todos los datos correctamente.");
  }

  function campo20(element) {
    if (element.length > 20) {
      return false;
    } else {
      return true;
    }
  }

  function year4(element) {
    const validacion = /^\d{4}$/;
    return validacion.test(element);
  }

  function types(element) {
    if (
      element == "pop" ||
      element == "Pop" ||
      element == "Rock" ||
      element == "rock" ||
      element == "Indie" ||
      element == "indie" ||
      element == "punk" ||
      element == "Punk"
    ) {
      return true;
    } else {
      return false;
    }
  }
}


// Ejercicio 4 Validación y CSS

function validar(evento){
  
  let objeto = evento.currentTarget;

  if(!objeto.validity.valid){
    objeto.style.border= '3px solid red';
  }else{
    objeto.style.border='1px solid grey';
  }

}