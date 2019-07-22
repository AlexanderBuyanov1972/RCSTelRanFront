import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormSelectCarComponent} from './form-select-car/form-select-car.component';




@NgModule({
  declarations: [
    FormSelectCarComponent
  ],
  exports: [
    FormSelectCarComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class FormModule { }
