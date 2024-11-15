import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchTerm: string = '';

  onSearch() {
    console.log('Searching for:', this.searchTerm);
  }
  
}
