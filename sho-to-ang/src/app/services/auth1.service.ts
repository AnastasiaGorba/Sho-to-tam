import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth1Service {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  search(userInfo: {name: string, ID: string, room: number}): Observable<boolean> {
    if (userInfo.name === '' || userInfo.ID === '' || userInfo.room === 0) {
      this.setToken('');
      return of(true);
    }
    return throwError(() => new Error(''));
  }
}