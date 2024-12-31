import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrl: './mobile-sidebar.component.css'
})
export class MobileSidebarComponent implements OnInit{
  currentActivePath = '';
  constructor(private router : Router){}
  generalNavigation = [
    {
      name: 'General',
      icon: 'home',
      expanded: true,
      subItems: [
        { name: 'Dashboard', icon: 'home', path: '' },
        { name: 'Projects', icon: 'work_outline', path: '/projects' },
        { name: 'Navigation 3', icon: 'description', path: '/navigation-3' },
        { name: 'Navigation 4', icon: 'people', path: '/navigation-4' },
      ],
    },
  ];

  tools = [
    {
      name: 'Tools',
      icon: 'build',
      expanded: true,
      subItems: [
        { name: 'Settings', icon: 'settings', path: '/settings' },
        { name: 'Help', icon: 'help_outline', path: '/help' },
        { name: 'Dark Mode', icon: 'dark_mode', path: '/dark-mode' },
      ],
    },
  ];

   ngOnInit(): void {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentActivePath = event.urlAfterRedirects; 
        }
      });
    }
  
    navigate(path: string) {
      this.currentActivePath = path;
      this.router.navigate([path]);
    }

}
