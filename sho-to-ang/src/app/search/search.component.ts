import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth1Service } from '../services/auth1.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  }

  searchForm!: FormGroup;
  errorMessage: string = '';

  constructor( private router: Router, private auth1Service: Auth1Service) {this.screenWidth = window.innerWidth;}

  submitSearch() {
    this.auth1Service.search(this.searchForm.value).subscribe({
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
}