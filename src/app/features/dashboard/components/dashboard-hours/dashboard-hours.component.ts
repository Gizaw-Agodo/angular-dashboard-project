import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-dashboard-hours',
  templateUrl: './dashboard-hours.component.html',
  styleUrls: ['./dashboard-hours.component.css'],
})
export class DashboardHoursComponent implements OnInit {
  pieChartData: any[] = [];
  barChartData: any[] = [];

  pieChartOptions: AgChartOptions = {};
  barChartOptions: AgChartOptions = {};

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadPieChartData();
    this.loadBarChartData();
  }

  loadPieChartData(): void {
    this.dataService.getPieChartData().subscribe((data) => {
      this.pieChartData = data;
      this.pieChartOptions = {
        data: this.pieChartData,
        series: [
          {
            type: 'donut',
            angleKey: 'value',
            innerRadiusRatio: 0.5,
            legendItemKey: 'label',
            innerLabels: [
              {
                text: 'Total Investment',
                fontWeight: 'bold',
                fontSize: 16,
                color: '#000000',
              },
              {
                text: '$100,000',
                fontSize: 36,
                color: '#000000',
              },
            ],
            fills: ['#091836', '#03BCF3'],
          },
        ],
      };
    });
  }

  loadBarChartData(): void {
    this.dataService.getBarChartData().subscribe((data) => {
      this.barChartData = data;

      this.barChartOptions = {
        data: this.barChartData,
        series: [
          {
            type: 'bar',
            yName: 'cumulativeHours',
            xKey: 'month',
            yKey: 'cumulativeHours',
            fill: '#091836',
            stroke: '#091836',
          },
          {
            type: 'bar',
            xKey: 'month',
            yKey: 'totalHours',
            fill: '#03BCF3',
            stroke: '#03BCF3',
          },
        ],
      };
    });
  }
}
