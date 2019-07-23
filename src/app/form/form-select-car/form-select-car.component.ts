import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculateService} from '../calculate.service';
import {FormControl, NgForm} from '@angular/forms';
import {SelectionsService} from '../../services/selections.service';

@Component({
  selector: 'app-form-select-car',
  templateUrl: './form-select-car.component.html',
  styleUrls: ['./form-select-car.component.css']
})

export class FormSelectCarComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  minDaysRent = 1;
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
  requiredPickupDateMessage = 'Required pickup datePickup.';
  requiredCarReturnTimeMessage = 'Required car return time.';
  requiredCarReturnDateMessage = 'Required car return datePickup.';
  requiredRentDaysMessage = 'Required number of rental days.';
  requiredAgeDriverMessage = 'Required age of driver.';

  rentDays: number;
  discountCode = '';
  // --------------------------------------------
  datePickup = new FormControl();
  dateReturn = new FormControl();
  minDatePickup = new Date();

  constructor(private calculateService: CalculateService,
              private selectionsService: SelectionsService) {
  }

  functionReturn(date: FormControl) {
    const dt = new Date(date.value);
    dt.setDate(dt.getDate() + this.minDaysRent);
    return dt;
  }

  functionPickup(date: FormControl) {
    if (date.value !== null) {
      const dt = new Date(date.value);
      dt.setDate(dt.getDate() - this.minDaysRent);
      return dt;
    }

  }

  ngOnInit() {
    this.pickupsLocationArray = this.selectionsService.pickupLocationArray;
    this.pickupsTimeArray = this.selectionsService.time;
    this.typeVehicleArray = this.selectionsService.typeVehicleArray;
    this.ageDriverArray = this.selectionsService.ageDriverArray;
  }


  summa() {
  }

  submit(formClient: NgForm) {
  }

  showList() {
    this.onChange.emit();
  }

  flagSelectOptions(time: string) {
    if (new Date().getDate() === new Date(this.datePickup.value).getDate()) {
      const minutesCurrent = new Date().getMinutes();
      const hoursCurrent = new Date().getHours();
      const arrGetTime = time.split(':');
      // tslint:disable-next-line:radix
      const hoursGetTime = Number.parseInt(arrGetTime[0]);
      // tslint:disable-next-line:radix
      const minutesGetTime = Number.parseInt(arrGetTime[1]);
      if (hoursCurrent < hoursGetTime) {
        return false;
      }
      if (hoursCurrent === hoursGetTime && minutesCurrent < minutesGetTime) {
        return false;
      }
      return true;
    }
  }
}

