// ARRAY PRODUCTOS
const productos = [
    // vinilos
    {
        id: "vinilo-01",
        titulo: "clics modernos",
        imagen: "./assets/img/vinilos/clicsModernos.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 8700,
    },
    {
        id: "vinilo-02",
        titulo: "artaud",
        imagen: "./assets/img/vinilos/artaud.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 7700,
    },
    {
        id: "vinilo-03",
        titulo: "el amor despues del amor",
        imagen: "./assets/img/vinilos/elAmor.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 6900,
    },
    {
        id: "vinilo-04",
        titulo: "honestidad brutal",
        imagen: "./assets/img/vinilos/honestidadBrutal.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 7100,
    },
    {
        id: "vinilo-05",
        titulo: "lobo suelto",
        imagen: "./assets/img/vinilos/redondos.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 6500,
    },
    {
        id: "vinilo-06",
        titulo: "after chabon",
        imagen: "./assets/img/vinilos/sumo.jpg",
        categoria: {
            nombre: "Vinilos",
            id: "vinilos",
        },
        precio: 6700,
    },
    // cds
    {
        id: "cds-01",
        titulo: "the beatles",
        imagen: "./assets/img/cds/beatles.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 5000,
    },
    {
        id: "cds-02",
        titulo: "ziggy stardust",
        imagen: "./assets/img/cds/bowie.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 4500,
    },
    {
        id: "cds-03",
        titulo: "animals",
        imagen: "./assets/img/cds/pinkFloyd.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 3700,
    },
    {
        id: "cds-04",
        titulo: "love you live",
        imagen: "./assets/img/cds/rolling.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 2700,
    },
    {
        id: "cds-05",
        titulo: "seru giran",
        imagen: "./assets/img/cds/seruGiran.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 4700,
    },
    {
        id: "cds-06",
        titulo: "bajo belgrano",
        imagen: "./assets/img/cds/spinettaJade.jpg",
        categoria: {
            nombre: "Cds",
            id: "cds",
        },
        precio: 4650,
    },
    // merchandising
    {
        id: "merchandising-01",
        titulo: "bob dylan",
        imagen: "./assets/img/merchandising/bobDylanTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 5650,
    },
    {
        id: "merchandising-02",
        titulo: "guns n roses",
        imagen: "./assets/img/merchandising/gunsTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 6150,
    },
    {
        id: "merchandising-03",
        titulo: "iron maiden",
        imagen: "./assets/img/merchandising/ironMaidenTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 6650,
    },
    {
        id: "merchandising-04",
        titulo: "pink floyd",
        imagen: "./assets/img/merchandising/pinkFloydTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 7750,
    },
    {
        id: "merchandising-05",
        titulo: "nirvana",
        imagen: "./assets/img/merchandising/nirvanaTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 8650,
    },
    {
        id: "merchandising-06",
        titulo: "rolling stones",
        imagen: "./assets/img/merchandising/rollingTshirt.jpg",
        categoria: {
            nombre: "Merchandising",
            id: "merchandising",
        },
        precio: 7850,
    },
];

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

cargarProductos(productos);

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

async function fetchAPI() {
    const response = await fetch("./data/productos.json");
    const datos = await response.json();

    console.log(datos);
    renderServicios(datos);
}

fetchAPI();