let READY_STATE_COMPLETE = 4;
let HTTP_STATUS_OK = 200;

window.onload = Sonoro;

function Sonoro(){
    document.getElementById('FinBut').addEventListener('click',AddShow);
}

function AddShow(){
    let Title = document.getElementById('Title').value;
    let Director = document.getElementById('Director').value;
    let Chain = document.getElementById('Chain').value;
    let Year = document.getElementById('Year').value;
    let Finished = document.getElementById('Finished').checked;
    let NuevaSerie;

    (Title=='') ? alert('El título no puede ser nulo.'):
    (Director=='') ? alert('El director no puede ser nulo.'):
    (Chain=='') ? alert('La cadena no puede ser nulo.'):
    (Year=='') ? alert('El año no puede ser nulo.'):
    (console.log('Creación de objeto correcta'),NuevaSerie= {titulo:Title,director:Director,cadena:Chain,anyo:Year,terminada:Finished});

    EfectuoPOST(NuevaSerie);
}

function EfectuoPOST(Serie){
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "create_serie.php");
    xhr.setRequestHeader("Content-type", "application/json");
    let cadena_formato_json = JSON.stringify(Serie);
    xhr.onreadystatechange = () => {
        if (
            xhr.readyState === READY_STATE_COMPLETE &&
            xhr.status === HTTP_STATUS_OK &&
            xhr.responseText === '"ok"'
        ) {
            document.getElementById('resultado').style.color= 'green';
        } else{
            document.getElementById('resultado').style.color= 'red';    
        };
        document.getElementById('resultado').innerHTML = xhr.responseText;
    };
    xhr.send(cadena_formato_json);
}