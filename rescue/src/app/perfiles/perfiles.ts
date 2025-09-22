import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs';
import { User, TIPOS_USUARIO } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfiles',
  standalone: true, 
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfiles.html',
  styleUrl: './perfiles.css'
})
export class PerfilesComponent implements OnInit, OnDestroy{
  // Datos del usuario actual
  currentUser: User = {
    nombre: '',
    correo: '',
    telefono: '',
    fecha_registro: '',
    tipo_usuario: 'Voluntario'
  };

  // Formulario reactivo para editar perfil
  editForm: FormGroup;
  
  // Control de visibilidad del modal de edición
  isEditing = false;
  
  // Opciones para el select de tipo de usuario
  tiposUsuario = TIPOS_USUARIO;
  
  // Subject para manejar unsubscripciones
  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    // Inicialización del formulario con validaciones
    this.editForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      tipo_usuario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Suscripción a los cambios del usuario
    this.userService.user$
      .pipe(takeUntil(this.destroy$))
      .subscribe(user => {
        this.currentUser = user;
      });
  }

  ngOnDestroy(): void {
    // Limpieza de suscripciones para evitar memory leaks
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Método para abrir el modal de edición
  editarPerfil(): void {
    this.isEditing = true;
    
    // Llenar el formulario con los datos actuales
    this.editForm.patchValue({
      nombre: this.currentUser.nombre,
      correo: this.currentUser.correo,
      telefono: this.currentUser.telefono,
      tipo_usuario: this.currentUser.tipo_usuario.toLowerCase()
    });
  }

  // Método para cerrar el modal de edición
  cerrarEditor(): void {
    this.isEditing = false;
    this.editForm.reset();
  }

  // Método para guardar los cambios
  guardarCambios(): void {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      
      // Crear objeto usuario actualizado
      const updatedUser: User = {
        ...this.currentUser,
        nombre: formData.nombre,
        correo: formData.correo,
        telefono: formData.telefono,
        tipo_usuario: this.capitalizarPrimeraLetra(formData.tipo_usuario) as User['tipo_usuario']
      };

      // Actualizar el usuario através del servicio
      this.userService.updateUser(updatedUser);
      
      // Cerrar el modal
      this.cerrarEditor();
    }
  }

  // Utility method para capitalizar la primera letra
  private capitalizarPrimeraLetra(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Getter para acceder fácilmente a los controles del formulario
  get f() {
    return this.editForm.controls;
  }

}
