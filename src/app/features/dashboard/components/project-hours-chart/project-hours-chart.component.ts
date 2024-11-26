import { Component, HostListener, OnInit } from '@angular/core';
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
  projectHoursData$: Observable<ProjectDataType[]>;

  screenWidth: number = window.innerWidth; 

  projectHoursChartOptions: AgCartesianChartOptions = this.createChartOptions(
    []
  );

  constructor(private store: Store<AppState>) {
    this.projectHoursData$ = this.store.select(selectProjectBarChartData);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProjectHoursBarChartData());

    this.projectHoursData$.subscribe((data) => {
      this.projectData = data;
      this.updateChartOptions();
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = event.target.innerWidth;
    this.updateChartOptions();
  }

  private createChartOptions(data: ProjectDataType[]): AgCartesianChartOptions {
    let dynamicStrokeWidth: number;

    if (this.screenWidth > 850) {
      dynamicStrokeWidth = 35;
    } else if (this.screenWidth > 768) {
      dynamicStrokeWidth = 25;
    } else {
      dynamicStrokeWidth = 12;
    }

    return {
      data,
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
              strokeWidth: dynamicStrokeWidth,
              lineDash: [0, 2],
            };
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }

  private updateChartOptions(): void {
    this.projectHoursChartOptions = this.createChartOptions(this.projectData);
  }
}
