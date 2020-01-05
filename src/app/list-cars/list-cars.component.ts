import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModelCar} from '../dto/models/model-car';
import {AbstractRentCompany} from '../services/abstract-rent-company';

const DL_11 = new Date('2018-04-10');
const DL_12 = new Date('2018-07-14');

const DL_21 = new Date('2018-08-26');
const DL_22 = new Date('2018-12-19');

const DL_31 = new Date('2019-01-06');
const DL_32 = new Date('2019-04-13');

const DL_41 = new Date('2019-04-29');
const DL_42 = new Date('2019-07-14');

const DL_51 = new Date('2019-08-26');
const DL_52 = new Date('2019-12-19');

const DH_11 = new Date('2018-07-15');
const DH_12 = new Date('2018-12-25');

const DH_21 = new Date('2018-12-20');
const DH_22 = new Date('2018-01-05');

const DH_31 = new Date('2019-04-14');
const DH_32 = new Date('2019-04-28');

const DH_41 = new Date('2019-07-15');
const DH_42 = new Date('2019-08-25');

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  @Input() flagList: boolean;
  @Output() onChangeList = new EventEmitter();
  @Input() countDays: number;
  @Input() rentDate: Date;
  allModelCars: ModelCar[];
  selectModelCar: ModelCar;
  startPrice: any;

  constructor(private rcs: AbstractRentCompany) {
    this.rcs.getAllModelCars().subscribe(
      value => {
        this.allModelCars = value.content as ModelCar[];
      }
    );
  }

  ngOnInit() {

  }

  selectModel(modelCar: ModelCar) {
    this.allModelCars.forEach(x => {
      if (x.vehicleType === modelCar.vehicleType) {
        this.selectModelCar = x;
        this.onChangeList.emit(this.functionGetPrice(this.selectModelCar));
      }
    });
  }

  functionGetPrice(modelCar: ModelCar) {
    if (this.checkPickupDate() === true) {
      this.startPrice = this.getHighPrice(modelCar);
    }
    if (this.checkPickupDate() === false) {
      this.startPrice = this.getHighPrice(modelCar);
    }
    return this.startPrice;
  }

  private checkPickupDate() {
    if ((DL_11 <= this.rentDate && DL_12 >= this.rentDate) ||
      (DL_21 <= this.rentDate && DL_22 >= this.rentDate) ||
      (DL_31 <= this.rentDate && DL_32 >= this.rentDate) ||
      (DL_41 <= this.rentDate && DL_42 > this.rentDate) ||
      (DL_51 <= this.rentDate && DL_52 > this.rentDate)) {
      return false;
    }
    if ((DH_11 <= this.rentDate && DH_12 >= this.rentDate) ||
      (DH_21 <= this.rentDate && DH_22 >= this.rentDate) ||
      (DH_31 <= this.rentDate && DH_32 >= this.rentDate) ||
      (DH_41 <= this.rentDate && DH_42 > this.rentDate)) {
      return true;
    }
    return alert('Date is wrong' + this.rentDate);
  }

  getLowPrice(modelCar: ModelCar) {
    if (this.countDays >= 2 && this.countDays <= 1) {
      return this.countDays * modelCar.daily12Low;
    }
    if (this.countDays >= 3 && this.countDays <= 6) {
      return this.countDays * modelCar.daily36Low;
    }
    if (this.countDays === 7) {
      return this.countDays * modelCar.weeklyLow;
    }
    if (this.countDays >= 8 && this.countDays <= 29) {
      return this.countDays * modelCar.exDay8PlusLow;
    }
    if (this.countDays >= 30) {
      return this.countDays * modelCar.month30PlusLow;
    }
    return alert('Count days are not valid!');
  }

  getHighPrice(modelCar: ModelCar) {
    if (this.countDays >= 2 && this.countDays <= 1) {
      return this.countDays * modelCar.daily12High;
    }
    if (this.countDays >= 3 && this.countDays <= 6) {
      return this.countDays * modelCar.daily36High;
    }
    if (this.countDays === 7) {
      return this.countDays * modelCar.weeklyHigh;
    }
    if (this.countDays >= 8 && this.countDays <= 29) {
      return this.countDays * modelCar.exDay8PlusHigh;
    }
    if (this.countDays >= 30) {
      return this.countDays * modelCar.month30PlusHigh;
    }
    return alert('Count days are not valid!');
  }
}
