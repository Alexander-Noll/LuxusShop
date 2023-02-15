import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  checkBoxes: boolean[] = [false, false, false, false, false];
  price = 0;
  sliderValue: any;

  constructor(private filter:FilterService) { }

  ngOnInit(): void {
  }

  onChange(event: any, index: number) {
    // Get the checked property of the checkbox
    const isChecked = event.target.checked;

    // Update the state of the corresponding checkbox
    this.checkBoxes[index] = isChecked;

    // Do something with the checked property
    if (isChecked) {
      this.filter.updateFilter(event.target.id, true);
      console.log(this.filter.getFilter());
    } else {
      this.filter.updateFilter(event.target.id, false);
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

  async updateTextInput(text: number) {
    this.price = text;
    return this.price;
  }

}
