// Cargo el carrito del localStorage
const cargarCarrito = () => {
  try {
    const data = localStorage.getItem("carritoLucas");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error al cargar el carrito desde localStorage:", error);
    return [];
  }
};

// Muestro los productos del carrito en la página
function listarProductos(carrito) {
  try {
    const ticket = document.getElementById("ticket");
    ticket.classList.add("tarjetasContador");
    ticket.innerHTML = ""; // Limpiar contenido previo

    if (carrito.length === 0) {
      ticket.innerHTML = "<p>El carrito está vacío.</p>";
      return;
    }

    carrito.forEach(({ nombre, precio, cantidad }) => {
      const card = document.createElement("div");
      card.classList.add("cardAppend");
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Precio: $${precio}</p>
            <p class="card-text">Cantidad en carrito: ${cantidad}</p>
          </div>
        </div>
      `;
      ticket.appendChild(card);
    });
  } catch (error) {
    console.error("Error al listar los productos en el carrito:", error);
  }
}

// Manejo de carrito
function manejarCarrito(carrito) {
  try {
    const vaciarCarrito = document.getElementById("vaciarCarrito");
    const botonComprar = document.getElementById("comprarCarrito");

    vaciarCarrito.addEventListener("click", () => {
      try {
        if (carrito.length > 0) {
          localStorage.removeItem("carritoLucas");
          carrito.length = 0; // Limpiamos el carrito
          listarProductos(carrito);
          Swal.fire({
            icon: "info",
            title: "Carrito vacío",
            text: "El carrito se ha vaciado correctamente.",
            confirmButtonText: "Aceptar",
          });
        } else {
          const ticket = document.getElementById("ticket");
          ticket.innerHTML = "<p>El carrito está vacío.</p>";
        }
      } catch (error) {
        console.error("Error al vaciar el carrito:", error);
      }
    });

    botonComprar.addEventListener("click", () => {
      try {
        if (carrito.length > 0) {
          Swal.fire({
            icon: "success",
            title: "Gracias por su compra!",
            text: "Su pedido ha sido procesado exitosamente.",
            confirmButtonText: "Aceptar",
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: "Carrito vacío",
            text: "No hay productos para comprar.",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        console.error("Error al procesar la compra:", error);
      }
    });
  } catch (error) {
    console.error("Error al manejar el carrito:", error);
  }
}

// Evento principal
document.addEventListener("DOMContentLoaded", () => {
  try {
    const carrito = cargarCarrito();
    listarProductos(carrito);
    manejarCarrito(carrito);
  } catch (error) {
    console.error("Error al inicializar la página:", error);
  }
});

