window.onload = Sonoros;

let xhr;

function Sonoros() {
  document.getElementById("charge").addEventListener("click", GETCriminalsURL);
  document.getElementById("chargeX").addEventListener("click", GETCriminalsBD);
  document.getElementById("chargeF").addEventListener("click", GET_Fetch);
  document.getElementById("clear").addEventListener("click", limpiarTabla);
}

// Las 3 siguientes funciones son los GETS que pide el ejercicio para los botones:

function GETCriminalsURL() {
  console.log("Entrando en GETCriminalsURL");

  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = comprobar;
    //Se hace la petición al vehículo porque la URL no funciona.
    xhr.open("GET", "https://api.fbi.gov/@wanted");
    xhr.send();
  }
}

function GETCriminalsBD() {
  console.log("Entrando en GETCriminalsBD");

  if (XMLHttpRequest) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = comprobarEnBD;
    //Se hace la petición al vehículo porque la URL no funciona.
    xhr.open("GET", "get_criminals.php");
    xhr.send();
  }
}

function GET_Fetch() {
  console.log("Entrando en GET_Fetch");
  fetch("get_criminals.php")
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((criminales) => {
      resultados.innerHTML = "Datos con fetch cargados";
      Pintar_Tabla_EnBD(criminales);
    })
    .catch((err) => {resultados.innerHTML = err;  console.log(err)});
}

// Depende de si necesitamos el filtro o no usaremos un metodo u otro.

function comprobar() {
  console.log("Entrando en comprobar");
  if (xhr.readyState === 4 && xhr.status === 200) {
    resultados.innerHTML = "";
    resultados.innerHTML = "Datos cargados con exito";
    Pintar_Tabla(JSON.parse(xhr.responseText));
  }
}

function comprobarEnBD() {
  console.log("Entrando en comprobar");
  if (xhr.readyState === 4 && xhr.status === 200) {
    resultados.innerHTML = "";
    resultados.innerHTML = "Datos cargados con exito";
    Pintar_Tabla_EnBD(JSON.parse(xhr.responseText));
  }
}

// Las funciones para pintar la tabla con o sin filtro.

function Pintar_Tabla(Criminales) {
  let div_tabla = document.getElementById("tablacriminales");
  div_tabla.innerHTML = "";

  Criminales = Criminales.items;

  let tabla = document.createElement("table");
  tabla.id = "tablita";
  tabla.setAttribute(
    "style",
    "border: 2px solid black; border-collapse: collapse; text-align: center; margin:auto"
  );
  let tr = document.createElement("tr");

  // Generamos los títulos de la cabecera
  let rotulos = ["uid", "title", "description", "aliases", "images", "save"];

  for (let i = 0; i < rotulos.length; i++) {
    let celda = document.createElement("td");
    celda.textContent = rotulos[i];
    celda.setAttribute("style", "border: 1px solid black");
    tr.appendChild(celda);
  }
  tabla.appendChild(tr);
  for (let i = 0; i < Criminales.length; i++) {
    let criminal = Criminales[i];

    let tr = document.createElement("tr");
    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");
    let celda5 = document.createElement("td");
    let celda6 = document.createElement("td");

    celda.textContent = criminal.uid;
    celda2.textContent = criminal.title;
    celda3.textContent = criminal.description;
    celda4.textContent = criminal.aliases;

    let celda5inner = document.createElement("img");
    celda5inner.setAttribute("src", Criminales[i].images[0].thumb);
    celda5.appendChild(celda5inner);

    let celda6inner = document.createElement("button");
    celda6inner.textContent = "Guardar";
    celda6inner.id = i+1;
    celda6inner.addEventListener('click',POST_Con_FETCH);
    celda6.appendChild(celda6inner);

    celda.setAttribute("style", "border: 1px solid black");
    celda2.setAttribute("style", "border: 1px solid black");
    celda3.setAttribute("style", "border: 1px solid black");
    celda4.setAttribute("style", "border: 1px solid black");
    celda5.setAttribute("style", "border: 1px solid black");
    celda6.setAttribute("style", "border: 1px solid black");

    tr.appendChild(celda);
    tr.appendChild(celda2);
    tr.appendChild(celda3);
    tr.appendChild(celda4);
    tr.appendChild(celda5);
    tr.appendChild(celda6);

    tabla.appendChild(tr);
  }
  div_tabla.appendChild(tabla);
}

function Pintar_Tabla_EnBD(Criminales) {
  let div_tabla = document.getElementById("tablacriminales");
  div_tabla.innerHTML = "";

  let tabla = document.createElement("table");
  tabla.id = "tablita";
  tabla.setAttribute(
    "style",
    "border: 2px solid black; border-collapse: collapse; text-align: center; margin:auto"
  );
  let tr = document.createElement("tr");

  // Generamos los títulos de la cabecera
  let rotulos = ["uid", "title", "description", "aliases", "images", "save"];

  for (let i = 0; i < rotulos.length; i++) {
    let celda = document.createElement("td");
    celda.textContent = rotulos[i];
    celda.setAttribute("style", "border: 1px solid black");
    tr.appendChild(celda);
  }
  tabla.appendChild(tr);
  for (let i = 0; i < Criminales.length; i++) {
    let criminal = Criminales[i];

    let tr = document.createElement("tr");
    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let celda3 = document.createElement("td");
    let celda4 = document.createElement("td");
    let celda5 = document.createElement("td");
    let celda6 = document.createElement("td");

    celda.textContent = criminal.uid;
    celda2.textContent = criminal.title;
    celda3.textContent = criminal.description;
    celda4.textContent = criminal.aliases;

    let celda5inner = document.createElement("img");
    celda5inner.textContent = "Guardar";
    celda5inner.setAttribute("src", criminal.images);
    celda5.appendChild(celda5inner);

    let celda6inner = document.createElement("button");
    celda6inner.textContent = "Guardar";
    celda6inner.id = i+1;
    celda6inner.addEventListener('click',POST_Con_FETCH);
    celda6.appendChild(celda6inner);

    celda.setAttribute("style", "border: 1px solid black");
    celda2.setAttribute("style", "border: 1px solid black");
    celda3.setAttribute("style", "border: 1px solid black");
    celda4.setAttribute("style", "border: 1px solid black");
    celda5.setAttribute("style", "border: 1px solid black");
    celda6.setAttribute("style", "border: 1px solid black");

    tr.appendChild(celda);
    tr.appendChild(celda2);
    tr.appendChild(celda3);
    tr.appendChild(celda4);
    tr.appendChild(celda5);
    tr.appendChild(celda6);

    tabla.appendChild(tr);
  }
  div_tabla.appendChild(tabla);
}

// La función que limpia la tabla.

function limpiarTabla() {
  document.getElementById("tablacriminales").innerHTML = "";
  resultados.innerHTML = "Tabla limpiada correctamente";
}

function POST_Con_FETCH(Event){
    let filas = document.getElementsByTagName('tr');
    let Interes = filas[Event.target.id]; 
    let Alias = Interes.children[3];

    let Criminal = {
            "uid": Interes.children[0].innerHTML,
            "title": Interes.children[1].innerHTML,
            "description": Interes.children[2].innerHTML,
            "aliases": Alias.innerHTML.split(','),
            "images": Interes.children[4].firstChild.src
    }

    fetch("save_criminal.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Criminal)
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
        })
        .then((data) => {
          document.getElementById("resultados").innerHTML = data;
        })
        .catch((err) => {resultados.innerHTML = err;  console.log(err)});
    }