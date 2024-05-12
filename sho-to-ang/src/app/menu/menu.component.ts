import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {}

  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  }
}