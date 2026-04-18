//https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#herencia_con_la_cadena_de_prototipos
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics

//Objeto principal o prototipo
let automovil = {marca: 'Honda'};
//Objeto basado en objeto principal
let SUV = Object.create(automovil);

// Cadena de prototipos
function Libro(autor, titulo, cantPaginas){
    this.autor = autor;
    this.titulo = titulo;
    this.cantPaginas = cantPaginas;
}

let libro1 = new Libro("Stephen King", "Carrie", 524);

// Constructores
let libro3 = new libro1.constructor("Kip Thorne", "The Sciense of Interstellar", 324);

// Modificar prototipos
Libro.abrirLibro = function(){
    alert(this.titulo + " ha sido abierto");
}

Libro.prototype.abrirLibro2 = function(){
    alert(this.titulo + " ha sido abierto");
}

Libro.prototype.edicion = this.edicion;


// EN EL CONSTRUCTOR VAN LAS PROPIEDADES O ATRIBUTOS
function UnObjeto(a){
    this.a = a;
}

// EN EL PROTOTIPO VAN LAS FUNCIONES
UnObjeto.prototype.metodo1 = function(){console.log("Codigo 1");}
UnObjeto.prototype.metodo2 = function(){console.log("Codigo 2");}