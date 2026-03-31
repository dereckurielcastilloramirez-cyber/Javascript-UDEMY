
let primerNumero = document.getElementById("primerNumero");
let segundoNumero = document.getElementById("segundoNumero");



let resultado = document.getElementById("resultado");

function mostrarResultado(resultadoOperacion) {
    resultado.textContent = resultadoOperacion;
}

//SUMA
function calcularSuma() {
    let resultadoOperacion = Number(primerNumero.value) + Number(segundoNumero.value);
    mostrarResultado(resultadoOperacion);
}
//RESTA
function calcularResta() {
    let resultadoOperacion = Number(primerNumero.value) - Number(segundoNumero.value);
    mostrarResultado(resultadoOperacion);
}

//POW de Math devuelve la potencia de un numero
//Math.pow(2, 3) devuelve 8
function calcularMultiplicacion() {
    let resultadoOperacion = Number(primerNumero.value) * Number(segundoNumero.value);
    mostrarResultado(resultadoOperacion);
}

function calcularDivision() {
    let resultadoOperacion = Number(primerNumero.value) / Number(segundoNumero.value);
    mostrarResultado(resultadoOperacion);
}

//POW de Math devuelve la potencia de un numero
//Math.pow(2, 3) devuelve 8
function calcularPotencia() {
    let resultadoOperacion = Math.pow(Number(primerNumero.value), Number(segundoNumero.value));
    mostrarResultado(resultadoOperacion);
}

//SQRT de Math devuelve la raiz cuadrada de un numero
//Math.sqrt(9) devuelve 3
function calcularRaizCuadrada() {
    let resultadoOperacion = Math.sqrt(Number(segundoNumero.value));
    mostrarResultado(resultadoOperacion);
}

//ABS de Math devuelve el valor absoluto de un numero
//Math.abs(-5) devuelve 5
function calcularValorAbsoluto() {
    let resultadoOperacion = Math.abs(Number(segundoNumero.value));
    mostrarResultado(resultadoOperacion);
}

function calcularRandom() {
    let resultadoOperacion = Math.floor(Math.random() * ((Number(segundoNumero.value) + 1) - Number(primerNumero.value))) + Number(primerNumero.value);
    mostrarResultado(resultadoOperacion);;

}


//ROUND de Math redondea un numero al entero mas cercano
//Math.round(3.7) devuelve 4
function calcularRound() {
    let resultadoRedondeo = Math.round(Number(resultado.textContent));
    mostrarResultado(resultadoRedondeo);
}

//CEIL de Math redondea un numero hacia arriba al entero mas cercano
//Math.ceil(3.2) devuelve 4
function calcularCeil() {
    let resultadoCeil = Math.ceil(Number(resultado.textContent));
    mostrarResultado(resultadoCeil);
}

//FLOOR de Math redondea un numero hacia abajo al entero mas cercano
//Math.floor(3.8) devuelve 3
function calcularFloor() {
    let resultadoFloor = Math.floor(Number(resultado.textContent));
    mostrarResultado(resultadoFloor);
}

function limpiar() {
    primerNumero.value = "";
    segundoNumero.value = "";
    resultado.textContent = "";
}
//PROPIEDAD PI de Math devuelve el valor de pi
//Math.PI devuelve 3.141592653589793

//PROPIEDAD EULER de Math devuelve el valor de la constante de Euler
//Math.E devuelve 2.718281828459045
