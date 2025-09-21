import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  openMenu: string | null = null; //Guarda submenu ue esta abierto

  //1. Metodo para abrir y cerrar menu
  toggleMenu(event: Event, menu: string): void {
    event.preventDefault(); //Afectara submenus
    event.stopPropagation(); //Para que no burbuje
    this.openMenu = this.openMenu === menu ? null : menu; //Si el menu ya estaba abierto lo cierra
  }

  //2. Cerrar el menu al hacer click fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) { //Si no esta dentro del nav lo cierra
      this.openMenu = null;
    }
  }

  //3. Cerrar menu al presionar esc
  @HostListener('document:keydown.esc')
  onEscKey() {
    this.openMenu = null;
  }
}
