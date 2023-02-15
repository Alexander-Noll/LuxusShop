import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000/query/';
  public products: any[] = [];


  async loadProductData(key: string, isSelected: boolean) {

    if (isSelected === true) {
      const response: any = await this.http.get(this.apiUrl + key).toPromise();
      if (Array.isArray(response)) {
        response.forEach((object: any) => {
          const existingObject = this.products.find(
            (o) => o.productId === object.productId
          );
          if (existingObject) {
            Object.assign(existingObject, object);
          } else {
            this.products.push(object);
          }
        });
      }
    } else {
      this.products = this.products.filter((object) => object.type !== key);

    }
  }

  getSelectedProducts() {
    return this.products;
  }
}
