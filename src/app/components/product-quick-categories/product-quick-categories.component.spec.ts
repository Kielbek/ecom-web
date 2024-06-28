import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuickCategoriesComponent } from './product-quick-categories.component';

describe('ProductQuickCategoriesComponent', () => {
  let component: ProductQuickCategoriesComponent;
  let fixture: ComponentFixture<ProductQuickCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductQuickCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductQuickCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
