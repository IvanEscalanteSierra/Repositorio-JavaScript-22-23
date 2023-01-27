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
        const URL = "http://localhost:8090/Unidad 7/U7T2/localidad.php?localidad="+input.value;
        // en la petición, me suscribo al evento "ReadyStateChange", y le
        // digo que me llame a muestra_contenido cada vez que suceda (que cambie el estado)
        peticion_http.onreadystatechange = muestra_contenido;
        peticion_http.open("GET", URL);
        peticion_http.send();
      }
}


function muestra_contenido(){
    
}