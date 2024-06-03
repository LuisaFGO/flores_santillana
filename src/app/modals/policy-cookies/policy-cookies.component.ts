import { Component, Output, EventEmitter } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-policy-cookies',
    templateUrl: './policy-cookies.component.html',
    styleUrls: ['./policy-cookies.component.css'],
    standalone: true,
    imports: [NgStyle],
})
export class PolicyCookiesComponent {
  @Output() closeModal = new EventEmitter<void>();
  showModal = false;

  closeModalEvent() {
    this.showModal = false;
    this.closeModal.emit();
  }
}
