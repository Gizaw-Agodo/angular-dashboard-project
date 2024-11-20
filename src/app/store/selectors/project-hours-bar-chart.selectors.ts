import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectHoursBarChartState } from '../reducers/project-hours-bar-chart.reducer';

// Feature Selector
export const selectProjectHoursBarChartState =
  createFeatureSelector<ProjectHoursBarChartState>('projectHoursBarChart');

// Individual Selectors
export const selectProjectBarChartData = createSelector(
  selectProjectHoursBarChartState,
  (state) => state.data
);

export const selectProjectBarChartLoading = createSelector(
  selectProjectHoursBarChartState,
  (state) => state.loading
);

export const selectProjectBarChartError = createSelector(
  selectProjectHoursBarChartState,
  (state) => state.error
);
