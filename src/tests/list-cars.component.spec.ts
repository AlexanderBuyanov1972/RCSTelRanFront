import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarsComponent } from '../app/list-cars/list-cars.component';

describe('ListCarsComponent', () => {
  let component: ListCarsComponent;
  let fixture: ComponentFixture<ListCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
