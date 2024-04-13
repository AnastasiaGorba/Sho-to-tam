import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  data = [
    { number: 1, namem: 'John Smith', room: 104, ID: 'KL45864', debt: 'Так', presence: 'Так'}
  ];
}
