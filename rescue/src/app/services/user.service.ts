import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  // BehaviorSubject para manejar el estado del usuario de forma reactiva
  private userSubject = new BehaviorSubject<User>({
    nombre: 'Luisa Quintero',
    correo: 'Luisaquin@gmail.com',
    telefono: '3043018954',
    fecha_registro: '2025-09-13',
    tipo_usuario: 'Voluntario'
  });

  // Observable público para que los componentes puedan suscribirse
  public user$ = this.userSubject.asObservable();

  constructor() { }

  // Método para obtener los datos actuales del usuario
  getCurrentUser(): User {
    return this.userSubject.value;
  }

  // Método para actualizar los datos del usuario
  updateUser(updatedUser: User): void {
    this.userSubject.next(updatedUser);
  }
}