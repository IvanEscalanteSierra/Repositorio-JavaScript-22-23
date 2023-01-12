window.addEventListener("load", compararSlug);

function compararSlug() {
  console.log("Entrando a la función compararSlug.");
  const urled = window.location.pathname;
  let directorios = urled.split("/");
  let slug_final = directorios[directorios.length - 1].split(".");

  let seleccionado = document.getElementById(slug_final[0]);
  seleccionado.style.color = "red";

  if (slug_final[0] == "Home") {
    const I1 = setInterval(actualizar_contador, 1000);
    let Div_Home = document.getElementById("Reloj");
    Div_Home.addEventListener("change", comprobador_regresiva);
  } else if (slug_final[0] == "Eventos") {
    EventoDetallado(EventoAuxiliar);
    MostrarRanking(EventoAuxiliar);
    document
      .getElementById("Boton")
      .addEventListener("click", Validaciones);
  }

  console.log("Saliendo de la función compararSlug.");
}

//ACTIVIDAD 2

class EventoRunning {
  constructor(nombre, fecha, hora_celebracion, ciudad, participantes) {
    this.nombre = nombre;
    this.fecha = new Date(fecha);
    this.fecha.setHours(hora_celebracion.split(":")[0]);
    this.fecha.setMinutes(hora_celebracion.split(":")[1]);
    this.hora_celebracion = hora_celebracion;
    this.ciudad = ciudad;
    this.participantes = participantes;
  }

  CalcularDiferencias() {
    let actual = new Date();
    let diferencia = new Date(this.fecha.getTime() - actual.getTime());

    const dias =
      diferencia.getDate() -
      1 +
      (this.fecha.getFullYear() - actual.getFullYear()) * 365 +
      (this.fecha.getMonth() - actual.getMonth()) * 30;
    dias < 0 ? (dias = 0) : "";
    const horas = diferencia.getHours() - 1;
    const minutos = diferencia.getMinutes();
    const secs = diferencia.getSeconds();

    if (diferencia > 0) {
      return dias + " días " + horas + ":" + minutos + ":" + secs;
    } else {
      return "¡El evento ya ha sido celebrado!";
    }
  }
}

let EventoAuxiliar = new EventoRunning(
  "Auxiliar",
  "2022/12/2",
  "19:44",
  "Sevilla"
);

function actualizar_contador() {
  let Div_Home = document.getElementById("Reloj");
  Div_Home.innerHTML = EventoAuxiliar.CalcularDiferencias();
  console.log("Sigue");
}

function comprobador_regresiva() {
  console.log("Ha entrado");
  clearInterval(1);
}

// Actividad 3

class Runner {
  constructor(name, surname, date, number, StartTime, EndTime) {
    this.name = String(name);
    this.surname = String(surname);
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

function EventoDetallado(evento) {
  let titulo = document.getElementById("Título");
  let fecha = document.getElementById("Fecha");
  let hora = document.getElementById("Hora");
  let ciudad = document.getElementById("Ciudad");

  titulo.innerHTML = evento.nombre;
  fecha.innerHTML = "<b>Fecha del evento: </b>" + evento.fecha;
  hora.innerHTML = "<b>Hora de inicio: </b>" + evento.hora_celebracion;
  ciudad.innerHTML = "<b>Ciudad del evento: </b>" + evento.ciudad;
}

let fecha1 = new Date(2001, 11, 14);
let fecha2 = new Date(2002, 11, 14, 13, 23, 12);
let fecha3 = new Date(2002, 11, 14, 14, 24, 13);
let fecha4 = new Date(2002, 11, 14, 18, 10, 13);
let fecha5 = new Date(2002, 11, 14, 13, 26, 13);

let corredor = new Runner("Iván", "Escalante", fecha1, 17, fecha2, fecha3);
let corredor2 = new Runner(
  "ElÚltimo",
  "Willylandia",
  fecha1,
  17,
  fecha2,
  fecha4
);
let corredor3 = new Runner(
  "ElPrimero",
  "Escalante",
  fecha1,
  17,
  fecha2,
  fecha5
);

let ArrayRunners = [corredor, corredor2, corredor3];

EventoAuxiliar = new EventoRunning(
  "Auxiliar",
  "2022/12/2",
  "19:44",
  "Sevilla",
  ArrayRunners
);

// Ejercicio 3

function MostrarRanking(Evento) {
  let zonaTitulo = document.getElementById("TituloEvento");
  zonaTitulo.innerHTML = "Clasificación de " + Evento.nombre + ":";
  Evento.participantes.sort((a, b) => b.calcularMarca() < a.calcularMarca());

  let tabla = document.getElementById("tabla");

  for (let i = 0; i < Evento.participantes.length; i++) {
    let Runner = Evento.participantes[i];

    let hilera = document.createElement("tr");
    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");

    celda.innerHTML = Runner.name;
    celda2.innerHTML = Runner.surname;
    celda3.innerHTML = Runner.number;
    celda4.innerHTML = Runner.calcularMarca();

    tabla.appendChild(hilera);
    hilera.appendChild(celda);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
  }
}

function Validaciones() {
  console.log("Entrando en la función Validaciones");
  if (validateDorsal && validateEvent) {
    let hilera = document.createElement("tr");
    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");

    celda.innerHTML = document.getElementById("name");
    celda2.innerHTML = document.getElementById("surname");
    celda3.innerHTML = document.getElementById("number");
    celda4.innerHTML = document.getElementById("ffin");

    tabla.appendChild(hilera);
    hilera.appendChild(celda);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);
    hilera.appendChild(celda4);
  } else {
    alert("Ha ocurrido un error.");
  }
  console.log("Saliendo de la función Validaciones");
}

function validateEvent() {
  console.log("Entrando en la función validateEvent");
  let actual = new Date();
  let proporcionada = new Date(document.getElementById("date").value);

  if (proporcionada == null || proporcionada > actual) {
    document.getElementById("aviso").innerHTML =
      "La fecha proporcionada debe cumplir los siguientes requisitos: \n - Es obligatoria. \n - El evento debe haber sido celebrado.";
    console.log("Saliendo de la función validateEvent");
    return false;
  } else {
    console.log("Saliendo de la función validateEvent");
    return true;
  }
}

function validateDorsal() {
  console.log("Entrando en la función validateDorsal");
  let prueba = true;
  let dorsal = document.getElementById("dorsal").value;

  let Runners = document.getElementById("tabla").childNodes;
  for (let i = 1; i < Runners.length; i++) {
    let Celdas = Runners[i].childNodes;

    if (Celdas[2].value == dorsal) {
      prueba = false;
    }
  }
  console.log("Saliendo de la función validateDorsal");
  return prueba;
}
