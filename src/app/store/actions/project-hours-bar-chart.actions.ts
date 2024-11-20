import { createAction, props } from '@ngrx/store';
import { ProjectDataType } from '../../models/project-data.model';

export const loadProjectHoursBarChartData = createAction('[Project Hours Bar Chart] Load Data');
export const loadProjectHoursBarChartDataSuccess = createAction(
  '[Project Hours Bar Chart] Load Data Success',
  props<{ data: ProjectDataType[] }>()
);
export const loadProjectHoursBarChartDataFailure = createAction(
  '[Project Hours Bar Chart] Load Data Failure',
  props<{ error: string }>()
);
