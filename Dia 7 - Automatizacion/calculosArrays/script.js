function extraerNumeroDesdeElemento(elemento) {
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;
    let miNumero = Number(miTexto);
    return miNumero;    
}

function calcular(){
    let ventas = [];
   
    ventas[0] = extraerNumeroDesdeElemento("ventaTienda1");
    ventas[1] = extraerNumeroDesdeElemento("ventaTienda2");
    ventas[2] = extraerNumeroDesdeElemento("ventaTienda3");
    ventas[3] = extraerNumeroDesdeElemento("ventaTienda4");
    ventas[4] = extraerNumeroDesdeElemento("ventaTienda5");
    ventas[5] = extraerNumeroDesdeElemento("ventaTienda6");

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);
    let promedioVentas = totalVentas / ventas.length;

    let mensajeSalida = "El total de ventas es: " + totalVentas + " , la venta mayor es: " + ventaMayor + " y la venta menor es: " + ventaMenor + " y el promedio de ventas es: " + promedioVentas;
    let elementoSalida = document.getElementById("totalVentasResult");
    elementoSalida.textContent = mensajeSalida;
    
}

function sumarTotal(array){
    let total=0;
    for (let venta of array) {
        total = total + venta;
    }
    return total;
}

function calcularMayor(array){
    let mayor = array[0];
    for (let venta of array) {
        if (venta > mayor) {
            mayor = venta;
        }        
    }
    return mayor;
}

function calcularMenor(array){
    let menor = array[0];
    for (let venta of array) {
        if (venta < menor) {
            menor = venta;
        }
    }
    return menor;
}