import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProadctShipInfoComponent } from './proadct-ship-info.component';

describe('ProadctShipInfoComponent', () => {
  let component: ProadctShipInfoComponent;
  let fixture: ComponentFixture<ProadctShipInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProadctShipInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProadctShipInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
