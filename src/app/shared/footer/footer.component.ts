import { Component, ViewChild } from '@angular/core';
import { LegalPolicyComponent } from 'src/app/modals/legal-policy/legal-policy.component';
import { PolicyCookiesComponent } from 'src/app/modals/policy-cookies/policy-cookies.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @ViewChild(LegalPolicyComponent) modalLegal!: LegalPolicyComponent;
  @ViewChild(PolicyCookiesComponent) modalPolicy!: PolicyCookiesComponent;

  openLegalModal() {
    this.modalLegal.showModal = true;
  }

  openCookiesModal() {
    this.modalPolicy.showModal = true;
  }

  logo = 'assets/logos/logoBlanco.png';
}
