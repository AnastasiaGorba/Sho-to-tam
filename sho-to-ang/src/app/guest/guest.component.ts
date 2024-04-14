import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit{
  message1: string = formatDate(new Date(), 'dd.MM.y', this.locale);
  data = [
    {nameg: 'John Smith', room: 104, namem: 'John Smith', id:15656456, time: 1788 }
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    
  }
}
