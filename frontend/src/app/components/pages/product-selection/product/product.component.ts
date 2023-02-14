import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  sliderValue: any;

  constructor(private http: HttpClient, private filter: FilterService) {}

  price = 0;

  productIds: any[] = [];

  items: any[] = [];

  isChecked: boolean = false;



  onChange(event: any) {
    // Get the checked property of the checkbox
    const isChecked = event.target.checked;
    // Update the isChecked property
    this.isChecked = isChecked;
    // Do something with the checked property
    if (isChecked) {
      this.filter.updateFilter('man', true);
      console.log(this.filter.getFilter());
    } else {
      this.filter.deleteFilter('man');
      console.log(this.filter.getFilter());
    }
  }


  sliderValueChanged(e: any) {
    let get = document.getElementById('label1');
    if (get != null) {
      get.innerHTML = e.target.value + '$';
    }
    console.log();
  }


  ngOnInit() {
    this.loadData();
    console.log(this.filter.instanceId);
  }

  async updateTextInput(text: number) {
    this.price = text;
    return this.price;
  }

  async loadData() {
    // Define the URL of the API endpoint that returns the products data
    const apiUrl = 'http://localhost:3000/query/products';
    console.log('olal');

    try {
      // Make a GET request to the API endpoint
      const response: any = await this.http.get(apiUrl).toPromise();

      // Check if the response is an object
      if (typeof response === 'object') {
        // Map the response array to extract only the productId property
        // and store the resulting array in the productIds property
        this.productIds = response.map(
          (item: { productId: any }) => item.productId
        );
        console.log(this.productIds);
      } else {
        // If the response is not an object, log an error message
        //console.error('Unexpected response type:', response);
      }
    } catch (error) {
      // If there was an error making the API request, log an error message
      console.error('Error loading data:', error);
    }

    for (let i = 0; i < this.productIds.length; i++) {
      try {
        // Define the URL for the API endpoint that returns data for each product
        const apiUrl =
          'http://localhost:3000/query/product-' + this.productIds[i];

        // Make a GET request to the API endpoint
        const response: any = await this.http.get(apiUrl).toPromise();

        // Check if the response is an object
        if (typeof response === 'object') {
          // Log the URL of the API endpoint that returned the data
          //console.log(
          //  'http://localhost:3000/query/product-' + this.productIds[i]
          // );

          // Store the product data in an object
          let product = {
            productId: response.productId,
            name: response.name,
            type: response.type,
            model: response.model,
            brand: response.brand,
            isSale: response.isSale,
            imgId: response.imgId,
            description: response.description,
            amount: response.amount,
            price: response.price,
          };

          // Add the product object to the items array
          this.items.push(product);

          // Log the updated items array
          // console.log(this.items);

          // Log the productIds array
          //console.log(this.productIds);
        } else {
          // If the response is not an object, log an error message
          console.error('Unexpected response type:', response);
        }
      } catch (error) {
        // If there was an error making the API request, log an error message
        console.error('Error loading data:', error);
      }
    }
  }
}
