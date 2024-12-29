// Cargar productos desde el archivo JSON usando fetch
const cargarProductos = async () => {
  try {
    const response = await fetch('./productos.json'); // Ruta al archivo JSON
    if (!response.ok) {
      throw new Error('Error al cargar los productos');
    }
    const productos = await response.json(); // Convertimos la respuesta a JSON
    return productos; // Retornamos los productos
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return []; // Retornamos un array vacío en caso de error
  }
};

// Renderizar los productos en tarjetas
const cardAppend = async () => {
  try {
    const productos = await cargarProductos(); // Cargar productos desde JSON
    let contenedor = document.getElementById("contenedor");
    contenedor.classList.add("tarjetasContador");
    contenedor.innerHTML = ""; // Limpiar contenedor para evitar duplicados

    productos.forEach(({ nombre, precio, cantidad, id, img }) => {
      let card = document.createElement("div");
      card.classList.add("cardAppend");
      card.innerHTML = `
        <div class="card">
          <img src="${img}" class="card-img-top" alt="${nombre}">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <p class="card-text">Precio: $${precio}</p>
            <p class="card-text cantidad" data-id="${id}">Cantidad: ${cantidad}</p>
            <button class="btn btn-primary comprar" data-id="${id}">Agregar al carrito</button>
          </div>
        </div>
      `;
      contenedor.appendChild(card);
    });

    agregarEventosCompra(); // Función para agregar eventos a los botones
  } catch (error) {
    console.error('Error al renderizar las tarjetas:', error);
  }
};

// Crear array carrito, obtener datos del localStorage y guardarlos en el array
let carrito = [];
const cargarCarrito = () => {
  try {
    const data = localStorage.getItem("carritoLucas");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error cargando carrito del localStorage:", error);
    return [];
  }
};
carrito = cargarCarrito();

// Función para agregar eventos de compra
function agregarEventosCompra() {
  try {
    const botones = document.querySelectorAll(".comprar");

    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        try {
          const idProducto = parseInt(e.target.dataset.id);

          cargarProductos().then((productos) => {
            const producto = productos.find((p) => p.id === idProducto);
            if (producto && producto.cantidad > 0) {
              let { cantidad, id, nombre, precio } = producto;

              // Restamos del stock
              cantidad -= 1;
              const cantidadElement = document.querySelector(`.cantidad[data-id="${id}"]`);
              cantidadElement.textContent = `Cantidad: ${cantidad}`;

              // Actualizamos el producto original en el array del carrito
              const productoEnCarrito = carrito.find((p) => p.id === id);
              if (productoEnCarrito) {
                // Incrementamos la cantidad del producto en el carrito
                productoEnCarrito.cantidad += 1;
              } else {
                // Si no existe en el carrito, lo agregamos
                carrito.push({ id, nombre, precio, cantidad: 1 });
              }

              // Guardamos el carrito actualizado
              localStorage.setItem("carritoLucas", JSON.stringify(carrito));
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Stock agotado",
              });
            }
          });
        } catch (error) {
          console.error("Error procesando la compra:", error);
        }
      });
    });
  } catch (error) {
    console.error("Error agregando eventos a los botones:", error);
  }
}

// Inicialización al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  cardAppend(); // Renderiza las tarjetas al cargar la página
});











   




        










   




        














   




        










   




        