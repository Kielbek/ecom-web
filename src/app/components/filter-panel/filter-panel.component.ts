import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css',
})
export class FilterPanelComponent {
  filters = [
    { label: 'Stan', type: 'condition', show: false },
    { label: 'Rodzaj oferty', type: 'offer-type', show: false },
    { label: 'Ceny', type: 'price', show: false },
    { label: 'Sposób dostawy', type: 'shipping', show: false },
    { label: 'Lokalizacja', type: 'location', show: false },
  ];

  conditions = [
    'Nowe',
    'Używane',
    'Odnowione',
    'Uszkodzone',
    'Uszkodzone mechanicznie',
    'Uszkodzone kosmetycznie',
    'Niekompletne',
    'Powystawowe',
    'Z częściami zamiennymi',
    'Inne',
  ];
  offerTypes = ['Kup teraz', 'Licytacja', 'Ogłoszenia'];
  shippingMethods = ['Odbiór osobisty', 'Poczta Polska', 'Kurier', 'Paczkomat'];
  states = [
    'Dolnośląskie',
    'Kujawsko-Pomorskie',
    'Lubelskie',
    'Lubuskie',
    'Łódzkie',
    'Małopolskie',
    'Mazowieckie',
    'Opolskie',
    'Podkarpackie',
    'Podlaskie',
    'Pomorskie',
    'Śląskie',
    'Świętokrzyskie',
    'Warmińsko-Mazurskie',
    'Wielkopolskie',
    'Zachodniopomorskie',
  ];

  priceRange = { from: '', to: '' };
  location = { city: '', state: '' };

  toggleFilter(filterType: string) {
    const filter = this.filters.find((f) => f.type === filterType);
    if (filter) {
      filter.show = !filter.show;
    }
  }

  submitPriceRange() {
    console.log('Price range submitted:', this.priceRange);
  }
}
