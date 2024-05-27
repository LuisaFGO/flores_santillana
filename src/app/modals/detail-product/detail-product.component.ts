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
  currentSlide = 0;

  closeModalEvent() {
    this.showModal = false;
    this.closeModal.emit();
  }
  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.product?.photos.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide === this.product?.photos.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }
}
