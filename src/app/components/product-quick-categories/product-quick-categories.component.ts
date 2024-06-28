import { Component } from '@angular/core';
import {Category} from "../../enums/category";

@Component({
  selector: 'app-product-quick-categories',
  templateUrl: './product-quick-categories.component.html',
  styleUrl: './product-quick-categories.component.css'
})
export class ProductQuickCategoriesComponent {
  selectedCategory = Category.Electronics;
  private timeoutHandler: any;

  changeCategory(selectedCategory: Category) {
    if (this.timeoutHandler) {
      clearTimeout(this.timeoutHandler);
    }

    this.timeoutHandler = setTimeout(() => {
      this.selectedCategory = selectedCategory;
    }, 300);
  }

  protected readonly Category = Category;
}
