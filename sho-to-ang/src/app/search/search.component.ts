import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  message3: string = formatDate(new Date(), 'dd.MM.y', this.locale);
  data = [
    {namem: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {
    
  }
}

