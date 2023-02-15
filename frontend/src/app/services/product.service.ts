import { Injectable } from '@angular/core';
import { FilterService } from './filter.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private filterService:FilterService) { }
  public filter: any[] = []


  ngOnInit() {
    this.filter = this.filterService.getFilter();
  }
}
