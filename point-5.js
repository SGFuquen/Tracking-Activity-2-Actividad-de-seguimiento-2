let compra = prompt("Ingrese el valor de la compra");
let puntos = 0;

if (compra < 100000) {
    puntos = 100;
}

if (compra >= 100000 && compra <= 500000) {
    puntos = 250;
}

if (compra > 500000) {
    puntos = 500;
}

console.log("Puntos obtenidos: " + puntos);

if (puntos >= 500) {
    console.log("Tiene 20% de descuento en la proxima compra");
}

if (puntos < 500) {
    console.log("Le faltan " + (500 - puntos) + " puntos para el descuento");
}