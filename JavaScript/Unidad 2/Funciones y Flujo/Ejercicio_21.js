function Generate(){
    let num = Number(document.getElementById('num').value);

    
    let aux = num;
    let array = Array(num);

    for(let i = 0 ; i<num ;i++){

        array[i]=aux;
        aux--;
    }
  let elemento= document.getElementById('container');
    elemento.innerHTML= array

}