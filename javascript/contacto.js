let nombre;
let apellido;
let email;
let comentarios;
//validar formularios
function enviarOpinion(){
    let formularioValido = true;
    let emailValido = true
    let nombre= document.getElementById("nombre").value;
    if (nombre == ""){
        formularioValido = false;
    }
    let apellido= document.getElementById("apellido").value;
    if (apellido == ""){
        formularioValido = false;
    }

    let email= document.getElementById("email").value;
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
        Swal.fire("Gracias " + nombre + " tomaremos en cuenta tu opinión ") 
        document.getElementById("nombre").value = ""
        document.getElementById("apellido").value=""
        document.getElementById("comentarios").value=""
        document.getElementById("email").value=""
        
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
	var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(email);
}