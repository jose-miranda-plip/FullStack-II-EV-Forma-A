const contenedorCarrito = document.querySelector("#contenedor-carrito");

const totalCarrito = document.querySelector("#total-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];    

console.log(carrito);