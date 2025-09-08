import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  openMenu: string | null = null; //Variable donde se guarda que submenu esta abierto

  //Función
  menu(event: Event, menu: string) {
    event.preventDefault();
    event.stopPropagation();
    //Cierra los submenus si estan abiertos
    this.openMenu = this.openMenu === menu ? null : menu;
  }

  //Se cierran los submenus al hacer clik en cualquier parte
  @HostListener('document:click', ['$event']) //Escucha si se hace clik continua
  cierraClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) { //Busca clicks dentro de nav, si se hizo click fuera entra al if y cierra
      this.openMenu = null;
    }
  }

  //Se cierran tambien si se preciona la tecla esc
  @HostListener('document:keydown.esc')
  cierraAtajo() { //Metodo
    this.openMenu = null;
  }
}
