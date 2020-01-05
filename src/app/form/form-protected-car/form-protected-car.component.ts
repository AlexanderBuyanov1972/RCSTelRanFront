import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-form-protected-car',
  templateUrl: './form-protected-car.component.html',
  styleUrls: ['./form-protected-car.component.css']
})
export class FormProtectedCarComponent implements OnInit {
@Input() startPrice: number;
@Input() modelCar: string;
  check1 = true;
  check2 = true;
  check3 = true;
  check4 = false;
  check5 = false;
  check6 = false;
  check7 = false;
  check8 = false;
  check9 = false;
  check10 = false;
  check11 = false;
  check12 = false;
  check13 = false;
  check14 = false;
  constructor() { }
  ngOnInit() { }

}
