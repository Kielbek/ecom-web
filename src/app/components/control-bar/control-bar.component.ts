import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrl: './control-bar.component.css',
})
export class ControlBarComponent {
  @Output() emitOption = new EventEmitter<boolean>();
  @Output() emitCurrentPage = new EventEmitter<number>();
  @Output() emitShowFilterPage = new EventEmitter<boolean>();
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  viewOption = true;
  showFilter = false;

  changeView() {
    this.viewOption = !this.viewOption;
    this.emitOption.emit(this.viewOption);
  }

  showFiler() {
    this.showFilter = !this.showFilter;
    this.emitShowFilterPage.emit(this.showFilter);
  }

  receiveCurrentPage(data: number) {
    this.emitCurrentPage.emit(data);
  }
}
