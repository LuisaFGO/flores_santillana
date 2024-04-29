import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  imagesArray = [
    'assets/fotos/floresParaiso.jpg',
    'assets/fotos/shoquinAzul.jpg',
    'assets/fotos/shoquinWhite.jpg',
    'assets/fotos/ruscusIsraeli.jpg',
  ]

  images = this.imagesArray.map(img => img);
}
