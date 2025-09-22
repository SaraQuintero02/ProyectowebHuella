import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { AccesibilityMenu } from './accesibilidad/accesibilidad';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from './chat-bot/chat-bot';
import { MigapanComponent } from './migapan/migapan';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer,AccesibilityMenu,CommonModule, ChatbotComponent, MigapanComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('rescue');
}
