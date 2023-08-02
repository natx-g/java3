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



function mostrarCatalogo() {
  console.log(`Catálogo de destinos:
1) CDMX 
2) Chiapas 
3) Monterrey 
4) Sonora 
5) Guatemala `);
}

function agenciaDeViajes() {
  const precios = [400, 1500, 900, 800, 2500];

  while (true) {
    mostrarCatalogo();
    const opcion = prompt("Ingrese el número del destino al que quiere ir: 1) CDMX 2) Chiapas 3) Monterrey 4) Sonora 5) Guatemala ");

    if (opcion >= 1 && opcion <= 5) {
      const destinos = [
        "CDMX",
        "Chiapas",
        "Monterrey",
        "Sonora",
        "Guatemala"
      ];
      const destinoSeleccionado = destinos[opcion - 1];
      const precioDestino = precios[opcion - 1];

      console.log(`${destinoSeleccionado}: $${precioDestino}`);
    } else {
      console.error("Lo sentimos, esa opción no la comprendemos.");
    }

    const respuesta = prompt("¿Desea revisar otro destino? (Sí/No)");
    if (respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "si") {
      break;
    }
  }

  console.log("Gracias por usar nuestro servicio.");
}


agenciaDeViajes();
