import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-newguest',
  templateUrl: './newguest.component.html',
  styleUrls: ['./newguest.component.css']
})
export class NewguestComponent {
 
  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  }

  guestForm!: FormGroup;
  errorMessage: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor( private router: Router, private authService: AuthService) {this.screenWidth = window.innerWidth;}

  submitGuest() {
    this.authService.guest(this.guestForm.value).subscribe({
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
}

