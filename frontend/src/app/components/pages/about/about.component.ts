import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private filter:FilterService) {  }

  ngOnInit(): void {
    console.log(this.filter);
  }

}
