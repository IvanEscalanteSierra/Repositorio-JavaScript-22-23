let sueldo = prompt("Sueldo del operario:");
let antiguedad = prompt("Antiguedad del operario:");
let operario = { Sueldo: sueldo, Antiguedad: antiguedad };


let final = (sueldo >= 1000) ? 'El sueldo no cambia, se mantiene en ' + sueldo :
    (sueldo < 1000 && antiguedad >= 10) ? 'El sueldo cambia, se modifica a ' + (Number(sueldo) + (Number(sueldo) * 0.2)) :
        (sueldo < 1000 && antiguedad < 10) ? 'El sueldo cambia, se modifica a ' + (Number(sueldo) + (Number(sueldo) * 0.05)) :
            'Error'

document.write("El operario posee un sueldo de " + operario.Sueldo + " y lleva con nosotros " + operario.Antiguedad + 
" años. \n La decisión es la siguiente <br>" + final);