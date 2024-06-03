import { Component } from '@angular/core';
import { MessageWspComponent } from '../../shared/message-wsp/message-wsp.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
    styleUrls: ['./about-us.component.css'],
    standalone: true,
    imports: [
        NavbarComponent,
        RouterLink,
        FooterComponent,
        MessageWspComponent,
    ],
})
export class AboutUsComponent {
  PhotoCar = 'assets/aboutUs/1.jpg';
  woman = 'assets/aboutUs/2.jpg';
}
