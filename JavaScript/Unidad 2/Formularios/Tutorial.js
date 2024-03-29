function registrarUser() {

    const $FORM = document.getElementById('Formularioo');
    const $NAME = document.getElementById('nombre');
    const $SURNAME = document.getElementById('apellido');
    const $EMAIL = document.getElementById('email');
    const $PASSWORD = document.getElementById('password');
    const $COMMENTS = document.getElementById('comentario');
    const $ACEPTED = document.getElementById('condiciones');


    function handleSubmit(e) {
        e.preventDefault();
        const name = $NAME.value;
        const surname = $SURNAME.value;
        const email = $EMAIL.value;
        const password = $PASSWORD.value;
        const comentario = $COMMENTS.value;
        const acepted = $ACEPTED.checked;

        if (name == false || isValidName(name) == false) {
            alert('El nombre debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por 1 o 2 palabras');
        }
        else {
            if (email == false || isValidEmail(email) == false) {
                alert('El email debe ser un valor válido : \n -Debe estar relleno \n -Debe estar compuesto por un @ y un ".algo"');
            }
            else {
                if (comentario == false || isValidComent(comentario) == false) {
                    alert('El comentario tiene que tener un formato válido : \n -Debe estar relleno \n -Debe de tener un total de 50 caracteres');
                }
                else {
                    if (isValidPassword(password) == false) {
                        alert('El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito');
                    }
                }
            }
        }

        var regUsuario = {
            nombre: name, apellido: surname, email: email,
            comentario: comentario, password: password
        };
        console.log(regUsuario);
        var newUser = JSON.stringify(regUsuario);
        console.log(newUser);
    }


    function isValidName(name) {
        const validacion =
            /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/;
        return validacion.test(name);
    }
    function isValidEmail(email) {
        const validacion = /^(.+\@.+\..+)$/;
        return validacion.test(email);
    }
    function isValidPassword(password) {
        const validacion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,}$/;
        return validacion.test(password);
    }
    function isValidComent(comentario) {
        const validacion = /^[\s\S]{1,50}$/;
        return validacion.test(comentario);
    }

    $FORM.addEventListener('submit', handleSubmit);
}