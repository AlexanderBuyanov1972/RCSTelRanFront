import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormClientComponent} from './form-client/form-client.component';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    FormClientComponent
  ],
  exports: [
    FormClientComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ]
})
export class FormModule { }
