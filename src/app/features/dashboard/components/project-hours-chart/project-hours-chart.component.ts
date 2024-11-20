import { Component, OnInit } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { ProjectDataType } from '../../../../models/project-data.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProjectBarChartData } from '../../../../store/selectors/project-hours-bar-chart.selectors';
import { loadProjectHoursBarChartData } from '../../../../store/actions/project-hours-bar-chart.actions';
import { AppState } from '../../../../store/store';

@Component({
  selector: 'app-project-hours-chart',
  templateUrl: './project-hours-chart.component.html',
  styleUrls: ['./project-hours-chart.component.css'],
})
export class ProjectHoursChartComponent implements OnInit {
  projectData: ProjectDataType[] = [];
  // State observables
  projectHoursData$: Observable<ProjectDataType[]>;

  constructor(private store: Store<AppState>) {
    this.projectHoursData$ = this.store.select(selectProjectBarChartData);
  }

  projectHoursChartOptions: AgCartesianChartOptions = {
    data: [],
    series: [
      {
        type: 'bar',
        xKey: 'project',
        yKey: 'hours',
        itemStyler: (params: any) => {
          const datum = params.datum;
          return {
            fill: datum.color,
            stroke: datum.color,
            strokeWidth: 35,
            lineDash: [0, 2],
          };
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };

  ngOnInit(): void {
    // Dispatch actions to load data
    this.store.dispatch(loadProjectHoursBarChartData());
    this.projectHoursData$.subscribe((data) => {
      this.projectData = data;
      this.projectHoursChartOptions = {
        ...this.projectHoursChartOptions,
        data: this.projectData,
      };
    });
  }
}
