import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {

  constructor(private filter:FilterService) {  }

  ngOnInit(): void {
    console.log(this.filter);
  }

}
