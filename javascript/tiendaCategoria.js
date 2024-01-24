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

    constructor(){
        this.productos = [];
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

let frutillas  = new Producto(1,"Frutillas","Frutas Deshidratadas","Al granel,Organica","../img/frutillas.png",8, );
let avellanas = new Producto(2,"Avellanas","Frutas Secas","Al granel,naturales","../img/avellanas.png",54);
let mantequillaDeAlmendras = new Producto(3,"Mantequilla de Almendras","Frutas Secas","100% almendras","../img/mantequillaAlmendras.jpg",12);
let mantequillaDePistachos = new Producto(4,"Mantequilla de Pistachos","Frutas Secas","Al granel,naturales","../img/mantequillaPistacho.jpg",12 );
let granola = new Producto(5,"Granola","Al granel,natural","Frutas Secas","../img/granola.jpg",12 );
let canela = new Producto(6,"Canela","Especias","Al granel,natural","../img/canela.jpg",12 );
let teVerde = new Producto(7,"Te Verde","Hierbas para té","Al granel,natural","../img/canela.jpg",12 );



let tiendaEnLinea = new TiendaEnLinea();
tiendaEnLinea.agregarProducto(frutillas);
tiendaEnLinea.agregarProducto(avellanas);
tiendaEnLinea.agregarProducto(mantequillaDeAlmendras);
tiendaEnLinea.agregarProducto(mantequillaDePistachos);
tiendaEnLinea.agregarProducto(granola);
tiendaEnLinea.agregarProducto(canela);
tiendaEnLinea.agregarProducto(teVerde);

mostrarProductos();

function mostrarProductos(){
    
    let productos = tiendaEnLinea.obtenerProductos();
        
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

   
function cargarPantallaTienda(){
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
        console.log(imagenCorazon);
    }
}

cargarPantallaTienda();

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










