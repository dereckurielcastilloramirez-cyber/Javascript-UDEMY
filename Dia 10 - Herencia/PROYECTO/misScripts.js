//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes
//Una clase es una funcion especial que envuelve a los objetos
class Animal {
    //constructor de la clase
    constructor(nombre, peso, edad) {
        //propiedades/atributo
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
        //metodo
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`
    }
    
}



// Subclase a partir de la clase principal
class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this._raza = raza;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`
    }
    
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this._sexo = sexo;
    }
        informacion() {
            return `${this.nombre} - ${this.peso} kg - ${this.edad} años`
        }
}

class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this._color = color;
    }
    informacion() {
        return `${this.nombre} - ${this.peso} kg - ${this.edad} años`
    }
}


let perro1 = new Perro('Simba', 11, 4, 'Shih Tzu');
let gato1 = new Gato('Ringo', 4, 6, 'Macho');
let conejo1 = new Conejo('Dumbo', 2, 3, 'Blanco');

let animales = [perro1, gato1, conejo1];

function mostrarAnimales(){
    let lista = document.getElementById('listaAnimales');
    
    for (let animal of animales){
        let item = document.createElement('li');
        item.innerText = animal.informacion();
        lista.appendChild(item);
    }
}