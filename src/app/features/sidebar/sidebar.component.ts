import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {


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
