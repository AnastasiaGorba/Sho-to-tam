import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-prh',
  templateUrl: './prh.component.html',
  styleUrls: ['./prh.component.css']
})
export class PrhComponent implements OnInit{
  message4: string = formatDate(new Date(), 'dd.MM.y', this.locale);
  data = [
    {namem: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    
  }
}
