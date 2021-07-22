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
    }else if(mensaje === ''){
        mostrarAlerta('Llene el campo del mensaje.', 'error');
        return;
    }else{
        // Enviar el formulario
        mostrarAlerta('El mensaje se está enviando correctamente...');
        setTimeout(() => {
            formulario.submit();
        }, 3000);
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