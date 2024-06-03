import { Component, ViewChild } from '@angular/core';
import { LegalPolicyComponent } from 'src/app/modals/legal-policy/legal-policy.component';
import { PolicyCookiesComponent } from 'src/app/modals/policy-cookies/policy-cookies.component';
import { PolicyCookiesComponent as PolicyCookiesComponent_1 } from '../../modals/policy-cookies/policy-cookies.component';
import { LegalPolicyComponent as LegalPolicyComponent_1 } from '../../modals/legal-policy/legal-policy.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    standalone: true,
    imports: [LegalPolicyComponent_1, PolicyCookiesComponent_1],
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
