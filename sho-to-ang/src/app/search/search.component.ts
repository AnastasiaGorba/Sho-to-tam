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

  constructor(@Inject(LOCALE_ID) private locale: string){}

  ngOnInit() { }

  // namem: string = '';
  // room: number | null = null;
  // errorMessage: string = ''; 

  // constructor(@Inject(LOCALE_ID) private locale: string, private authService: AuthService, private router: Router) { }

  // ngOnInit() {
    
  // }
  // onSubmit(): void {
  //   if (!this.namem && !this.room) {
  //     this.errorMessage = '*Будь ласка, заповніть всі поля'; 
  //     return;
  //   }
  //   this.router.navigateByUrl('/search');
  // }

  // redirectToSearch(): void {
  //   this.router.navigateByUrl('/search');
  // }
}
