import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  standalone: true,
  imports: [NgbCarousel, NgbSlide],
})
export class CarouselComponent {
  imagesArray = [
    'assets/fotos/bParadise.jpg',
    'assets/fotos/shoquinAzul.jpg',
    'assets/fotos/shoquinWhite.jpg',
    'assets/fotos/ruscusIsraeli.jpg',
    'assets/fotos/floresParaiso.jpg',
  ];

  images = this.imagesArray.map((img) => img);
}
