import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  signForm!: FormGroup;
  errorMessage: string = '';

  constructor( private router: Router, private authService: AuthService) {}

  submitLogin() {
    this.authService.login(this.signForm.value).subscribe({
      next: () => this.router.navigate(['home']),
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Неправильний пароль!'; 
      }
    });
  }

  ngOnInit(): void {
    this.signForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'identificationCode': new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)])
    });
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['home'])
    }
  }
}

