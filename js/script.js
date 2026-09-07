const contenedorProductos = document.querySelector("#contenedor-productos");

function mostrarProductos(listaProductos) {
    contenedorProductos.innerHTML = "";
    listaProductos.forEach(producto => {
        contenedorProductos.innerHTML += `
            <article class="producto-card">

                <img src="${producto.img}" alt="${producto.nombre}" class="productos-img">

                <div class="producto-info">

                    <h2>${producto.nombre}</h2>

                    <p class="producto-categoria">
                        ${producto.categoria}
                    </p>

                    <p>
                        ${producto.descripcion}
                    </p>

                    <p>
                        stock: ${producto.stock} ${producto.unidad}
                    </p>

                    <p class="producto-precio">
                        $${producto.precio.toLocaleString("es-CL")}
                    </p>

                    <button class="btn"
                            onclick="agregarAlCarrito('${producto.codigo}')"
                    >
                        Agregar al carrito
                    </button>
                </div>
            </article>
        `;
    });
}

mostrarProductos(productos);

const botonesFiltro = document.querySelectorAll(".btn-filtro");

botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        const categoriaSeleccionada = boton.dataset.categoria;

        if (categoriaSeleccionada === "todos"){
            mostrarProductos(productos);
        }
        else {
            const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);

            mostrarProductos(productosFiltrados);
        }
    });
});

function agregarAlCarrito(codigoProducto) {
    const productoSeleccionado = productos.find(producto => producto.codigo === codigoProducto);

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const productoEnCarrito = carrito.find(item => item.codigo === codigoProducto);

    if (productoEnCarrito) {

        if (productoEnCarrito.cantidad < productoSeleccionado.stock) {
            productoEnCarrito.cantidad++;
        }
    } else {
        carrito.push({
            codigo: productoSeleccionado.codigo,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert(`Se ha agregado ${productoSeleccionado.nombre} al carrito.`);
}