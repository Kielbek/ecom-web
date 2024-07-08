import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-opinion-pop-up',
  templateUrl: './product-opinion-pop-up.component.html',
  styleUrl: './product-opinion-pop-up.component.css',
})
export class ProductOpinionPopUpComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
