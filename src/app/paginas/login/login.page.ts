import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login={user:'',password:''}
  errorMessage:string='';
  Message:string='';
  constructor(private router:Router) { }

  ngOnInit() {}

  onSubmit(): boolean {
    const usuario = localStorage.getItem(this.login.rut);
    if(!usuario) {
      this.errorMessage = 'RUT no encontrado'
    }

    //Verificar valores
    console.log('Usuario ingresado: ', this.login.user);
    console.log('Contraseña ingresada: ', this.login.password)


    // Validar si los campos están vacíos
    if (!this.login.user || !this.login.password) {
      this.errorMessage = "Todos los campos son obligatorios";
      return false;
    }

    //Validación de Usuario
     if (this.login.user === 'admin' && this.login.password === 'admin') {
      //Almacenar usuario en local storage
      this.errorMessage = ''; // Limpiar mensaje de error
      localStorage.setItem('usuario', this.login.user);
      //Almacenar token
      localStorage.setItem('token','some-auth-token');
      this.router.navigate(['/home']);
      return true;
    } else {
      this.errorMessage = "Usuario o contraseña incorrecta";
      return false;
    }
  }
  irARegistro() {
    //Navegar a la pag de registro
    this.router.navigate(['/registro']);
  }
}
