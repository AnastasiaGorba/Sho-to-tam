import { Component,  LOCALE_ID, Inject, HostListener, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-menuguest',
  templateUrl: './menuguest.component.html',
  styleUrls: ['./menuguest.component.css']
})
export class MenuguestComponent implements OnInit {
  message: string = formatDate(new Date(), 'dd.MM.y', this.locale);

  constructor(@Inject(LOCALE_ID) private locale: string) {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {}

  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  }
}
