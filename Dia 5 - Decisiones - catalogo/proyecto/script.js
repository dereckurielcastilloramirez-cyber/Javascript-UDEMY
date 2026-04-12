// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

function recomendar(genero) {
    let elementoRespuesta = document.getElementById("peliculaRecomendada");
    let edadIngresada = document.getElementById("edadCliente").value;
    let edad = Number(edadIngresada);

    if (edadIngresada === "" || edad < 1 || edad > 100) {
        elementoRespuesta.textContent = "Ingresa una edad valida para recibir una recomendacion.";
        return;
    }

    switch (genero) {
        case "Drama":
            if (edad < 13) {
                elementoRespuesta.textContent = "Te recomendamos 'La vita es bella'";
            } else if (edad < 16) {
                elementoRespuesta.textContent = "Te recomendamos 'El nino con el pijama de rayas'";
            } else {
                elementoRespuesta.textContent = "Te recomendamos 'El irlandes'";
            }
            break;
        case "Comedia":
            if (edad < 13) {
                elementoRespuesta.textContent = "Te recomendamos 'Son como ninos'";
            } else if (edad < 16) {
                elementoRespuesta.textContent = "Te recomendamos 'El joven de la ciudad'";
            } else {
                elementoRespuesta.textContent = "Te recomendamos 'Que paso ayer'";
            }
            break;
        case "Accion":
            if (edad < 13) {
                elementoRespuesta.textContent = "Te recomendamos 'Rapidos y furiosos'";
            } else if (edad < 16) {
                elementoRespuesta.textContent = "Te recomendamos 'Busqueda implacable'";
            } else {
                elementoRespuesta.textContent = "Te recomendamos 'El justiciero'";
            }
            break;
        default:
            elementoRespuesta.textContent = "Genero no encontrado";
    }
}
