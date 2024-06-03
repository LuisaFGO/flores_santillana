import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    standalone: true,
    imports: [
        NgbCollapse,
        RouterLink,
        RouterLinkActive,
    ],
})
export class NavbarComponent {
  isOpen = true;

  logofs = 'assets/logos/logofs.png';

  navDeploy() {
    this.isOpen = !this.isOpen;
  }
}
