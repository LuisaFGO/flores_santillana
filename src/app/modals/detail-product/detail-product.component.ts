import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent {
  @Input() product: any;
  @Output() closeModal = new EventEmitter<void>();
  showModal = false;

  closeModalEvent() {
    this.showModal = false;
    this.closeModal.emit();
  }
}
