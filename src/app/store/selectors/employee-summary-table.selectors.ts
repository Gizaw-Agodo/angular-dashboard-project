import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeSummaryTableState } from '../reducers/employee-summary-table.reducer';

export const selectEmployeeSummaryTableState =
  createFeatureSelector<EmployeeSummaryTableState>('employeeSummaryTable');

export const selectEmployeeSummaryTableData = createSelector(
  selectEmployeeSummaryTableState,
  (state) => state.data
);

export const selectEmployeeSummaryTableLoading = createSelector(
  selectEmployeeSummaryTableState,
  (state) => state.loading
);

export const selectEmployeeSummaryTableError = createSelector(
  selectEmployeeSummaryTableState,
  (state) => state.error
);
