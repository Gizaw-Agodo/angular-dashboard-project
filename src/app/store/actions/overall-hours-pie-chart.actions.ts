import { createAction, props } from '@ngrx/store';
import { PieChartData } from '../../models/pie-chart-data.model';

export const loadOverallHoursPieChartData = createAction('[Overall Hours Pie Chart] Load Data');
export const loadOverallHoursPieChartDataSuccess = createAction(
  '[Overall Hours Pie Chart] Load Data Success',
  props<{ data: PieChartData[] }>()
);
export const loadOverallHoursPieChartDataFailure = createAction(
  '[Overall Hours Pie Chart] Load Data Failure',
  props<{ error: string }>()
);
