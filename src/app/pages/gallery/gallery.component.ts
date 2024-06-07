import { Component, ViewChild } from '@angular/core';
import { DetailProductComponent } from 'src/app/modals/detail-product/detail-product.component';
import { MessageWspComponent } from '../../shared/message-wsp/message-wsp.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { DetailProductComponent as DetailProductComponent_1 } from '../../modals/detail-product/detail-product.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [
    NavbarComponent,
    DetailProductComponent_1,
    NgFor,
    RouterLink,
    FooterComponent,
    MessageWspComponent,
  ],
})
export class GalleryComponent {
  @ViewChild(DetailProductComponent) modal!: DetailProductComponent;
  selectedProduct: any = null;

  gallery = 'assets/gallery/gallery.jpg';

  products = [
    {
      name: 'Birds of paradise',
      name_spa: 'Aves del paraíso',
      img: 'assets/imgProducts/birdP.jpg',
      allDescription:
        'Strelitzia reginae, popularly called bird of paradise, is a herbaceous species native to South Africa. It is widely cultivated as an ornamental plant because of the peculiar shape of its flower. *information taken from wikipedia here',
      sizes: [
        {
          name: 'SuperSelect',
          text: '(40 stems per box - QB)- 8 bouquets of 5 stems - 20-24 cm',
        },
        {
          name: 'Select',
          text: '(40 stems per box - QB)- 8 bouquets of 5 stems - 16-20 cm',
        },
        {
          name: 'Fancy',
          text: '(60 stems per box - QB)- 12 bouquets of 5 stems - 11-15 cm',
        },
      ],
      photos: [
        { img: 'assets/photosDetail/bParadise_1.jpg', name: 'bParadise_1' },
        { img: 'assets/photosDetail/bParadise_2.jpg', name: 'bParadise_2' },
        { img: 'assets/photosDetail/bParadise_3.jpg', name: 'bParadise_3' },
        { img: 'assets/photosDetail/bParadise_4.jpg', name: 'bParadise_4' },
        { img: 'assets/photosDetail/bParadise_5.jpg', name: 'bParadise_5' },
        { img: 'assets/photosDetail/bParadise_6.jpg', name: 'bParadise_6' },
      ],
    },
    {
      name: 'Hydrangeas',
      name_spa: 'Hortencias',
      img: 'assets/imgProducts/hortensia.jpg',
      allDescription:
        'The genus Hydrangea includes ornamental plants, commonly known as hydrangeas, native to South and East Asia2 (specifically China, Korea, the Himalayas, Indonesia and Japan) and the Americas. The greatest diversity of species of this genus is found in the areas of China, Korea and Japan. Protected with transparent plastic and individually hydrated.',
      sizes: [
        { name: 'Jumbo', text: '(20 stems per box - QB)- 24-27cm' },
        { name: 'Premium', text: '(30-35 stems per box - QB)- 20-23cm' },
        { name: 'Select', text: '(40 stems per box - QB)- 16-20cm' },
        { name: 'Mini', text: '(60 stems per box - QB)- 10-14cm' },
      ],
      photos: [
        { img: 'assets/photosDetail/hydrangeas_1.jpg', name: 'hydrangeas_1' },
        { img: 'assets/photosDetail/hydrangeas_2.jpg', name: 'hydrangeas_2' },
        { img: 'assets/photosDetail/hydrangeas_3.jpg', name: 'hydrangeas_3' },
        { img: 'assets/photosDetail/hydrangeas_4.jpg', name: 'hydrangeas_4' },
        { img: 'assets/photosDetail/hydrangeas_5.jpg', name: 'hydrangeas_5' },
        { img: 'assets/photosDetail/hydrangeas_6.jpg', name: 'hydrangeas_6' },
        { img: 'assets/photosDetail/hydrangeas_7.jpg', name: 'hydrangeas_7' },
        { img: 'assets/photosDetail/hydrangeas_8.jpg', name: 'hydrangeas_8' },
        { img: 'assets/photosDetail/hydrangeas_9.jpg', name: 'hydrangeas_9' },
        { img: 'assets/photosDetail/hydrangeas_10.jpg', name: 'hydrangeas_10' },
        { img: 'assets/photosDetail/hydrangeas_11.jpg', name: 'hydrangeas_11' },
      ],
    },
    {
      name: 'Ruscus',
      name_spa: 'Ruscus Israeli',
      img: 'assets/imgProducts/ruscus.jpg',
      allDescription:
        'Ruscus is a genus of six species belonging to the family Asparagaceae, formerly Ruscaceae, which until a few years ago was located within Liliaceae broadly defined. The genus is native to western and southern Europe (England), Macaronesia, northwest Africa, and southwest Asia, east of the Caucasus.',
      available: 'Available in sizes of 40 cm, 50 cm and 60 cm.',
      sizes: [
        {
          name: 'Select',
          text: '(400 stems per box - QB)- 40 bouquets of 10 stems',
        },
      ],
      photos: [
        { img: 'assets/photosDetail/ruscus_1.jpg', name: 'ruscus_1' },
        { img: 'assets/photosDetail/ruscus_2.jpg', name: 'ruscus_2' },
        { img: 'assets/photosDetail/ruscus_3.jpg', name: 'ruscus_3' },
        { img: 'assets/photosDetail/ruscus_4.jpg', name: 'ruscus_4' },
        { img: 'assets/photosDetail/ruscus_5.jpg', name: 'ruscus_5' },
        { img: 'assets/photosDetail/ruscus_6.jpg', name: 'ruscus_6' },
        { img: 'assets/photosDetail/ruscus_7.jpg', name: 'ruscus_7' },
      ],
    },
  ];

  Process = [
    {
      name: 'Post harvest',
      name_spa: 'Post Cosecha',
      img: 'assets/imgProducts/postHarvest.jpg',
      allDescription:
        'Technical processes of preparing the flower before dispatching to the customer.',
      photos: [
        { img: 'assets/photosDetail/postH_1.jpg', name: 'postH_1' },
        { img: 'assets/photosDetail/postH_2.jpg', name: 'postH_2' },
        { img: 'assets/photosDetail/postH_3.jpg', name: 'postH_3' },
        { img: 'assets/photosDetail/postH_4.jpg', name: 'postH_4' },
        { img: 'assets/photosDetail/postH_5.jpg', name: 'postH_5' },
        { img: 'assets/photosDetail/postH_6.jpg', name: 'postH_6' },
        { img: 'assets/photosDetail/postH_7.jpg', name: 'postH_7' },
        { img: 'assets/photosDetail/postH_8.jpg', name: 'postH_8' },
      ],
    },
    {
      name: 'Crops',
      name_spa: 'Cultivos',
      img: 'assets/imgProducts/crops.jpg',
      allDescription:
        'Development of processes in the field to produce the best flowers',
      photos: [
        { img: 'assets/photosDetail/crops_1.jpg', name: 'crops_1' },
        { img: 'assets/photosDetail/crops_2.jpg', name: 'crops_2' },
        { img: 'assets/photosDetail/crops_3.jpg', name: 'crops_3' },
        { img: 'assets/photosDetail/crops_4.jpg', name: 'crops_4' },
        { img: 'assets/photosDetail/crops_5.jpg', name: 'crops_5' },
      ],
    },
  ];

  openModal(product: any) {
    this.selectedProduct = product;
    this.modal.showModal = true;
  }
}
