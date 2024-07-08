import { Component } from '@angular/core';

@Component({
  selector: 'app-proadct-ship-info',
  templateUrl: './proadct-ship-info.component.html',
  styleUrl: './proadct-ship-info.component.css',
})
export class ProadctShipInfoComponent {
  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
