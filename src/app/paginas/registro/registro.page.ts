import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  registro = {
    nombre: '',
    apellido: '',
    edad: null,
    rut: '',
    contrasena: '',
  };

  errorMessage: string = '';
  successMessage: string = '';

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    // Validación simple
    if (
      !this.registro.nombre ||
      !this.registro.apellido ||
      !this.registro.edad ||
      !this.registro.rut ||
      !this.registro.contrasena
    ) {
      this.errorMessage = 'Todos los campos son obligatorios';
      this.successMessage = '';
      return;
    }

    // Verificar si la edad es válida
    if (this.registro.edad < 1) {
      this.errorMessage = 'Por favor, ingrese una edad válida';
      this.successMessage = '';
      return;
    }

    // Simular registro exitoso
    this.successMessage = `¡Registro exitoso! Bienvenido, ${this.registro.nombre}.`;
    this.errorMessage = '';
  }
}