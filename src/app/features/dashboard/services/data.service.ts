import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PieChartData } from '../../../models/pie-chart-data.model';
import { BarChartData } from '../../../models/bar-chart-data.model';
import { EmployeeTableData } from '../../../models/employee-table-data.model';
import { SREDTableData } from '../../../models/sred-table-data.model';

import { PIE_CHART_DATA } from '../../../mock-data/pie-chart.mock';
import { BAR_CHART_DATA } from '../../../mock-data/bar-chart.mock';
import { EMPLOYEE_TABLE_DATA } from '../../../mock-data/employee-table.mock';
import { SRED_TABLE_DATA } from '../../../mock-data/sred-table.mock';
import { ProjectDataType } from '../../../models/project-data.model';
import { PROJECT_SUMMARY_DATA } from '../../../mock-data/project-summary.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getPieChartData(): Observable<PieChartData[]> {
    return of(PIE_CHART_DATA);
  }

  getBarChartData(): Observable<BarChartData[]> {
    return of(BAR_CHART_DATA);
  }

  getEmployeeTableData(): Observable<EmployeeTableData[]> {
    return of(EMPLOYEE_TABLE_DATA);
  }

  getSREDTableData(): Observable<SREDTableData[]> {
    return of(SRED_TABLE_DATA);
  }

  getProjectSummayData(): Observable<ProjectDataType[]> {
    return of (PROJECT_SUMMARY_DATA)
  }
}
