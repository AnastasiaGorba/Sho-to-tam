import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth3Service {

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
    if (userInfo.nameg === 'Батоненко Батон Батонович' && userInfo.namem === 'Батоненко Батон Батонович' && userInfo.room === 535 && userInfo.ID === 'КT 18769624' && userInfo.time === '18:15' ) {
      this.setToken('');
      return of(true);
    }
    return throwError(() => new Error(''));
  }
}
