const productos = [{id: 1, nombre: "Itachi", precio: 15000, cantidad: 15},
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



   




        