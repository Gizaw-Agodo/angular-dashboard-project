import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

// Select the feature state
export const selectProjectState =
  createFeatureSelector<ProjectState>('project');

// Select all projects
export const selectAllProjects = createSelector(
  selectProjectState,
  (state) => state.data
);

export const selectAllArchivedProjects = createSelector(
  selectProjectState,
  (state) => state.archivedData
);

// Select loading state
export const selectProjectLoading = createSelector(
  selectProjectState,
  (state) => state.loading
);

export const selectProjectOperationStatus = createSelector(
  selectProjectState,
  (state) => state.status  
);

// Select error state
export const selectProjectError = createSelector(
  selectProjectState,
  (state) => state.error
);

// Select a specific project by ID
export const selectProjectById = (projectId: number) =>
  createSelector(selectAllProjects, (projects) =>
    projects.find((project) => project.id === projectId)
  );

// Select included projects
export const selectIncludedProjects = createSelector(
  selectAllProjects,
  (projects) => projects.filter((project) => project.included)
);

// Select projects by integration type
export const selectProjectsByIntegration = (integration: string) =>
  createSelector(selectAllProjects, (projects) =>
    projects.filter((project) => project.integration === integration)
  );
