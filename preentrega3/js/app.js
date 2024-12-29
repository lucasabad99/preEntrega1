const productos = [
  { id: 1, nombre: "Itachi", precio: 15000, cantidad: 15, img: "./assets/itachi.jpg" },
  { id: 2, nombre: "Naruto", precio: 15000, cantidad: 15, img: "./assets/naruto.jpg" },
  { id: 3, nombre: "Jiraija", precio: 15000, cantidad: 15, img: "./assets/jiraija.jpg" },
  { id: 4, nombre: "Sunade", precio: 15000, cantidad: 15, img: "./assets/sunade.jpg" },
  { id: 5, nombre: "Asuma", precio: 15000, cantidad: 15, img: "./assets/asuma.jpg" },
  { id: 6, nombre: "Kakashi", precio: 15000, cantidad: 15, img: "./assets/kakashi.jpg" },
  { id: 7, nombre: "Obito", precio: 15000, cantidad: 15, img: "./assets/obito.jpg" },
  { id: 8, nombre: "Rin", precio: 15000, cantidad: 15, img: "./assets/rin.jpg" },
  { id: 9, nombre: "Guy sensei", precio: 15000, cantidad: 15, img: "./assets/guy_sensei.jpg" },
  { id: 10, nombre: "Rock lee", precio: 20000, cantidad: 20, img: "./assets/rock_lee.jpg" },
  { id: 11, nombre: "Sabuza", precio: 19000, cantidad: 15, img: "./assets/sabuza.jpg" },
  { id: 12, nombre: "Sapito", precio: 19000, cantidad: 15, img: "./assets/sapito.jpg" },
];

// Guardar productos en localStorage
const guardarLocal = (clave, valor) => {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
  } catch (error) {
    console.error("Error guardando en localStorage:", error);
  }
};

// Cargar productos del localStorage (si existen)
const cargarProductos = () => {
  try {
    const data = localStorage.getItem("productosLucas");
    return data ? JSON.parse(data) : productos;
  } catch (error) {
    console.error("Error cargando productos del localStorage:", error);
    return productos; // Devuelve el array original en caso de error
  }
};

let productosGuardados = cargarProductos();

function cardAppend(productos) {
  try {
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
    console.error("Error renderizando las tarjetas:", error);
  }
}

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

function agregarEventosCompra() {
  try {
    const botones = document.querySelectorAll(".comprar");

    botones.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        try {
          const idProducto = parseInt(e.target.dataset.id);

          const producto = productosGuardados.find((p) => p.id === idProducto);
          if (producto && producto.cantidad > 0) {
            let { cantidad, id, nombre, precio } = producto;

            // Restamos del stock
            cantidad -= 1;
            const cantidadElement = document.querySelector(`.cantidad[data-id="${id}"]`);
            cantidadElement.textContent = `Cantidad: ${cantidad}`;

            // Actualizamos el producto original en el array
            producto.cantidad = cantidad;
            guardarLocal("productosLucas", productosGuardados);

            // Encontramos el producto en el carrito (si existe)
            const productoEnCarrito = carrito.find((p) => p.id === id);
            if (productoEnCarrito) {
              // Incrementamos la cantidad del producto en el carrito
              productoEnCarrito.cantidad += 1;
            } else {
              // Si no existe en el carrito, lo agregamos
              carrito.push({ id, nombre, precio, cantidad: 1 });
            }

            // Guardamos el carrito actualizado
            guardarLocal("carritoLucas", carrito);
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Stock agotado",
            });
          }
        } catch (error) {
          console.error("Error procesando la compra:", error);
        }
      });
    });
  } catch (error) {
    console.error("Error agregando eventos a los botones:", error);
  }
}

// Renderizar las tarjetas
try {
  cardAppend(productosGuardados);
} catch (error) {
  console.error("Error inicializando el render de tarjetas:", error);
}










   




        










   




        














   




        










   




        