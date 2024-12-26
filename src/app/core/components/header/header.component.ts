import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchTerm = '';

  onSearch() {
    console.log('Searching for:', this.searchTerm);
  }

  generalNavigation = [
    {
      name: 'General',
      icon: 'home',
      expanded: true,
      subItems: [
        { name: 'Overview', icon: 'home' },
        { name: 'Navigation 2', icon: 'timeline' },
        { name: 'Navigation 3', icon: 'description' },
        { name: 'Navigation 4', icon: 'people' },
      ],
    },
  ];

  // Tools List with Nested Items
  tools = [
    {
      name: 'Tools',
      icon: 'build',
      expanded: true,
      subItems: [
        { name: 'Settings', icon: 'settings' },
        { name: 'Help', icon: 'help_outline' },
        { name: 'Dark Mode', icon: 'dark_mode' },
      ],
    },
  ];
  
}
