import { createReducer, on } from '@ngrx/store';
import * as ProjectHoursBarChartActions from '../actions/project-hours-bar-chart.actions';
import { ProjectDataType } from '../../models/project-data.model';

export interface ProjectHoursBarChartState {
  data: ProjectDataType[];
  loading: boolean;
  error: string | null;
}

export const initialProjectHoursBarChartState: ProjectHoursBarChartState = {
  data: [],
  loading: false,
  error: null,
};

export const projectHoursBarChartReducer = createReducer(
  initialProjectHoursBarChartState,
  on(ProjectHoursBarChartActions.loadProjectHoursBarChartData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProjectHoursBarChartActions.loadProjectHoursBarChartDataSuccess, (state, action) => ({
    ...state,
    data: action.data,
    loading: false,
  })),
  on(ProjectHoursBarChartActions.loadProjectHoursBarChartDataFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);
