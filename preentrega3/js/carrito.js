// Cargo el carrito del localStorage
const cargarCarrito = () => {
  const data = localStorage.getItem("carritoLucas");
  return data ? JSON.parse(data) : [];
};

// Muestro los productos del carrito en la página
function listarProductos(carrito) {
  const ticket = document.getElementById("ticket");
  ticket.classList.add("tarjetasContador");
  ticket.innerHTML = ""; // Limpiar contenido previo

  if (carrito.length === 0) {
    ticket.innerHTML = "<p>El carrito está vacío.</p>";
    return;
  }

  // Creo tarjetas para los productos del carrito
  carrito.forEach(({ nombre, precio, cantidad }) => {
    const card = document.createElement("div");
    card.classList.add("cardAppend");
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5> <!-- Usamos directamente 'nombre' -->
          <p class="card-text">Precio: $${precio}</p> <!-- Usamos directamente 'precio' -->
          <p class="card-text">Cantidad en carrito: ${cantidad}</p> <!-- Usamos directamente 'cantidad' -->
        </div>
      </div>
    `;
    ticket.appendChild(card);
  });
}

function manejarCarrito(carrito) {
  // Selección con desestructuración de propiedades relacionadas
  const vaciarCarrito = document.querySelector("#botones button:first-child");

  if (!vaciarCarrito) {
    console.error("El botón 'Vaciar carrito' no se encontró."); // Mensaje de error si no se encuentra el botón
    return;
  }

  // Evento para vaciar el carrito
  vaciarCarrito.addEventListener("click", () => {
    if (carrito.length > 0) {
      // Limpiamos el carrito
      localStorage.removeItem("carritoLucas");
      carrito.length = 0;

      // Desestructuración si necesitamos trabajar con propiedades específicas
      carrito.forEach(({ id, nombre }) => {
        console.log(`Eliminado: ${nombre} (ID: ${id})`);
      });

      listarProductos(carrito); // Actualizamos la lista
    } else {
      const ticket = document.getElementById("ticket");
      ticket.innerHTML = "<p>El carrito ya está vacío.</p>";
    }
  });

  botonComprar.addEventListener("click", () => {
    if (carrito.length > 0) {
      // Mostrar el SweetAlert de agradecimiento
      Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra!',
        text: 'Su pedido ha sido procesado exitosamente.',
        confirmButtonText: 'Aceptar'
      });
}

document.addEventListener("DOMContentLoaded", () => {
  const carrito = cargarCarrito();
  listarProductos(carrito); // Aquí es donde se carga y muestra el carrito
  manejarCarrito(carrito); // Y aquí se manejan las acciones del carrito
});

