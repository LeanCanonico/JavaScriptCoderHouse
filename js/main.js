// variable que contendra el array de productos
let productos;
// funcion para cargar el array desde json
async function fetchAPI() {
    const response = await fetch("../data/productos.json");
    const datos = await response.json();

    cargarProductos(datos);
    productos = datos;
}

fetchAPI();
// VARIABLES PARA TRABAJAR EL DOM

const contenedorProductos = document.querySelector("#products-container");
const botonesCategorias = document.querySelectorAll(".button-category");
const tituloPrincipal = document.querySelector("#main-title");
let botonesAgregar = document.querySelectorAll(".add-product");
const numerito = document.querySelector("#number");

// FUNCION PARA CARGAR PRODUCTOS AL HTML

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach((producto) => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-img" src="${producto.imagen}" alt="${producto.titulo}" />
        <div class="product-details">
            <h3 class="product-title">${producto.titulo}</h3>
            <p class="product-price">$${producto.precio}</p>
            <button class="add-product" id="${producto.id}">agregar</button>
        </div>
    `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

// LLAMAMOS A LA FUNCION PARA MOSTRAR LOS PRODUCTOS EN EL HTML

// cargarProductos(productos);

// FUNCION PARA USO DE BOTONES

botonesCategorias.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach((boton) => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "all") {
            const productoCategoria = productos.find((producto) => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosClickeados = productos.filter((producto) => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosClickeados);
        } else {
            tituloPrincipal.innerText = "todos los productos";
            cargarProductos(productos);
        }
    });
});

// FUNCION PARA ACTUALIZAR LOS BOTONES DE AGREGAR

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".add-product");

    botonesAgregar.forEach((boton) => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

// ARRAY DE CARRITO

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

// FUNCION PARA AGREGAR PRODUCTOS AL CARRITO

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find((producto) => producto.id === idBoton);

    if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    // GUARDAMOS EN LOCAL STORAGE USANDO JSON

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
