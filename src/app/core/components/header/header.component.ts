import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Store } from '@ngrx/store';
import * as CommonActions from '../../../store/common.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  searchTerm: string = '';
  
  constructor(private store: Store) {}

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

  fiscalPeriod: { start: Date | null; end: Date | null } = {
    start: null,
    end: null,
  };

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {

    const currentDate = new Date();
    const nextYearDate = new Date();
    nextYearDate.setFullYear(currentDate.getFullYear() + 1);
    this.range.setValue({ start: currentDate, end: nextYearDate });

    this.range.valueChanges.subscribe((values) => {
      const { start, end } = values;
      if (start && end ) {
        this.store.dispatch(CommonActions.setFiscalPeriod({ start, end }));
      }
    });
  }
}
