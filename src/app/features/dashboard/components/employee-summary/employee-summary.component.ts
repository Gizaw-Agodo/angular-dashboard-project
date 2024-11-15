import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-employee-summary',
  templateUrl: './employee-summary.component.html',
  styleUrls: ['./employee-summary.component.css'],
})
export class EmployeeSummaryComponent implements OnInit {
  rowData: any[] = [];
  searchQuery: string = ''; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadEmployeeData();
  }

  loadEmployeeData(): void {
    this.dataService.getEmployeeTableData().subscribe((data) => {
      this.rowData = data;
    });
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
    // onFirstDataRendered: (params) => {
    //   params.api.sizeColumnsToFit();
    // },

    onGridReady: (params) => {
      this.autoSizeAllColumns(params);
    },
    onFirstDataRendered: (params) => {
      this.autoSizeAllColumns(params);
    },
  };

  // Function to auto-size all columns based on content
  private autoSizeAllColumns(params : any) {
    const allColumnIds = params.columnApi.getAllColumns().map((column:any) => column.getId());
    params.columnApi.autoSizeColumns(allColumnIds);
  }

  // Handle Filter Button Click
  onFilterClick() {
    console.log('Filter Clicked');
  }

  // Handle Export Button Click
  onExportClick() {
    console.log('Export Clicked');
  }
}
