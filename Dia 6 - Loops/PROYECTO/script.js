let calificaciones = [8, 5, 7, 8, 10];
let materias = ["Matematicas", "Español", "Historia", "Ingles", "Programacion"];

const lista = document.getElementById("listaCalf");
const resultado = document.getElementById("resultado");

function limpiarPantalla() {
    lista.innerHTML = "";
    resultado.textContent = "";
}

// For...of para mostrar la lista
function mostrarLista() {
    limpiarPantalla();
    let i=0;
    for (const calificacion of calificaciones) {

        const li = document.createElement("li");
        li.textContent = "Calificacion: " + calificacion + " en la materia de " + materias[i] + ".";
        lista.appendChild(li);
        i++;
    }
}

// For para calcular el promedio
function calcularPromedio() {
    limpiarPantalla();

    let suma = 0;

    for (let i = 0; i < calificaciones.length; i++) {
        suma += calificaciones[i];
    }

    const promedio = suma / calificaciones.length;
    resultado.textContent = "El promedio general es: " + promedio.toFixed(1);
}

// While para buscar la nota mas alta
function notaMasAlta() {
    limpiarPantalla();
    
    let posicion = 0;
    let notaAlta = 0;

    while (posicion < calificaciones.length) {
        if (calificaciones[posicion] > notaAlta) {
            notaAlta = calificaciones[posicion];
        }
        
        posicion++;
    }
    
    resultado.textContent = "La nota mas alta es: " + notaAlta + " en la materia de " + materias[posicion-1] + ".";
}

// Do...while para verificar si existe un aplazo
function mostrarAplazos() {
    limpiarPantalla();

    let posicion = 0;
    let hayAplazo = false;

    do {
        if (calificaciones[posicion] < 6) {
            hayAplazo = true;
            break;
        }

        posicion++;
    } while (posicion < calificaciones.length);

    if (hayAplazo) {
        resultado.textContent = "El aplazo es de "+ calificaciones[posicion] + " en la materia de " + materias[posicion] + ".";
    } else {
        resultado.textContent = "No hay aplazos en las calificaciones.";
    }
}
