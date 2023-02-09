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
import { FavoriteComponent } from './components/pages/favorite/favorite.component';
import { FavoriteModule } from './components/pages/favorite/favorite.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,


  ],
  imports: [
    FavoriteModule,
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    HeaderModule,
    AboutModule,
    LoginModule,
    LatestModule,
    HttpClientModule,
    NgbCollapseModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
