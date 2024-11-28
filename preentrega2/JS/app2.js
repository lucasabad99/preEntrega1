const producto = [
    { id: 1, nombre: "Producto 1", cantidad: 10, precio: 100 },
    { id: 2, nombre: "Producto 2", cantidad: 5, precio: 200 },
    { id: 3, nombre: "Producto 3", cantidad: 15, precio: 300 },
    { id: 4, nombre: "Producto 4", cantidad: 20, precio: 400 },
    { id: 5, nombre: "Producto 5", cantidad: 8, precio: 500 },
];

let totalCompra = 0; // Mantendremos el acumulado fuera del ciclo

while (true) {
    const mensaje = parseInt(prompt("Elija el número de producto de 1 al 5 (o presione 0 para finalizar)"));
    
    if (mensaje === 0) { // Si el usuario elige 0, mostramos el ticket y terminamos el bucle
        alert("El ticket total es: $" + totalCompra);
        break;
    }

    if (mensaje < 1 || mensaje > 5 || isNaN(mensaje)) { // Validamos entrada incorrecta
        alert("Número inválido. Elija un producto entre 1 y 5.");
        continue;
    }

    const cantidadAComprar = parseInt(prompt("Elija cantidad a comprar"));
    
    if (isNaN(cantidadAComprar) || cantidadAComprar < 1) { // Validamos cantidad incorrecta
        alert("No elegiste una cantidad válida, intenta de nuevo.");
        continue;
    }

    // Usamos forEach para verificar y procesar el producto elegido
    let detener = false;

    producto.forEach(p => {
        if (detener) return; // Si ya procesamos el producto, salimos del forEach

        if (p.id === mensaje) {
            if (cantidadAComprar > p.cantidad) {
                alert("No hay suficiente existencia para tu pedido.");
                detener = true; // Evitamos procesar más
            } else {
                // Mostramos los detalles del producto y actualizamos el total
                alert("Producto agregado:\n" + JSON.stringify(p, null, 2));
                totalCompra += p.precio * cantidadAComprar;
                p.cantidad -= cantidadAComprar; // Reducimos el stock
                detener = true;
            }
        }
    });
}
