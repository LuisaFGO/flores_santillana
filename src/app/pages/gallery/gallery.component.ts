import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  gallery = 'assets/gallery/gallery.jpg';

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
}
