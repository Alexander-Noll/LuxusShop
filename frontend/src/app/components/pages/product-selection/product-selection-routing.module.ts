import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductSelectionComponent } from "./product-selection.component";
import { ProductComponent } from "./product/product.component";





const routes: Routes = [
  { path: 'selection/products', component: ProductComponent,

  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductSelectionRoutingModule  { }
