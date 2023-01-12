window.onload = descubrir;
const celdas = document.getElementsByTagName("td");
let auxid = "";
let auxevt;
let auximg;
let contador = 0;
let wins = 0;

function descubrir() {
  for (let i = 0; i < celdas.length; i++) {
    let celdaClick = celdas[i].addEventListener("click", miFuncion);
  }

if(wins==6){
    alert('¡Has completado el juego!')
}
}

function miFuncion(evt) {
  let celda = evt.currentTarget;
  let hijos = celda.childNodes;
  let id = hijos[1].id;
  let nombre1 = id[0] + id[1] + id[2];
  let nombre2 = auxid[0] + auxid[1] + auxid[2];

  hijos[1].style.display = "block";

  contador++;
  if (contador == 2) {
    if (nombre1 == nombre2) {
      document.getElementById(celda.id).classList.add("fondoverde");
      document.getElementById(auxevt.id).classList.add("fondoverde");
      
      contador = 0;
      wins++;
    } else {
      auximg.style.display = "none";
      hijos[1].style.display = "none";
      contador = 0;
    }
  }

  auxid = id;
  auxevt = celda;
  auximg = hijos[1];
}
