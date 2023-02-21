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


  async onChangeItem(event: any){
    const id = event.target.id;
    const isSelected = event.target.checked;
    await this.products.updateFilter(id,isSelected,"product");
    this.filterChanged.emit(event.target.checked);
  }

  async onChangeBrand(event: any){
    const id = event.target.id;
    const isSelected = event.target.checked;
    await this.products.updateFilter(id,isSelected,"brand");
    this.filterChanged.emit(event.target.checked);

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
