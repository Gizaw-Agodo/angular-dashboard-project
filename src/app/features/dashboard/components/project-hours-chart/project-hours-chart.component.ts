import { Component, OnInit } from '@angular/core';
import { AgCartesianChartOptions } from 'ag-charts-community';
import { ProjectDataType } from '../../../../models/project-data.model';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-project-hours-chart',
  templateUrl: './project-hours-chart.component.html',
  styleUrls: ['./project-hours-chart.component.css'],
})
export class ProjectHoursChartComponent implements OnInit {
  projectData: ProjectDataType[] = [];
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
            strokeWidth: 5,
            lineDash: [0,2],
          };
        },
      },
    ],
    legend: {
      enabled: false,
    },
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getProjectSummayData().subscribe((data) => {
      this.projectData = data;
      this.projectHoursChartOptions = {
        ...this.projectHoursChartOptions,
        data: this.projectData,
      };
    });
  }
}
