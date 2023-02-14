import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class FilterService {

  public instanceId: number = Math.random();

  constructor() { }


}
