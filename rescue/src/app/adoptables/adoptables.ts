import { Component, DOCUMENT, Inject } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';

interface Adoptable {
  nombre: string;
  edad: string;
  img: string;
  historia?: string;
}
@Component({
  selector: 'app-adoptables',
  imports: [ NgIf, NgFor ],
  templateUrl: './adoptables.html',
  styleUrl: './adoptables.css'
})
export class Adoptables {
  
  // Arreglo que contiene a los animales
  adoptables: Adoptable[]=[
    { nombre: "Polito", edad: "2 años", img: "assets/images/polito.jpg", historia: "Rescatado a principios de agosto, se encuentra vacunado, pendiente por esterilización. Polito es muy jugueton, pero necesita mucho amor."},
    { nombre: "Asia", edad: "1 año", img: "assets/images/asia.jpg", historia: "Encontrada a mediados de julio, pendiente por vacunas y esterilización, es bastante agresiva y nerviosa."  },
    { nombre: "Pedro", edad: "3 años", img: "assets/images/pedro.jpg", historia: "Pedro llego el 3 de septiembre, ya se encuentra vacunado pendiente por esterilización, es muy nervioso con otros animales." }
  ];

  private adoptablesExtra: Adoptable[] = [
    { nombre: "Rem", edad: "1 año", img: "assets/images/rem.jpg", historia: "Rem fue encontrada hace muy poco, está esterilizada y vacunada, es muy seria pero con el debido trato su corazón puede ablandarse."},
    { nombre: "Coco", edad: "3 años", img: "assets/images/coco.jpg", historia: "Coco fue encontrado hace 4 meses, se encuentra esterilizado y con todas las vacunas, es un perro entrenado y en busca de una familia que lo pueda acoger" },
    { nombre: "Maya", edad: "1 mes", img: "assets/images/maya.jpg", historia: "Maya fue recibida desde recien nacida, tuvo un nacimiento dificil pero ahorita se encuentra sana y con todas sus vacunas, es una gatita muy juguetona." }
  ];

  // Modal
  seleccionado: Adoptable | null = null;

  // controlar si se clickea "ver más..."
  showVerMas = true; 

  constructor(@Inject(DOCUMENT) private document: Document) {}

  abrirModal(a: Adoptable) {
    this.seleccionado = a;
    // bloquear scroll del body mientras el modal está abierto
    this.document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.seleccionado = null;
    this.document.body.style.overflow = '';
  }

  verMas() {
    this.adoptables.push(...this.adoptablesExtra);
    this.showVerMas = false;
  } 



}