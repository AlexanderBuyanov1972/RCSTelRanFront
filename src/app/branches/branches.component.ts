import {Component, OnInit} from '@angular/core';
import {AbstractRentCompany} from '../services/abstract-rent-company';
import {Branch} from '../dto/locations/branch';
import {Locations} from '../dto/locations/locations';


@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  locationBranches: Branch[];

  constructor(private rcs: AbstractRentCompany) {
    this.rcs.getAllLocationBranches().subscribe(
      value => {
        const valueLocations = value.content as Locations;
        this.locationBranches = valueLocations.locations as Branch[];
      }
    );
  }

  ngOnInit() {

  }

}
