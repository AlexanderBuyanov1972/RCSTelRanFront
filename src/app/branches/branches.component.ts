import {Component, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../services/abstract-rent-company';
import {LocationBranch} from '../dto/location-branch';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  locationBranches$: Observable<LocationBranch[]>;

  constructor(private rcs: AbstractRentCompany) {
    this.locationBranches$ = this.rcs.getAllLocationBranches().pipe(
      map(
        value => {
          return value.content as LocationBranch[];
        }
      )
    );
  }

  ngOnInit() {

  }

}
