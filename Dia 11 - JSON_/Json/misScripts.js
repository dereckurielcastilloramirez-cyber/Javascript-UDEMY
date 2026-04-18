// https://developer.mozilla.org/es/docs/Glossary/JSON
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

let jsonEjemplo = {
    "clave1": "valor1",
    "clave2": 100,
    "clave3": {
        "clave3-a": "valor X",
        "clave3-b": "valor Y",
    }
}


let json1 = {
    "titulo": "Titanic",
    "director": "James Cameron",
    "lanzamiento": 1997,
    "duracion": 134,
    "actores": [ "Leonardo DiCaprio", "Kate Winslet"],
    "premioOscar": true
};

//extraerlo
let elementoTexto = document.getElementById("jsonExtraer");
elementoTexto.textContent = json1.titulo;



let datosJson;
// nos va a permitir extraer datos del json, hacer request
let xhr = new XMLHttpRequest(); 
// true es para hacer asincrono o no
xhr.open('GET', "persona.json",true);
// que tipo de formato esperamos en la respuesta 
xhr.responseType =  'json';
// que se recibe una resuesta satisfactoria a la respuesta, esta funcion se va a ejecutar cada que sea exitosa la respuesta 
xhr.onload = function() {
    //respuesta 200 es OK
    if(xhr.status === 200){
        alert("Obteniendo el valor");
        datosJson = xhr.response;
        let elementoTexto = document.getElementById("jsonExtraer2");
        elementoTexto.textContent = datosJson.nombre;
    }else{
        alert("Error al obtener el valor");
    }
} 

//esto ejecuta la solicitud
xhr.send();
//_---------------------------------------------------------

