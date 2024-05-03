import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  

  icons = [
    {icon:'assets/icons/highQuality.png', text: 'High quality'},
    {icon:'assets/icons/price.png', text: 'Best price'},
    {icon:'assets/icons/distribution.png', text: 'Direct from our crops'}
  ]

  flor = 'assets/fotos/floresMuestra.jpg';

}
