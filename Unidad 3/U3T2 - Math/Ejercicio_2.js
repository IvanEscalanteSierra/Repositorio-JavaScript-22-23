/**
 *  @author Iván Escalante Sierra
 */

// Pedimos el radio al usuario.

let Radio = prompt("Introduzca el valor para el radio:");

console.log("El radio mide " + Radio + " CMs.");

//Calculamos el diametro y lo redondeamos.

let Diametro = Radio * 2;
Diametro = Diametro.toFixed(2);
console.log("El diámetro mide " + Diametro + " CMs.");

//Para calcular el perímetro usaremos la función PI de Math y haremso un proceso similar al anterior.

let Perimetro = Math.PI * Diametro;
Perimetro = Perimetro.toFixed(2);
console.log(
  "El perímetro mide " + Perimetro + "CMs."
);

//Para calcular es similar al proceso anterior solo que ahora usaremos pow también.

let Area = Math.PI * Math.pow(Radio, 2);
Area = Area.toFixed(2);
console.log("El área del circulo mide " + Area + "CMs");

//Ahora calcularemos el proceso de esfera.

let Esfera = 4 * Math.PI * Math.pow(Radio, 2);
Esfera = Esfera.toFixed(2);
console.log("El área de la esfera mide  " + Esfera + "CMs.");

//Por último el volumen.

let Volumen = (4 / 3) * Math.PI * Math.pow(Radio, 3);
Volumen = Volumen.toFixed(2);
console.log("El volumen mide " + Volumen + "CMs.");

//Desarrollado por Iván Escalante Sierra 2ºDAW
