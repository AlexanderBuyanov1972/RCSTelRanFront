import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalAbroadComponent } from './car-rental-abroad.component';

describe('CarRentalAbroadComponent', () => {
  let component: CarRentalAbroadComponent;
  let fixture: ComponentFixture<CarRentalAbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentalAbroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
