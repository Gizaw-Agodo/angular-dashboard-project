import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OverallHoursBarChartState } from '../reducers/overall-hours-bar-chart.reducer';

// Feature Selector
export const selectOverallHoursBarChartState =
  createFeatureSelector<OverallHoursBarChartState>('overallHoursBarChart');

// Individual Selectors
export const selectBarChartData = createSelector(
  selectOverallHoursBarChartState,
  (state) => state.data
);

export const selectBarChartLoading = createSelector(
  selectOverallHoursBarChartState,
  (state) => state.loading
);

export const selectBarChartError = createSelector(
  selectOverallHoursBarChartState,
  (state) => state.error
);
