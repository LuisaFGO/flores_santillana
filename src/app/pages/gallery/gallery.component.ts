import { Component, ViewChild } from '@angular/core';
import { DetailProductComponent } from 'src/app/modals/detail-product/detail-product.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  @ViewChild(DetailProductComponent) modal!: DetailProductComponent;
  selectedProduct: any = null;

  gallery = 'assets/gallery/gallery.jpg';

  products = [
    {
      name: 'Birds of paradise',
      description: 'Descripción del producto 1',
      img: 'assets/imgProducts/birdP.jpg',
      allDescription:
        'Strelitzia reginae, popularly called bird of paradise, is a herbaceous species native to South Africa. It is widely cultivated as an ornamental plant because of the peculiar shape of its flower. *information taken from wikipedia here',
    },
    {
      name: 'Crops',
      description: 'Descripción del producto 2',
      img: 'assets/imgProducts/crops.jpg',
      allDescription: 'hola',
    },
    {
      name: 'Hydrangeas',
      description: 'Descripción del producto 3',
      img: 'assets/imgProducts/hortensia.jpg',
      allDescription:
        'The genus Hydrangea includes ornamental plants, commonly known as hydrangeas, native to South and East Asia2 (specifically China, Korea, the Himalayas, Indonesia and Japan) and the Americas. The greatest diversity of species of this genus is found in the areas of China, Korea and Japan. Protected with transparent plastic and individually hydrated.',
    },
    {
      name: 'Ruscus',
      description: 'Descripción del producto 4',
      img: 'assets/imgProducts/ruscus.jpg',
      allDescription:
        'Ruscus is a genus of six species belonging to the family Asparagaceae, formerly Ruscaceae, which until a few years ago was located within Liliaceae broadly defined. The genus is native to western and southern Europe (England), Macaronesia, northwest Africa, and southwest Asia, east of the Caucasus.',
    },
    {
      name: 'Post harvest',
      description: 'Descripción del producto 5',
      img: 'assets/imgProducts/postHarvest.jpg',
      allDescription: 'hola',
    },
  ];

  openModal(product: any) {
    console.log('openModal llamado con:', product);
    this.selectedProduct = product;
    this.modal.showModal = true;
  }
}
