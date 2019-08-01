import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {SelectionsService} from '../../services/selections.service';
import {MatSelect} from '@angular/material';
import {AbstractRentCompany} from '../../services/abstract-rent-company';
import {Branch} from '../../dto/locations/branch';
import {Locations} from '../../dto/locations/locations';
import {OpenHours} from '../../dto/locations/open-hours';

@Component({
  selector: 'app-form-select-car',
  templateUrl: './form-select-car.component.html',
  styleUrls: ['./form-select-car.component.css']
})

export class FormSelectCarComponent implements OnInit {
  @Output() onChange = new EventEmitter();
  valuePickupLocation = '';
  valueReturnLocation = '';
  valueTypeVehicle = '';
  valueAgeDriver = '';
  pickupsLocationArray: string[] = [];
  returnsLocationArray: string[] = [];
  pickupsTimeArray: string[] = [];
  returnsTimeArray: string[] = [];
  typeVehicleArray: string[] = [];
  ageDriverArray: string[] = [];
  requiredPickupLocationMessage = 'Required pickup location.';
  requiredReturnLocationMessage = 'Required return location.';
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
  locationPickup: string;
  locationReturn: string;
  dayOfWeekPickup: number;
  dayOfWeekReturn: number;
  locationBranches: Branch[];
  timeBefore = 1;
  map = new Map<string, OpenHours>();
  myFilterPickup: any;
  myFilterReturn: any;

  // ------------------------рабочий код-----------------------------------------------------------------------
  constructor(private rcs: AbstractRentCompany,
              private selectionsService: SelectionsService) {
    this.rcs.getAllLocationBranches().subscribe(
      value => {
        const valueLocations = value.content as Locations;
        this.locationBranches = valueLocations.locations as Branch[];
        this.fillMap();
      },
      error => {
        console.log('Dont get the location branches');
      }
    );
  }

  ngOnInit() {
    this.pickupsLocationArray = this.selectionsService.locationArray;
    this.returnsLocationArray = this.selectionsService.locationArray;
    this.typeVehicleArray = this.selectionsService.typeVehicleArray;
    this.ageDriverArray = this.selectionsService.ageDriverArray;
  }


  private fillMap() {
    const length = this.locationBranches.length;
    for (let i = 0; i < length; i++) {
      this.map.set(this.locationBranches[i].name, this.locationBranches[i].openhours);
    }
  }

// ************************************************************************************************
  summa(datePickup: FormControl, dateReturn: FormControl,
        pickupTime: MatSelect, returnTime: MatSelect,
        pickupLocationSelect: MatSelect, returnLocationSelect: MatSelect) {
    this.getFilterForDatePicker(pickupLocationSelect, returnLocationSelect);
    this.pickupsTimeArray = this.getTimeArray(this.dayOfWeekPickup, this.locationPickup);
    this.returnsTimeArray = this.getTimeArray(this.dayOfWeekReturn, this.locationReturn);
    this.getRentDays(datePickup, dateReturn, pickupTime, returnTime);
  }

  private getFilterForDatePicker(pickupLocationSelect: MatSelect, returnLocationSelect: MatSelect) {
    this.locationPickup = pickupLocationSelect.value as string;
    if (this.locationPickup !== undefined) {
      if (this.locationPickup !== 'Ben-Gurion-International-Airport') {
        this.myFilterPickup = (d: Date): boolean => {
          this.dayOfWeekPickup = d.getDay();
          return this.dayOfWeekPickup !== 6;
        };
      } else {
        this.myFilterPickup = (d: Date): boolean => {
          this.dayOfWeekPickup = d.getDay();
          return true;
        };
      }
    }
    this.locationReturn = returnLocationSelect.value as string;
    if (this.locationReturn !== undefined) {
      if (this.locationReturn !== 'Ben-Gurion-International-Airport') {
        this.myFilterReturn = (dR: Date): boolean => {
          this.dayOfWeekReturn = dR.getDay();
          return this.dayOfWeekReturn !== 6;
        };
      } else {
        this.myFilterReturn = (dR: Date): boolean => {
          this.dayOfWeekReturn = dR.getDay();
          return true;
        };
      }
    }
  }

  private getTimeArray(dayOfWeek: number, location: string): string [] {
    if (dayOfWeek !== undefined && location !== undefined) {
      const time = this.getDayString(dayOfWeek, location);
      return this.getArray(time, location);
    }
  }

  private getDayString(dayOfWeek: number, location: string): string {
    if (dayOfWeek !== undefined && location !== undefined) {
      const openhours = this.map.get(location) as OpenHours;
      if (openhours !== undefined) {
        if (dayOfWeek === 0) {
          return openhours.sunday as string;
        }
        if (dayOfWeek === 1) {
          return openhours.monday as string;
        }
        if (dayOfWeek === 2) {
          return openhours.tuesday as string;
        }
        if (dayOfWeek === 3) {
          return openhours.wednesday as string;
        }
        if (dayOfWeek === 4) {
          return openhours.thursday as string;
        }
        if (dayOfWeek === 5) {
          return openhours.friday as string;
        }
        if (dayOfWeek === 6) {
          return openhours.saturday as string;
        }
      }
    }
  }

  private getArray(time: string, location: string) {
    const result = [];
    if (time !== undefined && location !== undefined) {
      let line = '';
      let count = 0;
      const strs = time.split('-');
      // tslint:disable-next-line:radix
      let valueS = Number.parseInt(strs[0].replace(':', ''));
      if (valueS % 100 === 30) {
        valueS += 20;
      }
      // tslint:disable-next-line:radix
      let valueE = Number.parseInt(strs[1].replace(':', ''));
      if (valueE % 100 === 30) {
        valueE += 20;
      }
      if ((valueE - valueS) % 50 === 0) {
        count = (valueE - valueS) / 50 - 2 * this.timeBefore;
      } else {
        count = (valueE - valueS) / 50 + 1 - 2 * this.timeBefore;
      }

      if (location === 'Ben-Gurion-International-Airport') {
        count = (valueE - valueS) / 50 - 1;
      }

      for (let i = 0; i <= count; i++) {
        line = String(valueS + i * 50);
        const lengthLine = line.length;
        if (lengthLine === 4) {
          line = line.substring(0, lengthLine - 2) + ':' + line.substring(lengthLine - 2);
        }
        if (lengthLine === 3) {
          line = '0' + line.substring(0, lengthLine - 2) + ':' + line.substring(lengthLine - 2);
        }
        if (lengthLine === 2) {
          line = '00:30';
        }
        if (lengthLine === 1) {
          line = '00:00';
        }
        result.push(line.replace(':50', ':30'));
      }
    }
    return result;
  }

  // ------------------------------------------------------------------------------

  private getRentDays(datePickup: FormControl, dateReturn: FormControl,
                      pickupTime: MatSelect, returnTime: MatSelect) {
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
      return !(hoursCurrent === hoursGetTime && minutesCurrent < minutesGetTime);
    }
  }
}

