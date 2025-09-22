import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Accecibility } from '../services/accecibility';

@Component({
  selector: 'app-accesibilidad',
  imports: [CommonModule],
  templateUrl: './accesibilidad.html',
  styleUrl: './accesibilidad.css'
})
export class AccesibilityMenu {
  constructor(private accesibilityService : Accecibility){}

  aumentar() {
    this.accesibilityService.aumentarFuente();
  }

  disminuir() {
    this.accesibilityService.disminuirFuente();
  }

  alternarContraste() {
    this.accesibilityService.toggleContraste();
  }
}