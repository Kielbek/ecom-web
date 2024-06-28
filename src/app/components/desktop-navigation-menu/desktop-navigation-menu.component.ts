import {AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-desktop-navigation-menu',
  templateUrl: './desktop-navigation-menu.component.html',
  styleUrl: './desktop-navigation-menu.component.css'
})
export class DesktopNavigationMenuComponent implements OnInit {
  categories = [
    { name: 'Elektronika', content: 'Content for Elektronika' },
    { name: 'Moda', content: 'Content for Moda' },
    { name: 'Dom i Ogród', content: 'Content for Dom i Ogród' },
    { name: 'Biżuteria i Uroda', content: 'Content for Biżuteria i Uroda' },
    { name: 'Książki, Filmy i Muzyka', content: 'Content for Książki, Filmy i Muzyka' },
    { name: 'Kolekcje i Sztuka', content: 'Content for Kolekcje i Sztuka' },
    { name: 'Sport i Podróże', content: 'Content for Sport i Podróże' },
    { name: 'Motoryzacja', content: 'Content for Motoryzacja' },
  ];

  displayedCategories:any = [];
  displayedOption:any = [];

  ngOnInit() {
    this.updateCategories();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateCategories();
  }

  updateCategories() {
    const containerWidth = document.querySelector('.all')!.clientWidth;
    let totalWidth = 0;
    this.displayedCategories = [];
    this.displayedOption = [];

    for (const category of this.categories) {
      const categoryWidth = this.calculateCategoryWidth(category.name);
      if (totalWidth + categoryWidth < containerWidth) {
        this.displayedCategories.push(category);
        totalWidth += categoryWidth;
      } else {
        this.displayedOption.push(category);
      }
    }
  }

  calculateCategoryWidth(name: string): number {
    const tempElement = document.createElement('span');
    tempElement.style.visibility = 'hidden';
    tempElement.style.position = 'absolute';
    tempElement.innerText = name;
    document.body.appendChild(tempElement);
    const width = tempElement.offsetWidth;
    document.body.removeChild(tempElement);
    return width + 80;
  }

}
