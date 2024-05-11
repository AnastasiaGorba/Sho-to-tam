import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth2Service } from '../services/auth2.service';
import { LOCALE_ID, Inject} from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message3: string = formatDate(new Date(), 'dd.MM.y', this.locale);
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
  itemsPerPage: number = 10;

  searchForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private auth2Service: Auth2Service,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  submitSearch() {
    this.auth2Service.search(this.searchForm.value).subscribe({
      next: () => this.router.navigate(['prh']),
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Такого мешканця не знайдено!'; 
      }
    });
  }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'ID': new FormControl('', [Validators.required]),
      'room': new FormControl('', [Validators.required])
    });
  }

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
