import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
constructor(private http: HttpClient) {}

  loading = true;


  ngOnInit() {
    this.loadData().then(() => {
      this.loading = false;
    });

    this.readProduct();
  }
  items: any [] = [];
  products: Object[] = [];
  async loadData() {
    const apiUrl = 'http://localhost:3000/product/A32398101A1A1';
    try {
      const response: any = await this.http.get(apiUrl).toPromise();
      if (typeof response === 'object') {
       // this.items.push({id :`./assets/products/${response.productId}.png`}) ;
        this.items.push({id :`./assets/products/${response.productId}.png`, isSelected: true, isSale: true}) ;
        console.log({id :`./assets/products/A32398101A1A1.png`});
      } else {
        console.error("Unexpected response type:", response);
      }
    } catch (error) {
      console.error("Error loading data:", error);
    }
}

  onButtonClick(index: number) {
   this.items[index].isSelected = !this.items[index].isSelected;
  }

  readProduct(){

    const fs = require('fs');

    const directoryPath = './assets/products';

    fs.readdir(directoryPath, function (err: string, files: any[]) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
  }
}


