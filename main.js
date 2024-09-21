let cantidad = document.getElementById('cantidad');
let contrasena = document.getElementById('contrasena');
let resultado = document.getElementById('resultado');
const cadenacaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*() ';

// Función para generar la contraseña
function generar() {
    let numerodigitado = parseInt(cantidad.value, 10);
    
    // Validación de la cantidad de caracteres
    if (numerodigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return; // Salir de la función si la validación falla
    }

    let pasword = '';

    for (let i = 0; i < numerodigitado; i++) {
        let caracteraleatorio = cadenacaracteres[Math.floor(Math.random() * cadenacaracteres.length)];
        pasword += caracteraleatorio;
    }

    contrasena.value = pasword;
    verificarSeguridad(pasword); // Verificar la seguridad de la contraseña generada
}

// Función para limpiar el campo de contraseña y cantidad
function limpiar() {
    contrasena.value = '';
    cantidad.value = '';
    resultado.textContent = ''; // Limpiar el resultado de seguridad
}

/// Función para verificar la seguridad de la contraseña usando expresiones regulares
function verificarSeguridad(pass) {
    let seguridad = 'Segura';

    if (pass.length < 10) {
        seguridad = 'Poco segura: debe tener al menos 12 caracteres';
    } else if (!/[A-Z]/.test(pass)) {
        seguridad = 'Poco segura: debe incluir al menos una letra mayúscula';
    } else if (!/[a-z]/.test(pass)) {
        seguridad = 'Poco segura: debe incluir al menos una letra minúscula';
    } else if (!/[0-9]/.test(pass)) {
        seguridad = 'Poco segura: debe incluir al menos un número';
    } else if (!/[!@#$%^&*()]/.test(pass)) {
        seguridad = 'Poco segura: debe incluir al menos un carácter especial';
    }

    resultado.textContent = seguridad; 
}