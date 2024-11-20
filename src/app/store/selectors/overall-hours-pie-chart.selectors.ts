import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OverallHoursPieChartState } from '../reducers/overall-hours-pie-chart.reducer';

// Feature Selector
export const selectOverallHoursPieChartState =
  createFeatureSelector<OverallHoursPieChartState>('overallHoursPieChart');

// Individual Selectors
export const selectPieChartData = createSelector(
  selectOverallHoursPieChartState,
  (state) => state.data
);

export const selectPieChartLoading = createSelector(
  selectOverallHoursPieChartState,
  (state) => state.loading
);

export const selectPieChartError = createSelector(
  selectOverallHoursPieChartState,
  (state) => state.error
);
