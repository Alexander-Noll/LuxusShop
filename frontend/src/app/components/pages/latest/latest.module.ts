import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { LatestComponent } from './latest.component';



@NgModule({
  declarations: [
    LatestComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule
  ]
})
export class LatestModule { }
