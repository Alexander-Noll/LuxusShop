import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  public offers: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < 200; i++) {
      this.offers.push({
        product: 'cap',
        state: 'in stock',
        amount: 7,
        price: i,
      });
    }
  }

}
