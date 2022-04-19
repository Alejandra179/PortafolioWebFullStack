import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLoginComponent } from './card-login/card-login.component';



@NgModule({
  declarations: [
    CardLoginComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardLoginComponent
  ]

})
export class PageLoginModule { }
