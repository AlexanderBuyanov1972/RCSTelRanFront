import {Component, OnInit} from '@angular/core';
import {CalculateService} from '../calculate.service';
import {NgForm} from '@angular/forms';

export interface FormObject {
  name1: number;
  name2: number;
  name3: number;
}

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
  messageResponseTwo = '';

  constructor(private calculateService: CalculateService) {
  }

  ngOnInit() {
  }

  summa() {
    this.messageResponse = this.input1 + this.input2 + this.input3 + '';
  }

  submit(formClient: NgForm) {
    const formObject = formClient.value as FormObject;
    console.log('formObject.name1--------------->' + formObject.name1)
    console.log('formObject.name2--------------->' + formObject.name2)
    console.log('formObject.name3--------------->' + formObject.name3)
    this.calculateService.calculate(formObject).subscribe(
      value => {
        this.messageResponseTwo = value.content + '';
      }
    );
  }
}
