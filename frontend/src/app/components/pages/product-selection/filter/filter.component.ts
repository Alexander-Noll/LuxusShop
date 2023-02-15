import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  price = 0;
  sliderValue: any;

  constructor(private products: ProductService) {}

  ngOnInit(): void {}
  @Output() filterChanged = new EventEmitter<boolean>();

  async onChange(event: any) {
    // Get the checked property of the checkbox
    const isChecked = event.target.checked;
    // Update the state of the corresponding checkbox
    // Do something with the checked property
    if (isChecked) {
      await this.products.loadProductData(event.target.id, isChecked);
      this.filterChanged.emit(event.target.checked);
    } else {
      await this.products.loadProductData(event.target.id, isChecked);
      // its important the the emit gets send after the service hat time to store the new data
      this.filterChanged.emit(event.target.checked);
    }
  }

  sliderValueChanged(e: any) {
    let get = document.getElementById('label1');
    if (get != null) {
      get.innerHTML = e.target.value + '$';
    }
    console.log();
  }

  async updateTextInput(text: number) {
    this.price = text;
    return this.price;
  }
}
