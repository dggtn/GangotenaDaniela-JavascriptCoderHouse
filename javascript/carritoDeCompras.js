function listaDeCompras(){
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

listaDeCompras();
