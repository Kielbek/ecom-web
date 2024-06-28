import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopNavigationMenuComponent } from './desktop-navigation-menu.component';

describe('DesktopNavigationMenuComponent', () => {
  let component: DesktopNavigationMenuComponent;
  let fixture: ComponentFixture<DesktopNavigationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesktopNavigationMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesktopNavigationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
