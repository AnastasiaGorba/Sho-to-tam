import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth3Service } from '../services/auth3.service';
import { LOCALE_ID, Inject } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-newguest',
  templateUrl: './newguest.component.html',
  styleUrls: ['./newguest.component.css']
})
export class NewguestComponent implements OnInit {
  message2: string = formatDate(new Date(), 'dd.MM.y', this.locale);

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

  guestForm!: FormGroup;
  errorMessage: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor(
    private router: Router,
    private auth3Service: Auth3Service,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  submitGuest() {
    this.auth3Service.guest(this.guestForm.value).subscribe({
      next: () => this.router.navigate(['newguest']),
    });
  }

  ngOnInit(): void {
    this.guestForm = new FormGroup({
      'nameg': new FormControl('', [Validators.required]),
      'namem': new FormControl('', [Validators.required]),
      'room': new FormControl('', [Validators.required]),
      'ID': new FormControl('', [Validators.required]),
      'time': new FormControl('',[Validators.required])
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
