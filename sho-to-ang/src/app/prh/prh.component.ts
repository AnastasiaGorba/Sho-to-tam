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
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
    { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];

  currentPage: number = 1;
  itemsPerPage: number = 8;

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() { }

  getCurrentPageData(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.currentPage = page;
  }

  getPageNumbers(): number[] {
    const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }

  getTotalPages(): number[] {
    const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
}
