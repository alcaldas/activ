import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:string = '';
  precioEntrada: number= 30000;
  cantidadEntradas: number= 1;
  totalPagar: number=0;
  compraExitosa: boolean = false;
  mensajeExito:string= '';

  constructor() {}
  ngOnInit(){
    this.usuario = localStorage.getItem('user') || 'Invitado'; 
    this.calcularTotal();
  }

  calcularTotal(){
    this.totalPagar = this.precioEntrada * this.cantidadEntradas;
  }
  comprarEntradas(){
    this.calcularTotal();

    this.compraExitosa = true;
    this.mensajeExito = `Has comprado exitosamente una entrada`;

  }
  


  
}
