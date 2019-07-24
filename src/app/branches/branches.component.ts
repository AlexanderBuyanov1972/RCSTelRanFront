import { Component, OnInit } from '@angular/core';
import {AbstractRentCompany} from '../services/abstract-rent-company';
import {Observable} from 'rxjs';
import {LocationBranch} from '../dto/location-branch';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  locationBranches$: Observable<LocationBranch>;

  constructor(private rcs: AbstractRentCompany) {
    this.locationBranches$ = this.rcs.getAllLocationBranches();
  }

  ngOnInit() {
  }

}
