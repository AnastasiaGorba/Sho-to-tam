import { Component, LOCALE_ID, Inject, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  message1: string = formatDate(new Date(), 'dd.MM.y', this.locale);
  data = [
    { nameg: 'John Smith', room: 104, namem: 'John Smith', id: 15656456, time: 1788 },
    { nameg: 'John Smith', room: 104, namem: 'John Smit', id: 15656456, time: 1788 },
    { nameg: 'Jane D', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane Smith', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'Jane ', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'J D', id: 15656457, time: 1800 },
    { nameg: 'John Smith', room: 104, namem: 'John Smith', id: 15656456, time: 1788 },
    { nameg: 'John Smith', room: 104, namem: 'John Smit', id: 15656456, time: 1788 },
    { nameg: 'Jane D', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane Smith', room: 105, namem: 'Jane D', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'Jane ', id: 15656457, time: 1800 },
    { nameg: 'Jane D', room: 105, namem: 'J D', id: 15656457, time: 1800 }
    
  ];

  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  ngOnInit() {}

  getCurrentPageData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  getTotalPages(): number[] {
    const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
}
