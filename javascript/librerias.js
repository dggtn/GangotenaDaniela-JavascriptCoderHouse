let sidebar;

const carritoCompras = document.getElementById('carritoCompras');
carritoCompras.addEventListener('click', (e) => {
    sidebar = Swal.fire({
            title: 'Tus compras',
            html: Swal.version,
            position: 'top-end',
            showClass: {
              popup: `
              animate__animated
              animate__fadeInRight
              animate__faster
            `,
            },
            hideClass: {
              popup: `
              animate__animated
              animate__fadeOutRight
              animate__faster
            `,
            },
            grow: 'column',
            width: 300,
            showConfirmButton: false,
            showCloseButton: true,
          })
  });



  
 
   


  