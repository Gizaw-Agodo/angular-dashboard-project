import { createReducer, on } from '@ngrx/store';
import * as ProjectActions from './project.actions';
import { Project } from '../models/project.model';

export interface ProjectState {
  data: Project[];
  archivedData: Project[];
  loading: boolean;
  error: any;
  status: string;
}

const initialState: ProjectState = {
  data: [],
  archivedData: [],
  loading: false,
  error: null,
  status: 'idle',
};

export const projectReducer = createReducer(
  initialState,

  on(ProjectActions.loadProjects, (state) => ({
    ...state,
    loading: true,
    error: null,
    status: 'idle',
  })),
  on(ProjectActions.loadProjectsSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    status: 'success',
    data,
  })),
  on(ProjectActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  on(ProjectActions.createProject, (state) => ({
    ...state,
    loading: true,
    error: null,
    status: 'idle',
  })),
  on(ProjectActions.createProjectSuccess, (state, { project }) => ({
    ...state,
    loading: false,
    status: 'success',
    data: [project, ...state.data],
  })),
  on(ProjectActions.createProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  on(ProjectActions.updateProject, (state) => ({
    ...state,
    loading: true,
    error: null,
    status: 'idle',
  })),
  on(ProjectActions.updateProjectSuccess, (state, { project }) => ({
    ...state,
    loading: false,
    status: 'success',
    data: state.data.map((p) =>
      p.id === project.id ? { ...p, ...project } : p
    ),
  })),
  on(ProjectActions.updateProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  on(ProjectActions.deleteProject, (state) => ({
    ...state,
    loading: true,
    error: null,
    status: 'idle',
  })),
  on(ProjectActions.deleteProjectSuccess, (state, { id }) => {
    return {
      ...state,
      loading: false,
      status: 'success',
      data: state.data.filter((p) => p.id !== id),
    };
  }),
  on(ProjectActions.deleteProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  // Load Archived Projects
  on(ProjectActions.loadArchivedProjects, (state) => ({
    ...state,
    loading: true,
    status: 'idle',
    error: null,
  })),
  on(ProjectActions.loadArchivedProjectsSuccess, (state, { archivedData }) => ({
    ...state,
    loading: false,
    status: 'success',
    archivedData,
  })),
  on(ProjectActions.loadArchivedProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  // Unarchive Project
  on(ProjectActions.unarchiveProject, (state, { id }) => ({
    ...state,
    loading: true,
    status: 'idle',
    error: null,
  })),
  on(ProjectActions.unarchiveProjectSuccess, (state, { id }) => {
    const project = state.archivedData.find((p) => p.id === id);
    const newData = project ? [...state.data, project] : [...state.data];
    return {
      ...state,
      loading: false,
      data: newData,
      status: 'success',
      archivedData: state.archivedData.filter((p) => p.id !== id),
    };
  }),
  on(ProjectActions.unarchiveProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  // archive project
  on(ProjectActions.archiveProject, (state, { id }) => ({
    ...state,
    loading: true,
    status: 'idle',
    error: null,
  })),

  on(ProjectActions.archiveProjectSuccess, (state, { id }) => {
    const project = state.data.find((p) => p.id === id);
    const newData = project
      ? [project, ...state.archivedData]
      : [...state.data];
    return {
      ...state,
      loading: false,
      status: 'success',
      archivedData: newData,
      data: state.data.filter((p) => p.id !== id),
    };
  }),
  on(ProjectActions.archiveProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    status: 'failure',
    error,
  })),

  // Handle imported CSV projects
  on(ProjectActions.importCsvProjects, (state, { projects }) => ({
    ...state,
    loading: true,
    status: 'idle',
  })),

  on(ProjectActions.importCsvProjectsSuccess, (state, { projects }) => ({
    ...state,
    loading: false,
    status: 'success',
    data: [...projects,...state.data, ], 
  })),

);
