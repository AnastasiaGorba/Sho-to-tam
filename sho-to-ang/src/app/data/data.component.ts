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
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];

  currentPage: number = 1;
  itemsPerPage: number = 9;

  constructor(@Inject(LOCALE_ID) private locale: string) { }

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
