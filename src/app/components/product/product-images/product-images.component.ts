import { Component } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css',
})
export class ProductImagesComponent {
  productImage: string[] = [];
  currentImage: number = 0;

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.productImage.push(
        'assets/TELEWIZOR-LG-OLED48C31LA-4K-120Hz-Airplay2-Dolby-Atmos-Magic-Pilot.jpeg',
      );
    }
  }

  pickPhoto(image: number) {
    this.currentImage = image;
  }

  changeToRight() {
    if (this.currentImage + 1 < this.productImage.length) {
      this.currentImage++;
    }
  }

  changeToLeft() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }
}
