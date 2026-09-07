const contenedorCarrito = document.querySelector("#contenedor-carrito");

const totalCarrito = document.querySelector("#total-carrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];    

function mostrarCarrito() {
    contenedorCarrito.innerHTML = "";

    let total = 0;

    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <p class="carrito-vacio">
                Tu carrito está vacío
            </p>
        `;
        totalCarrito.textContent = "$0";
        
        return;
    }

    carrito.forEach(item => {

        const producto = productos.find(producto => producto.codigo === item.codigo);

        if (!producto) {
            return;
        }
        
        const subtotal = producto.precio * item.cantidad;
        total += subtotal;

        contenedorCarrito.innerHTML += `
            <article class="carrito-item">
                <img 
                    src="${producto.img}" 
                    alt="${producto.nombre}" 
                    class="carrito-img"
                >

                <div class="carrito-info">
                    <h2>
                        ${producto.nombre}
                    </h2>

                    <p>
                        Precio:
                        $${producto.precio.toLocaleString("es-CL")}
                    </p>

                    <div class="cantidad">
                        <button
                            onclick="disminuirCantidad('${producto.codigo}')"
                        >
                            -
                        </button>

                        <span>
                            ${item.cantidad}
                        </span>

                        <button
                            onclick="aumentarCantidad('${producto.codigo}')"
                        >
                            +
                        </button>
                    </div>
                    <p class="subtotal">
                        Subtotal: $${subtotal.toLocaleString("es-CL")}
                    </p>

                    <button class="btn-eliminar"
                            onclick="eliminarProducto('${producto.codigo}')"
                    >
                        Eliminar
                    </button>
                </div>
            </article>
        `;
    });

    totalCarrito.textContent = `$${total.toLocaleString("es-CL")}`;
}

function aumentarCantidad(codigoProducto) {
    const item = carrito.find(item => item.codigo === codigoProducto);

    const producto = productos.find(producto => producto.codigo === codigoProducto);

    if (item.cantidad < producto.stock) {
        item.cantidad++;
        guardarCarrito();
        mostrarCarrito();
    } else {
        alert("No hay suficiente stock disponible.");
    }

}

function disminuirCantidad(codigoProducto) {
    const item = carrito.find(item => item.codigo === codigoProducto);

    if (item.cantidad > 1) {
        item.cantidad--;
        guardarCarrito();
        mostrarCarrito();
    }
}

function eliminarProducto(codigoProducto) {
    carrito = carrito.filter(item => item.codigo !== codigoProducto);
    guardarCarrito();
    mostrarCarrito();
}

function actualizarContadorCarrito() {

    const contador = document.querySelector("#contador-carrito");

    if (!contador) {
        return;
    }

    const cantidadTotal = carrito.reduce(
        (total, item) => total + item.cantidad,
        0
    );

    contador.textContent = cantidadTotal;
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarContadorCarrito();
}

mostrarCarrito();
actualizarContadorCarrito();

