import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions } from 'ag-grid-community';
import { DataService } from '../../services/data.service'; 

@Component({
  selector: 'app-sred-summary',
  templateUrl: './sred-summary.component.html',
  styleUrls: ['./sred-summary.component.css'],
})
export class SredSummaryComponent implements OnInit {
  rowData: any[] = [];
  searchQuery: string = ''; 

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadSredData();
  }

  loadSredData(): void {
    this.dataService.getSREDTableData().subscribe((data) => {
      this.rowData = data;
    });
  }

  // Column Definitions
  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      width : 150,
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
    { headerName: 'Tracking Score', field: 'trackingScore',width:140 },
    { headerName: 'Expected Hours', field: 'expectedHours' , width:140},
    { headerName: 'Worked Hours', field: 'workedHours' , width : 140 },
    { headerName: 'Tracked Hours', field: 'trackedHours', width: 140 },
    { headerName: 'New', field: 'new', width : 90 },
    { headerName: 'Fiber', field: 'fiber', width : 90 },
    { headerName: 'FD Test', field: 'fdTest', width: 90 },
    { headerName: 'SR & ED', field: 'srEdHour', width: 100 },
  ];

  // Function to auto-size all columns based on content
  private autoSizeAllColumns(params: any) {
    const allColumnIds = params.columnApi.getAllColumns().map((column: any) => column.getId());
    params.columnApi.autoSizeColumns(allColumnIds);
  }
  
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
