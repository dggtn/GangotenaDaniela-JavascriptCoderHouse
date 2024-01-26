let nombre;
let apellido;
let email;
let comentarios;
//validar formularios
function enviarOpinion(e){
    e.preventDefault();
    let formularioValido = true;
    let emailValido = true
    let nombre= document.getElementById("nombre").value;
    if (nombre == ""){
        formularioValido = false;
    }
    
    let email= document.getElementById("email").value;
    console.log(email)
    if (email == ""){
        formularioValido = false;
    } else {
        emailValido = validarEmail(email)
        if(emailValido == false) {
            formularioValido = false;
        }
    }
    
    let comentarios= document.getElementById("comentarios").value;
    if (comentarios == ""){
        formularioValido = false;
    }
    if (formularioValido == true){
        let formulario =  document.getElementById('contact-form')
        emailjs.init('xfBN8QaHVdIGL1WLz');
        formulario.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('email_service', 'contact_form', formulario)
            .then(function() {
        document.getElementById("nombre").value = ""
        document.getElementById("comentarios").value=""
        document.getElementById("email").value=""
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        Swal.fire("Gracias " + nombre + " tomaremos en cuenta tu opinión ") 
        
        
    } else {
        Swal.fire ("Por favor complete todos los campos")
        console.log("Valido:", emailValido)
        if (emailValido == false) {
            Swal.fire ("Formato de email incorrecto")
        }
    }
}

function validarEmail(email){
	
	// Define our regular expression.
	let expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(email);
}