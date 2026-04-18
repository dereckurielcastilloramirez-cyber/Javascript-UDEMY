// https://developer.mozilla.org/es/docs/Glossary/JSON
// https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON

let datosJson;


//llamada a funcion: entonces... una vez que se hace la promesa o recibe la respuesta exitosamente
// res va a ser la respuesta con todos los datos y pasarlos a .json
function ObtenerDatos(){

    let searchJSON = document.getElementById('searchJson').value;

    let busqueda= document.getElementById("json_search");
    busqueda.textContent = searchJSON;

    fetch(searchJSON+'.json')
    .then(res => res.json())
    .then((salida) => {
        datosJson = salida;

        let elementoTexto = document.getElementById('jsonExtraer');
        elementoTexto.textContent = datosJson.nombre + datosJson.apellido;
    })
    .catch(function(error){
        alert("Hubo un error: "+error);
    })

}
