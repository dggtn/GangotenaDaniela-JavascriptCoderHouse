let nombreYApellido;
let correoelectronico2;

//validar formularios

function newsletter(){
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
	var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(correoelectronico);
}