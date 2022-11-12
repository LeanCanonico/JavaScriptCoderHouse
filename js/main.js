// FUNCION CONSTRUCTORA DE OBJETO
class Vinilos {
    constructor(id, nombre, precio, autor, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.autor = autor;
        this.img = img;
    }
}

const vinilo1 = new Vinilos(1, "Clics Modernos", 8700, "Charly Garcia", "clicsModernos.jpg");
const vinilo2 = new Vinilos(2, "Artaud", 7500, "Luis Alberto Spinetta", "artaud.jpg");
const vinilo3 = new Vinilos(3, "Honestidad Brutal", 5500, "Andres Calamaro", "honestidadBrutal.jpg");
const vinilo4 = new Vinilos(4, "El amor despues del amor", 6500, "Fito Paez", "elAmor.jpg");

const cartVinilos = [];

// CARGAR OBJETOS AL ARRAY

cartVinilos.push(vinilo1, vinilo2, vinilo3, vinilo4);

console.log(cartVinilos);

//FUNCTION PARA ENCONTRAR VINILOS

function encontrarVinilo(arr, filtro) {
    const encontrado = arr.find((vinilo) => {
        return vinilo.nombre.includes(filtro);
    });
    return encontrado;
}

const viniloEncontrado = encontrarVinilo(cartVinilos, "Modernos");

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

// CONDICIONAL, ENTRADA A LA TIENDA

if (edadPermitida) {
    let carrito = 0;

    let opciones = prompt(
        `Elegi entre nuestra seleccion de records: \n1. ${cartVinilos[0].nombre}, ${cartVinilos[0].autor}. \n2. ${cartVinilos[1].nombre}, ${cartVinilos[1].autor}. \n3. ${cartVinilos[2].nombre}, ${cartVinilos[2].autor}. \n4. ${cartVinilos[3].nombre}, ${cartVinilos[3].autor} \n0. Para ver tu carrito de compras \nF. para finalizar tu compra \nX. para salir.`
    ).toUpperCase();

    while (opciones != "X" && opciones != "F") {
        switch (opciones) {
            case "0":
                alert(`El monto total en tu carrito es de $ ${carrito}`);
                break;
            case "1":
                let decision1 = prompt(
                    `El precio de este record es de $ ${cartVinilos[0].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision1 == "1") {
                    carrito = carrito + cartVinilos[0].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "2":
                let decision2 = prompt(
                    `El precio de este record es de $ ${cartVinilos[1].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision2 == "1") {
                    carrito = carrito + cartVinilos[1].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "3":
                let decision3 = prompt(
                    `El precio de este record es de $ ${cartVinilos[2].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision3 == "1") {
                    carrito = carrito + cartVinilos[2].precio;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "4":
                let decision4 = prompt(
                    `El precio de este record es de $ ${cartVinilos[3].precio}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`
                );
                if (decision4 == "1") {
                    carrito = carrito + cartVinilos[3].precio;
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
            `Elegi entre nuestra seleccion de records: \n1. ${cartVinilos[0].nombre}, ${cartVinilos[0].autor}. \n2. ${cartVinilos[1].nombre}, ${cartVinilos[1].autor}. \n3. ${cartVinilos[2].nombre}, ${cartVinilos[2].autor}. \n4. ${cartVinilos[3].nombre}, ${cartVinilos[3].autor} \n0. Para ver tu carrito de compras \nF. para finalizar tu compra \nX. para salir.`
        ).toUpperCase();
    }
}
alert("Gracias por visitar nuestra pagina.");
