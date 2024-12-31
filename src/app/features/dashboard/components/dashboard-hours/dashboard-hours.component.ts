import { Component, OnInit } from '@angular/core';
import { AgChartOptions } from 'ag-charts-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as OverallHoursBarChartActions from '../../../../store/actions/overall-hours-bar-chart.actions';
import * as OverallHoursPieChartActions from '../../../../store/actions/overall-hours-pie-chart.actions';
import * as fromBarChartSelectors from '../../../../store/selectors/overall-hours-bar-chart.selectors';
import * as fromPieChartSelectors from '../../../../store/selectors/overall-hours-pie-chart.selectors';
import * as fromCommonSelectors from '../../../../store/common.selectors';
import { PieChartData } from '../../../../models/pie-chart-data.model';
import { BarChartData } from '../../../../models/bar-chart-data.model';

@Component({
  selector: 'app-dashboard-hours',
  templateUrl: './dashboard-hours.component.html',
  styleUrls: ['./dashboard-hours.component.css'],
})
export class DashboardHoursComponent implements OnInit {
  // State observables
  pieChartData$: Observable<PieChartData[]>;
  barChartData$: Observable<BarChartData[]>;
  fiscalLoading$: Observable<boolean>;

  // Chart configurations
  pieChartOptions: AgChartOptions = {};
  barChartOptions: AgChartOptions = {};

  pieChartLoading$: Observable<boolean>;
  barChartLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.pieChartLoading$ = this.store.select(
      fromPieChartSelectors.selectPieChartLoading
    );
    this.barChartLoading$ = this.store.select(
      fromBarChartSelectors.selectBarChartLoading
    );

    this.pieChartData$ = this.store.select(
      fromPieChartSelectors.selectPieChartData
    );
    this.barChartData$ = this.store.select(
      fromBarChartSelectors.selectBarChartData
    );

    this.fiscalLoading$ = this.store.select(fromCommonSelectors.selectLoading);
  }

  ngOnInit(): void {
    // Dispatch actions to load data
    this.store.dispatch(
      OverallHoursPieChartActions.loadOverallHoursPieChartData()
    );
    this.store.dispatch(
      OverallHoursBarChartActions.loadOverallHoursBarChartData()
    );

    // Subscribe to state and configure chart options
    this.pieChartData$.subscribe((data) => {
      this.pieChartOptions = {
        data,
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

    this.barChartData$.subscribe((data) => {
      this.barChartOptions = {
        data,
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

    this.fiscalLoading$.subscribe(() => {
      this.store.dispatch(
        OverallHoursPieChartActions.loadOverallHoursPieChartData()
      );
      this.store.dispatch(
        OverallHoursBarChartActions.loadOverallHoursBarChartData()
      );
    });
  }
}
