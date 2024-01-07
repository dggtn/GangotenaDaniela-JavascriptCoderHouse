
function listaDeFavoritos(){

    let favoritosString =  localStorage.getItem("favoritos");       
    let favoritos = JSON.parse(favoritosString);
    let  ul = document.createElement('ul');
    favoritos.forEach((favorito)=>{ 
        
    let li = document.createElement('li');
    li.innerHTML = favorito;
    ul.appendChild(li);
    })

    const contenedor = document.getElementById("favoritos");
    contenedor.appendChild(ul);
}

listaDeFavoritos();

