import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  loading = true;
  items: any[] = [];

  ngOnInit() {
    this.loadData().then(() => {
      this.loading = false;
    });
  }

  async loadData() {
    const itemsCount = 100;
    this.items = [];
    for (let i = 0; i < itemsCount; i++) {
      this.items.push({
        isSelected: false,
        imageUrl: './assets/images/watch.png',
        isSale: i % 2 === 0,
      });
    }
  }

  onButtonClick(index: number) {
    this.items[index].isSelected = !this.items[index].isSelected;
  }
}
