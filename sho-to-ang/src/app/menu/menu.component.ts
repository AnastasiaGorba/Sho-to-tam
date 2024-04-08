import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  handleClick() {
    const button = document.getElementById("myButton");
    if (button) {
      button.classList.add("clicked");
    }
  }
}
