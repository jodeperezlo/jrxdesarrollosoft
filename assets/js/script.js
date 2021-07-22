// Variable para guardar los datos de los inputs.
var datos = {
    nombre : '',
    correo : '',
    asunto : '',
    mensaje : ''
}

// Guardar en variables los inputs del formulario.
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

// Agregar los eventos
nombre.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
asunto.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// Evento submit
const formulario = document.querySelector('#contact');
formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault();
    
    // Validar el formunario
    const { nombre, correo, asunto, mensaje} = datos;

    if(nombre === ''){
        mostrarAlerta('Llene el campo del nombre.', 'error');
        return;
    }else if(correo === ''){
        mostrarAlerta('Llene el campo del correo.', 'error');
        return;
    }else if(asunto === ''){
        mostrarAlerta('Llene el campo del asunto.', 'error');
        return;    
    }else if(mensaje.trim() === ''){
        mostrarAlerta('Llene el campo del mensaje.', 'error');
        return;
    }else{
        // Validar que los campos tengan los datos correctos.
        if (campos.nombre && campos.correo && campos.asunto) {
            // Enviar el formulario
            mostrarAlerta('El mensaje se está enviando correctamente...');
            setTimeout(() => {
                formulario.submit();
            }, 3000);
        }
    }
});

// Leer el contenido de los input
function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] =  e.target.value;
}

// Mostrar alerta
function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaparecer después de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

//------------------------------------------------------------------------------------

// Validar los campos del formulario.
const inputs = document.querySelectorAll('#contact input');
// Expresiones regulares para validar los campos.
const expresiones = {
    nombre: /^\S[a-zA-ZÀ-ÿ\s]{1,50}\S$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9\S_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/,
    asunto: /^\S[a-zA-Z0-9À-ÿ\s\_\-]{1,100}\S$/ // Letras, numeros, guión y guión bajo.
}
// Campos a validar.
const campos = {
    nombre: false,
    correo: false,
    asunto: false
}
// Validar formulario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
            break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, 'asunto');
            break;
    }
}

// Por cada input a validar, agregamos el keyup y blur (focus).
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

// Validar cada campo.
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {        
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

// Botón arriba
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        document.querySelector('.ir-arriba').classList.add('show');
    }else{
        document.querySelector('.ir-arriba').classList.remove('show');
    }
}

document.querySelector('.ir-arriba').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});