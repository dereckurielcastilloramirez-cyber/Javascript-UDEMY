// https://developer.mozilla.org/es/docs/Glossary/JSON
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
let titulo;
let director;
let lanzamiento;
let duracion;
let actores;
let premioOscar;



function obtenerDatos() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "datos.json", true);
    xhr.responseType = "json";

    xhr.onload = function() {
        if (xhr.status === 200) {
            let datos = xhr.response;
            titulo = datos.titulo;
            director = datos.director;
            lanzamiento = datos.lanzamiento;
            duracion = datos.duracion;
            actores = datos.actores;
            premioOscar = datos.premioOscar;

            let elemento1 = document.getElementById('jsonExtraer')
            elemento1.textContent = titulo;
        
        } else {
            alert("Error al obtener los datos");
        }
    };
    xhr.send();
}

let nombre;
let calle;
let ciudad;
let cantEstudiantes;
let carrera1,carrera2, carrera3, carrera4, carrera5;

function obtenerDatos2() {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "colegio.json", true);
    xhr.responseType = "json";

    xhr.onload = function() {
        if (xhr.status === 200) {
            let datos = xhr.response;
            nombre = datos.nombre;
            calle = datos.calle;
            ciudad = datos.ciudad;
            cantEstudiantes = datos.cantEstudiantes;
            carrera1 = datos.carreras.carrera1;
            carrera2 = datos.carreras.carrera2;
            carrera3 = datos.carreras.carrera3;
            carrera4 = datos.carreras.carrera4;
            carrera5 = datos.carreras.carrera5;
            carrera6 = datos.carreras.carrera6;

            let elemento2 = document.getElementById('jsonExtraer2')
            elemento2.textContent = nombre;
        } else {
            alert("Error al obtener los datos");
        }
    };
    xhr.send();
}
