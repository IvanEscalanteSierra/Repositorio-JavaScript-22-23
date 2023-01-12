let enlaces = document.getElementsByTagName("a");
let parrafos = document.getElementsByTagName("p");

let NumParrafos = parrafos.length;
let NumLinks = enlaces.length;
let FirstLinkUrl = enlaces[0].href;
let SecondParrafo = parrafos[1].textContent;
let penultimoLinkEnlace = enlaces[enlaces.length - 2].href;

let PrimerParrafo = document.getElementsByTagName("p")[0];
let PPLinks = PrimerParrafo.getElementsByTagName("a").length;

let enlaces_asociados = 0;

for (let i = 0; i < enlaces.length; i++) {
    //También se puede hacer con (enlaces[i].href.includes('/wiki/Municipio'))
  if (enlaces[i].href.indexOf("/wiki/Municipio") != -1) {
    enlaces_asociados++;
  }
}

let aviso;

if(enlaces.length>=2){
aviso =    "- Hay " +
NumParrafos +
" parrafos en el documento. <br> - El segundo parrafo contiene: " +
SecondParrafo +
"<br> - Hay " +
NumLinks +
" links en el documento. \n - La dirección del primer link es: " +
FirstLinkUrl +
".<br> - El penultimo link es: " +
penultimoLinkEnlace +
".<br> - Hay " +
enlaces_asociados +
" enlaces que contengan el patrón. <br> - El primer parrafo tiene " +
PPLinks +
" enlaces.";

} else{
    "- Hay " +
NumParrafos +
" parrafos en el documento. <br> - El segundo parrafo contiene: " +
SecondParrafo +
"<br> - Hay " +
NumLinks +
" links en el documento. \n - La dirección del primer link es: " +
FirstLinkUrl +
".<br> - No hay penultimo link. <br> - Hay " +
enlaces_asociados +
" enlaces que contengan el patrón. <br> - El primer parrafo tiene " +
PPLinks +
" enlaces.";

}

let info = document.getElementById("info");
info.innerHTML = aviso;
