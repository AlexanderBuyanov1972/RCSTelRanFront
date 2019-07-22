import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MatTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule

  ]
})
export class NavModuleModule {
}
