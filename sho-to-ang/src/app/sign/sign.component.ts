import { Component } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
selector: 'app-sign',
templateUrl: './sign.component.html',
styleUrl: './sign.component.css'
})
export class SignComponent {
  identificationCode: string = '';
  email: string = '';
  errorMessage: string = ''; // змінна для відображення помилок

  constructor(private authService: AuthService) { } // Впровадження AuthService в компонент

  onSubmit(): void {
    // Виконуємо перевірку введених даних перед відправкою на сервер
    if (!this.email || !this.identificationCode) {
      this.errorMessage = '*Будь ласка, заповніть всі поля'; // Відображаємо повідомлення про неповність даних
      return;
    }
  }
}

