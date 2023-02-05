import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  public items: any[] = [];
  ngOnInit(): void {
    this.items = [
      '1.jpg',
      '2.jpg',

    ];


    }
  }


