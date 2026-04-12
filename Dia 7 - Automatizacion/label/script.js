// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label


let nombreTienda = ["Tienda Zaragoza", "Tienda Paris", "Tienda Coyoacan", "Tienda Puebla", "Tienda Jalisco", "Tienda Zacatenco"];

function tiendas(){
    // getElementById() busca un elemento HTML usando el id indicado.
    let elementoNumeroTiendas = document.getElementById("numeroTiendas");
    // .length devuelve la cantidad de elementos que tiene el arreglo.
    // .textContent permite leer o cambiar el texto de un elemento.
    elementoNumeroTiendas.textContent = "Número de tiendas: " + nombreTienda.length;
}

function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    // .value obtiene el valor escrito en un input u otro campo de formulario.
    let miTexto = miElemento.value;
    // Number() convierte un texto u otro valor en numero.
    let miNumero = Number(miTexto);
    return miNumero;    
}



function calcular(){
    let ventas1, ventas2, ventas3, ventas4, ventas5, ventas6;
    
    ventas1 = extraerNumeroDesdeElemento("ventaTienda1");
    ventas2 = extraerNumeroDesdeElemento("ventaTienda2");
    ventas3 = extraerNumeroDesdeElemento("ventaTienda3");
    ventas4 = extraerNumeroDesdeElemento("ventaTienda4");
    ventas5 = extraerNumeroDesdeElemento("ventaTienda5");
    ventas6 = extraerNumeroDesdeElemento("ventaTienda6");

    let totalVentas = ventas1 + ventas2 + ventas3 + ventas4 + ventas5 + ventas6;

    let mensajeSalida = "El total de ventas es: " + totalVentas;
    let elementoSalida = document.getElementById("parrafoSalida");
    elementoSalida.textContent = mensajeSalida;
    
}

function buscarTienda(){
    let idTienda = document.getElementById("idTienda").value;
    let numTienda = Number(idTienda);
    let elementoBusqueda = document.getElementById("resultadoBusqueda");

    elementoBusqueda.textContent = "La tienda con el id " + numTienda + " es: " + nombreTienda[numTienda - 1];

    if(numTienda < 1 || numTienda > nombreTienda.length){
        elementoBusqueda.textContent = "El id de tienda no es válido. Por favor ingresa un número entre 1 y " + nombreTienda.length;
    }
}

function eliminarUltimaTienda(){
    // .pop() elimina y devuelve el ultimo elemento del arreglo.
    let eliminada = nombreTienda.pop();
    let elementoEliminada = document.getElementById("tiendaEliminada");
    elementoEliminada.textContent = "La tienda eliminada es: " + eliminada;
}

function eliminarPrimerTienda(){
    // .shift() elimina y devuelve el primer elemento del arreglo.
    let eliminada = nombreTienda.shift();
    let elementoEliminada = document.getElementById("tiendaEliminada");
    elementoEliminada.textContent = "La tienda eliminada es: " + eliminada;
}

function eliminarTiendaEnMedio()  {
    // .splice(inicio, cantidad) elimina elementos desde una posicion especifica del arreglo.
    let eliminada = nombreTienda.splice(2,3);
    let elementoEliminada = document.getElementById("tiendaEliminada");
    elementoEliminada.textContent = "La tienda eliminada es: " + eliminada;
}



function agregarTiendaComienzo(){
    let nuevaTienda = document.getElementById("nuevaTienda").value;
    // .unshift() agrega uno o mas elementos al inicio del arreglo.
    nombreTienda.unshift(nuevaTienda);
    let elementoAgregada = document.getElementById("tiendaAgregada");
    elementoAgregada.textContent = "La tienda agregada es: " + nuevaTienda;

}
function agregarTiendaFinal(){
    let nuevaTienda = document.getElementById("nuevaTienda").value;
    // .push() agrega uno o mas elementos al final del arreglo.
    nombreTienda.push(nuevaTienda);
    let elementoAgregada = document.getElementById("tiendaAgregada");
    elementoAgregada.textContent = "La tienda agregada es: " + nuevaTienda;
}

function imprimirTiendas(){
    // .forEach() recorre cada elemento del arreglo y ejecuta una funcion por cada uno.
    // alert() muestra una ventana emergente con el mensaje indicado.
    nombreTienda.forEach(function(tienda, index){alert("Tienda " + (index + 1) + ": " + tienda)});

}
