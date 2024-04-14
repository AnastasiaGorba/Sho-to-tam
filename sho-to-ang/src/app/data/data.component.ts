import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'] 
})
export class DataComponent implements OnInit { 
  message: string = formatDate(new Date(), 'dd.MM.y', this.locale);

  data = [
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    
  }
}
