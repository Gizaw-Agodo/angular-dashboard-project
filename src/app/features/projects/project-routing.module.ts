import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { CreateProjectComponent } from './components/create-project/create-project.component';
import { ArchivedProjectListComponent } from './components/archived-project-list/archived-project-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      { path: '', component: ProjectListComponent }, 
      {path : "create", component : CreateProjectComponent}, 
      { path: 'edit/:id', component: CreateProjectComponent },
      { path: 'archive', component: ArchivedProjectListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectRoutingModule {}
