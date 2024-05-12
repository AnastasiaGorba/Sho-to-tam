import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent{

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