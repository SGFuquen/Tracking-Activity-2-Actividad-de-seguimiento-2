let codigo = prompt("Ingrese su codigo");

let letra = codigo.charAt(0);

if (letra === "O") {
    console.log("Zona Oriental");
}

if (letra === "T") {
    console.log("Zona Occidental");
}

if (letra === "C") {
    console.log("Zona Sur");
}

if (letra === "S") {
    console.log("Zona Norte");
}

if (letra !== "O" && letra !== "T" && letra !== "C" && letra !== "S") {
    console.log("Codigo invalido");
}