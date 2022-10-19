let precio = Number(prompt("Introduce el precio"));
let IVA = prompt("Introduce el IVA");
let peso = Number(prompt("Introduce el peso"));

let Precio_IVA = (IVA=='normal') ? precio=precio + (precio*0.21):
(IVA=='reducido') ? precio=precio + (precio*0.1):
'Error';

let Precio_Peso = (peso<1) ? Precio_IVA+3:
(peso<3 && peso>=1) ? Precio_IVA+5:
(peso>=3) ? Precio_IVA+10:
'Error'

document.write('Su pedido tendrá un coste de '+Precio_Peso+' €.')