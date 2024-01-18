class Usuario {
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }
}

class UsuariosRegistrados {

    constructor(){
        this.usuarios = [];
    }

    agregarUsuario(usuario){
        this.usuarios.push(usuario);
    }

   
    obtenerUsuarioPorId(id) {
        return this.usuarios.find((usuario) => usuario.id == id)
    }

}


let juan  = new Usuario(1,"Juan","juan@yahoo.com","123456");
let maria  = new Usuario(1,"maria","maria@yahoo.com","123456");
let alejandro  = new Usuario(1,"alejandro","alejandron@yahoo.com","123456");


let  UsuariosRegistrados= new  UsuariosRegistrados();
UsuariosRegistrados.agregarUsuario(juan);
UsuariosRegistrados.agregarUsuario(maria);
UsuariosRegistrados.agregarUsuario(alejandro);

let alertaIngreso;

function logearse(id){

    let UsuariosRegistrados = [];
   
    let usuariosString =  localStorage.getItem("Usuarios");

    if (usuariosString){
        UsuariosRegistrados = JSON.parse(usuariosString);
    }
    const usuario= UsuariosRegistrados.find((unUsuario) => unUsuario.id === Number(id));

    if (usuario){
        let alertaIngreso = document.getElementById("alertaIngreso" + usuario.id);
        
        Swal.fire("Ya estas registrado");
        
        let UsuarioPorId = favoritos.map((unUsuario) => unUsuario.id)
        const index = UsuarioPorId.indexOf(Number(id));
        UsuariosRegistrados.splice(index,1)
    } else{
       Swal.fire("Debes registrarte"); 
    
    }
    
    localStorage.setItem("usuarios",JSON.stringify(usuario));
}

   

