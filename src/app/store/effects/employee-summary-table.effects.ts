import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as EmployeeSummaryTableActions from '../actions/employee-summary-table.actions';
import { DataService } from '../../features/dashboard/services/data.service';
import { EmployeeTableData } from '../../models/employee-table-data.model';

@Injectable()
export class EmployeeSummaryTableEffects {
  loadEmployeeSummaryTableData$;
  constructor(private actions$: Actions, private dataService: DataService) {
    this.loadEmployeeSummaryTableData$ = createEffect(() =>
      this.actions$.pipe(
        ofType(EmployeeSummaryTableActions.loadEmployeeSummaryTableData),
        mergeMap(() =>
          this.dataService.getEmployeeTableData().pipe(
            map((data: EmployeeTableData[]) =>
              EmployeeSummaryTableActions.loadEmployeeSummaryTableDataSuccess({
                data,
              })
            ),
            catchError((error) =>
              of(
                EmployeeSummaryTableActions.loadEmployeeSummaryTableDataFailure(
                  {
                    error,
                  }
                )
              )
            )
          )
        )
      )
    );
  }
}
