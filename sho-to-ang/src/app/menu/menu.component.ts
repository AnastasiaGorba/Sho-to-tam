import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  clickedButton: string | null = null;

  handleClick(action: string): void {
    this.clickedButton = action;
  }
}

