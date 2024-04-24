import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  changeColor(): void {}

  resetColor(): void {}

  sendEmail(): void {
    window.location.href = 'mailto:example@lpnu.ua'; }
}