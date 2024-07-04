import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrl: './product-list-view.component.css'
})
export class ProductListViewComponent {
  @Input() item: number = 0;
}
