import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LatestComponent } from './latest/latest.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LatestComponent,
    LoginComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
