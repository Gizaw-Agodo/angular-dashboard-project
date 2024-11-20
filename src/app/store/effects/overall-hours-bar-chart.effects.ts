import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as OverallHoursBarChartActions from '../actions/overall-hours-bar-chart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../features/dashboard/services/data.service';

@Injectable()
export class OverallHoursBarChartEffects {
  loadOverallHoursBarChartData$;

  constructor(private actions$: Actions, private dataService: DataService) {
    this.loadOverallHoursBarChartData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(OverallHoursBarChartActions.loadOverallHoursBarChartData),
        mergeMap(() =>
          this.dataService.getBarChartData().pipe(
            map((data) =>
              OverallHoursBarChartActions.loadOverallHoursBarChartDataSuccess({
                data,
              })
            ),
            catchError((error) =>
              of(
                OverallHoursBarChartActions.loadOverallHoursBarChartDataFailure({
                  error,
                })
              )
            )
          )
        )
      )
    );
  }
}
