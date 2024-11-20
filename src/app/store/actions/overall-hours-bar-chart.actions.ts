import { createAction, props } from '@ngrx/store';
import { BarChartData } from '../../models/bar-chart-data.model';

export const loadOverallHoursBarChartData = createAction('[Overall Hours Bar Chart] Load Data');
export const loadOverallHoursBarChartDataSuccess = createAction(
  '[Overall Hours Bar Chart] Load Data Success',
  props<{ data: BarChartData[] }>()
);
export const loadOverallHoursBarChartDataFailure = createAction(
  '[Overall Hours Bar Chart] Load Data Failure',
  props<{ error: string }>()
);
