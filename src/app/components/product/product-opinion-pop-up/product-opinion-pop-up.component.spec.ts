import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOpinionPopUpComponent } from './product-opinion-pop-up.component';

describe('ProductOpinionPopUpComponent', () => {
  let component: ProductOpinionPopUpComponent;
  let fixture: ComponentFixture<ProductOpinionPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOpinionPopUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOpinionPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
