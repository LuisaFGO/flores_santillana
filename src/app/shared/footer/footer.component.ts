import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LegalPolicyComponent } from 'src/app/modals/legal-policy/legal-policy.component';
import { PolicyCookiesComponent } from 'src/app/modals/policy-cookies/policy-cookies.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(private modalService: NgbModal) {}

  openLegalModal() {
    this.modalService.open(LegalPolicyComponent);
  }

  openCookiesModal() {
    this.modalService.open(PolicyCookiesComponent);
  }

  logo = 'assets/logos/logoBlanco.png';
}
