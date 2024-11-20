import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ProjectHoursBarChartActions from '../actions/project-hours-bar-chart.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../../features/dashboard/services/data.service';

@Injectable()
export class ProjectHoursBarChartEffects {
  loadProjectHoursBarChartData$;

  constructor(private actions$: Actions, private dataService: DataService) {    
    this.loadProjectHoursBarChartData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectHoursBarChartActions.loadProjectHoursBarChartData),
        mergeMap(() =>
          this.dataService.getProjectSummayData().pipe(
            map((data) =>{                
              return ProjectHoursBarChartActions.loadProjectHoursBarChartDataSuccess({
                data,
              })}
            ),
            catchError((error) =>
              of(
                ProjectHoursBarChartActions.loadProjectHoursBarChartDataFailure({
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
