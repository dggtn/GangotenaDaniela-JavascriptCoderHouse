function borrarFavorito(id){
    let favoritosString =  localStorage.getItem("favoritos");
    let favoritos = JSON.parse(favoritosString);
    let favoritosPorId = favoritos.map((unFavorito) => unFavorito.id)
    const index = favoritosPorId.indexOf(Number(id));
    favoritos.splice(index,1)
    localStorage.setItem("favoritos",JSON.stringify(favoritos)); 
    const elemento = document.getElementById("favorito_" + id);
    elemento.remove();
}

function listaDeFavoritos(){

    let favoritosString =  localStorage.getItem("favoritos");       
    let favoritos = JSON.parse(favoritosString);
    
    const contenedor = document.getElementById("favoritos");
    for(let i = 0; i< favoritos.length; i++){

        let favorito = favoritos[i];
        
        let item = document.createElement('div')
        item.classList.add("item");
        item.setAttribute('id',"favorito_" + favorito.id)
        item.innerHTML = `
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>
        
          <div class="container-fluid">
          <div class="row">
            <div class="col-md-6 pt-5">
            <img class="img-fluid rounded mx-auto d-block"
              src="${favorito.imagen}"
              alt="${favorito.nombre}"
            />
          </div>
        
          <div>
            <span>${favorito.nombre}</span>
            <span>${favorito.descripcion}</span>
          </div>
        
          <div class="total-price fs-4"><p>${favorito.precio}el kilo</p></div></div>
          <div class="col-md-6 pt-5">
          <img class="corazon"
         
            id="corazon_${favorito.id}"
            src="../img/trash-can-solid.svg"
            onclick="borrarFavorito('${favorito.id}')"
          /> 
        `
        contenedor.appendChild(item);
    }

    }
    listaDeFavoritos();