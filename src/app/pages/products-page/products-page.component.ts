import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {
  currentPage = 1;
  totalPages = 10;
  viewOption = true;
  hoveredProductIndex: number | null = null;
  showFilterPanel = true;
  products: any = []
  isLoading = true;

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    setTimeout(() => {
      this.products = Array.from({ length: 20 }, (_, i) => ({ id: i, name: `Product ${i}` }));
      this.isLoading = false;
    }, 2000);
  }

  receiveData(option: boolean) {
    this.viewOption = option;
  }

  receiveShowFilter(show: boolean) {
    this.showFilterPanel = show;
  }

  receiveCurrentPage(page: number) {
    this.currentPage = page;
  }

  setHoveredProduct(index: number) {
    this.hoveredProductIndex = index;
  }

  clearHoveredProduct() {
    this.hoveredProductIndex = null;
  }

}
