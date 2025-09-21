import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  //Propiedades que se enlazan al formulario
  email: string = '';
  password: string = '';
  mensaje: string = '';

  //Usuarios: DB en memoria
  private usuarios = [
    { email: 'nicolperes@gmail.com', password: '123456' },
    { email: 'luisaquin@gmail.com', password: '123luisa' },
    { email: 'valeryospina@gmail.com', password: 'os1234' }
  ];

  //Para cambiar de pagina
  constructor(private router: Router) {}

  //Limpiar input
  onSubmit() {
    this.mensaje = '';

    //Validación
    if (!this.email.includes('@')) {
      this.mensaje = 'El correo electrónico no es válido';
      return;
    }

    const usuario = this.usuarios.find(u => u.email === this.email);

    if (!usuario) {
      this.mensaje = 'Correo no registrado';
      return;
    }

    if (usuario.password !== this.password) {
      this.mensaje = 'Contraseña incorrecta';
      return;
    }

    //Si pasa todas las validaciones redirige a perfiles
    this.router.navigate(['/perfiles']);
  }
}
