let boton1 = document.getElementById('botonsito');
let boton2 = document.getElementById('botonsito2');
let boton3 = document.getElementById('botonsito3');
let lista = document.getElementById('listita');


boton1.addEventListener('click',AddData);
boton2.addEventListener('click',BorrarLI1);
boton3.addEventListener('click',BorrarLI2);


function AddData(){
let datos = prompt('Introduce tu nombre y apellidos:');

let nodo = document.createElement('li');
let data = document.createTextNode(datos);
nodo.appendChild(data);

document.getElementById('listita').appendChild(nodo);
};

function BorrarLI1(){
    //No sé por qué al poner firstChild tarda 2 clicks en borrar.
    let hijos = lista.getElementsByTagName('li');
lista.removeChild(hijos[0]);
};


function BorrarLI2(){
    lista.removeChild(lista.lastChild);
};