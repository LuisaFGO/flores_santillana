import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
      description: 'Descripción del producto 1',
      img: 'assets/imgProducts/birdP.jpg',
    },
    {
      name: 'Crops',
      description: 'Descripción del producto 2',
      img: 'assets/imgProducts/crops.jpg',
    },
    {
      name: 'Hydrangeas',
      description: 'Descripción del producto 3',
      img: 'assets/imgProducts/hortensia.jpg',
    },
    {
      name: 'Ruscus',
      description: 'Descripción del producto 4',
      img: 'assets/imgProducts/ruscus.jpg',
    },
    {
      name: 'Post harvest',
      description: 'Descripción del producto 5',
      img: 'assets/imgProducts/postHarvest.jpg',
    },
  ];

  scrollLeft() {
    const container = document.querySelector('.product-right');
    if (container) {
      if (this.mediaQuery.matches) container.scrollLeft -= 180;
      else container.scrollLeft -= 270;
    }
  }

  scrollRight() {
    const container = document.querySelector('.product-right');
    if (container) {
      if (this.mediaQuery.matches) container.scrollLeft += 180;
      else container.scrollLeft += 270;
    }
  }
}
