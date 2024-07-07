import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOpinionsComponent } from './product-opinions.component';

describe('ProductOpinionsComponent', () => {
  let component: ProductOpinionsComponent;
  let fixture: ComponentFixture<ProductOpinionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductOpinionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductOpinionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
