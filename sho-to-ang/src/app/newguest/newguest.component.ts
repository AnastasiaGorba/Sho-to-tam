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

  // nameg: string = '';
  // namem: string = '';
  // room: number | null = null;
  // id: string = ''; 
  // time: string = ''; 
  // errorMessage: string = ''; 
  //constructor(@Inject(LOCALE_ID) private locale: string, private authService: AuthService, private router: Router) { }

  constructor(@Inject(LOCALE_ID) private locale: string) { }

  ngOnInit() {}

  onSubmit(): void {}

  // onSubmit(): void {
  //   if (!this.nameg || !this.namem || !this.room || !this.id || !this.time) {
  //     this.errorMessage = '*Будь ласка, заповніть всі поля'; 
  //     return;
  //   }
  //   this.router.navigateByUrl('/newguest');

  // }

  // redirectToSearch(): void {
  //   this.router.navigateByUrl('/newguest');
  // }

  
}

