let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#empty-cart");
const contenedorCarritoProductos = document.querySelector("#cart-products");
const contenedorCarritoAcciones = document.querySelector("#cart-actions");
const contenedorCarritoComprado = document.querySelector("#bought-cart");
let botonesEliminar = document.querySelectorAll(".cart-product-delete");
const botonVaciar = document.querySelector("#cart-actions-empty");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#cart-actions-buy");

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        //ocultamos el texto "tu carrito esta vacio"
        contenedorCarritoVacio.classList.add("disabled");
        //mostramos productos en carrito
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        //vaciamos el contenido del carrito
        contenedorCarritoProductos.innerHTML = "";
        //creamos los contenedores a mostrar en el html
        productosEnCarrito.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("cart-product");
            div.innerHTML = `
        <img class="cart-product-img" src="${producto.imagen}" alt="${producto.titulo}" />
            <div class="cart-product-title">
                <small>titulo</small>
                <h3>${producto.titulo}</h3>
            </div>
            <div class="cart-product-quantity">
                <small>cantidad</small>
                <p>${producto.cantidad}</p>
            </div>
            <div class="cart-product-price">
                <small>precio</small>
                <p>${producto.precio}</p>
            </div>
            <div class="cart-product-subtotal">
                <small>subtotal</small>
                <p>${producto.precio * producto.cantidad}</p>
            </div>
            <button id="${producto.id}" class="cart-product-delete"><i class="bi bi-trash3-fill"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();
};

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".cart-product-delete");

    botonesEliminar.forEach((boton) => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    // eliminamos productos del html
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
};

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
};

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}