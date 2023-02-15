import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { HeaderModule } from './components/header/header.module';
import { AboutModule } from './components/pages/about/about.module';
import { LoginModule } from './components/pages/login/login.module';
import { LatestModule } from './components/pages/latest/latest.module';

import { FavoriteModule } from './components/pages/favorite/favorite.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductSelectionRoutingModule } from './components/pages/product-selection/product-selection-routing.module';
import { ProductSelectionModule } from './components/pages/product-selection/product-selection.module';
import { FormsModule } from '@angular/forms';

import { ProductService } from './services/product.service';




@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [

    FavoriteModule,
    BrowserModule,
    AppRoutingModule,
    ProductSelectionRoutingModule,
    ProductSelectionModule,
    HeaderModule,
    AboutModule,
    LoginModule,
    LatestModule,
    HttpClientModule,
    NgbCollapseModule,
    FormsModule
    ],
    providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
