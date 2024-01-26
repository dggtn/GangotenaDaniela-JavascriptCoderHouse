let nombreYApellido;
let correoelectronico2;

//validar formularios

function newsletter(e){
    e.preventDefault();
    let formularioValido = true;
    let emailValido = true
    let nombreYApellido= document.getElementById("nombreYApellido").value;
    if (nombreYApellido== ""){
        formularioValido = false;
    }
   

    let correoelectronico2= document.getElementById("correoelectronico").value;
    if (correoelectronico2 == ""){
        formularioValido = false;
    } else {
        emailValido = validarEmail(correoelectronico2)
        if(emailValido == false) {
            formularioValido = false;
        }
    }
    
    if (formularioValido == true){
        let formulario =  document.getElementById('contact-form')
        emailjs.init('xfBN8QaHVdIGL1WLz');
        formulario.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('email_service', 'contact_form', formulario)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
        Swal.fire("Gracias " + nombreYApellido + " por suscribirte a nuestro newsletter") 
        document.getElementById("nombreYApellido").value=""
        document.getElementById("correoelectronico").value=""
        
    } else {
        Swal.fire ("Por favor complete todos los campos")
        console.log("Valido:", emailValido)
        if (emailValido == false) {
            Swal.fire ("Formato de email incorrecto")
        }
    }

}

function validarEmail(correoelectronico){
	
	// Define our regular expression.
	let expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(correoelectronico);
}

(function registrarseAlNewsletter() {
    // https://dashboard.emailjs.com/admin/account
    
})();

  
