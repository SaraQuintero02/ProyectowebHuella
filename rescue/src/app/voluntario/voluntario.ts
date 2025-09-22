import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';  
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-voluntario',
  imports: [CommonModule, FormsModule],
  templateUrl: './voluntario.html',
  styleUrl: './voluntario.css'
})
export class VoluntarioComponent {
  // Propiedades para el formulario
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';
  
  // Estado para mostrar mensaje de confirmación
  mostrarConfirmacion: boolean = false;
  
  // Número de teléfono para WhatsApp
  private readonly telefono: string = '573043018954';

  onSubmit(): void {
    // Validar que los campos requeridos estén llenos
    if (!this.nombre || !this.correo || !this.mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear el mensaje para WhatsApp
    const texto = `Quiero ser voluntario\n\n` +
                  `Nombre: ${this.nombre}\n` +
                  `Correo: ${this.correo}\n` +
                  `${this.mensaje}`;

    // Crear URL de WhatsApp
    const url = `https://wa.me/${this.telefono}?text=${encodeURIComponent(texto)}`;
    
    // Abrir WhatsApp en una nueva ventana
    window.open(url, '_blank');

    // Mostrar mensaje de confirmación
    this.mostrarConfirmacion = true;
    
    // Resetear el formulario
    this.resetForm();

    // Ocultar mensaje de confirmación después de 5 segundos
    setTimeout(() => {
      this.mostrarConfirmacion = false;
    }, 5000);
  }

  private resetForm(): void {
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}
