import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-specification',
  templateUrl: './technical-specification.component.html',
  styleUrl: './technical-specification.component.css',
})
export class TechnicalSpecificationComponent {
  showModal: boolean = false;
  specifications = [
    { label: 'Ekran', value: '48" OLED' },
    { label: 'Rozdzielczość', value: '4K UHD (3840 x 2160)' },
    { label: 'Częstotliwość odświeżania', value: '120 Hz' },
    { label: 'Technologia dźwięku', value: 'Dolby Atmos' },
    { label: 'Obsługa', value: 'Airplay 2' },
    { label: 'Kolor', value: 'Szary' },
    { label: 'Waga', value: '15 kg' },
    { label: 'Wymiary (S x W x G)', value: '1096 x 625 x 47 mm' },
    { label: 'System operacyjny', value: 'WebOS' },
  ];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
