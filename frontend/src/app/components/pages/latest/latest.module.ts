import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { LatestComponent } from './latest.component';



@NgModule({
  declarations: [
    LatestComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class LatestModule { }
