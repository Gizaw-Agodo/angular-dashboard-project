import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of, timer } from 'rxjs';
import * as CommonActions from '../store/common.actions';

@Injectable()
export class CommonEffects {
  fiscalPeriodChange$;

  constructor(private actions$: Actions) {
    this.fiscalPeriodChange$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CommonActions.setFiscalPeriod),
        switchMap((action) =>
          timer(1000).pipe(
            map(
              () => CommonActions.setFiscalSuccess({ ...action }) 
            ),
            catchError(() => of())
          )
        )
      )
    );
  }
}
