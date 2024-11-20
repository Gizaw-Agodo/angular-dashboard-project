import { createReducer, on } from '@ngrx/store';
import * as EmployeeSummaryTableActions from '../actions/employee-summary-table.actions';
import { EmployeeTableData } from '../../models/employee-table-data.model';

export interface EmployeeSummaryTableState {
  data: EmployeeTableData[];
  loading: boolean;
  error: any;
}

const initialState: EmployeeSummaryTableState = {
  data: [],
  loading: false,
  error: null,
};

export const employeeSummaryTableReducer = createReducer(
  initialState,
  on(EmployeeSummaryTableActions.loadEmployeeSummaryTableData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmployeeSummaryTableActions.loadEmployeeSummaryTableDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(EmployeeSummaryTableActions.loadEmployeeSummaryTableDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
