import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoading } from '../../store/common.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  loading$: Observable<boolean>;

  constructor(private store: Store) {
    this.loading$ = this.store.select(selectLoading);
  }
}
