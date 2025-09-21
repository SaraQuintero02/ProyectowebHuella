import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.css'],
})
export class RegistroComponent {
  // Propiedades enlazadas al formulario
  nombre: string = '';
  email: string = '';
  password: string = '';
  telefono: string = '';
  mensaje: string = '';

  // Simulación de base de datos en memoria
  private usuariosRegistrados = [
    { email: 'nicolperes@gmail.com' },
    { email: 'luisaquin@gmail.com' },
    { email: 'valeryospina@gmail.com' }
  ];

  constructor(private router: Router) { }

  onSubmit() {
    this.mensaje = '';

    // Validaciones básicas
    if (!this.email.includes('@')) {
      this.mensaje = 'El correo electrónico no es válido';
      return;
    }

    const existe = this.usuariosRegistrados.find(u => u.email === this.email);
    if (existe) {
      this.mensaje = 'Este correo ya está registrado';
      return;
    }

    if (this.password.length < 6) {
      this.mensaje = 'La contraseña debe tener al menos 6 caracteres';
      return;
    }

    // Simula el registro exitoso
    this.usuariosRegistrados.push({ email: this.email });
    this.mensaje = '¡Registro exitoso! Redirigiendo...';

    // Redirige a otra página (por ejemplo, login)
    setTimeout(() => {
      this.router.navigate(['login']);
    }, 2000);
  }
}
