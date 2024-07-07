import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-technical-specification-pop-up',
  templateUrl: './technical-specification-pop-up.component.html',
  styleUrl: './technical-specification-pop-up.component.css',
})
export class TechnicalSpecificationPopUpComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
