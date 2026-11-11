import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  imports: [FormsModule],
  selector: 'app-inventario',
  styleUrl: './inventario.css',
  templateUrl: './inventario.html',
})
export class Inventario {

  nombre: string = '';
  cantidad: number | null = null;
  precio: number | null = null;

  mensaje: string = '';

  productos: Producto[] = [];

  registrar() {

    if (
      this.nombre.trim() === '' ||
      this.cantidad === null ||
      this.precio === null ||
      !Number.isInteger(this.cantidad) ||
      !Number.isFinite(this.precio) ||
      this.cantidad < 0 ||
      this.precio < 0
    ) {
      this.mensaje = 'Por favor, complete los campos correctamente.';
      return;
    }

    this.productos.push({
      nombre: this.nombre.trim(),
      cantidad: this.cantidad,
      precio: this.precio
    });

    this.mensaje = 'Producto registrado correctamente.';

    this.nombre = '';
    this.cantidad = null;
    this.precio = null;
  }

  valorTotal(producto: Producto): number {
    return producto.cantidad * producto.precio;
  }

  eliminar(index: number) {
    this.productos.splice(index, 1);
    this.mensaje = 'Producto eliminado correctamente.';
  }

}

