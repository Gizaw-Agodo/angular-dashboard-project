import { Action, ActionReducer } from '@ngrx/store';
import {
  OverallHoursBarChartState,
  overallHoursBarChartReducer,
} from './reducers/overall-hours-bar-chart.reducer';
import {
  OverallHoursPieChartState,
  overallHoursPieChartReducer,
} from './reducers/overall-hours-pie-chart.reducer';
import { OverallHoursBarChartEffects } from './effects/overall-hours-bar-chart.effects'; // Uncomment this
import { OverallHoursPieChartEffects } from './effects/overall-hours-pie-chart.effects';
import {
  projectHoursBarChartReducer,
  ProjectHoursBarChartState,
} from './reducers/project-hours-bar-chart.reducer';
import { ProjectHoursBarChartEffects } from './effects/project-hours-bar-chart.effects';
import { EmployeeSummaryTableEffects } from './effects/employee-summary-table.effects';
import {
  employeeSummaryTableReducer,
  EmployeeSummaryTableState,
} from './reducers/employee-summary-table.reducer';
import { SREDEffects } from './effects/sred-table.effects';
import { sredTableReducer, SREDTableState } from './reducers/sred-table.reducer';
import { projectReducer, ProjectState } from '../features/projects/store/project.reducer';
import { ProjectEffects } from '../features/projects/store/project.effects';
import { commonReducer, CommonState } from './common.reducer';
import { CommonEffects } from './common.effects';

// Define the overall application state
export interface AppState {
  overallHoursBarChart: OverallHoursBarChartState;
  overallHoursPieChart: OverallHoursPieChartState;
  projectHoursBarChart: ProjectHoursBarChartState;
  employeeSummaryTable: EmployeeSummaryTableState;
  projects:ProjectState;
  common: CommonState;
}

// Map reducers to their corresponding state slices
export interface AppStore {
  overallHoursBarChart: ActionReducer<OverallHoursBarChartState, Action>;
  overallHoursPieChart: ActionReducer<OverallHoursPieChartState, Action>;
  projectHoursBarChart: ActionReducer<ProjectHoursBarChartState, Action>;
  employeeSummaryTable: ActionReducer<EmployeeSummaryTableState, Action>;
  sredTable : ActionReducer<SREDTableState, Action>;
  project : ActionReducer<ProjectState, Action>;
  common : ActionReducer<CommonState, Action>;

}

// Register the reducers
export const appStore: AppStore = {
  overallHoursBarChart: overallHoursBarChartReducer,
  overallHoursPieChart: overallHoursPieChartReducer,
  projectHoursBarChart: projectHoursBarChartReducer,
  employeeSummaryTable: employeeSummaryTableReducer,
  sredTable : sredTableReducer,
  project : projectReducer, 
  common : commonReducer,
};

// Register the effects
export const appEffects = [
  OverallHoursBarChartEffects,
  OverallHoursPieChartEffects,
  ProjectHoursBarChartEffects,
  EmployeeSummaryTableEffects,
  SREDEffects,
  ProjectEffects,
  CommonEffects
];
