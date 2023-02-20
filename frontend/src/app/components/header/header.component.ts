import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*isCollapsed = false;
  onWindowScroll() {
    this.isCollapsed = window.pageYOffset > 60;
  }
  */
}
