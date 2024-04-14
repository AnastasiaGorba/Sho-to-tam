import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): boolean {
    
    this.http.post<any>('http://example.com/login', { username, password })
      .subscribe(response => {
        
        if (response.authenticated) {
          this.isAuthenticated = true;
        } else {
          
          this.isAuthenticated = false;
        }
      });

    return this.isAuthenticated; 
  }

  
  logout(): void {
    this.isAuthenticated = false; 
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated; 
  }
}