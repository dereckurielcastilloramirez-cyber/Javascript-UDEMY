
let elementoAleatorio = document.getElementById("textoAleatorio");

function numerosAleatorios(minimo, maximo) {
    maximo = maximo +1;
    resultado = Math.floor(Math.random() * (maximo - minimo)) + minimo;
    elementoAleatorio.textContent = resultado;

}
