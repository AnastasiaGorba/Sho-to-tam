import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false; // Прапорець для визначення, чи є користувач аутентифікованим

  constructor(private http: HttpClient) {}

  // Метод для входу користувача
  // Прийняття  імені користувача та пароль
  // Виконання запиту до сервера для перевірки ідентифікаційних даних
  login(username: string, password: string): boolean {
    // Виконання запиту до бази даних для перевірки ідентифікаційних даних
    this.http.post<any>('http://example.com/login', { username, password })
      .subscribe(response => {
        // Якщо сервер повернув, що користувач аутентифікований, встановлюємо прапорець isAuthenticated в true
        if (response.authenticated) {
          this.isAuthenticated = true;
        } else {
          // Інакше встановлюємо прапорець isAuthenticated в false
          this.isAuthenticated = false;
        }
      });

    return this.isAuthenticated; // Повертання поточного стану аутентифікації
  }

  // Метод для виходу користувача
  logout(): void {
    this.isAuthenticated = false; // При виході користувача встановлюємо прапорець isAuthenticated в false
  }

  // Метод для перевірки, чи є користувач аутентифікованим
  isAuthenticatedUser(): boolean {
    return this.isAuthenticated; // Повертаємо поточний стан аутентифікації
  }
}