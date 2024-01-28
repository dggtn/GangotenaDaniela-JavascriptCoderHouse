function borrarCompra(id){
    let productosString =  localStorage.getItem("productos");
    let productos = JSON.parse(productosString );
    let productosPorId = productos.map((unProducto) => unProducto.id)
    const index = productosPorId.indexOf(Number(id));
    productos.splice(index,1);
    localStorage.setItem("productos",JSON.stringify(productos)); 
    const elemento = document.getElementById("productos_" + id);
    elemento.remove();
    calcularTotalDeCompra();
}



function listaDeCompras(){
    
    let productosString  =  localStorage.getItem("productos");       
    let productos = JSON.parse(productosString);
    
    const contenedor = document.getElementById("productos");
    for(let i = 0; i< productos.length; i++){

        let producto = productos[i];
        let item = document.createElement('div')
        item.classList.add("item");
        item.setAttribute('id',"productos_" + producto.id)
        item.innerHTML = `
          <div class="buttons">
            <span class="delete-btn"></span>
            <span class="like-btn"></span>
          </div>
        
          <div class="image">
            <img
            class="img-fluid rounded "
              style="height: 6em"
              src="${producto.imagen}"
              alt="${producto.nombre}"
            />
          </div>
        
          <div class="description">
            <span>${producto.nombre}</span>
            <span>${producto.descripcion}</span>
          </div>
          
          <label for="quantity">Elige tu cantidad en kg:</label>
          <input onchange="elegirCantidad(${producto.id})" type="number" id="cantidad_${producto.id}" name="quantity" min="1" max="10" value="${producto.cantidad}">
          </div>
          <div class="total-price"><p>${producto.precio} el kilo</p></div>
          <img
            id="corazon_${producto.id}"
           
            src="../img/trash-can-solid.svg"
            onclick="borrarCompra(${producto.id})"
          /> 
          </div>
           
        `
        contenedor.appendChild(item);
    }

}

listaDeCompras();


function elegirCantidad (id){

  let cantidad = document.getElementById("cantidad_" + id).value;
  let productosString  =  localStorage.getItem("productos");       
  let productos = JSON.parse(productosString);
  let producto = productos.find((producto) => producto.id === Number(id) );
  producto.cantidad = cantidad;
  localStorage.setItem("productos",JSON.stringify(productos)); 
  calcularTotalDeCompra();
}




calcularTotalDeCompra();


function alertaCompraFinalizada(){
  Swal.fire("Gracias por tu compra");
}



