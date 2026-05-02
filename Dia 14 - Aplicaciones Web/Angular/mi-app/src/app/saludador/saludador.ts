import { Component } from '@angular/core';

@Component({
  selector: 'app-saludador',
  standalone: true,   
  imports: [],
  templateUrl: './saludador.html',
  styleUrl: './saludador.css',
})
export class Saludador {
  mensaje: string = '';

  saludar() {
    this.mensaje = 'Hola, bienvenido a Angular!';
  }
}


