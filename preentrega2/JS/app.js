/*class productos {
    constructor(id="",productoNombre = "",categoria="",precio="",fabricante="", cantidad=""){
     this.id = id;
     this.productoNombre = productoNombre;
     this.categoria = categoria;
     this.precio = precio;
     this.fabricante = fabricante;
     this.cantidad = cantidad;
    }
}
const productoArr = []
const totalCompra = 0;
productoArr.push ( new productos(1,"Camiseta de boca 2000","Deportes",24000,"modaambar", 20));
productoArr.push ( new productos(2,"Naruto shippuden", "Anime", 12000, "modaambar", 8));
productoArr.push ( new productos(3,"Itachi y sasuke de chicos", "Anime", 12000, "modaambar", 6));
productoArr.push ( new productos(4,"Camiseta de Argentina", "Deportes", 12000, "modaambar", 15));
productoArr.push ( new productos(5,"Peluche de Mafalda", "Recuerdos", 12000, "modaambar", 5));
console.log(productoArr);
//console.log(producto)
const restarStock = (
    this.cantidad = this.cantidad - 1
)

  
let tickettotal = [];
while(true){
    let mensajito = "Estos son nuestros productos <3\n";
    productoArr.forEach(p => {
    mensajito  += `id: ${p.id}\n Nombre del producto: ${p.productoNombre}\n Categoria: ${p.categoria}\n Precio:${p.precio}\n Fabricante: ${p.fabricante}\n Cantidad: ${p.cantidad}\n`;
    });
    alert(mensajito);
    console.log(mensajito);


    const mensaje = parseInt(prompt("Elija el numero de producto de 1 al 5"));
    if( mensaje <= 0 || mensaje > 5 || isNaN(mensaje)) {
        alert("No existe este producto, finalizo su compra");
        break;
    }
    const cantidaAcomprar = parseInt(prompt("Elija cantidad a comprar"));
    if(cantidaAcomprar < 1 || isNaN(cantidaAcomprar)){
       alert("No elegiste cantidad, ta luego");   
       break;
    } 

        let totalCompra = "\n"; 
        
        productoArr.forEach(p => {
            //debugger
            //if(detener) return;
                if(p.id === mensaje){
                    if(cantidaAcomprar >= p.cantidad){
                    alert("No hay existencia");
                        //detener = true;
                    }else if (cantidaAcomprar <= p.cantidad){
                        p.cantidad -= cantidaAcomprar;
                        tickettotal.push(totalCompra += `Id: ${p.id}\n Nombre: ${p.productoNombre}\n Categoria: ${p.categoria}\n Precio: ${p.precio}\n Fabricante: ${p.fabricante}\n Cantidad comprada: ${cantidaAcomprar}\n`                   
                    );
                    }     
                    
            }      
        })
        alert("Este es el producto seleccionado: " + totalCompra);
        const salir = parseInt(prompt("Ingrese cualquier tecla para seguir comprando.Para finalizar compra apriete 0"));
        if(salir === 0){
            alert("Este es el ticket final:" + tickettotal);
            break;
        }else{
            alert("Este es el carrito hasta ahora:" + tickettotal);
            
        }
    
   // let detener = false;
    
    
}


//Esta es la estructura del for each, element puede tomar cualquier nombre, es el objeto del array que le pasamos 

array.forEach(element => {
    if(condicion){
    //imprimir mensaje usando element o el nombre que le pusimoss
    }
});*/


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
//Primera forma de crear varios elementos con JS, usando un contador +=
function createCards (productos){
    let conteiner = document.getElementById("contenedor");
    productos.forEach(el => {
        innerHTML = "";
        conteiner.innerHTML +=
      `<div class="card cardAppend" style="width: 18rem; margin: 0 auto;">
        <div class="card-body">
          <h5 class="card-title">${el.nombre}</h5>
          <p class="card-text">Precio: $${el.precio}</p>
          <p class="card-text">Cantidad: ${el.cantidad}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
      `;
    });
} 
createCards(productos);