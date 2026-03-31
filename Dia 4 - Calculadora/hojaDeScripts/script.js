function calcularLitros() {
    var elementoKm = document.getElementById("textokm");
    var textokm = elementoKm.value;
    var cantkm = Number(textokm);

    var cantidadLitros = Math.ceil(cantkm / 11.2);

    var resultado = document.getElementById("textoResultado");
    resultado.textContent = "Carga " + (cantidadLitros) + " litros de combustible para recorrer " + cantkm + " km.";
}