// Cargar el carrito del localStorage
const cargarCarrito = () => {
  const data = localStorage.getItem("carritoLucas");
  return data ? JSON.parse(data) : [];
};

// Mostrar los productos del carrito en la página
function listarProductos(carrito) {
  const ticket = document.getElementById("ticket");
  ticket.classList.add("tarjetasContador");
  ticket.innerHTML = ""; // Limpiar contenido previo

  // Verificar si hay productos en el carrito
  if (carrito.length === 0) {
    ticket.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  // Crear tarjetas para los productos del carrito
  carrito.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("cardAppend");
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Precio: $${producto.precio}</p>
          <p class="card-text">Cantidad en carrito: ${producto.cantidad}</p>
        </div>
      </div>
    `;
    ticket.appendChild(card);
  });
}

// Inicializar la página del carrito
const carrito = cargarCarrito();
listarProductos(carrito);


function manejarCarrito(carrito){
    
    const vaciarCarrito = document.querySelector("#botones button:first-child");
      // Identificar botones por su índice o su contenido
    vaciarCarrito.addEventListener("click", ()=>{
        if(carrito.length > 0){
        localStorage.removeItem("carritoLucas");
        carrito.length = 0;
        alert("carrito vacio");
        } else {
        alert("el carrito ya esta vacio");
        }
    });
  
}