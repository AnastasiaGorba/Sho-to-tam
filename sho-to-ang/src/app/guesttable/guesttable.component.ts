import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-guesttable',
  templateUrl: './guesttable.component.html',
  styleUrl: './guesttable.component.css'
})
export class GuesttableComponent {
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
