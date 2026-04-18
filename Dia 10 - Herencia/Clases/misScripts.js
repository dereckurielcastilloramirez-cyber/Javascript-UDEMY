//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
//Una clase es una funcion especial que envuelve a los objetos

// se pueden definir como una declaración de clase o expresión de clase

// declaracion de clase ----------------------------
class Papel{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// expresion de clase ------------------------------
// expresion anonima -------
let Papel2 = class{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// expresion nombrada -------
let Papel3 = class MiPapel3{
    constructor(alto, ancho){
        this.alto = alto;
        this.ancho = ancho;
    }
}

// clase principal
class Deportista{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// Subclase a partir de la clase principal
class Futbolista extends Deportista{
    constructor(nombre, apellido, goles){
        super(nombre, apellido);
        this._goles = goles;
    }
    // GET - Obtener el valor actual de una propiedad
    get goles(){
        return this._goles;
    }

    // SET - Establecer un nuevo valor a una propiedad
    set goles(nuevoGoles){
        this._goles = nuevoGoles;
    }
}


class Colegio {
    constructor(nombre, direccion, cantAlumnos) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._cantAlumnos = cantAlumnos;
    }
    
    get nombre() {
        return this._nombre;
    }
    
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    
    get direccion() {
        return this._direccion;
    }
    
    set direccion(nuevaDireccion) {
        this._direccion = nuevaDireccion;
    }
    
    get cantAlumnos() {
        return this._cantAlumnos;
    }
    
    set cantAlumnos(nuevaCantAlumnos) {
        this._cantAlumnos = nuevaCantAlumnos;
    }
}