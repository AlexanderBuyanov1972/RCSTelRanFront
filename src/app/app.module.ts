import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavModuleModule} from './nav-module/nav-module.module';
import {Route, RouterModule} from '@angular/router';
import {RoutesPath} from './nav-module/routes-path';
import {BranchesComponent} from './branches/branches.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {CarRentalCountryComponent} from './car-rental-country/car-rental-country.component';
import {CarRentalAbroadComponent} from './car-rental-abroad/car-rental-abroad.component';
import {LoginComponent} from './login/login.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListCarsComponent} from './list-cars/list-cars.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {AbstractRentCompany} from './services/abstract-rent-company';
import {RentCompanyService} from './services/rent-company.service';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormSelectCarComponent} from './form/form-select-car/form-select-car.component';
import { FormProtectedCarComponent } from './form/form-protected-car/form-protected-car.component';


const routes: Route[] = [
  {path: RoutesPath.BRANCHES, component: BranchesComponent},
  {path: RoutesPath.DISCOUNTS, component: DiscountsComponent},
  {path: RoutesPath.CAR_RENTAL_COUNTRY, component: CarRentalCountryComponent},
  {path: RoutesPath.CAR_RENTAL_ABROAD, component: CarRentalAbroadComponent},
  {path: RoutesPath.LOGIN, component: LoginComponent},
  {path: RoutesPath.ABOUT_US, component: AboutUsComponent},
  {path: RoutesPath.HOME, component: HomeComponent},
  {path: '**', redirectTo: RoutesPath.HOME}
];

@NgModule({
  declarations: [
    AppComponent,
    BranchesComponent,
    DiscountsComponent,
    CarRentalCountryComponent,
    CarRentalAbroadComponent,
    LoginComponent,
    AboutUsComponent,
    HomeComponent,
    ListCarsComponent,
    FormSelectCarComponent,
    FormProtectedCarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    NavModuleModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: AbstractRentCompany, useExisting: RentCompanyService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
