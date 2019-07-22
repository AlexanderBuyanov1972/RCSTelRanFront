import {Component, Input, OnInit} from '@angular/core';
import {ThemePalette} from '@angular/material';
import {RoutesPath} from '../routes-path';
import {LabelsPath} from '../lables-path';

export interface NavLink {
  path: string;
  label: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() color: ThemePalette;

  constructor() {
  }

  LINK_HOME: NavLink = {path: RoutesPath.HOME, label: LabelsPath.HOME};
  LINK_ABOUT_US: NavLink = {path: RoutesPath.ABOUT_US, label: LabelsPath.ABOUT_US};
  LINK_CAR_RENTAL_COUNTRY: NavLink = {path: RoutesPath.CAR_RENTAL_COUNTRY, label: LabelsPath.CAR_RENTAL_COUNTRY};
  LINK_CAR_RENTAL_ABROAD: NavLink = {path: RoutesPath.CAR_RENTAL_ABROAD, label: LabelsPath.CAR_RENTAL_ABROAD};
  LINK_BRANCHES: NavLink = {path: RoutesPath.BRANCHES, label: LabelsPath.BRANCHES};
  LINK_DISCOUNTS: NavLink = {path: RoutesPath.DISCOUNTS, label: LabelsPath.DISCOUNTS};
  LINK_LOGIN: NavLink = {path: RoutesPath.LOGIN, label: LabelsPath.LOGIN};

  ngOnInit() {
  }

}
