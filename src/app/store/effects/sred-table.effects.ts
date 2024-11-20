import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as SREDTableActions from '../actions/sred-table.actions';
import { DataService } from '../../features/dashboard/services/data.service';

@Injectable()
export class SREDEffects {
  loadSREDTableData$;
  constructor(private actions$: Actions, private dataService: DataService) {
    this.loadSREDTableData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(SREDTableActions.loadSREDTableData),
        mergeMap(() =>
          this.dataService.getSREDTableData().pipe(
            map((data) => SREDTableActions.loadSREDTableDataSuccess({ data })),
            catchError((error) =>
              of(SREDTableActions.loadSREDTableDataFailure({ error }))
            )
          )
        )
      )
    );
  }
}
