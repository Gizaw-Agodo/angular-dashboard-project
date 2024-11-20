import { createReducer, on } from '@ngrx/store';
import * as OverallHoursBarChartActions from '../actions/overall-hours-bar-chart.actions';

import { BarChartData } from "../../models/bar-chart-data.model";

export interface OverallHoursBarChartState {
  data: BarChartData[];
  loading: boolean;
  error: string | null;
}

export const initialOverallHoursBarChartState: OverallHoursBarChartState = {
  data: [],
  loading: false,
  error: null,
};


export const overallHoursBarChartReducer = createReducer(
  initialOverallHoursBarChartState,
  on(OverallHoursBarChartActions.loadOverallHoursBarChartData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    OverallHoursBarChartActions.loadOverallHoursBarChartDataSuccess,
    (state, action) => ({
      ...state,
      data: action.data,
      loading: false,
    })
  ),
  on(
    OverallHoursBarChartActions.loadOverallHoursBarChartDataFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);
