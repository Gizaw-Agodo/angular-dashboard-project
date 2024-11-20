import { createReducer, on } from '@ngrx/store';
import * as OverallHoursPieChartActions from '../actions/overall-hours-pie-chart.actions';
import { PieChartData } from "../../models/pie-chart-data.model";

export interface OverallHoursPieChartState {
  data: PieChartData[];
  loading: boolean;
  error: string | null;
}

export const initialOverallHoursPieChartState: OverallHoursPieChartState = {
  data: [],
  loading: false,
  error: null,
};


export const overallHoursPieChartReducer = createReducer(
  initialOverallHoursPieChartState,
  on(OverallHoursPieChartActions.loadOverallHoursPieChartData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(
    OverallHoursPieChartActions.loadOverallHoursPieChartDataSuccess,
    (state, action) => ({
      ...state,
      data: action.data,
      loading: false,
    })
  ),
  on(
    OverallHoursPieChartActions.loadOverallHoursPieChartDataFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);
