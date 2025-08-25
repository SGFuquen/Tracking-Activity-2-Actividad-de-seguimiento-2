let revista = prompt("Revista: Dinero, National Geographic o American Journal");
let tiempo = prompt("Tiempo: 3 meses, 6 meses o 1 año");
let operador = prompt("Operador celular");

let precio = 0;

if (revista === "Dinero" && tiempo === "3 meses") precio = 6;
if (revista === "Dinero" && tiempo === "6 meses") precio = 11;
if (revista === "Dinero" && tiempo === "1 año") precio = 15;

if (revista === "National Geographic" && tiempo === "3 meses") precio = 10;
if (revista === "National Geographic" && tiempo === "6 meses") precio = 13;
if (revista === "National Geographic" && tiempo === "1 año") precio = 22;

if (revista === "American Journal" && tiempo === "3 meses") precio = 12;
if (revista === "American Journal" && tiempo === "6 meses") precio = 18;
if (revista === "American Journal" && tiempo === "1 año") precio = 30;

if (operador === "Claro") {
    precio = precio * 0.95;
}

console.log("Total a pagar: $" + precio + " USD");