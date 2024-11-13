class carritoCompra{
   constructor(idProducto, nombreProducto, precio, tipoEnvio){
    this.idProducto = idProducto;
    this.nombreProducto = nombreProducto;
    this.precio = precio;
    this.tipoEnvio = tipoEnvio;
    }
}
const Funkpop = new carritoCompra(1, "Itachi", 50, "Retiro");
const camisetaBoca = new carritoCompra(2, "Boca casaca", 270, "Envio a domicilio");
const JugueteBebe = new carritoCompra(3, "Autitos de juguete", 460, "Retiro");
const CamisetaMessi = new carritoCompra(4, "Messi casaca", 300, "Envio a domicilio");

let carri = 0;
while(true){
const compra = parseInt(prompt("elija cual producto comprar entre 1-4, si quiere finalizar elija 0"));   

if (compra === 0) {
    alert("Ha finalizado su compra, su monto es: $" + carri);
    break;
}
if ( compra === 1){
    carri = carri + Funkpop.precio;
    console.log("Usted a elegido: ", Funkpop.nombreProducto);
    alert("Usted a elegido el producto: " + "\nNombre: "+ Funkpop.nombreProducto +"  \nPrecio: $" + Funkpop.precio + " \nTipo de envio: " + Funkpop.tipoEnvio + "\nTOTAL: " + carri);
} 
else if ( compra === 2){
     carri = carri + camisetaBoca.precio;
    console.log("Usted a elegido: " , camisetaBoca.nombreProducto);
    alert("Usted a elegido el producto: " + "\nNombre: "+ camisetaBoca.nombreProducto +"  \nPrecio: $" + camisetaBoca.precio + " \nTipo de envio: " + camisetaBoca.tipoEnvio + "\nTOTAL: " + carri);
} else if ( compra === 3){
    carri = carri + JugueteBebe.precio;
    console.log("Usted a elegido: " , JugueteBebe.nombreProducto);
    alert("Usted a elegido el producto: " + "\nNombre: "+ JugueteBebe.nombreProducto +"  \nPrecio: $" + JugueteBebe.precio + " \nTipo de envio: " + JugueteBebe.tipoEnvio + "\nTOTAL: " + carri);
} 
else if ( compra === 4){
    carri = carri + CamisetaMessi.precio;
    console.log("Usted a elegido: " , CamisetaMessi.nombreProducto);
    alert("Usted a elegido el producto: " + "\nNombre: "+ CamisetaMessi.nombreProducto +"  \nPrecio: $" + CamisetaMessi.precio + " \nTipo de envio: " + CamisetaMessi.tipoEnvio + "\nTOTAL: " + carri);
} 
else {
    console.log("Elegi bien tutor");
    alert("Elegi bien tutor");
}
}


