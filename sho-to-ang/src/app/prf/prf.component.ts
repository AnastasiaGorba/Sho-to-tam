import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-prf',
  templateUrl: './prf.component.html',
  styleUrls: ['./prf.component.css']
})
export class PrfComponent {
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
