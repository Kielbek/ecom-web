import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSpecificationPopUpComponent } from './technical-specification-pop-up.component';

describe('TechnicalSpecificationPopUpComponent', () => {
  let component: TechnicalSpecificationPopUpComponent;
  let fixture: ComponentFixture<TechnicalSpecificationPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnicalSpecificationPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnicalSpecificationPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
