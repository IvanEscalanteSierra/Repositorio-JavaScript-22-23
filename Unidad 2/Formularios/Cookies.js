//Las tareas de cookies y de API se encuentran en los archivos js de su respectivo ejercicio.

//Con esta función si nuestra cookie ya está creada, actualizará sus datos, si no la creará con los datos introducidos.

function setCookie(cname, cvalue, exdays) {
  let d = new Date(); // Se extrae la fecha actual
  //Se le suman los días indicados por parámetro
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString(); // Se pasa a formato GMT
  document.cookie = cname + "=" + cvalue + "; " + expires; //Se crea la cookie
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";"); //Divide la cookie separando por ;
  for (let i = 0; i < ca.length; i++) {
    //Recorre cada trozo de la cookie
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0)
      //Si encuentra el campo buscado
      return c.substring(name.length, c.length); //lo devuelve
  }
  return ""; //Si no devuelve vacío
}

//Para borrar la cookie

function delCookie() {
  document.cookie = "usuario=; expires =1 Nov 2000, 23:59:59 GMT";
}
