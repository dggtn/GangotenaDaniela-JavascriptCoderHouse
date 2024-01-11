/*/function listaDeCompras(){
    let productosString =  localStorage.getItem("productos");       
    let productos = JSON.parse(productosString);
    let  ul = document.createElement('ul');
    productos.forEach((producto)=>{ 
        
    let form = document.createElement('form');
    form.innerHTML = producto;
    ul.appendChild(li);
    })

    const contenedor = document.getElementById("productos");
    contenedor.appendChild(ul);
}

listaDeCompras();/*/
function borrarCompra(nombre){
    let productosString =  localStorage.getItem("productos");
    let productos = JSON.parse(productosString );
    const index = productos.indexOf(nombre);
    productos.splice(index,1);
    localStorage.setItem("productos",JSON.stringify(productos)); 
    const elemento = document.getElementById("productos_" + nombre);
    elemento.remove();

}

function listaDeCompras(){
    
    let productosString  =  localStorage.getItem("productos");       
    let productos = JSON.parse(productosString);
    
    const contenedor = document.getElementById("productos");
    for(let i = 0; i< productos.length; i++){

        let producto = productos[i];
        
        let item = document.createElement('div')
        item.classList.add("item");
        item.setAttribute('id',"productos_" + producto)
        item.innerHTML = `
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>
        
          <div class="image">
            <img
              style="height: 6em"
              src="../img/${producto}.png"
              alt="${producto}"
            />
          </div>
        
          <div class="description">
            <span>Al granel</span>
            <span>${producto}</span>
            <span>Orgánica</span>
          </div>
        
          <div class="total-price"><p>$8 el kilo</p></div>
          <img
            id="corazon_${producto}"
            style="padding-left: 2em;height:3em;"
            src="../img/trash-can-solid.svg"
            onclick="borrarCompra('${producto}')"
          />    
        `
        contenedor.appendChild(item);
    }

}

listaDeCompras();
