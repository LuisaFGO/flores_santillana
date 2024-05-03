import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  icons = [
    'assets/icons/highQuality.png',
    'assets/icons/bestPrice.png',
    'assets/icons/distribution.png'
  ]

  flor = 'assets/fotos/floresMuestra.jpg';

}
