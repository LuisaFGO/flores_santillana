import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
      img: 'assets/icons/etiqueta-del-precio.png',
    },
    {
      name: 'Post harvest',
      description: 'Descripción del producto 2',
      img: 'assets/icons/etiqueta-del-precio.png',
    },
    {
      name: 'Hydrangeas',
      description: 'Descripción del producto 3',
      img: 'assets/icons/etiqueta-del-precio.png',
    },
    {
      name: 'Crops',
      description: 'Descripción del producto 4',
      img: 'assets/icons/etiqueta-del-precio.png',
    },
    {
      name: 'Ruscus',
      description: 'Descripción del producto 5',
      img: 'assets/icons/etiqueta-del-precio.png',
    },
  ];

  scrollLeft() {
    const container = document.querySelector('.product-right');
    if (container) {
      container.scrollLeft -= 300; // Cambia este valor según la cantidad de desplazamiento deseada
    }
  }

  scrollRight() {
    const container = document.querySelector('.product-right');
    if (container) {
      container.scrollLeft += 300; // Cambia este valor según la cantidad de desplazamiento deseada
    }
  }
}
