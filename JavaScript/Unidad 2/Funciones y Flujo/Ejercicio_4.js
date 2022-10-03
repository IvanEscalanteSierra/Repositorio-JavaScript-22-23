function compare(){
    let x = document.getElementById("num1").value;
    let y = document.getElementById("num2").value;



    if(x>y){
        
        let suma = Number(x) + Number(y);
        let diferencia = x - y;
        
        document.write("La suma resulta en: "+ suma + " y la diferencia en: "+ diferencia);

        } else if(y>x){
            let multi = x * y;
        let divi = y / x;

            document.write("El producto resulta en: "+ multi + " y la división en: "+ divi);
        } else {
            alert("Ambos números son iguales.")
        }

}