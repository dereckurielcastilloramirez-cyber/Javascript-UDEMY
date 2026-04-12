//https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Basics

let empleados = [];

//crear objeto
function Empleado(legajo, nombre, apellido, nacimiento, cargo) {
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}

function cargarEmpleado() {
    let empleado = new Empleado("", "", "", "", "");
    let flag=true;
    let idsElementos = {
        legajo: "legajo",
        nombre: "Nombre",
        apellido: "Apellido",
        nacimiento: "Nacimiento",
        cargo: "Cargo"
    };

    for (let atributo in empleado) {
        let elemento = document.getElementById(idsElementos[atributo]);
        if(elemento.value != ""){
           empleado[atributo] = elemento.value;
           elemento.value = "";
        }else{
            alert("Hay campos vacios");
            flag=false;
            break;
        }
    }
    
    // agregar cada OBJETO EMPLEADO CON ATRIBUTOS DENTRO DE EL al arreglo de empleados
    if(flag == true){    empleados.push(empleado);
        alert("El empleado ha sido arreglado exitosamente");}
}

function mostrarEmpleados() {
    let listadoEmpleados = document.getElementById("listaEmpleados");
    let contenido = "";

    for (let empleado of empleados) {
        
        for (let atributo in empleado) {
            contenido += empleado[atributo] + "<br>";
        }

        contenido += "<br>";
    }

    listadoEmpleados.innerHTML = contenido;
}
