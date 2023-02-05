import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsModule } from './components/pages/products/products.module';
import { HeaderModule } from './components/header/header.module';
import { AboutModule } from './components/pages/about/about.module';
import { LoginModule } from './components/pages/login/login.module';
import { LatestModule } from './components/pages/latest/latest.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HeaderModule,
    AboutModule,
    LoginModule,
    LatestModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
