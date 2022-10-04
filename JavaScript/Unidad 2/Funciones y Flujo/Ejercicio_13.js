    let palabra = "ejemplo";
    var recorrido = "";
    for (let x in palabra){
        //se podría hacer facilmente con let x of palabra
        recorrido+= palabra[x] + " / "
    }

    let elemento = document.getElementById("container");
    elemento.innerHTML= recorrido;

