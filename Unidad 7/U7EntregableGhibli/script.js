let xhr;
let READY_STATE_COMPLETE = 4;

window.onload = Sonoros;



function Sonoros(){
    document.getElementById('recogedor').addEventListener('click',Get_Con_XHR);
    document.getElementById('Envio').addEventListener('click',EnviarUsuario)
}

function Get_Con_XHR() {
	console.log("Entrando en Get_Con_XHR");

	if (XMLHttpRequest) {
		xhr = new XMLHttpRequest();
		xhr.onreadystatechange = comprobar;
        //Se hace la petición al vehículo porque la URL no funciona.
		xhr.open("GET", "vehiculos.json");
		xhr.send();
    }

}

function comprobar() {
	console.log("Entrando en comprobar");
	if (xhr.readyState === READY_STATE_COMPLETE && xhr.status === 200) {
		console.log("comprobar ok");
        Pintar_Tabla(JSON.parse(xhr.responseText));
        EfectuoPOSTconFETCH(JSON.parse(xhr.responseText));
	}
}

function EfectuoPOSTconFETCH(Vehiculos){
  console.log('Efectuando POST para Inserción vehículos')
    fetch("insertar_vehiculos.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Vehiculos)
      })
        .then((response) => {
          if (response.ok) {
            return response.text();
          }
        })
        .then((data) => {
          console.log('Insertado')
          document.getElementById("resultado").innerHTML = data;
          (data==='"ok"') ? document.getElementById('resultado').style.color= 'green':
          document.getElementById('resultado').style.color= 'red';
          
        })
        .catch((err) => console.log(err));
}

function Pintar_Tabla(Vehiculos){

    let div_tabla = document.getElementById("tabla");
	div_tabla.innerHTML = "";

    let tabla = document.createElement("table");
    tabla.id = 'tablita';
	tabla.setAttribute("style", "border: 2px solid black; border-collapse: collapse; text-align: center; margin:auto");
	let tr = document.createElement("tr");

	// Generamos los títulos de la cabecera
	let rotulos = [
		"ID",
		"Nombre",
		"Descripción",
		"Clase",
        "¿Enviar?"
	];

    for (let i = 0; i < rotulos.length; i++) {

        let celda = document.createElement('td');
        celda.textContent = rotulos[i];
        celda.setAttribute('style','border: 1px solid black');
        tr.appendChild(celda);
        
    }
    tabla.appendChild(tr);

for (let i = 0; i < Vehiculos.length; i++) {
    let vehiculo = Vehiculos[i];

    let tr = document.createElement("tr");
    let celda = document.createElement('td');
    let celda2 = document.createElement('td');
    let celda3 = document.createElement('td');
    let celda4 = document.createElement('td');
    let celda5 = document.createElement('td');

    celda.textContent = vehiculo.id;
    celda2.textContent = vehiculo.name;
    celda3.textContent = vehiculo.description;
    celda4.textContent = vehiculo.vehicle_class;
    let celda5inner = document.createElement('input');
    celda5inner.type = 'checkbox';
    celda5.appendChild(celda5inner)

    celda.setAttribute('style','border: 1px solid black');
    celda2.setAttribute('style','border: 1px solid black');
    celda3.setAttribute('style','border: 1px solid black');
    celda4.setAttribute('style','border: 1px solid black');
    celda4.setAttribute('style','border: 1px solid black');

    tr.appendChild(celda);
    tr.appendChild(celda2);
    tr.appendChild(celda3);
    tr.appendChild(celda4);
    tr.appendChild(celda5);

    tabla.appendChild(tr);
}
    div_tabla.appendChild(tabla)
};


function EnviarUsuario(){
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let tlf = document.getElementById('tlf').value;
    let email = document.getElementById('email').value;

    // Todo esto es para analizar qué vehículos se añaden. 
    let vehiculos_seleccionados = [];
    let hijos_tabla = document.getElementById('tablita').children;
    
    for (let i = 1; i < hijos_tabla.length; i++) {
        let celdas_objetivo = hijos_tabla[i].children;

        if (celdas_objetivo[4].firstChild.checked){
            vehiculos_seleccionados.push(celdas_objetivo[0].innerText);
        };
        
    }
    console.log(vehiculos_seleccionados);

    let Usuario = {
        "nombre": name,
        "direccion": address,
        "telefono": tlf,
        "correo": email,
        "vehiculos": vehiculos_seleccionados
        };

EfectuoPOSTconFETCHParaEnviarUsuario(Usuario);
}

//Ahora haremos otro post con fetch
function EfectuoPOSTconFETCHParaEnviarUsuario(Usuario){
    fetch("registrar_envio.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Usuario)
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
          
        })
        .catch((err) => console.log(err));
}