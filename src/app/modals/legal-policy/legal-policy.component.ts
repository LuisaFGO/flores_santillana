import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-legal-policy',
  templateUrl: './legal-policy.component.html',
  styleUrls: ['./legal-policy.component.css'],
})
export class LegalPolicyComponent {
  @Output() closeModal = new EventEmitter<void>();
  showModal = false;

  closeModalEvent() {
    this.showModal = false;
    this.closeModal.emit();
  }
}
