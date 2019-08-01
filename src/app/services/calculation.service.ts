import {Injectable} from '@angular/core';
import {AbstractRentCompany} from './abstract-rent-company';
import {ModelCar} from '../dto/models/model-car';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  private allModelCars: ModelCar[];

  constructor(private rcs: AbstractRentCompany) {
    this.rcs.getAllModelCars().subscribe(
      value => {
        this.allModelCars = value.content as ModelCar[];
      }
    );
  }

  getAllModelCars() {
    return this.allModelCars;
  }

}

