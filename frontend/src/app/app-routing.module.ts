import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LatestComponent } from './components/pages/latest/latest.component';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/pages/favorite/favorite.component';
import { ProductSelectionComponent } from './components/pages/product-selection/product-selection.component';


const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'latest', component:LatestComponent},
  {path: 'login', component:LoginComponent},
  {path: 'selection', component:ProductSelectionComponent},
  {path: 'wishlist', component:FavoriteComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
