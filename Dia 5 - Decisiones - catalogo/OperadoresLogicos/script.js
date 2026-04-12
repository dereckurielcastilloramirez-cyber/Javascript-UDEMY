//Operadores de comparación
// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators#operadores_de_comparación

//Booleanos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean

//Operadores lógicos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators

function calcular() {
    let elementoRespuesta1 = document.getElementById("respuesta1");
    let elementoRespuesta2 = document.getElementById("respuesta2");
    let elementoRespuesta3 = document.getElementById("respuesta3");

    let elementoEdad = document.getElementById("textoEdad");
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;
    let puedeEntrar = edad >= 18 && edad < 30;
    elementoRespuesta2.textContent = puedeEntrar;
    let entradaGratis = edad < 8 || edad >= 65;
    elementoRespuesta3.textContent = entradaGratis;
}