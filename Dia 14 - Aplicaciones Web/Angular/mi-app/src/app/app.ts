import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludador } from './saludador/saludador'; // 👈 importa


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Saludador],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-app');
}
