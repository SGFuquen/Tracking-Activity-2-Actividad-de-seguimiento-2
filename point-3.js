let estado = prompt("El semaforo esta encendido o apagado?");

if (estado === "apagado") {
    console.log("Semaforo apagado");
}

if (estado === "encendido") {
    let color = prompt("Color semaforo");

    if (color === "verde") {
        console.log("Puede avanzar");
    }

    if (color === "amarillo") {
        console.log("Precaucion");
    }

    if (color === "rojo") {
        console.log("Detengase");
    }

    if (color !== "verde" && color !== "amarillo" && color !== "rojo") {
        console.log("Fallo en el dispositivo");
    }

}
