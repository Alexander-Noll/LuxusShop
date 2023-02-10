import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductSelectionComponent } from './product-selection.component';
import { ProductComponent } from './product/product.component';




@NgModule({
  declarations: [
   ProductSelectionComponent,
   ProductComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductSelectionModule { }
