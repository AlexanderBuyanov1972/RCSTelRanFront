import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SelectionsService} from '../../services/selections.service';
import {MatSelect} from '@angular/material';
import {AbstractRentCompany} from '../../services/abstract-rent-company';
import {LocationBranch} from '../../dto/location-branch';

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
  myFilter: any;
  locationPickup = '';
  dayOfWeek: number;
  locationBranches: LocationBranch[];

// ------------------------рабочий код-----------------------------------------------------------------------
  constructor(private rcs: AbstractRentCompany,
              private selectionsService: SelectionsService) {
    this.rcs.getAllLocationBranches().subscribe(
      value => {
        this.locationBranches = value.content as LocationBranch[];
      }
    );
  }

  ngOnInit() {
    this.pickupsLocationArray = this.selectionsService.pickupLocationArray;
    this.typeVehicleArray = this.selectionsService.typeVehicleArray;
    this.ageDriverArray = this.selectionsService.ageDriverArray;
  }

  summa(datePickup: FormControl, dateReturn: FormControl,
        pickupTime: MatSelect, returnTime: MatSelect, pickupLocation: MatSelect) {
    this.getFilterForDatePicker(pickupLocation);
    this.getRentdays(datePickup, dateReturn, pickupTime, returnTime);
    this.pickupsTimeArray = this.getPickupsTimeArray(this.dayOfWeek);
  }

  private getPickupsTimeArray(dayOfWeek: number): string [] {
    const time = '';
    const day = this.getDay(dayOfWeek);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.locationBranches.length; i++) {
      if (this.locationBranches[i].city === this.locationPickup) {
        // @ts-ignore
        time =  this.locationBranches[i][day] as string;
      }
    }
    return this.getArray(time);
  }
  private getArray(time: string) {
    return [];
  }

  private getDay(dayOfWeek: number): string {
    if (dayOfWeek === 0) {
      return 'Sunday';
    }
    if (dayOfWeek === 1) {
      return 'Monday';
    }
    if (dayOfWeek === 2) {
      return 'Tuesday';
    }
    if (dayOfWeek === 3) {
      return 'Wednesday';
    }
    if (dayOfWeek === 4) {
      return 'Thursday';
    }
    if (dayOfWeek === 5) {
      return 'Friday';
    }
    if (dayOfWeek === 6) {
      return 'Saturday';
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

  private getFilterForDatePicker(pickupLocation: MatSelect) {
    this.locationPickup = pickupLocation.value;
    if (this.locationPickup !== 'Tel Aviv Ben Gurion International Airport TLVT03') {
      this.myFilter = (d: Date): boolean => {
        this.dayOfWeek = d.getDay();
        return d.getDay() !== 6;
      };
    } else {
      this.myFilter = (d: Date): boolean => {
        this.dayOfWeek = d.getDay();
        return true;
      };
    }
  }

  private getRentdays(datePickup: FormControl, dateReturn: FormControl, pickupTime: MatSelect, returnTime: MatSelect) {
    const timeP = pickupTime.value;
    const timeR = returnTime.value;
    let days = 0;
    let day = 0;
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



}

