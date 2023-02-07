import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite.component';




@NgModule({
  declarations: [
  FavoriteComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class FavoriteModule { }
