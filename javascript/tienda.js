class Producto {
    constructor(id, nombre, descripcion, imagen, precio) {
        this.id = id;
        this.nombre = nombre;
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
}

let frutillas  = new Producto(1,"Frutillas","Al granel,Organica","../img/frutillas.png",8 );
let avellanas = new Producto(2,"Avellanas","Al granel,naturales","../img/avellanas.png",54);
let mantequillaDeAlmendras = new Producto(3,"Mantequilla de Almendras","100% almendras","../img/mantequillaAlmendras.jpg",12);
let mantequillaDePistachos = new Producto(4,"Mantequilla de Pistachos","Al granel,naturales","../img/mantequillaPistacho.jpg",12 );
let granola = new Producto(5,"Granola","Al granel,natural","../img/granola.jpg",12 );


let tiendaEnLinea = new TiendaEnLinea();
tiendaEnLinea.agregarProducto(frutillas);
tiendaEnLinea.agregarProducto(avellanas);
tiendaEnLinea.agregarProducto(mantequillaDeAlmendras);
tiendaEnLinea.agregarProducto(mantequillaDePistachos);
tiendaEnLinea.agregarProducto(granola);

mostrarProductos();

function mostrarProductos(){
    
    let productos = tiendaEnLinea.obtenerProductos();
        
    const contenedor = document.getElementById("productosDeLaTienda");

    for(let i = 0; i< productos.length; i++){

        let producto = productos[i];
        
        let item = document.createElement('div')
        item.classList.add("item");
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
        alert ("El producto ya ha sido agregado al carrito")
    } else {
        let productoAgregado = tiendaEnLinea.obtenerProductoPorId(id);
        let item = {...productoAgregado, cantidad: 1};
        productos.push(item);
        alert(item.nombre +" se ha guardado con exito en el carrito de compras");
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













