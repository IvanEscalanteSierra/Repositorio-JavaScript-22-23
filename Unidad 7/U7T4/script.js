window.onload = data;

let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;
let peticion_http;

function data(){
    if (window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
      } else {
        alert("No tienes soporte para AJAX");
        return; // Salimos y no hacemos la petición
      }
    
      if (peticion_http) {
        const URL = "http://localhost:8090/Unidad 7/U7T4/tvshows.json";
        // en la petición, me suscribo al evento "ReadyStateChange", y le
        // V digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado) V
        peticion_http.onreadystatechange = muestra_contenido;
        peticion_http.open("GET", URL);
        peticion_http.send();
      }
}


function muestra_contenido(){
    if (peticion_http.readyState === READY_STATE_COMPLETE) {
        if (peticion_http.status === HTTP_STATUS_OK) {
        
            let json = JSON.parse(peticion_http.responseText);
            let Resultado = document.getElementById("data");
            let series = document.getElementsByTagName('serie');

            let tabla = document.createElement('table');
            
            let fila = document.createElement('tr');
            let columna = document.createElement('td');

            let Titulo = document.createTextNode('Título');
            columna.appendChild(Titulo);
            fila.appendChild(columna);

            let columna2 = document.createElement('td');

            let Director = document.createTextNode('Director');
            columna2.appendChild(Director);
            fila.appendChild(columna2);
            
            let columna3 = document.createElement('td');

            let Cadena = document.createTextNode('Cadena');
            columna3.appendChild(Cadena);
            fila.appendChild(columna3);
            
            let columna4 = document.createElement('td');

            let Anyo = document.createTextNode('Año');
            columna4.appendChild(Anyo);
            fila.appendChild(columna4);
            
            let columna5 = document.createElement('td');

            let lend = document.createTextNode('Terminada');
            columna5.appendChild(lend);
            fila.appendChild(columna5);
            
            tabla.appendChild(fila);

            for (let i = 0; i < json.series.length; i++) {
              let row = document.createElement('tr');
              let imagen1 = document.createElement('img');
              let imagen2 = document.createElement('img');
              
              imagen1.src = 'Images/icone-x-noir.png';
              imagen2.src = 'Images/pngwing.com.png';                
            
              let column = document.createElement('td');
              let column2 = document.createElement('td');
              let column3 = document.createElement('td');
              let column4 = document.createElement('td');
              let column5 = document.createElement('td');

              let campo = document.createTextNode(json.series[i].titulo);
              let campo2 = document.createTextNode(json.series[i].cadena);
              let campo3 = document.createTextNode(json.series[i].director);
              let campo4 = document.createTextNode(json.series[i].year);
              let campo5 = document.createTextNode(json.series[i].terminada);

              column.setAttribute('class','titles');
              column2.setAttribute('class','directores');
              
              (Number.parseInt(campo4.textContent) >= 2000 && Number.parseInt(campo4.textContent) <= 2011) ? column4.setAttribute('class','amarillo'):
              (Number.parseInt(campo4.textContent) < 2000) ? column4.setAttribute('class','rojo'):
              (Number.parseInt(campo4.textContent) > 2011) ? column4.setAttribute('class','verde'):
              '';

              (campo5.textContent =='si') ? column5.appendChild(imagen2):
              (campo5.textContent =='no') ? column5.appendChild(imagen1):
              '';
              
              
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



            Resultado.appendChild(tabla);
        }
    }
}