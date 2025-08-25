let horasPequenas = parseInt(prompt("Ingrese las horas de lavadoras pequeñas"));
let horasGrandes = parseInt(prompt("Ingrese las horas de lavadoras grandes"));

let precioPequena = 3000;
let precioGrande = 4000;

let totalHoras = horasPequenas + horasGrandes;

let costoTotal = (horasPequenas * precioPequena) + (horasGrandes * precioGrande);

if (totalHoras > 10) {
    costoTotal = costoTotal * 0.97; // Aplica 3% de descuento
}

console.log("El costo total del alquiler es: $" + costoTotal);
