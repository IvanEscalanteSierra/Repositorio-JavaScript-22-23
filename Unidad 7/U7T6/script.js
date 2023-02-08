let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = Sonoro;

function Sonoro(){
    document.getElementById('FinBut').addEventListener('click',AddShow);
    document.getElementById('FinBut2').addEventListener('click',ShowTable);
}

function AddShow(){
    let Title = document.getElementById('Title').value;
    let Director = document.getElementById('Director').value;
    let Chain = document.getElementById('Chain').value;
    let Year = document.getElementById('Year').value;
    let Finished = document.getElementById('Finished').checked;
    let NuevaSerie;

    (Title=='') ? alert('El título no puede ser nulo.'):
    (Director=='') ? alert('El director no puede ser nulo.'):
    (Chain=='') ? alert('La cadena no puede ser nulo.'):
    (Year=='') ? alert('El año no puede ser nulo.'):
    (console.log('Creación de objeto correcta'),NuevaSerie= {titulo:Title,director:Director,cadena:Chain,anyo:Year,terminada:Finished});

    EfectuoPOSTconFETCH(NuevaSerie);
}


function ShowTable(){
    fetch("listar_series.php",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.ok) {
            return response.text();
        }
      })
    .then(
        data => {
            
            let json = JSON.parse(data);
            let Resultado = document.getElementById("Tabla");            
            Resultado.innerHTML = "";


                  // Creación plantilla tabla.
      let tabla = document.createElement("table");

      let fila = document.createElement("tr");
      let columna = document.createElement("td");

      let Titulo = document.createTextNode("Título");
      columna.appendChild(Titulo);
      fila.appendChild(columna);

      let columna2 = document.createElement("td");

      let Director = document.createTextNode("Director");
      columna2.appendChild(Director);
      fila.appendChild(columna2);

      let columna3 = document.createElement("td");

      let Cadena = document.createTextNode("Cadena");
      columna3.appendChild(Cadena);
      fila.appendChild(columna3);

      let columna4 = document.createElement("td");

      let Anyo = document.createTextNode("Año");
      columna4.appendChild(Anyo);
      fila.appendChild(columna4);

      let columna5 = document.createElement("td");

      let lend = document.createTextNode("Terminada");
      columna5.appendChild(lend);
      fila.appendChild(columna5);

      tabla.appendChild(fila);

      //Estilado y relleno
      for (let i = 0; i < json.length; i++) {
        let row = document.createElement("tr");
        let imagen1 = document.createElement("img");
        let imagen2 = document.createElement("img");

        imagen1.src = "Images/icone-x-noir.png";
        imagen2.src = "Images/pngwing.com.png";

        let column = document.createElement("td");
        let column2 = document.createElement("td");
        let column3 = document.createElement("td");
        let column4 = document.createElement("td");
        let column5 = document.createElement("td");

        let campo = document.createTextNode(json[i].titulo);
        let campo2 = document.createTextNode(json[i].cadena);
        let campo3 = document.createTextNode(json[i].director);
        let campo4 = document.createTextNode(json[i].anyo);
        let campo5 = document.createTextNode(json[i].terminada);

        Number.parseInt(campo4.textContent) >= 2000 &&
        Number.parseInt(campo4.textContent) <= 2011
          ? column4.setAttribute("class", "amarillo")
          : Number.parseInt(campo4.textContent) < 2000
          ? column4.setAttribute("class", "rojo")
          : Number.parseInt(campo4.textContent) > 2011
          ? column4.setAttribute("class", "verde")
          : "";

        campo5.textContent == 1
          ? column5.appendChild(imagen2)
          : campo5.textContent == 0
          ? column5.appendChild(imagen1)
          : "";

        column.appendChild(campo);
        column2.appendChild(campo2);
        column3.appendChild(campo3);
        column4.appendChild(campo4);

        row.appendChild(column);
        row.appendChild(column2);
        row.appendChild(column3);
        row.appendChild(column4);
        row.appendChild(column5);
        tabla.appendChild(row);
      }
      tabla.setAttribute("class", "tablas");
      Resultado.appendChild(tabla);

          })
          .catch((err) => console.log(err));
};



function EfectuoPOSTconFETCH(Serie){
    fetch("create_serie.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Serie)
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
        })
        .then((data) => {
          document.getElementById("resultado").innerHTML = data;
          (data==='"ok"') ? document.getElementById('resultado').style.color= 'green':
          document.getElementById('resultado').style.color= 'red';
          
          ShowTable();
        })
        .catch((err) => console.log(err));
}