import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrl: './pagination-component.component.css'
})
export class PaginationComponentComponent {
  @Output() emitCurrentPage = new EventEmitter<number>();
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.emitCurrentPage.emit(this.currentPage);
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.emitCurrentPage.emit(this.currentPage);
    }
  }
}
