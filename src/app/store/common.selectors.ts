import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CommonState } from './common.reducer';

export const selectCommonState =
  createFeatureSelector<CommonState>('common');

export const selectFiscalPeriod = createSelector(
  selectCommonState,
  (state: CommonState) => state.fiscalPeriod
);

export const selectLoading = createSelector(
    selectCommonState,
    (state) => state.loading 
  );
