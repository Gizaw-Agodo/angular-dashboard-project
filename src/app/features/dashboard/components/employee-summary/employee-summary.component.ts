import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as EmployeeSummaryActions from '../../../../store/actions/employee-summary-table.actions';
import * as fromEmployeeSummarySelectors from '../../../../store/selectors/employee-summary-table.selectors';
import { EmployeeTableData } from '../../../../models/employee-table-data.model';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css'],
})
export class EmployeeSummaryComponent implements OnInit {
  rowData$: Observable<EmployeeTableData[]>;
  searchQuery: string = '';

  constructor(private store: Store) {
    this.rowData$ = this.store.select(
      fromEmployeeSummarySelectors.selectEmployeeSummaryTableData
    );
  }

  ngOnInit(): void {
    this.store.dispatch(EmployeeSummaryActions.loadEmployeeSummaryTableData());
  }

  // Column Definitions
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      cellRenderer: (params: any) => {
        return `
          <div class="employee-name" style="display: flex; align-items: center;">
            <img class="avatar" src="${params.data.avatar}" alt="${params.data.name}" 
                style="width: 25px; height: 25px; border-radius: 50%; object-fit: cover; margin-right: 10px;" />
            <span>${params.data.name}</span>
          </div>
        `;
      },
    },
    { headerName: 'Time Sheet Expected', field: 'timeSheetExpected' },
    { headerName: 'Unconfirmed Time Sheet', field: 'unconfirmedTimeSheet' },
    { headerName: 'Confirmed Time Sheet', field: 'confirmedTimeSheet' },
    { headerName: 'Missing Time Sheet', field: 'missingTimeSheet' },
  ];

  // Grid options and functionality
  gridOptions: GridOptions = {
    paginationPageSize: 10,
  };

  // Handle Filter Button Click
  onFilterClick() {
    console.log('Filter Clicked');
  }

  // Handle Export Button Click
  onExportClick() {
    console.log('Export Clicked');
  }
}
