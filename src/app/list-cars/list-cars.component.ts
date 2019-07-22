import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent implements OnInit {
  @Input() flagList;


  constructor() {
  }

  ngOnInit() {
  }

}
