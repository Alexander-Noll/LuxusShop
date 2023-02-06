import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    }

    items = [
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:true},
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:false },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:true },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:false },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:true },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:false },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:false },
      { isSelected: false, imageUrl: './assets/images/watch.png', isSale:true },
      // ...
    ];

    onButtonClick(index: number) {
      this.items[index].isSelected = !this.items[index].isSelected;
    }
  }


