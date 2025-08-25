let operador = prompt("Operador: Claro, Tigo o Movistar");
let tipo = prompt("¿Recarga o paquete?");

if (tipo === "recarga") {
    let monto = prompt("Monto:");
    console.log("Recarga hecha por $" + monto);
}

if (tipo === "paquete") {
    if (operador === "Claro") {
        let paquete = prompt("Paquete: CV o CA");
        if (paquete === "CV") console.log("Paquete CV activado. $12000");
        if (paquete === "CA") console.log("Paquete CA activado. $20000");
    }

    if (operador === "Tigo") {
        let paquete = prompt("Paquete: TV o TA");
        if (paquete === "TV") console.log("Paquete TV activado. $22000");
        if (paquete === "TA") console.log("Paquete TA activado. $30000");
    }

    if (operador === "Movistar") {
        console.log("Paquetes suspendidos.");
    }
}