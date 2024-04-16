import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent{

  constructor(private authService: AuthService) {} 
  ngOnInit(): void {} 
  logout() {
  this.authService.logout()
  }

}

