import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth3Service } from '../services/auth3.service';
import { LOCALE_ID, Inject} from '@angular/core';
import { formatDate } from '@angular/common';

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

  guestForm!: FormGroup;
  errorMessage: string = '';

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

}