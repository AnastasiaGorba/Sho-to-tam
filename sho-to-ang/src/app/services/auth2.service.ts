import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {

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

  search(userInfo: {namem: string, ID: string, room: number}): Observable<boolean> {
    if (userInfo.namem === 'Батоненко Батон Батонович' || userInfo.ID === 'КT 18769624' || userInfo.room === 535) {
      this.setToken('');
      return of(true);
    }
    return throwError(() => new Error('Такого мешканця немає!'));
  }
}
