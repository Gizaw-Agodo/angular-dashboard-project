import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsComponent } from './projects.component';
import { AgChartsModule } from 'ag-charts-angular';
import { AgGridModule } from 'ag-grid-angular';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { SharedModule } from '../../shared/shared.module';
import { ArchivedProjectListComponent } from './components/archived-project-list/archived-project-list.component';
import { ArchiveActionButtonsComponent } from './components/archive-action-buttons/archive-action-buttons.component';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectsComponent,
    ActionButtonsComponent,
    CreateProjectComponent,
    ArchivedProjectListComponent, 
    ArchiveActionButtonsComponent, 
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    AgChartsModule,
    AgGridModule,
    SharedModule
  ],
})
export class ProjectsModule {}
