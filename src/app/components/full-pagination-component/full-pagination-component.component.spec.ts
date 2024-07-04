import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPaginationComponentComponent } from './full-pagination-component.component';

describe('FullPaginationComponentComponent', () => {
  let component: FullPaginationComponentComponent;
  let fixture: ComponentFixture<FullPaginationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullPaginationComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FullPaginationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
