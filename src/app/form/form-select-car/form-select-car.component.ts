import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculateService} from '../calculate.service';
import {NgForm} from '@angular/forms';
import {SelectionsService} from '../../services/selections.service';


export interface FormObject {
  name1: number;
  name2: number;
  name3: number;
}

@Component({
  selector: 'app-form-select-car',
  templateUrl: './form-select-car.component.html',
  styleUrls: ['./form-select-car.component.css']
})

export class FormSelectCarComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  valuePickupLocation = '';
  valuePickupTime = '';
  valueCarReturnTime = '';
  valueTypeVehicle = '';
  valueAgeDriver = '';
  pickupsLocationArray: string[] = [];
  pickupsTimeArray: string[] = [];
  typeVehicleArray: string[] = [];
  ageDriverArray: string[] = [];
  requiredPickupLocationMessage = 'Required pickup location.';
  requiredPickupTimeMessage = 'Required pickup time.';
  requiredPickupDateMessage = 'Required pickup date.';
  requiredCarReturnTimeMessage = 'Required car return time.';
  requiredCarReturnDateMessage = 'Required car return date.';
  requiredRentDaysMessage = 'Required number of rental days.';
  requiredAgeDriverMessage = 'Required age of driver.';
  minDatePickup: any;
  maxDatePickup: any;
  minDateReturn: any;
  maxDateReturn: any;
  rentDays = 0;
  discountCode = '';

  constructor(private calculateService: CalculateService,
              private selectionsService: SelectionsService) {

  }

  ngOnInit() {
    this.pickupsLocationArray = this.selectionsService.pickupLocationArray;
    this.pickupsTimeArray = this.selectionsService.time;
    this.typeVehicleArray = this.selectionsService.typeVehicleArray;
    this.ageDriverArray = this.selectionsService.ageDriverArray;
    this.minDatePickup = new Date();
    this.minDateReturn = this.getMinDateReturn();
  }

  private  getMinDateReturn() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date;
  }

  summa() {
  }

  submit(formClient: NgForm) {
  }

  showList() {
    this.onChange.emit();
  }
}
