let pestanyta;

//No se aplica nada.

pestanyta.toolbar[0];
    pestanyta.location[0];
    pestanyta.menubar[0];
    pestanyta.resizable[0];
    pestanyta.width = 200;
    pestanyta.height = 80;
    pestanyta.top = 500;
    pestanyta.left = 500;

function NewOne(){
    pestanyta= window.open('','','blank_ toolbar=0, location=0, menubar=0, resizable=0, width=200, height=80, top=500, left=500');
    pestanyta.document.write('<p>Hola qué tal, soy un poco inutil y no hago más, un saludito fachero.</p> <button onclick="CloseThis()">Cerrar pestaña</button> <script src="Ejercicio_1.js"></script>')
}

function question(){
    let mensaje = (confirm('¿Realmente quieres abrir una nueva pestaña? Es bastante peligroso.'));
    if(mensaje){
        NewOne();
    }
}

//Falta lo del error

function CloseThat(){
    pestanyta.close();
}

function CloseThis(){
    close();
}

//No funciona

function parriba(){
    scrollTo(0,0);
}

//No funciona

function Move(){
    pestanyta.moveTo(100,100);
}