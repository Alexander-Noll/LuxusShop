import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LatestComponent } from './components/pages/latest/latest.component';
import { ProductsComponent } from './components/pages/products/products.component';

const routes: Routes = [
  {path: '', component:HeaderComponent},
  {path: 'about', component:AboutComponent},
  {path: 'latest', component:LatestComponent},
  {path: 'login', component:LoginComponent},
  {path: 'products', component:ProductsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
