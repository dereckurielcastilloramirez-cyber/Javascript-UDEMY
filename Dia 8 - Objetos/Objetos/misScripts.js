//https://developer.mozilla.org/es/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#herencia_con_la_cadena_de_prototipos
//https://www.udemy.com/course/javascript-total/learn/lecture/35433572#reviews
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics


// ----------------------------- CREAR OBJETOS FORMA 1 --------------------------------------
// crear objeto, con sus propiedades y métodos
let gallo = {
    nombre: "Pichi",
    raza: "Leghorn",
    edad: 3,
    cantar(){
        console.log("¡Kikirikí!");
    },
    saludar(){
        console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

let perro = {
    nombre: "Darwin",
    raza: "Pastor Alemán",
    edad: 2,
    cantar(){
        console.log("¡Guau guau!");
    },
    saludar(){
        console.log(`¡Hola! Soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};

// actualizar de un objeto

gallo.edad = 4; //actualizar la edad del gallo a 4 años
gallo.color = "blanco"; //añadir una nueva propiedad al objeto gallo, el color

gallo["colorOjos"] = "amarillos"; //otra forma de añadir una nueva propiedad al objeto gallo, el color de ojos}


// ----------------------------- CREAR OBJETOS FORMA 2 --------------------------------------
//constructor de objetos
function constructorSmartphone(marca, año, modelo){
    this.marca = marca;
    this.año = año;
    this.modelo = modelo;
    this.encender = function(){
        console.log(`El ${this.marca} ${this.modelo} se ha encendido.`);
    }
    this.foto = function(){
        console.log("¡Click! Has tomado una foto.");
    }
    this.actualizarSoftware = function(){
        console.log(`El ${this.marca} ${this.modelo} está actualizando su software.`);
    }
}

// instancia del constructor
let samsung = new constructorSmartphone("Samsung", 2026, "Galaxy S26");
let iphone = new constructorSmartphone("Apple", 2026, "iPhone 17");
let xiaomi = new constructorSmartphone("Xiaomi", 2026, "Mi 12");


// ----------------------------- CREAR OBJETOS FORMA 3 --------------------------------------

//crear objeto
let coche = new Object();

// añadir atributos/propiedades
coche.marca = 'Pontiac';
coche['modelo'] = 'G3';
coche.encender = function(){alert('coche encendido')}

let celular = new Object({marca: 'Samsung', modelo:'S26 Ultra'});

// ----------------------------- CREAR OBJETOS FORMA 4 --------------------------------------

let SUV = Object.create(coche);

// -----------------------------LOOP FOR IN--------------------------------------------------
for(let propiedad in samsung){
    console.log(propiedad + ": " + samsung[propiedad]);
}

