function ingresoEdad() {
    let ingreso = false;
    let edadUsuario = prompt("Ingresa tu edad");
    if (edadUsuario >= "18") {
        alert("Bienvenido a All Music");
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
        "Elegi entre nuestra seleccion de records: \n1. Clics Modernos, Charly Garcia. \n2. Artaud, Spinetta. \n3. Honestidad brutal, Andres Calamaro. \n0. Para ver tu carrito de compras \nX. para salir. "
    );

    while (opciones != "X" && opciones != "x") {
        switch (opciones) {
            case "0":
                alert(`El monto total en tu carrito es de $ ${carrito}`);
                break;
            case "1":
                let garcia = 6000;
                let decision1 = prompt(`El precio de este record es de $ ${garcia}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`);
                if (decision1 == "1") {
                    carrito = carrito + garcia;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "2":
                let spinetta = 5500;
                let decision2 = prompt(`El precio de este record es de $ ${spinetta}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`);
                if (decision2 == "1") {
                    carrito = carrito + spinetta;
                    alert(`El monto total en tu carrito es de $ ${carrito}`);
                } else {
                    alert("Sera redirigido a la pagina anterior.");
                }
                break;
            case "3":
                let calamaro = 5300;
                let decision3 = prompt(`El precio de este record es de $ ${calamaro}, ¿Queres añadirlo a tu carrito? \n1. Si \n2. No`);
                if (decision3 == "1") {
                    carrito = carrito + calamaro;
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
            "Elegi entre nuestra seleccion de records y añadilos a tu carrito: \n1. Clics Modernos, Charly Garcia. \n2. Artaud, Spinetta. \n3. Honestidad brutal, Andres Calamaro. \n0. Para ver tu carrito de compras \n.X para salir. "
        );
    }
}
alert("Gracias por visitar nuestra pagina.");
