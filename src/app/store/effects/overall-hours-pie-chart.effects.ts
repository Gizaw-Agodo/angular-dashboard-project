import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../features/dashboard/services/data.service';
import {
  loadOverallHoursPieChartData,
  loadOverallHoursPieChartDataFailure,
  loadOverallHoursPieChartDataSuccess,
} from '../actions/overall-hours-pie-chart.actions';

@Injectable()
export class OverallHoursPieChartEffects {
  loadOverallHoursPieChartData$;

  constructor(private actions$: Actions, private dataService: DataService) {

    this.loadOverallHoursPieChartData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loadOverallHoursPieChartData),
        mergeMap(() => {
          return this.dataService.getPieChartData().pipe(
            map((data) =>
              loadOverallHoursPieChartDataSuccess({
                data,
              })
            ),
            catchError((error) =>
              of(
                loadOverallHoursPieChartDataFailure({
                  error,
                })
              )
            )
          );
        })
      )
    );
  }
}
