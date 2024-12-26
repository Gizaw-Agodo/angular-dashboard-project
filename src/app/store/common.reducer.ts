import { createReducer, on } from '@ngrx/store';
import * as CommonActions from './common.actions';

export interface CommonState {
    fiscalPeriod: {
      start: Date | null;
      end: Date | null;
    };
    loading: boolean;
    error: any;
  }
  
  export const initialCommonState: CommonState = {
    fiscalPeriod: {
      start: null,
      end: null,
    },
    loading: false,
    error: null,
   
  };

export const commonReducer = createReducer(
  initialCommonState,
  
  on(CommonActions.setFiscalPeriod, (state) => ({
    ...state,
    loading: true,
  })),

  on(CommonActions.setFiscalSuccess, (state, { start, end }) => ({
    ...state,
    fiscalPeriod: { start, end },
    loading: false,
    error: null,
  })),

  on(CommonActions.setFiscalFailor, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
 
);

  