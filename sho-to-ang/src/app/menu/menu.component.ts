import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth;

    this.updateActiveButton(this.router.url);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveButton(event.url);
      }
    });
  }

  ngOnInit() {}

  screenWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { 
    this.screenWidth = window.innerWidth;
  }

  activeButton: string = 'residents'; 

  setActiveButton(button: string) {
    this.activeButton = button;
  }

  updateActiveButton(url: string) {
    if (url.includes('/data') || url.includes('/search') || url.includes('/prf')) {
      this.activeButton = 'residents';
    } else if (url.includes('/guest') || url.includes('/newguest')) {
      this.activeButton = 'guests';
    } else if (url.includes('/requests')) {
      this.activeButton = 'requests';
    } else if (url.includes('/scanner')) {
      this.activeButton = 'scanner';
    }
  }
}
