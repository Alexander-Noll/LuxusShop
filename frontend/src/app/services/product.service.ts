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

    this.sendFilters();
  }

  async sendFilters() {

    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(this.filters);

    const rep: any = await this.http.post(this.apiUrl,body,{'headers':headers})
    console.log(rep)
    if (rep.ok) {

      if (Array.isArray(rep)) {

      for (const product of rep) {
        this.productList.push(product);
      }
    }
    }

    console.log(this.productList)
    return;
  }


  getProducts(){

    return this.productList;
  }
}

