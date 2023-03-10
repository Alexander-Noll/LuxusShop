import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductSelectionComponent } from './product-selection.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';




@NgModule({
  declarations: [
   ProductSelectionComponent,
   ProductComponent,
   FilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],

})
export class ProductSelectionModule { }
