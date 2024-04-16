import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{

  constructor(private authService: AuthService) {} 
  ngOnInit(): void {} 
  logout() {
    this.authService.logout()
  }

}
