import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-grid-view',
  templateUrl: './product-grid-view.component.html',
  styleUrl: './product-grid-view.component.css'
})
export class ProductGridViewComponent {
  @Input() item: number = 0;
}
