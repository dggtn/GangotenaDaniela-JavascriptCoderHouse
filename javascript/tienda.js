/*/Pre-entrega1:


let frutilla = 8;
let mantequillaAlmendras = 12;
let avellanas = 56;
let totalApagarFrutilla = 0;
let totalApagarAvellanas = 0;
let totalApagarmantequillaAlmendras= 0;


alert ("Productos disponibles son Frutilla: 8usd el kilo,mantequillaAlmendras: 12usd la unidad y avellanas: 56usd el kilo")

productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) e ingrese salir cuando no quiera elegir más productos")
cantidadDeseada = prompt("Ingrese cantidad deseada")
let totalApagar = 0

while (productoElegido!= "salir" ){
    if (productoElegido == "frutilla"){
        totalApagarFrutilla = cantidadDeseada * frutilla;
    } else if (productoElegido == "avellanas"){
        totalApagarAvellanas = cantidadDeseada * avellanas;
        
    }
    else if (productoElegido == "mantequillaAlmendras"){
        totalApagarmantequillaAlmendras = cantidadDeseada * mantequillaAlmendras;
    
    }
    else {
        alert ("Ingrese solo los productos disponibles")
    }
    productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) o ingrese salir cuando no quiera elegir más productos")
    cantidadDeseada = prompt("Ingrese cantidad deseada o ingrese salir si no eligió más productos")
}


function total( totalApagarFrutilla, totalApagarmantequillaAlmendras, totalApagarAvellanas){
    let resultado = totalApagarFrutilla +totalApagarmantequillaAlmendras+ totalApagarAvellanas;
    return resultado;
}

alert (`el detalle de su compra es: 
frutilla : ${totalApagarFrutilla}usd 
mantequillaAlmendras: ${totalApagarmantequillaAlmendras}usd 
avellanas: ${totalApagarAvellanas}usd 
total a pagar es ${total( totalApagarFrutilla, totalApagarmantequillaAlmendras, totalApagarAvellanas)}usd`)/*/

//objetos y sus funcionalidades:
//instanciación de objetos:

//let frutasSecas = new Categoria("Frutas Secas");
//let lacteos = new Categoria("Lacteos");
//let especias = new Categoria("Especias");
//let frutasDesh = new Categoria("Frutas Deshidratadas");
//let mantequilla = new Categoria("Mantequillas de Frutos Secos");


//let mantequillaDeAvellanas = new Producto("Mantequilla de Avellanas", 12.50,mantequilla );
//let mantequillaDeCashew = new Producto("Mantequilla de Cashew", 13,mantequilla );

//let almendras = new Producto("Almendras", 21, frutasSecas);
//let nueces = new Producto("Nueces", 18, frutasSecas);

//let ananas = new Producto("Ananas", 4.5, frutasDesh);
//let moras = new Producto("Moras", 4.5, frutasDesh);

//let lecheAlmendras = new Producto("Leche de Almendras", 5.5, lacteos);
//let lecheCoco = new Producto("Leche de Coco", 5.5, lacteos);
//let lecheAvena= new Producto("Leche de Avena", 5.5, lacteos);

//let canela = new Producto("Canela", 2.5, especias);
//let pimenton = new Producto("Pimentón", 2.5, especias);
//let salHimalaya = new Producto("Sal Himalaya", 4.5, especias);

//let categorias = [frutasSecas, frutasDesh, especias, lacteos, mantequilla];
//let productos = [mantequillaDeAlmendras, mantequillaDeAvellanas, mantequillaDeCashew, almendras, nueces, avellanas, frutillas,
    // ananas, moras, lecheAlmendras, lecheCoco, lecheAvena, canela, pimenton, salHimalaya];



//Ejecución del programa:

/*/let mensajeDeBienvenida =`Bienvenidos a la tienda en linea
Escribe el numero de la opción que buscas:
1 -Frutas Secas
2 -Lacteos
3 -Especias
4 -Frutas Deshidratadas
5 -Mantequillas de Frutos Secos

Para volver al inicio escribe 0 
Para salir de la tienda escribe salir 
para finalizar tu compra escribe finalizar
`

let opcionElegida = prompt(mensajeDeBienvenida);
let productoElegido;
let cantidadElegida = 0;
let montoAPagar = 0;

while(opcionElegida != "salir") {

    if (opcionElegida == 1){
        procesarOpcion("Frutas Secas");
    
    } else if (opcionElegida == 2){
        procesarOpcion("Lacteos");
    
    } else if (opcionElegida == 3){
        procesarOpcion("Especias");
    
    } else if (opcionElegida == 4){
        procesarOpcion("Frutas Deshidratadas");
    
    } else if (opcionElegida == 5){
        procesarOpcion("Mantequillas de Frutos Secos");
    
    } else if (opcionElegida == "finalizar") {
        // mostrar resumen
        alert(`El monto a pagar es: ${montoAPagar} usd`);
    } else {
        // salir del programa
    }

    opcionElegida = prompt(mensajeDeBienvenida);
}

function procesarOpcion(categoria) {
    let listaDeProductos = ""
        let productos = tiendaEnLinea.obtenerProductosPorCategoria(categoria);
        productos.forEach(producto => {
            listaDeProductos += `${producto.nombre} ${producto.precio} USD\n`
        });

        productoElegido = prompt(listaDeProductos);
        cantidadElegida = prompt("Ingrese la cantidad deseada");
    
        montoAPagar += tiendaEnLinea.buscarPrecioDeProducto(productoElegido) * cantidadElegida;
}/*/

//TERCERA PRE ENTREGA:
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
        productos.push(productoAgregado);
        alert(productoAgregado.nombre +" se ha guardado con exito en el carrito de compras");
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













