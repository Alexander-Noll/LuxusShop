import { Component, HostListener, OnInit } from '@angular/core';
import { collapseAnimation } from './collapse-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [collapseAnimation]
})
export class HeaderComponent implements OnInit {
  isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isCollapsed = window.pageYOffset > 60;
  }
}
