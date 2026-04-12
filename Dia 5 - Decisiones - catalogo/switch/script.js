//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else

function consultarPrecio(){
    let elementoRespuesta = document.getElementById("textoPrecio");
    let elementoFruta = document.getElementById("numeroFruta");
    let fruta = Number(elementoFruta.value);

    switch(fruta){
        case 1:
            elementoRespuesta.textContent = "El precio de la naranja es $10";
            break;
        case 2:
            elementoRespuesta.textContent = "El precio de la manzana es $15";
            break;
        case 3:
            elementoRespuesta.textContent = "El precio de la pera es $12";
            break;
        case 4:
            elementoRespuesta.textContent = "El precio de la uva es $20";
            break;
        case 5:
            elementoRespuesta.textContent = "El precio de la plátano es $25";
            break;
        default:
            elementoRespuesta.textContent = "Fruta no encontrada";
    }   
}