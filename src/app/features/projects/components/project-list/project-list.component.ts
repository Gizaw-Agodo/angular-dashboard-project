import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridApi } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProjectActions from '../../store/project.actions';
import * as fromProjectSelectors from '../../store/project.selectors';
import { Router } from '@angular/router';
import { Project } from '../../models/project.model';
import { ActionButtonsComponent } from '../action-buttons/action-buttons.component';
import { NgxCsvParser } from 'ngx-csv-parser';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  rowData$: Observable<Project[]>;
  searchQuery: string = '';
  private gridApi!: GridApi;

  constructor(
    private store: Store,
    private router: Router,
    private csvParser: NgxCsvParser
  ) {
    this.rowData$ = this.store.select(fromProjectSelectors.selectAllProjects);
  }

  ngOnInit(): void {
    this.store
      .select(fromProjectSelectors.selectAllProjects)
      .subscribe((projects) => {
        if (projects.length === 0) {
          this.store.dispatch(ProjectActions.loadProjects());
        }
      });
  }

  // Column Definitions
  columnDefs: ColDef[] = [
    {
      headerName: 'Project Name',
      field: 'name',
      width: 180,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Created Date',
      field: 'createdDate',
      width: 160,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Created By',
      field: 'createdBy',
      width: 160,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Is Included',
      field: 'included',
      width: 130,
      cellRenderer: (params: any) => (params.value ? 'Yes' : 'No'),
    },
    {
      headerName: 'Integration',
      field: 'integration',
      width: 150,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Description',
      field: 'description',
      width: 250,
      sortable: true,
      filter: true,
      tooltipField: 'description',
    },
    {
      headerName: 'Hours',
      field: 'hours',
      width: 120,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Time Records',
      field: 'timeRecords',
      width: 140,
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Actions',
      width: 205,
      cellRenderer: ActionButtonsComponent,
      cellRendererParams: {
        onEdit: (id: number) => this.onEdit(id),
        onDelete: (id: number) => this.onDelete(id),
        onArchive: (id: number) => this.onArchive(id),
      },
    },
  ];

  // Grid options for AG Grid
  gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      tooltipComponentParams: {
        color: '#ececec',
        maxWidth: 300,
      },
    },
    tooltipShowDelay: 0,
  };

  // Grid ready event
  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  onExportClick() {
    if (this.gridApi) {
      this.gridApi.exportDataAsCsv({
        fileName: 'projects.csv',
        columnKeys: [
          'name',
          'createdDate',
          'createdBy',
          'included',
          'integration',
          'description',
          'hours',
          'timeRecords',
        ],
      });
    }
  }

  onEdit(projectId: number) {
    this.router.navigate(['/projects/edit', projectId]);
  }

  onDelete(projectId: number) {
    this.store.dispatch(ProjectActions.deleteProject({ id: projectId }));
  }
  onArchive(projectId: number) {
    this.store.dispatch(ProjectActions.archiveProject({ id: projectId }));
  }

  formatDateToYYYYMMDD(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed, so add 1
    const day = date.getDate().toString().padStart(2, '0'); // ensure two digits for the day

    return `${year}-${month}-${day}`;
  }

  // Handle CSV Upload
  handleFileInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files.item(0);
      if (file) {
        this.csvParser
          .parse(file, { header: true, delimiter: ',' })
          .subscribe((result: any) => {
            const projects: Project[] = result.map((record: any) => ({
              description: record['Description'],
              name: record['Project Name'],
              createdBy: record['Created By'],
              included: record['Is Included'],
              integration: record['Integration'],
              hours: Number(record['Hours']),
              timeRecords: Number(record['Time Records']),
              id: Date.now(),
              createdDate: this.formatDateToYYYYMMDD(new Date()),
            }));

            this.store.dispatch(ProjectActions.importCsvProjects({ projects }));
          });
      }
    }
  }
}
