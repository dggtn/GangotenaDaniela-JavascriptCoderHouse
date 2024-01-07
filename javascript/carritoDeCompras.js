function listaDeCompras(){
    let productosString =  localStorage.getItem("productos");       
    let productos = JSON.parse(productosString);
    let  ul = document.createElement('ul');
    productos.forEach((producto)=>{ 
        
    let li = document.createElement('li');
    li.innerHTML = producto;
    ul.appendChild(li);
    })

    const contenedor = document.getElementById("productos");
    contenedor.appendChild(ul);
}

listaDeCompras();
