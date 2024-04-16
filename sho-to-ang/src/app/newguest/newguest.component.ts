import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newguest',
  templateUrl: './newguest.component.html',
  styleUrls: ['./newguest.component.css']
})
export class NewguestComponent implements OnInit {
  message2: string = formatDate(new Date(), 'dd.MM.y', this.locale);

  data = [
    {nameg: 'John Smith', room: 104, namem: 'John Smith', id:15656456, time: 1788 }
  ];


  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {}

  onSubmit(): void {}

  
}

