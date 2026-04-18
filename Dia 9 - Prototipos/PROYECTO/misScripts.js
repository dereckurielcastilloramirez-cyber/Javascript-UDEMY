//https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#herencia_con_la_cadena_de_prototipos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics
let automovil = [];
// Cadena de prototipos
function Automovil(marca, modelo, color, anio, titular){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
}

//CREAR INSTANCIAS

automovil[0] = new Automovil("Pontiac", "G3", "Gris", 2007, "Leonel Castillo Roberto");
automovil[1] = new Automovil("Honda", "Accord", "Verde", 2009, "Rosalia Ramirez Guzman");
automovil[2] = new Automovil("Mazda", "CX3", "Rojo", 2015, "Daniel");

//CREAR METODOS
Automovil.prototype.venderAutomovil = function(nuevoTitular){
    this.titular = nuevoTitular;
}
Automovil.prototype.verAuto = function(){
    let mensaje = this.marca + " - " + this.modelo + " - " + this.anio +  " - " + this.titular;
    return mensaje;
}
Automovil.prototype.encender = function(){
    alert("El automovil esta en marcha");
}

function mostrarRegistros(){

    //Obtener la lista que se creo en html
    let lista = document.getElementById("listaRegistros");
    lista.innerHTML = "";

    for (const auto of automovil){
        //crear elemento adicional para la lista
        let item = document.createElement("li");
        // almacenar en la lista el contenido de lo que devuelve la funcion de ver auto
        item.textContent = auto.verAuto();
        // ponerla en la pantalla para que se vea guardandolo en la lista
        lista.appendChild(item);
    }
}
