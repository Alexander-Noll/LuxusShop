import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  public instanceId: number = Math.random();

  public filter: any[] = [
    { man: false },
    { woman: false },
    { bracelett: false },
    { ring: false },
    { earring: false },
    { red: false },
    { blue: false },
    { black: false },
    { gold: false },
  ];

  public brandFilter: any[] = [
    { bracelett: { test1: false } },
    { ring: { test2: false } },
    { earring: [{ swarofski: false }, { FAVS: false }] },
    { watch: [{ breitling: false }, { rolex: false }] },
  ];
  constructor() {}
  getFilter() {
    return this.filter;
  }
  getBrands() {
    return this.brandFilter;
  }

  updateFilter(tag: any, selected: boolean) {
    let found = false;

    for (let i = 0; i < this.filter.length; i++) {
      if (this.filter[i][tag] !== undefined) {
        this.filter[i][tag] = selected;
        found = true;
        break;
      }
    }

    if (!found) {
      let newFilter: { [key: string]: boolean } = {};
      newFilter[tag] = selected;
      this.filter.push(newFilter);
    }
  }

  deleteFilter(tag: string) {
    for (let i = 0; i < this.filter.length; i++) {
      if (this.filter[i][tag] !== undefined) {
        delete this.filter[i][tag];
        if (Object.keys(this.filter[i]).length === 0) {
          this.filter.splice(i, 1);
        }
        break;
      }
    }
  }
  updatebrands() {}
}
