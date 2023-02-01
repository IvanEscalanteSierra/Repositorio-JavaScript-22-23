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
        const URL = "http://localhost:8090/Unidad 7/U7T3/Datos.xml";
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
        
            let xml = peticion_http.responseXML;
            let Resultado = document.getElementById("data");
            let series = xml.getElementsByTagName('serie');

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
        



            for (let i = 0; i < series.length; i++) {
              let imagen1 = document.createElement('img');
              let imagen2 = document.createElement('img');
  
              imagen1.src = 'Images/icone-x-noir.png';
              imagen2.src = 'Images/pngwing.com.png';                
            let hijos = series[i].children;
                
            let row = document.createElement('tr');
            
            for (let y = 0; y < hijos.length; y++) {
                let column = document.createElement('td');

                let campo = document.createTextNode(hijos[y].textContent);
                //Lo que falta está aquí
                (y==0) ? (column.setAttribute('class','titles'),column.appendChild(campo)):
                (y==1) ? (column.setAttribute('class','directores'),column.appendChild(campo)):
                (y==2) ? column.appendChild(campo):
                (y==3 && Number.parseInt(hijos[3].innerHTML) > 2011) ? (column.className='verde',column.appendChild(campo)):
                (y==3 && Number.parseInt(hijos[3].innerHTML) < 2011 && Number.parseInt(hijos[3].innerHTML) > 2000) ? (column.className='amarillo',column.appendChild(campo)):
                (y==3 && Number.parseInt(hijos[3].innerHTML) < 2000) ? (column.className='rojo',column.appendChild(campo)):
                (y==4 && hijos[y].innerHTML=='si') ? column.appendChild(imagen2):
                (y==4 && hijos[y].innerHTML=='no') ? column.appendChild(imagen1):
                '';

                row.appendChild(column);
            }
            tabla.appendChild(row);
            }



            Resultado.appendChild(tabla);
        }
    }
}