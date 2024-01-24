class Producto {
    constructor(id, nombre, categoria,descripcion, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.precio = precio;        
    }
}

class TiendaEnLinea {

    constructor(productos){
        this.productos = productos;
    }
    agregarProducto(producto){
        this.productos.push(producto);
    }

    obtenerProductos() {
        return this.productos;
    }

    obtenerProductoPorId(id){
        return this.productos.find((producto) => producto.id == id )
    }
    mostrarTodos(){
        return this.productos;
    }
    mostrarPorCategoria(categoria){
        return this.productos.filter((producto) => producto.categoria == categoria )
    }
}

// Variables globales
let tiendaEnLinea;
const cargarProductos = async () => {
    const respuesta = await fetch('../data/productos.json')
    const productos = await respuesta.json()
    tiendaEnLinea = new TiendaEnLinea(productos)
    mostrarProductos();
    cargarFavoritos();
}

cargarProductos()

function mostrarProductos(){
    let productos = tiendaEnLinea.mostrarTodos();
    const contenedor = document.getElementById("productosDeLaTienda");

    for(let i = 0; i< productos.length; i++){

        let producto = productos[i];
        
        let item = document.createElement('div')
        item.classList.add("item","show");
        item.setAttribute('id',"producto_" + producto.id)
        item.innerHTML = `
        <div class="buttons">
        <span class="delete-btn"></span>
        <span class="like-btn"></span>
      </div>
      
      <div class="image">
        <img
          style="height: 6em"
          src="${producto.imagen}"
          alt="${producto.nombre}"
        />
      </div>
      
      <div class="description">
        <span>${producto.nombre}</span>
        <span>${producto.categoria}</span>
        <span>${producto.descripcion}</span>
      </div>

      <div class="total-price"><p>${producto.precio} el kilo</p></div>
<div>
<button onclick="seleccionarProducto(${producto.id})">Comprar</button>
</div>
<div>
<img
  id="corazon_${producto.id}"
  style="padding-left: 1em;height:2em;padding-right: 1em;"
  src="../img/heart-regular.svg"
  onclick="productoFavoritoElegido(${producto.id})"
/>  
</div>`
contenedor.appendChild(item);
}

}


function seleccionarProducto(id){
    let productos = [];
    let productosString =  localStorage.getItem("productos");
    if (productosString){
        productos = JSON.parse(productosString);
    }
    
    const producto = productos.find((producto)=>producto.id === Number(id))
    if(producto) {
        Swal.fire("El producto ya ha sido agregado al carrito");
    } else {
        let productoAgregado = tiendaEnLinea.obtenerProductoPorId(id);
        let item = {...productoAgregado, cantidad: 1};
        productos.push(item);
        swal.fire(item.nombre +" se ha guardado con exito en el carrito de compras");
        localStorage.setItem("productos",JSON.stringify(productos));
    }
}

function productoFavoritoElegido(id){

    let favoritos = [];
   
    let favoritosString =  localStorage.getItem("favoritos");

    if (favoritosString){
        favoritos = JSON.parse(favoritosString);
    }
    const favorito = favoritos.find((unFavorito) => unFavorito.id === Number(id));

    if (favorito){
        let imagenCorazon = document.getElementById("corazon_" + favorito.id);
        imagenCorazon.src = "../img/heart-regular.svg"; 

        let favoritosPorId = favoritos.map((unFavorito) => unFavorito.id)
        const index = favoritosPorId.indexOf(Number(id));
        favoritos.splice(index,1)
    } else{
        let nuevoFavorito = tiendaEnLinea.obtenerProductoPorId(id);
        let imagenCorazon = document.getElementById("corazon_" + nuevoFavorito.id);
        imagenCorazon.src = "../img/heart-solid.svg"; 
        favoritos.push(nuevoFavorito);
    }
    localStorage.setItem("favoritos",JSON.stringify(favoritos));
}

   
function cargarFavoritos(){
    //leer el LS
    let favoritos = [];
   
    let favoritosString =  localStorage.getItem("favoritos");

    //transformarlo a objeto
    if (favoritosString){
        favoritos = JSON.parse(favoritosString);
    }
    //recorrer objeto
    for(let i = 0; i< favoritos.length; i++){
        let favorito = favoritos[i];
        let imagenCorazon = document.getElementById("corazon_" + favorito.id);
        imagenCorazon.src = "../img/heart-solid.svg"; 
    }
}

function filtrarPorCategoria(categoria){
    console.log(categoria);
    const productos = tiendaEnLinea.mostrarPorCategoria(categoria);
    console.log(productos);
    let items, i;
    items = document.getElementsByClassName("item");
    for (i= 0; i < items.length; i++) {
     agregarClase(items[i], "ocultar");
     console.log(items[i].id)
    const productoFiltrado = productos.find((producto)=>"producto_" + producto.id == items[i].id);
    if(productoFiltrado){
        eliminarClase(items[i],"ocultar")


    }
    
    }
    
  }

  function mostrarTodos(){
    let items, i;
    items = document.getElementsByClassName("item");
    for (i= 0; i < items.length; i++) {
    eliminarClase(items[i], "ocultar");
    }
    
    }
    
  



function agregarClase(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function eliminarClase(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");

}





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
  
  
  function elegirCantidad (id){
  
  let cantidad = document.getElementById("cantidad_" + id).value;
  let productosString  =  localStorage.getItem("productos");       
  let productos = JSON.parse(productosString);
  let producto = productos.find((producto) => producto.id === Number(id) );
  producto.cantidad = cantidad;
  localStorage.setItem("productos",JSON.stringify(productos)); 
  calcularTotalDeCompra();
  }
  
  function calcularTotalDeCompra(){
  let productosString =  localStorage.getItem("productos");
  let productos = JSON.parse(productosString);
  if (!productos) return;
  
  let precioTotal = 0;
  for(let i = 0; i< productos.length; i++){
    let producto = productos[i];
    precioTotal += producto.precio * producto.cantidad;
  }
  let totalApagar = document.getElementById("totalApagar") 
  totalApagar.innerHTML = precioTotal;
  
  }
  
  // Funciones de inicializacion
  //calcularTotalDeCompra();
  //listaDeCompras();
  




