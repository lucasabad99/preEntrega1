const productos = [
  { id: 1, nombre: "Itachi", precio: 15000, cantidad: 15 },
  { id: 2, nombre: "Naruto", precio: 15000, cantidad: 15 },
  { id: 3, nombre: "Jiraija", precio: 15000, cantidad: 15 },
  { id: 4, nombre: "Sunade", precio: 15000, cantidad: 15 },
  { id: 5, nombre: "Asuma", precio: 15000, cantidad: 15 },
  { id: 6, nombre: "Kakashi", precio: 15000, cantidad: 15 },
  { id: 7, nombre: "Obito", precio: 15000, cantidad: 15 },
  { id: 8, nombre: "Rin", precio: 15000, cantidad: 15 },
  { id: 9, nombre: "Guy sensei", precio: 15000, cantidad: 15 },
  { id: 10, nombre: "Rock lee", precio: 20000, cantidad: 20 },
  { id: 11, nombre: "Sabuza", precio: 19000, cantidad: 15 },
  { id: 12, nombre: "Sapito", precio: 19000, cantidad: 15 },
];

// Guardar productos en localStorage
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};
// Cargar productos del localStorage (si existen)
const cargarProductos = () => {
  const data = localStorage.getItem("productosLucas");
  return data ? JSON.parse(data) : productos;
};
let productosGuardados = cargarProductos();




// Crear las tarjetas
function cardAppend(productos) { 
  let contenedor = document.getElementById("contenedor");
  contenedor.classList.add("tarjetasContador");
  contenedor.innerHTML = ""; // Limpiar contenedor para evitar duplicados
  productos.forEach((el) => { 
    let card = document.createElement("div");
    card.classList.add("cardAppend");
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">Precio: $${el.precio}</p>
          <p class="card-text cantidad" data-id="${el.id}">Cantidad: ${el.cantidad}</p>
          <button class="btn btn-primary comprar" data-id="${el.id}">Agregar al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });
  agregarEventosCompra();
}





// Creo array carrito, obtengo datos del localStorage y los guardo en el array
let carrito = [];
const cargarCarrito = () => {
  const data = localStorage.getItem("carritoLucas");
  return data ? JSON.parse(data) : [];
};
carrito = cargarCarrito();





//En esta funcion se agrega al carrito y se resta del stock
function agregarEventosCompra() {
  const botones = document.querySelectorAll(".comprar");
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const idProducto = parseInt(e.target.dataset.id);
      const producto = productosGuardados.find((p) => p.id === idProducto);
      if (producto && producto.cantidad > 0) {
        producto.cantidad -= 1;
        const cantidadElement = document.querySelector(`.cantidad[data-id="${idProducto}"]`);
        cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;
        guardarLocal("productosLucas", productosGuardados);
        const productoEnCarrito = carrito.find((p) => p.id === idProducto);
        if (productoEnCarrito) {
          productoEnCarrito.cantidad += 1;
        } else {
          carrito.push({ ...producto, cantidad: 1 });
        }
        guardarLocal("carritoLucas", carrito);
      } else {
        alert("Stock agotado");
      }
    });
  });
}
// Renderizar las tarjetas
cardAppend(productosGuardados);








   




        