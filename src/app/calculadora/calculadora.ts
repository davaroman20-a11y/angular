import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html'
})
export class Calculadora {
  num1 : number = 0;
  num2: number = 0;
  resultado: number = 0;
   
sumar(){
  this.resultado = this.num1 + this.num2;
}

restar(){
  this.resultado = this.num1 - this.num2;
}
}
