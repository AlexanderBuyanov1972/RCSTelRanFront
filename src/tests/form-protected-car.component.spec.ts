import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProtectedCarComponent } from '../app/form/form-protected-car/form-protected-car.component';

describe('FormProtectedCarComponent', () => {
  let component: FormProtectedCarComponent;
  let fixture: ComponentFixture<FormProtectedCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProtectedCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProtectedCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
