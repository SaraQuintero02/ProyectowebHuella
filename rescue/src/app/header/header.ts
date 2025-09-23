import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports:[CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  openMenu: string | null = null; //Guarda submenu ue esta abierto
  mobileMenuOpen = false; // Control del menú móvil

  // 1. Método abrir/cerrar submenu
  abrirCerrarMenu(menu: string): void {
    if (this.openMenu === menu) {
      this.openMenu = null; // Si es el mismo submenu, lo cierra
    } else {
      this.openMenu = menu; // Abre el submenu actual
    }
  }

  // 2. Método cerrar todos los submenus
  cierraMenus(): void {
    this.openMenu = null; // Con Angular basta con limpiar la variable
  }

  // 3. Cerrar menu al hacer click fuera
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('nav')) {
      this.cierraMenus();
      this.mobileMenuOpen = false;
    }
  }

  // 4. Cerrar menu al presionar ESC
  @HostListener('document:keydown.esc')
  onEscKey() {
    this.cierraMenus();
    this.mobileMenuOpen = false;
  }

  // 5. Abrir/cerrar menú en móvil
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
