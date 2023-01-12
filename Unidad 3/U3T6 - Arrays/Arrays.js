/**
 * @autor Iván Escalante Sierra
 */


//Creamos el array de países que usaremos con las funciones.

let countries = ["España", "Inglaterra", "Alemania", "EEUU", "Grecia"];

// Se pregunta al usuario qué desea hacer.

const inicio = prompt('¿Qué deseas hacer (Inserta número)?: \n -1 Mostrar número de países \n -2 Mostrar listado de países \n -3 Mostrar intervalo de países \n -4 Añadir un país \n -5 Borrar un país \n -6 Consultar un país');

(inicio==1) ? mostrar_num():
(inicio==2) ? mostrar_countries():
(inicio==3) ? interv():
(inicio==4) ? addCountry():
(inicio==5) ? delCountry():
(inicio==6) ? finder():
alert('Deberías haber introducido una opción correcta.');

// Función de la opción 1.

function mostrar_num() {
  alert("Hay " + countries.length + " países en el array.");
}

// Función de la opción 2.

function mostrar_countries() {
  let order = prompt(
    "¿Qué tipo de orden desea? \n 1- Original \n 2- Invertido \n 3- Alfabético"
  );

  if (order == 1) {
    for (let i = 0; i < countries.length; i++) {
      console.log(
        "País introducido número " + (i + 1) + ": " + countries[i] + "."
      );
    }
  } else if (order == 2) {
    // Es igual al anterior salvo que haremos uso de la función reverse() para darle la vuelta.
    let countries_invert = countries.reverse();
    for (let i = 0; i < countries.length; i++) {
      console.log(
        "País introducido número " +
          (countries_invert.length - i) +
          ": " +
          countries_invert[i] +
          "."
      );
    }
  } else if (order == 3) {
    let countries_sort = countries.sort();
    for (let i = 0; i < countries.length; i++) {
      console.log("País introducido: " + countries_sort[i] + ".");
    }
  } else {
    alert("La opción introducida es errónea.");
  }
}

// Función de la opción 3.

function interv() {
  let coordenas = prompt(
    "Introduce el intervalo de países que deseas extraer: \n -Ex: 1-4"
  );
  let posis = coordenas.split("-");

  let intervalo = countries.slice(posis[0], posis[1]);

  alert("El intervalo de países devuelve lo siguiente: " + intervalo);
}

// Función de la opción 4.

function addCountry() {
  let country = prompt("¿Qué país quieres agregar?:");

  let opcion = prompt(
    "¿Quiere añadirlo al principio o al final?:\n 1- Principio\n 2- Final"
  );
  (opcion == 1)
    ? addCountry_start(country)
    : opcion == 2
    ? addCountry_end(country)
    : alert("La opción es errónea.");
    alert(countries);
}

// Función de la opción 5.

function delCountry() {
  let opcion = prompt(
    "¿Quieres borrar el país del principio o del final?:\n 1- Principio\n 2- Final"
  );(opcion == 1)
    ? delCountry_start()
    : opcion == 2
    ? delCountry_end()
    : alert("La opción es errónea.");
    alert(countries);
}

//Subfunción de la función 4.

function addCountry_start(country) {
  countries.unshift(country);
  alert("Has añadido " + country + " al principio.");
  
}

//Subfunción de la función 4.

function addCountry_end(country) {
  countries.push(country);
  alert("Has añadido " + country + " al final.");
}

//Subfunción de la función 5.

function delCountry_start() {
  alert("Has borrado " + countries[0] + ", situado al principio.");
  countries.shift();
}

//Subfunción de la función 5.

function delCountry_end() {
  alert(
    "Has borrado " + countries[countries.length - 1] + ", situado al final."
  );
  countries.pop();
}

//Función de la opción 6.

function finder(){
  let opcion = prompt('¿Qué tipo de consulta deseas hacer? \n 1- Consulta por posición \n 2- Consulta por país');

  (opcion==1)? finderPos():
  (opcion==2)? finderCou():
  alert('Has introducido una opción errónea.');

}

//Subfunción de la función 6.

function finderPos() {

let dato = prompt('Introduce el dato con el que quieres consultar:');

  if (dato != Number(dato)) {
    alert("No has indicado una posición");
  } else {
    alert(
      "El país que se encuentra en la posición " +
        dato +
        " es " +
        countries[(dato-1)]
    );
  }
}

//Subfunción de la función 6.

function finderCou() {

  let dato = prompt('Introduce el dato con el que quieres consultar:');
  let prueba = false;
  let posis;
  for (let i = 0; i < countries.length; i++) {
    const pais = countries[i];

    if (pais == dato) {
      prueba=true;
      posis=i;
    }
  }

  if (prueba){
    alert("El país " + dato + " se encuentra en la posición " + (posis+1));
  } else{
    alert("Ha ocurrido un error, no se ha encontrado el país.");
  }

}

//Desarrollado por Iván Escalante Sierra 2ºDAW.