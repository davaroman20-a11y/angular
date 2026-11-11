import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-registros',
  styleUrl: './registros.css',
  templateUrl: './registros.html',
})

export class Registro {
  nombre: string = '';
  apellido: string = '';
  programa: string = '';
  edad: number = 0; 

  estudiantes: any[] = [];

  registrarEstudiante() {
    const estudiante = {
      nombre: this.nombre,
      apellido: this.apellido,
      programa: this.programa,
      edad: this.edad
    };

    if (estudiante.edad < 18) {
      alert('El estudiante debe ser mayor de edad para registrarse.');
      return;
    }

    this.estudiantes.push(estudiante);
  }
  
  }