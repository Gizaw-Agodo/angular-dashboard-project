import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';

// Action to load projects
export const loadProjects = createAction('[Project List] Load Projects');

// Action for successful project loading
export const loadProjectsSuccess = createAction(
  '[Project List] Load Projects Success',
  props<{ data: Project[] }>()
);

// Action for project loading failure
export const loadProjectsFailure = createAction(
  '[Project List] Load Projects Failure',
  props<{ error: any }>()
);

// Action to create a new project
export const createProject = createAction(
  '[Project List] Create Project',
  props<{ project: Project }>()
);

// Action for successful project creation
export const createProjectSuccess = createAction(
  '[Project List] Create Project Success',
  props<{ project: Project }>()
);

// Action for project creation failure
export const createProjectFailure = createAction(
  '[Project List] Create Project Failure',
  props<{ error: any }>()
);

// Action to update an existing project
export const updateProject = createAction(
  '[Project List] Update Project',
  props<{ project: Project }>()
);

// Action for successful project update
export const updateProjectSuccess = createAction(
  '[Project List] Update Project Success',
  props<{ project: Project }>()
);

// Action for project update failure
export const updateProjectFailure = createAction(
  '[Project List] Update Project Failure',
  props<{ error: any }>()
);

// Action to delete a project
export const deleteProject = createAction(
  '[Project List] Delete Project',
  props<{ id: number }>()
);

// Action for successful project deletion
export const deleteProjectSuccess = createAction(
  '[Project List] Delete Project Success',
  props<{ id: number }>()
);

// Action for project deletion failure
export const deleteProjectFailure = createAction(
  '[Project List] Delete Project Failure',
  props<{ error: any }>()
);

export const loadArchivedProjects = createAction(
  '[Project] Load Archived Projects'
);
export const loadArchivedProjectsSuccess = createAction(
  '[Project] Load Archived Projects Success',
  props<{ archivedData: Project[] }>()
);
export const loadArchivedProjectsFailure = createAction(
  '[Project] Load Archived Projects Failure',
  props<{ error: any }>()
);

// unarchive project
export const unarchiveProject = createAction(
  '[Project] Unarchive Project',
  props<{ id: number }>()
);
export const unarchiveProjectSuccess = createAction(
  '[Project] Unarchive Project Success',
  props<{ id: number }>()
);
export const unarchiveProjectFailure = createAction(
  '[Project] Unarchive Project Failure',
  props<{ error: any }>()
);

// archive project
export const archiveProject = createAction(
  '[Project] archive Project',
  props<{ id: number }>()
);
export const archiveProjectSuccess = createAction(
  '[Project] archive Project Success',
  props<{ id: number }>()
);
export const archiveProjectFailure = createAction(
  '[Project] archive Project Failure',
  props<{ error: any }>()
);

export const importCsvProjects = createAction(
  '[Project] Import CSV Projects',
  props<{ projects: Project[] }>()
);

export const importCsvProjectsSuccess = createAction(
  '[Project] Import CSV Projects Success',
  props<{ projects: Project[] }>()
);