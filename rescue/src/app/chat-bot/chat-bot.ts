import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-chat-bot',
  imports: [CommonModule],
  templateUrl: './chat-bot.html',
  styleUrl: './chat-bot.css'
})

  export class ChatbotComponent implements OnInit, OnDestroy {
  // Estado del popup del chatbot
  isPopupVisible = false;
  
  // Estado del botón de scroll
  isScrollButtonVisible = false;

  // Enlaces de WhatsApp
  whatsappLinks = [
    {
      label: 'Línea 1: Atención general',
      url: 'https://wa.me/573043018954'
    },
    {
      label: 'Línea 2: Adopciones', 
      url: 'https://wa.me/573105759629'
    },
    {
      label: 'Línea 3: Donaciones',
      url: 'https://wa.me/573152983457'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Componente inicializado
  }

  ngOnDestroy(): void {
    // Limpieza si es necesaria
  }

  // Escuchar eventos de scroll para mostrar/ocultar botón de scroll
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrollButtonVisible = window.scrollY > 300;
  }

  // Escuchar clicks en el documento para cerrar popup
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const popup = document.getElementById('chatbotPopup');
    const button = document.getElementById('chatbotButton');
    
    // Cerrar popup si se hace click fuera de él y del botón
    if (popup && button && 
        !popup.contains(target) && 
        !button.contains(target)) {
      this.isPopupVisible = false;
    }
  }

  // Alternar visibilidad del popup del chatbot
  toggleChatbotPopup(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.isPopupVisible = !this.isPopupVisible;
  }

  // Cerrar popup del chatbot
  closeChatbotPopup(): void {
    this.isPopupVisible = false;
  }

  // Scroll suave hacia arriba
  scrollToTop(event: Event): void {
    event.preventDefault();
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }

  // Abrir enlace de WhatsApp
  openWhatsAppLink(url: string): void {
    window.open(url, '_blank');
    // Cerrar popup después de hacer click en un enlace
    this.closeChatbotPopup();
  }
}
