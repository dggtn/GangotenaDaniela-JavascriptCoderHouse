function borrarFavorito(nombre){
    let favoritosString =  localStorage.getItem("favoritos");
    let favoritos = JSON.parse(favoritosString);
    const index = favoritos.indexOf(nombre);
    favoritos.splice(index,1);
    localStorage.setItem("favoritos",JSON.stringify(favoritos)); 
    const elemento = document.getElementById("favorito_" + nombre);

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
        item.setAttribute('id',"favorito_" + favorito)
        item.innerHTML = `
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>
        
          <div class="image">
            <img
              style="height: 6em"
              src="../img/${favorito}.png"
              alt="${favorito}"
            />
          </div>
        
          <div class="description">
            <span>Al granel</span>
            <span>${favorito}</span>
            <span>Orgánica</span>
          </div>
        
          <div class="total-price"><p>$8 el kilo</p></div>
          <img
            id="corazon_${favorito}"
            style="padding-left: 2em;height:3em;"
            src="../img/trash-can-solid.svg"
            onclick="borrarFavorito('${favorito}')"
          />    
        `
        contenedor.appendChild(item);
    }

    }
    listaDeFavoritos();