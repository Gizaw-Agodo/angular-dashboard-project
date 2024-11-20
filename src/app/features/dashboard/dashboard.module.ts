import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../../shared/shared.module';
import { DashboardHoursComponent } from './components/dashboard-hours/dashboard-hours.component';
import { AgChartsModule } from 'ag-charts-angular';
import { ProjectHoursChartComponent } from './components/project-hours-chart/project-hours-chart.component';
import { EmployeeSummaryComponent } from './components/employee-summary/employee-summary.component';
import { AgGridModule } from 'ag-grid-angular';
import { SredSummaryComponent } from './components/sred-summary/sred-summary.component';
import { TimesheetSummaryComponent } from './components/timesheet-summary/timesheet-summary.component';
import { EffectsModule } from '@ngrx/effects';
import { OverallHoursPieChartEffects } from '../../store/effects/overall-hours-pie-chart.effects';

@NgModule({
  declarations: [
    DashboardHeaderComponent,
    DashboardHoursComponent,
    DashboardComponent,
    ProjectHoursChartComponent,
    EmployeeSummaryComponent,
    SredSummaryComponent,
    TimesheetSummaryComponent,
  ],
  imports: [CommonModule, SharedModule, AgChartsModule, AgGridModule,EffectsModule.forFeature([OverallHoursPieChartEffects]),],
  exports: [DashboardComponent],
})
export class DashboardModule {}
