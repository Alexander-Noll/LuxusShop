import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';




@NgModule({
  declarations: [
   ProductsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutsModel { }
