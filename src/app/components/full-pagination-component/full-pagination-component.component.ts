import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-full-pagination-component',
  templateUrl: './full-pagination-component.component.html',
  styleUrl: './full-pagination-component.component.css'
})
export class FullPaginationComponentComponent {
  @Output() emitCurrentPage = new EventEmitter<number>();
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  visiblePages: number = 5;

  getPageRange() {
    const start = Math.max(this.currentPage - Math.floor(this.visiblePages / 2), 1);
    const end = Math.min(start + this.visiblePages - 1, this.totalPages);
    return Array.from({ length: (end - start + 1) }, (_, i) => start + i);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.emitCurrentPage.emit(this.currentPage);
  }

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
