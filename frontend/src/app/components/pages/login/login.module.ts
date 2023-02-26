import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
   LoginComponent,
   SignUpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class LoginModule { }
