// --- Funcion de botones ---

function activarBotonAgregar(producto, contenedorBoton) {
  let cantidad = 0;


  renderBotonCantidad(contenedorBoton, cantidad);

 
  contenedorBoton.addEventListener("click", (e) => {
    const target = e.target;

    if (target.closest("button")) {
      
      if (target.textContent.includes("Add")) {
        cantidad = 1;
        renderBotonCantidad(contenedorBoton, cantidad);
      }

    
      if (target.classList.contains("increase")) {
        cantidad++;
        renderBotonCantidad(contenedorBoton, cantidad);
      }

     
      if (target.classList.contains("decrease")) {
        cantidad--;
        if (cantidad < 1) cantidad = 0;
        renderBotonCantidad(contenedorBoton, cantidad);
      }
    }
  });
}
