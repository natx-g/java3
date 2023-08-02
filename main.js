// function suma(num1, num2) {
//   return num1 + num2;
// }

// function resta(num1, num2) {
//   return num1 - num2;
// }

// function multiplicacion(num1, num2) {
//   return num1 * num2;
// }

// function division(num1, num2) {
//   return num1 / num2;
// }

// let num1 = Number(prompt("Ingresa el primer número:"));
// let num2 = Number(prompt("Ingresa el segundo número:"));
// let operacion = prompt("Ingresa la operación que deseas realizar (+, -, *, /):");
// let resultado;

// switch (operacion) {
//   case "+":
//     resultado = suma(num1, num2);
//     break;
//   case "-":
//     resultado = resta(num1, num2);
//     break;
//   case "*":
//     resultado = multiplicacion(num1, num2);
//     break;
//   case "/":
//     resultado = division(num1, num2);
//     break;
//   default:
//     console.error("Operación no válida.");
//     break;
// }

// if (typeof resultado !== "undefined") {
//   console.log(`El resultado de la operación es: ${resultado}`);
// }



// function mostrarCatalogo() {
//   console.log(`Catálogo de destinos:
// 1) CDMX 
// 2) Chiapas 
// 3) Monterrey 
// 4) Sonora 
// 5) Guatemala `);
// }

// function agenciaDeViajes() {
//   const precios = [400, 1500, 900, 800, 2500];

//   while (true) {
//     mostrarCatalogo();
//     const opcion = prompt("Ingrese el número del destino al que quiere ir: 1) CDMX 2) Chiapas 3) Monterrey 4) Sonora 5) Guatemala ");

//     if (opcion >= 1 && opcion <= 5) {
//       const destinos = [
//         "CDMX",
//         "Chiapas",
//         "Monterrey",
//         "Sonora",
//         "Guatemala"
//       ];
//       const destinoSeleccionado = destinos[opcion - 1];
//       const precioDestino = precios[opcion - 1];

//       console.log(`${destinoSeleccionado}: $${precioDestino}`);
//     } else {
//       console.error("Lo sentimos, esa opción no la comprendemos.");
//     }

//     const respuesta = prompt("¿Desea revisar otro destino? (Sí/No)");
//     if (respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "si") {
//       break;
//     }
//   }

//   console.log("Gracias por usar nuestro servicio.");
// }


// agenciaDeViajes();

// SEGUNDA PARTE -----------------


// function mostrarCatalogo() {
//   console.log(`Catálogo de destinos:
// 1) CDMX 
// 2) Chiapas 
// 3) Monterrey 
// 4) Sonora 
// 5) Guatemala `);
// }

// function obtenerOpcionDestino() {
//   return parseInt(prompt("Ingrese el número del destino al que quiere ir: 1) CDMX  2) Chiapas 3) Monterrey 4) Sonora 5) Guatemala"));
// }

// function obtenerCupon() {
//   const cupon = prompt("Ingrese el cupón (A, B, C o D):");
//   return cupon ? cupon.toUpperCase() : null;
// }

// function agenciaDeViajes() {
//   const precios = [400, 1500, 900, 800, 2500];
//   const cupones = { A: 0.45, B: 0.35, C: 0.25, D: 0.10 };

//   while (true) {
//     mostrarCatalogo();
//     const opcion = obtenerOpcionDestino();

//     if (opcion >= 1 && opcion <= 5) {
//       const destinos = [
//         "CDMX",
//         "Chiapas",
//         "Monterrey",
//         "Sonora",
//         "Guatemala"
//       ];
//       const destinoSeleccionado = destinos[opcion - 1];
//       const precioDestino = precios[opcion - 1];

//       const cupon = obtenerCupon();
//       if (cupon && cupon in cupones) {
//         const precioFinal = precioDestino * (1 - cupones[cupon]);

//         console.log(`Destino: ${destinoSeleccionado}`);
//         console.log(`Precio Original: $${precioDestino}`);
//         console.log(`Descuento: ${cupones[cupon] * 100}%`);
//         console.log(`Precio Final: $${precioFinal}`);
//       } else {
//         console.log(`${destinoSeleccionado}: $${precioDestino}`);
//       }
//     } else {
//       console.error("Lo sentimos, esa opción no la comprendemos.");
//     }

//     const respuesta = prompt("¿Desea revisar otro destino? (S/N)");
//     if (respuesta.toLowerCase() !== "s" && respuesta.toLowerCase() !== "s") {
//       break;
//     }
//   }

//   console.log("Gracias por usar nuestro servicio.");
// }


// agenciaDeViajes();


// TERCERA PARTE------

function mostrarCatalogo() {
  console.log(`Catálogo de destinos:
1) CDMX 
2) Chiapas 
3) Monterrey 
4) Sonora 
5) Guatemala `);
}

function obtenerOpcionDestino() {
  return +prompt("Ingrese el número del destino al que quiere ir: 1) CDMX  2) Chiapas 3) Monterrey 4) Sonora 5) Guatemala");
}

function obtenerCupon() {
  return prompt("Ingrese el cupón (A, B, C o D):").toLowerCase();
}

function aplicarDescuento(precio, descuento) {
  return precio - (precio * descuento);
}

function procesarPago(precioFinal) {
  const pago = parseFloat(prompt("Ingrese con cuánto desea pagar:"));

  if (pago < precioFinal) {
    return "No logramos procesar su pago, intente más tarde.";
  } else if (pago === precioFinal) {
    return "Muchas gracias por su compra, su boleto lo recibirá en ventanilla.";
  } else {
    const cambio = pago - precioFinal;
    return `Muchas gracias por su compra, recibirá en ventanilla la cantidad de $${cambio.toFixed(2)} y su boleto.`;
  }
}

function agenciaDeViajes() {
  const precios = [400, 1500, 900, 800, 2500];
  const cupones = { a: 0.45, b: 0.35, c: 0.25, d: 0.10 };

  while (true) {
    mostrarCatalogo();
    const opcion = obtenerOpcionDestino();

    if (opcion >= 1 && opcion <= 5) {
      const destinos = ["CDMX", "Chiapas", "Monterrey", "Sonora", "Guatemala"];
      const destinoSeleccionado = destinos[opcion - 1];
      const precioDestino = precios[opcion - 1];

      const cupon = obtenerCupon();
      let precioFinal = precioDestino;
      if (cupon in cupones) {
        precioFinal = aplicarDescuento(precioDestino, cupones[cupon]);
        console.log(`Destino: ${destinoSeleccionado}\nPrecio Original: $${precioDestino}\nDescuento: ${cupones[cupon] * 100}%\nPrecio Final: $${precioFinal}`);
      } else {
        console.log(`${destinoSeleccionado}: $${precioDestino}`);
      }

      const respuesta = prompt("¿Desea comprar su boleto? (s/n)");
      if (respuesta.toLowerCase() === "s" || respuesta.toLowerCase() === "s") {
        console.log(procesarPago(precioFinal));
      }
    } else {
      console.error("Lo sentimos, esa opción no la comprendemos.");
    }

    const respuestaOtroDestino = prompt("¿Desea revisar otro destino? (s/n)");
    if (respuestaOtroDestino.toLowerCase() !== "s" && respuestaOtroDestino.toLowerCase() !== "s") {
      break;
    }
  }

  console.log("Gracias por usar nuestro servicio.");
}

agenciaDeViajes();
