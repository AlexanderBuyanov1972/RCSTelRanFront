import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRentalCountryComponent } from '../app/car-rental-country/car-rental-country.component';

describe('CarRentalCountryComponent', () => {
  let component: CarRentalCountryComponent;
  let fixture: ComponentFixture<CarRentalCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarRentalCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRentalCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
