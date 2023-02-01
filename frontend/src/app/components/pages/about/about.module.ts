import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AboutComponent } from './about.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AboutModule { }
