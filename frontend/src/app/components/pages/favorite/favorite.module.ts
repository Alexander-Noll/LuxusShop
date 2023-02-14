import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite.component';




@NgModule({
  declarations: [
  FavoriteComponent
  ],
  imports: [
    CommonModule,

    ReactiveFormsModule
  ]
})
export class FavoriteModule { }
