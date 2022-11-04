// ARRAY CON OBJETOS
const vinilos = [
    { id: 1, nombre: "Clics Modernos", precio: 8700, autor: "Charly Garcia" },
    { id: 2, nombre: "Artaud", precio: 7500, autor: "Luis Alberto Spinetta" },
    { id: 3, nombre: "Honestidad Brutal", precio: 4000, autor: "Andres Calamaro" },
];

// FUNCION CONSTRUCTORA DE OBJETO
function Vinilo(id, nombre, precio, autor) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.autor = autor;
}

const nuevoVinilo = new Vinilo(4, "El amor despues del amor", 6500, "Fito Paez");

// FUNCTION PARA CARGAR OBJETOS AL ARRAY
function cargarVinilos(arr, valor) {
    arr.push(valor);
}

cargarVinilos(vinilos, nuevoVinilo);

console.log(vinilos);

//FUNCTION PARA ENCONTRAR VINILOS

function encontrarVinilo(arr, filtro) {
    const encontrado = arr.find((vinilo) => {
        return vinilo.nombre.includes(filtro);
    });
    return encontrado;
}

const viniloEncontrado = encontrarVinilo(vinilos, "Modernos");

console.log(viniloEncontrado);

//FUNCTION PARA VALIDAR EDAD

function ingresoEdad() {
    let ingreso = false;
    let edadUsuario = prompt("Ingresa tu edad");
    if (edadUsuario >= "18") {
        alert("¡Bienvenido a Vinyl Mania!");
        ingreso = true;
    } else {
        alert("No tienes la edad suficiente para ingresar");
    }
    return ingreso;
}

let edadPermitida = ingresoEdad();

if (edadPermitida) {
    let carrito = 0;

    let opciones = prompt(
        `Elegi entre nuestra seleccion de records: \n1. ${vinilos[0].nombre}, ${vinilos[0].autor}. \n2. ${vinilos[1].nombre}, ${vinilos[1].autor}. \n3. ${vinilos[2].nombre}, ${vinilos[2].autor}. \n0. Para ver tu carrito de compras \nF. para finalizar tu compra \nX. para salir.`
    ).toUpperCase();

    while (opciones != "X" && opciones != "F") {
        switch (opciones) {
            case "0":
                alert(`El monto total en tu carrito es de $ ${carrito}`);
                break;
            case "1":
                let decision1 = prompt(
                    `El precio de este record es de $ ${vinilos[0].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision1 == "1") {
                    carrito = carrito + vinilos[0].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "2":
                let decision2 = prompt(
                    `El precio de este record es de $ ${vinilos[1].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision2 == "1") {
                    carrito = carrito + vinilos[1].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "3":
                let decision3 = prompt(
                    `El precio de este record es de $ ${vinilos[2].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision3 == "1") {
                    carrito = carrito + vinilos[2].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;

            default:
                alert("Ingrese una opcion valida.");
                break;
        }
        opciones = prompt(
            `Elegi entre nuestra seleccion de records: \n1. ${vinilos[0].nombre}, ${vinilos[0].autor}. \n2. ${vinilos[1].nombre}, ${vinilos[1].autor}. \n3. ${vinilos[2].nombre}, ${vinilos[2].autor}. \n0. Para ver tu carrito de compras \nF. para finalizar tu compra \nX. para salir.`
        ).toUpperCase();
    }
}
alert("Gracias por visitar nuestra pagina.");
