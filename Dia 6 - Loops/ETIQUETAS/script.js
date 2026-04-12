let alto = 4;
let ancho = 3;
let etiqueta =document.getElementById("espacio");

loopExterno:
for (let y=1; y<=alto; y++) {
    for (let x=1; x<=ancho; x++) {
        etiqueta.innerHTML += (y+"."+ x +"<br>");
        if (y==2 && x==2) {
            break loopExterno;
        }
    }
}