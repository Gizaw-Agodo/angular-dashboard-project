import { createAction, props } from '@ngrx/store';
import { EmployeeTableData } from '../../models/employee-table-data.model';

export const loadEmployeeSummaryTableData = createAction(
  '[Employee Summary Table] Load Data'
);

export const loadEmployeeSummaryTableDataSuccess = createAction(
  '[Employee Summary Table] Load Data Success',
  props<{ data: EmployeeTableData[] }>()
);

export const loadEmployeeSummaryTableDataFailure = createAction(
  '[Employee Summary Table] Load Data Failure',
  props<{ error: any }>()
);
