import { createAction, props } from '@ngrx/store';

export const setFiscalPeriod = createAction(
  '[Common State] Set Fiscal Period',
  props<{ start: Date | null; end: Date | null }>()
);

export const setFiscalSuccess = createAction(
    '[Common State] Set Fiscal Period Success',
    props<{ start: Date | null; end: Date | null }>()
  );

  export const setFiscalFailor = createAction(
    '[Common State] Set Fiscal Period Failure',
    props<{ start: Date | null; end: Date | null }>()
  );