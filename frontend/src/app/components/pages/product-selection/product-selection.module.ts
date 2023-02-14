import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReactiveFormsModule } from '@angular/forms';
import { ProductSelectionComponent } from './product-selection.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
   ProductSelectionComponent,
   ProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

})
export class ProductSelectionModule { }
