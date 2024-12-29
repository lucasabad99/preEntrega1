let productosGlobal = [];

const cargarProductos = async () => {
  try {
    const response = await fetch('./productos.json');
    if (!response.ok) {
      throw new Error('Error al cargar los productos');
    }
    productosGlobal = await response.json();
    return productosGlobal;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al cargar los productos',
      text: 'No se pudieron cargar los productos. Intente nuevamente más tarde.'
    });
    return [];
  }
};

const cardAppend = async () => {
  try {
    const productos = await cargarProductos();
    const contenedor = document.getElementById("contenedor");
    contenedor.classList.add("tarjetasContador");
    contenedor.innerHTML = "";

    productos.forEach(({ nombre, precio, cantidad, id, img }) => {
      const card = document.createElement("div");
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

    agregarEventosCompra();
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al renderizar las tarjetas',
      text: 'Hubo un problema al mostrar los productos. Intente nuevamente.'
    });
  }
};

let carrito = [];
const cargarCarrito = () => {
  try {
    const data = localStorage.getItem("carritoLucas");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error al cargar el carrito',
      text: 'No se pudo cargar el carrito desde el almacenamiento local.'
    });
    return [];
  }
};
carrito = cargarCarrito();

const agregarEventosCompra = () => {
  try {
    const botones = document.querySelectorAll(".comprar");

    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        try {
          const idProducto = parseInt(e.target.dataset.id);

          if (!productosGlobal || productosGlobal.length === 0) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Los productos no están cargados. Por favor, recargue la página.'
            });
            return;
          }

          const producto = productosGlobal.find((p) => p.id === idProducto);
          if (producto && producto.cantidad > 0) {
            producto.cantidad -= 1;

            const cantidadElement = document.querySelector(`.cantidad[data-id="${producto.id}"]`);
            if (cantidadElement) {
              cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;
            }

            const productoEnCarrito = carrito.find((p) => p.id === producto.id);
            if (productoEnCarrito) {
              productoEnCarrito.cantidad += 1;
            } else {
              carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1,
              });
            }

            localStorage.setItem("carritoLucas", JSON.stringify(carrito));
          } else {
            Swal.fire({
              icon: "error",
              title: "Stock agotado",
              text: "No hay suficiente stock para este producto."
            });
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Error al agregar al carrito",
            text: "Ocurrió un problema al intentar agregar este producto."
          });
        }
      });
    });
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error en los eventos",
      text: "Hubo un problema al configurar los eventos de compra."
    });
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  await cardAppend();
});







        










   




        