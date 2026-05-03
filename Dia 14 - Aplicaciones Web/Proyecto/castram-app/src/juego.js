import React from "react";

function Juego(props) {

    //variables
    //[variable, funcion para actualizar la variable]
    let [numeroUsuario, setNumeroUsuario] = React.useState(0);
    let [numeroMaquina, setNumeroMaquina] = React.useState(Math.floor(Math.random() * props.limite) + 1);

    function comprobarNumeroUsuario(evento) {
        setNumeroUsuario(evento.target.value);
    }

    function comprobarNumeroMaquina() {
        if (numeroUsuario === numeroMaquina) {
            alert("¡Correcto! Has adivinado el número.");
        } else {
            alert("¡Incorrecto! El número era " + numeroMaquina);
        }
        setNumeroMaquina(Math.floor(Math.random() * props.limite) + 1);
        console.log("Número de la máquina: " + numeroMaquina);
    }

    return (
        <div>
            <h2>Juego de Acertijos</h2>
            <p>Elije un numero del 1 al 10</p>
            <input type="number" min={1} max={10} 
            placeholder="ingresa tu apuesta"
            onchange={comprobarNumeroUsuario}></input>

            <br/>
            <button onClick={comprobarNumeroMaquina}>Comprobar</button>
        </div>
    );
}

export default Juego;