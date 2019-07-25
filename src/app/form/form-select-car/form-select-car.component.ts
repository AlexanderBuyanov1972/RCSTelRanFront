import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import {SelectionsService} from '../../services/selections.service';
import {MatSelect} from '@angular/material';
import {AbstractRentCompany} from '../../services/abstract-rent-company';

@Component({
  selector: 'app-form-select-car',
  templateUrl: './form-select-car.component.html',
  styleUrls: ['./form-select-car.component.css']
})

export class FormSelectCarComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  valuePickupLocation = '';
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
  valuePickupTime = '';
  valueReturnTime = '';
  private minDaysRent = 1;

// ------------------------рабочий код-----------------------------------------------------------------------
  constructor(private rcs: AbstractRentCompany,
              private selectionsService: SelectionsService) {
  }

  ngOnInit() {
    this.pickupsLocationArray = this.selectionsService.pickupLocationArray;
    this.pickupsTimeArray = this.selectionsService.time;
    this.typeVehicleArray = this.selectionsService.typeVehicleArray;
    this.ageDriverArray = this.selectionsService.ageDriverArray;
  }


  // tslint:disable-next-line:variable-name
  summa(datePickup: FormControl, dateReturn: FormControl, pickup_time: MatSelect, return_time: MatSelect) {
    let days = 0;
    let day = 0;
    const timeP = pickup_time.value;
    const timeR = return_time.value;

    if (datePickup.value !== null && dateReturn.value !== null) {
      days = (new Date(dateReturn.value).getTime() - new Date(datePickup.value).getTime())
        / (1000 * 60 * 60 * 24);
      // tslint:disable-next-line:max-line-length
      if ((timeP !== '' || timeP !== null) && (timeR !== '' || timeR !== null)) {
        // tslint:disable-next-line:radix
        const numTimePickup = Number.parseInt(timeP.replace(':', ''));
        // tslint:disable-next-line:radix
        const numTimeReturn = Number.parseInt(timeR.replace(':', ''));
        numTimeReturn - numTimePickup > 0 ? day = 1 : day = 0;
      }
      this.rentDays = days + day;
    }

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

