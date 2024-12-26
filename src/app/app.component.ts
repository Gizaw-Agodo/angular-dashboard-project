import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectLoading } from './store/common.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-dashboard';

  loading$: Observable<boolean>;
  
    constructor(private store: Store) {
      this.loading$ = this.store.select(selectLoading);
    }
}
