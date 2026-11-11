import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  productos = [
    {nombre: 'computador', categoria:'Tecnologia', precio: 25000000},
    {nombre: 'camiseta', categoria:'ropa', precio:150000},
    {nombre: 'pantalon', categoria:'ropa', precio:250000},
    {nombre: 'aretes', categoria:'accesorios', precio:15000},
    {nombre: 'jabon liquido', categoria:'aseo', precio:12000}

  ];
}
