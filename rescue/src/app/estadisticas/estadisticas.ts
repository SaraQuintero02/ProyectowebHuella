import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';//Peticiones http, usa httpclient:Servicio

//Estructura de los datos
interface Registro {
  a_o?: string;
  fecha_de_realizacion?: string;
  municipio?: string;
  caninos_hembras?: number;
  caninos_machos?: number;
  felinos_machos?: number;
  felinos_hembras?: number;
  total_n_de_animales?: number;
  decesos?: number;
}

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './estadisticas.html',
  styleUrls: ['./estadisticas.css']
})
export class Estadisticas implements OnInit {

  estadisticas: Registro[] = [];
  private BASE_URL = "https://www.datos.gov.co/resource/wm9s-qtjx.json";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.http.get<Registro[]>(this.BASE_URL).subscribe({
      next: (datos) => this.estadisticas = datos,
      error: (err) => console.error('Error al consumir la API:', err)
    });
  }

  //Funciones de accesibilidad
  aumentarFuente() {
    document.body.style.fontSize = 'larger';
  }

  disminuirFuente() {
    document.body.style.fontSize = 'smaller';
  }

  cambiarContraste() {
    document.body.classList.toggle('contraste-activo');
  }
}
