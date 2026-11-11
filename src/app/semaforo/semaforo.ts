import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
  color: string = 'gray';
  mensaje: string = 'Seleccione un color';

  rojo() {
    this.color = 'red';
    this.mensaje = 'Detenerse';
  }

  amarillo() {
    this.color = 'yellow';
    this.mensaje = 'Precaución';
  }

  verde() {
    this.color = 'green';
    this.mensaje = 'Avanzar';
  }

}

