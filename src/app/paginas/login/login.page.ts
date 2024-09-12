import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  cliente={user:'',password:''}
  errorMessage:string='';
  Message:string='';
  constructor(private router:Router) { }

  ngOnInit() {}

  onSubmit(): boolean {
    //Verificar valores
    console.log('Usuario ingresado: ', this.cliente.user);
    console.log('Contraseña ingresada: ', this.cliente.password)


    // Validar si los campos están vacíos
    if (!this.cliente.user || !this.cliente.password) {
      this.errorMessage = "Todos los campos son obligatorios";
      return false;
    }

    //Validación de Usuario
     if (this.cliente.user === 'admin' && this.cliente.password === 'admin') {
      //Almacenar usuario en local storage
      this.errorMessage = ''; // Limpiar mensaje de error
      localStorage.setItem('usuario', this.cliente.user);
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
