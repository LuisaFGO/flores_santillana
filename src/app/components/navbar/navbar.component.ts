import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen = true;

  logofs = 'assets/logos/logofs.png';

  navDeploy() {
    this.isOpen = !this.isOpen;
  }
}
