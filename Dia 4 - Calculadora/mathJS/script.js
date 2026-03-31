//POW de Math devuelve la potencia de un numero
//Math.pow(2, 3) devuelve 8
function potenciar(base, exponente) {
    return Math.pow(base, exponente);
}

function calcularPotencia() {
    var elementoBase = document.getElementById("basePotencia");
    var elementoExponente = document.getElementById("exponentePotencia");
    var base = Number(elementoBase.value);
    var exponente = Number(elementoExponente.value);

    var resultado = document.getElementById("resultadoPotencia");
    resultado.textContent = potenciar(base, exponente);
}

//SQRT de Math devuelve la raiz cuadrada de un numero
//Math.sqrt(9) devuelve 3
function raizCuadrada(numero) {
    return Math.sqrt(numero);
}

function calcularRaizCuadrada() {
    var elementoNumero = document.getElementById("numeroRaiz");
    var numero = Number(elementoNumero.value);

    var resultado = document.getElementById("resultadoRaiz");
    resultado.textContent = raizCuadrada(numero);
}

//ABS de Math devuelve el valor absoluto de un numero
//Math.abs(-5) devuelve 5
function valorAbsoluto(numero) {
    return Math.abs(numero);
}

function calcularValorAbsoluto() {
    var elementoNumero = document.getElementById("numeroAbsoluto");
    var numero = Number(elementoNumero.value);

    var resultado = document.getElementById("resultadoAbsoluto");
    resultado.textContent = valorAbsoluto(numero);
}

//ROUND de Math redondea un numero al entero mas cercano
//Math.round(3.7) devuelve 4
function redondear(numero) {
    return Math.round(numero);
}

function calcularRedondeo() {
    var elementoNumero = document.getElementById("numeroRedondeo");
    var numero = Number(elementoNumero.value);

    var resultado = document.getElementById("resultadoRedondeo");
    resultado.textContent = redondear(numero);
}

//CEIL de Math redondea un numero hacia arriba al entero mas cercano
//Math.ceil(3.2) devuelve 4
function redondearHaciaArriba(numero) {
    return Math.ceil(numero);
}

function calcularRedondeoArriba() {
    var elementoNumero = document.getElementById("numeroArriba");
    var numero = Number(elementoNumero.value);

    var resultado = document.getElementById("resultadoArriba");
    resultado.textContent = redondearHaciaArriba(numero);
}

//FLOOR de Math redondea un numero hacia abajo al entero mas cercano
//Math.floor(3.8) devuelve 3
function redondearHaciaAbajo(numero) {
    return Math.floor(numero);
}

function calcularRedondeoAbajo() {
    var elementoNumero = document.getElementById("numeroAbajo");
    var numero = Number(elementoNumero.value);

    var resultado = document.getElementById("resultadoAbajo");
    resultado.textContent = redondearHaciaAbajo(numero);
}

function calcularCircunferencia(diametro) {
    return Math.PI * diametro;
}

function mostrarCircunferencia() {
    var elementoDiametro = document.getElementById("diametroCircunferencia");
    var diametro = Number(elementoDiametro.value);

    var resultado = document.getElementById("resultadoCircunferencia");
    resultado.textContent = calcularCircunferencia(diametro);
}

//PROPIEDAD PI de Math devuelve el valor de pi
//Math.PI devuelve 3.141592653589793

//PROPIEDAD EULER de Math devuelve el valor de la constante de Euler
//Math.E devuelve 2.718281828459045
