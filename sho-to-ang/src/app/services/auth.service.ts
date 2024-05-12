import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  guest(userInfo: {nameg: string, namem: string, room: number, ID: string, time: string}): Observable<boolean> {
    if (userInfo.nameg === '' && userInfo.namem === '' && userInfo.room === 0 && userInfo.ID === '' ) {
      this.setToken('');
      return of(true);
    }
    return throwError(() => new Error(''));
  }
}


