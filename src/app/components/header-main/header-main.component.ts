import { Component } from '@angular/core';

@Component({
  selector: 'app-header-main',
  templateUrl: './header-main.component.html',
  styleUrl: './header-main.component.css'
})
export class HeaderMainComponent {
  showCategory = false;
  showProctorCategory() {
    this.showCategory = !this.showCategory;
  }
}
