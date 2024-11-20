import { createAction, props } from '@ngrx/store';
import { SREDTableData } from '../../models/sred-table-data.model';

// Load SRED Table Data
export const loadSREDTableData = createAction('[SRED Table] Load SRED Table Data');

// Load Success
export const loadSREDTableDataSuccess = createAction(
  '[SRED Table] Load SRED Table Data Success',
  props<{ data: SREDTableData[] }>()
);

// Load Failure
export const loadSREDTableDataFailure = createAction(
  '[SRED Table] Load SRED Table Data Failure',
  props<{ error: any }>()
);
