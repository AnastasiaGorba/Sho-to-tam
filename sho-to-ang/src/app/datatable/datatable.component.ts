import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent { 
  data= [{ name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'},
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
  { name: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}]  

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit() {}

  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  } 

  currentPage: number = 1;
  itemsPerPage: number = 9;
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
