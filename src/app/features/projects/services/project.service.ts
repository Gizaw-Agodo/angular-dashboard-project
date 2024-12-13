import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project.model';
import { PROJECTS_MOCK_DATA } from '../../../mock-data/project.mock';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor() {}

  // Fetch all projects
  getProjects(): Observable<Project[]> {
    return of(PROJECTS_MOCK_DATA);
  }

  // Create a new project
  createProject(project: Project): Observable<Project> {
    const newProject = {
      ...project,
      id: Date.now(),
      createdDate: Date.now().toLocaleString(),
    };
    // PROJECTS_MOCK_DATA.push(newProject);
    return of(newProject);
  }

  // Update an existing project
  updateProject(project: Project): Observable<Project> {
    const index = PROJECTS_MOCK_DATA.findIndex((p) => p.id === project.id);
    // do the backend staff
    return of(project);
  }

  // Delete a project
  deleteProject(id: number): Observable<number> {
    const index = PROJECTS_MOCK_DATA.findIndex((p) => p.id === id);
    if (index !== -1) {
      // PROJECTS_MOCK_DATA.splice(index, 1);
    }
    return of(id);
  }

  // Fetch Archived Projects
  getArchivedProjects(): Observable<Project[]> {
    // return this.http.get<Project[]>('/api/archived-projects');
    return of();
  }

  // Unarchive a project
  unarchiveProject(id: number): Observable<number> {
    // return this.http.post<Project>(`/api/unarchive-project/${id}`, { id });
    return of(id);
  }

  archiveProject(id: number): Observable<number> {
    // return this.http.post<Project>(`/api/archive-project/${id}`, { id });
    return of(id);
  }

  importProjects(projects: Project[]): Observable<any> {
    // return this.http.post('/api/import-projects', projects);
    return of([]);
  }
}
