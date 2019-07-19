import {Component, OnInit} from '@angular/core';
import {CalculateService} from '../calculate.service';

// export interface FormObject {
//   name1: number;
//   name2: number;
//   name3: number;
//   name4: number;
// }

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})

export class FormClientComponent implements OnInit {
  input1 = '';
  input2 = '';
  input3 = '';
  messageResponse = '';

  constructor(private calculateService: CalculateService) {
  }

  ngOnInit() {
  }

  submit() {
    this.messageResponse = this.input1 + this.input2 + this.input3 + '';
    // this.calculateService.calculate(object).subscribe(
    //   value => {
    //     this.messageResponse = value.content + '';
    //   }
    // );
  }
}
