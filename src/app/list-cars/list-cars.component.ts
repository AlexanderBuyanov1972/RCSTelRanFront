import {Component, Input, OnInit} from '@angular/core';
import {ModelCar} from '../dto/model-car';
import {AbstractRentCompany} from '../services/abstract-rent-company';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  @Input() flagList;
  allModelCars: ModelCar[];
  selectModelCar: ModelCar;

  constructor(private rcs: AbstractRentCompany) {
    this.rcs.getAllModelCars().subscribe(
      value => {
        this.allModelCars = value.content as ModelCar[];
      }
    );
  }

  ngOnInit() {
  }

  selectModel(vehicleType: string) {
    this.allModelCars.forEach(x => {
      if (x.vehicleType === vehicleType) {
        this.selectModelCar = x;
        console.log(this.selectModelCar);
      }
    });
  }
}
