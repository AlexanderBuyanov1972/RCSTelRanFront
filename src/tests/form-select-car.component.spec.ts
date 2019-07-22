import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatFormFieldModule} from '@angular/material/form-field';


import { FormSelectCarComponent } from '../app/form/form-select-car/form-select-car.component';

describe('FormClientComponent', () => {
  let component: FormSelectCarComponent;
  let fixture: ComponentFixture<FormSelectCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSelectCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSelectCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
