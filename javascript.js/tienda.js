let frutilla = 8;
let mantequillaAlmendras = 12;
let avellanas = 56;
let totalApagarFrutilla = 0;
let totalApagarAvellanas = 0;
let totalApagarmantequillaAlmendras= 0;


alert ("Productos disponibles son Frutilla: 8usd el kilo,mantequillaAlmendras: 12usd la unidad y avellanas: 56usd el kilo")

productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) e ingrese salir cuando no quiera elegir más productos")
cantidadDeseada = prompt("Ingrese cantidad deseada")

while (productoElegido!= "salir" ){
    if (productoElegido == "frutilla"){
        totalApagarFrutilla = cantidadDeseada * frutilla;
    } else if (productoElegido == "avellanas"){
        totalApagarAvellanas = cantidadDeseada * avellanas;
        
    }
    else if (productoElegido == "mantequillaAlmendras"){
        totalApagarMantequilla  = cantidadDeseada * mantequillaAlmendras;
    
    }
    else {
        alert ("Ingrese solo los productos disponibles")
    }
    productoElegido = prompt("Ingrese producto deseado (frutilla,mantequillaAlmendras,avellanas) o ingrese salir cuando no quiera elegir más productos")
    cantidadDeseada = prompt("Ingrese cantidad deseada o ingrese salir si no eligió más productos")
}
let totalApagar = totalApagarFrutilla + totalApagarMantequilla  + totalApagarAvellanas

alert (`el detalle de su compra es: 
frutilla : ${totalApagarFrutilla}usd 
mantequillaAlmendras: ${totalApagarMantequilla}usd 
avellanas: ${totalApagarAvellanas}usd 
total a pagar es ${totalApagar}usd`)