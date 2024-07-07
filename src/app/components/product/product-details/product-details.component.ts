import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productCount = 0;

  add() {
    this.productCount++;
  }

  minus() {
    if (this.productCount > 0) {
      this.productCount--;
    }
  }
}
