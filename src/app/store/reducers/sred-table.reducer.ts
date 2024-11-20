import { createReducer, on } from '@ngrx/store';
import * as SREDTableActions from '../actions/sred-table.actions';
import { SREDTableData } from '../../models/sred-table-data.model';

export interface SREDTableState {
  data: SREDTableData[];
  loading: boolean;
  error: any;
}

const initialState: SREDTableState = {
  data: [],
  loading: false,
  error: null,
};

export const sredTableReducer = createReducer(
  initialState,
  on(SREDTableActions.loadSREDTableData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(SREDTableActions.loadSREDTableDataSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data,
  })),
  on(SREDTableActions.loadSREDTableDataFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
