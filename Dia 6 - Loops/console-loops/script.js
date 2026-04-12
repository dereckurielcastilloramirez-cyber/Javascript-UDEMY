// https://developer.mozilla.org/es/docs/Web/API/console
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while

function multiplicar() {
    let elementoTextoTabla = document.getElementById("textoTabla");
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);
    let i = 0;
    let elementoTablaMultiplicar = document.getElementById("listaTabla");
    let elementoDoWhile = document.getElementById("listaDoWhile");
    let elementoWhile = document.getElementById("listaWhile");
    let elementoForOf = document.getElementById("listaForOf");

    elementoTablaMultiplicar.innerHTML = "";
    elementoDoWhile.innerHTML = "";
    elementoWhile.innerHTML = "";
    elementoForOf.innerHTML = "";

    // loop for

    for (let x = 1; x <= 10; x++) {
        let numeroResultado = numeroTabla * x;
        let textoResultado = numeroTabla + " x " + x + " = " + numeroResultado;

        let itemLista = document.createElement("li");
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }

    // loop do while

    do {
        i++;
        let itemLista = document.createElement("li");
        let textoDoWhile = "El numero es: " + i;
        itemLista.textContent = textoDoWhile;
        elementoDoWhile.appendChild(itemLista);

        if (i > 9) {
            let itemLista = document.createElement("li");
            itemLista.textContent = "Break: se encontro " + i + " y el ciclo termino.";
            elementoDoWhile.appendChild(itemLista);
            break;
        }


    } while (i < numeroTabla);

    // loop while

    let contador = 0;

    while (contador <= numeroTabla) {
        if (contador === 0) {
            let itemLista = document.createElement("li");
            itemLista.textContent = "Continue: se salto el 0.";
            elementoWhile.appendChild(itemLista);
            contador++;
            continue;
        }

        if (contador > 10) {
            let itemLista = document.createElement("li");
            itemLista.textContent = "Break: el ciclo se detuvo porque el numero es mayor a 10.";
            elementoWhile.appendChild(itemLista);
            break;
        }

        let itemLista = document.createElement("li");
        itemLista.textContent = "Vuelta " + contador;
        elementoWhile.appendChild(itemLista);
        contador++;
    }

    // loop for of

    let miArray = [0, 5, 9, numeroTabla, 12, 4, 8];
    let suma = 0;

    for (let numero of miArray) {
        if (numero === 0) {
            let itemLista = document.createElement("li");
            itemLista.textContent = "Continue: el valor 0 se salto.";
            elementoForOf.appendChild(itemLista);
            continue;
        }

        if (numero > 10) {
            let itemLista = document.createElement("li");
            itemLista.textContent = "Break: se encontro " + numero + " y el ciclo termino.";
            elementoForOf.appendChild(itemLista);
            break;
        }

        suma = suma + numero;

        let itemLista = document.createElement("li");
        itemLista.textContent = "Numero: " + numero + " | Suma acumulada: " + suma;
        elementoForOf.appendChild(itemLista);
    }

    let itemListaFinal = document.createElement("li");
    itemListaFinal.textContent = "Suma final recorrida: " + suma;
    elementoForOf.appendChild(itemListaFinal);
}
