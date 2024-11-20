import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SREDTableActions from '../../../../store/actions/sred-table.actions';
import * as fromSREDTableSelectors from '../../../../store/selectors/sred-table.selectors';
import { SREDTableData } from '../../../../models/sred-table-data.model';

@Component({
  selector: 'app-sred-summary',
  templateUrl: './sred-summary.component.html',
  styleUrls: ['./sred-summary.component.css'],
})
export class SredSummaryComponent implements OnInit {
  rowData$: Observable<SREDTableData[]>;
  searchQuery: string = '';

  constructor(private store: Store) {
    // Select data from the store
    this.rowData$ = this.store.select(
      fromSREDTableSelectors.selectSREDTableData
    );
  }

  ngOnInit(): void {
    // Dispatch action to load data
    this.store.dispatch(SREDTableActions.loadSREDTableData());
  }

  // Column Definitions
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      width: 150,
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
    { headerName: 'Tracking Score', field: 'trackingScore', width: 140 },
    { headerName: 'Expected Hours', field: 'expectedHours', width: 140 },
    { headerName: 'Worked Hours', field: 'workedHours', width: 140 },
    { headerName: 'Tracked Hours', field: 'trackedHours', width: 140 },
    { headerName: 'New', field: 'new', width: 90 },
    { headerName: 'Fiber', field: 'fiber', width: 90 },
    { headerName: 'FD Test', field: 'fdTest', width: 90 },
    { headerName: 'SR & ED', field: 'srEdHour', width: 100 },
  ];

  // Grid Options
  gridOptions: GridOptions = {
    paginationPageSize: 10,
  };

  // Handle Filter Button Click
  onFilterClick() {
    if (this.searchQuery) {
      console.log(`Filtering with query: ${this.searchQuery}`);
    }
  }

  // Handle Export Button Click
  onExportClick() {
    console.log('Exporting data...');
  }
}
