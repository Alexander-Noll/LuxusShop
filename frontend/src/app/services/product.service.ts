import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/filter';

  private filters = { brand: [] as string[], product: [] as string[] };

  private productList: any[] = []
  private storedProductList : any[] = []

 async updateFilter(key: string, isChecked: boolean, type: string) {
    if (type === 'product') {
      if (isChecked) {
        this.filters.product.push(key);
      } else {
        const index = this.filters.product.indexOf(key);
        if (index !== -1) {
          this.filters.product.splice(index, 1);
        }
      }
    }
    if (type === 'brand') {
      if (isChecked) {
        this.filters.brand.push(key);
      } else {
        const index = this.filters.brand.indexOf(key);
        if (index !== -1) {
          this.filters.brand.splice(index, 1);
        }
      }
    }

    const response = await fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.filters)
    });

    if (response.ok) {
      const data = await response.json(); // Parse response data as JSON
      this.productList = data // Log the parsed data
    }
  }

  async loadAllProducts(){
    const response = await fetch('http://localhost:3000/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }

    });

    if (response.ok) {
      const data = await response.json(); // Parse response data as JSON
      console.log(data)
      this.storedProductList = data // Log the parsed data

    }
  }
  getAllLoadedProducts(){
    return this.storedProductList
  }

  getProducts(){
    return this.productList;
  }
}

