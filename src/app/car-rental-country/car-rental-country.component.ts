import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalculationService} from '../services/calculation.service';

@Component({
  selector: 'app-car-rental-country',
  templateUrl: './car-rental-country.component.html',
  styleUrls: ['./car-rental-country.component.css']
})
export class CarRentalCountryComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  myTask = false;
  objExp: any;
  rentDaysNumbers: number;
  rentDate: Date;
  priceStart: number;

  constructor(private formBuilder: FormBuilder, private calcService: CalculationService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }


  handleChangeDateAndDays(event: any) {
    this.myTask = true;
    this.objExp = {position: 'fixed', width: '30%'};
    this.rentDaysNumbers = event.rDays as number;
    this.rentDate = event.rDate as Date;
  }

  handleChangeList(event2: number) {
    this.priceStart = event2 as number;
    console.log('this.priceStart-------------->' + this.priceStart);
  }

}
