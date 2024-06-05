import { Component } from '@angular/core';
import { MessageWspComponent } from '../../shared/message-wsp/message-wsp.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    CarouselComponent,
    RouterLink,
    NgFor,
    FooterComponent,
    MessageWspComponent,
  ],
})
export class HomeComponent {
  mediaQuery = window.matchMedia('(max-width: 768px)');
  icons = [
    { icon: 'assets/icons/calidad.png', text: 'High quality' },
    { icon: 'assets/icons/etiqueta-del-precio.png', text: 'Best price' },
    { icon: 'assets/icons/cosecha.png', text: 'Direct from our crops' },
  ];

  flower = 'assets/fotos/floresMuestra.jpg';

  products = [
    {
      name: 'Birds of paradise',
      name_spa: 'Aves del paraíso',
      img: 'assets/imgProducts/birdP.jpg',
    },
    {
      name: 'Hydrangeas',
      name_spa: 'Hortencias',
      img: 'assets/imgProducts/hortensia.jpg',
    },
    {
      name: 'Ruscus',
      name_spa: 'Ruscus Israeli',
      img: 'assets/imgProducts/ruscus.jpg',
    },
  ];

  scrollLeft() {
    const container = document.querySelector('.product-right');
    if (container) {
      if (this.mediaQuery.matches) container.scrollLeft -= 180;
      else container.scrollLeft -= 250;
    }
  }

  scrollRight() {
    const container = document.querySelector('.product-right');
    if (container) {
      if (this.mediaQuery.matches) container.scrollLeft += 180;
      else container.scrollLeft += 250;
    }
  }
}
