import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridApi } from 'ag-grid-community';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ProjectActions from '../../store/project.actions';
import * as fromProjectSelectors from '../../store/project.selectors';
import { Project } from '../../models/project.model';
import { ArchiveActionButtonsComponent } from '../archive-action-buttons/archive-action-buttons.component';

@Component({
  selector: 'app-archived-project-list',
  templateUrl: './archived-project-list.component.html',
  styleUrls: ['./archived-project-list.component.scss'],
})
export class ArchivedProjectListComponent implements OnInit {
  rowData$: Observable<Project[]>;
  searchQuery = '';
  private gridApi!: GridApi;

  constructor(private store: Store) {
    this.rowData$ = this.store.select(
      fromProjectSelectors.selectAllArchivedProjects
    ); // Select archived projects instead
  }

  ngOnInit(): void {
    this.store
      .select(fromProjectSelectors.selectAllArchivedProjects)
      .subscribe((projects) => {
        if (projects.length === 0) {
          this.store.dispatch(ProjectActions.loadArchivedProjects()); // Load archived projects
        }
      });
  }

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
      width: 135,
      cellRenderer: ArchiveActionButtonsComponent,
      cellRendererParams: {
        onUnarchive: (id: number) => this.onUnarchive(id),
      },
    },
  ];

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

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  onExportClick() {
    if (this.gridApi) {
      this.gridApi.exportDataAsCsv({
        fileName: 'archived_projects.csv',
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

  onUnarchive(projectId: number) {
    this.store.dispatch(ProjectActions.unarchiveProject({ id: projectId }));
  }
}
