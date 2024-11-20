import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SREDTableState } from '../reducers/sred-table.reducer';

export const selectSREDTableState = createFeatureSelector<SREDTableState>('sredTable');

export const selectSREDTableData = createSelector(
  selectSREDTableState,
  (state) => state.data
);

export const selectSREDTableLoading = createSelector(
  selectSREDTableState,
  (state) => state.loading
);

export const selectSREDTableError = createSelector(
  selectSREDTableState,
  (state) => state.error
);
