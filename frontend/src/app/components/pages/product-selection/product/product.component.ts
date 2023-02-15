import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(private http: HttpClient, private productService: ProductService) {}

  productIds: any[] = [];
  items: any[] = [];
  checkBoxes: boolean[] = [false, false, false, false, false];

  ngOnInit() {}

  async onChange() {
   this.items = this.productService.getSelectedProducts();
  }

  async loadData() {}
}
