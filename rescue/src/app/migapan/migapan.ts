import { CommonModule } from '@angular/common';
import { UrlCodec } from '@angular/common/upgrade';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

interface migapanItem {
  nombre: string;
  url: string | null;
}
@Component({
  selector: 'app-migapan',
  imports: [CommonModule],
  templateUrl: './migapan.html',
  styleUrl: './migapan.css'
})

export class MigapanComponent implements OnInit {
  migapanItems: migapanItem[] = [];

  // Definición de titulos según la ruta
  private readonly titulos: { [key: string]: string } = {
    '/': 'Inicio',
    '/adoptables': 'Adopciones > Adoptables',
    '/contacto': 'Contáctanos',
    '/donar': 'Donar',
    '/login': 'Inicio de sesión',
    '/mision-vision': 'Nosotros > Misión y visión',
    '/estadisticas': 'Nosotros > Estadísticas',
    '/perfiles': 'Perfil',
    '/politica-privacidad': 'Política de privacidad',
    '/proceso-adopcion': 'Adopciones > Proceso de adopción',
    '/registro': 'Registro',
    '/reportes': 'Reportes',
    '/voluntarios': 'Nosotros > Voluntariado',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Generar la miga de pan
    this.generateMigapan();

    // Escuchar cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.generateMigapan();
      });
  }

  private generateMigapan(): void {
    const currentUrl = this.router.url;
    const currentTitle = this.titulos[currentUrl] || 'Página actual';

    // Crear arreglo de migapan
    this.migapanItems = [
      {nombre: 'Inicio', url: "/"},
      {nombre: currentTitle, url: null}
    ];

     // Si ya estamos en inicio, solo mostrar inicio
    if (currentUrl === '/') {
      this.migapanItems = [{ nombre: 'Inicio', url: null }];
    }
  }
  navigateTo(url: string | null): void {
    if (url) {
      this.router.navigate([url]);
    }
  }
}