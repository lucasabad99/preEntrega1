/*const productos = [{id: 1, nombre: "Itachi", precio: 15000, cantidad: 15},
                   {id: 2, nombre: "Naruto", precio: 15000, cantidad: 15},
                   {id: 3, nombre: "Jiraija", precio: 15000, cantidad: 15},
                   {id: 4, nombre: "Sunade", precio: 15000, cantidad: 15},
                   {id: 5, nombre: "Asuma", precio: 15000, cantidad: 15},
                   {id: 6, nombre: "Kakashi", precio: 15000, cantidad: 15},
                   {id: 7, nombre: "Obito", precio: 15000, cantidad: 15},
                   {id: 8, nombre: "Rin", precio: 15000, cantidad: 15},
                   {id: 9, nombre: "Guy sensei", precio: 15000, cantidad: 15},
                   {id:10, nombre: "Rock lee", precio: 20000, cantidad: 20}, 
                   {id:11, nombre: "Sabuza", precio: 19000, cantidad: 15},
                   {id:12, nombre: "Sapito", precio: 19000, cantidad: 15}];
//Segunda forma creando una card(uso create element  y classList.add, al final usamos innerHTML) y haciendolo hijo de contenedor con appendChild(en este caso el id)
function cardAppend(productos) {
    let contenedor = document.getElementById("contenedor");
    contenedor.classList.add("tarjetasContador");
        productos.forEach(el =>{
        let card = document.createElement("div");
        card.classList.add("cardAppend");
        card.innerHTML = 
        `
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">Precio: $${el.precio}</p>
          <p class="card-text">Cantidad: ${el.cantidad}</p>
          <button class="btn btn-primary">Comprar</button>
        </div>
      </div>
        `
        contenedor.appendChild(card);
    });
}

cardAppend(productos);
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
guardarLocal("productosLucas", JSON.stringify(productos));

*/

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
          <button class="btn btn-primary comprar" data-id="${el.id}">Comprar</button>
        </div>
      </div>
    `;
    contenedor.appendChild(card);
  });

  agregarEventosCompra();
}

function agregarEventosCompra() {
  // Selecciona todos los botones con la clase "comprar"
  const botones = document.querySelectorAll(".comprar");
  
  // Recorre cada botón encontrado
  botones.forEach((boton) => {
    // Agrega un evento de clic a cada botón
    boton.addEventListener("click", (e) => {
      // Obtiene el ID del producto desde el atributo "data-id" del botón clickeado
      const idProducto = parseInt(e.target.dataset.id);

      // Busca en el array productosGuardados el producto que coincida con el ID
      const producto = productosGuardados.find((p) => p.id === idProducto);

      // Verifica si el producto existe y tiene stock disponible
      if (producto && producto.cantidad > 0) {
        // Resta 1 al stock del producto
        producto.cantidad -= 1;

        // Selecciona el elemento en el DOM que muestra la cantidad de este producto
        const cantidadElement = document.querySelector(`.cantidad[data-id="${idProducto}"]`);

        // Actualiza el texto en el DOM para reflejar el nuevo stock
        cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;

        // Guarda los cambios en el localStorage para que persistan
        guardarLocal("productosLucas", productosGuardados);
      } else {
        // Si no hay stock, muestra una alerta
        alert("Stock agotado");
      }
    });
  });
}


// Renderizar las tarjetas
cardAppend(productosGuardados);




   




        