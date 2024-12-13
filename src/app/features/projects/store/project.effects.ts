import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ProjectActions from './project.actions';
import { Project } from '../models/project.model';
import { ProjectService } from '../services/project.service';

@Injectable()
export class ProjectEffects {
  loadProjects$;
  createProject$;
  updateProject$;
  deleteProject$;
  unarchiveProject$;
  loadArchivedProjects$;
  archiveProject$;
  importCsvProjects$;

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {
    // Load Projects Effect
    this.loadProjects$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.loadProjects),
        mergeMap(() =>
          this.projectService.getProjects().pipe(
            map((projects: Project[]) =>
              ProjectActions.loadProjectsSuccess({ data: projects })
            ),
            catchError((error) =>
              of(ProjectActions.loadProjectsFailure({ error }))
            )
          )
        )
      )
    );

    // Create Project Effect
    this.createProject$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.createProject),
        mergeMap((action) =>
          this.projectService.createProject(action.project).pipe(
            map((project: Project) =>
              ProjectActions.createProjectSuccess({ project })
            ),
            catchError((error) =>
              of(ProjectActions.createProjectFailure({ error }))
            )
          )
        )
      )
    );

    // Update Project Effect
    this.updateProject$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.updateProject),
        mergeMap((action) =>
          this.projectService.updateProject(action.project).pipe(
            map((project: Project) =>
              ProjectActions.updateProjectSuccess({ project })
            ),
            catchError((error) =>
              of(ProjectActions.updateProjectFailure({ error }))
            )
          )
        )
      )
    );

    // Delete Project Effect
    this.deleteProject$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.deleteProject),
        mergeMap((action) =>
          this.projectService.deleteProject(action.id).pipe(
            map(() => ProjectActions.deleteProjectSuccess({ id: action.id })),
            catchError((error) =>
              of(ProjectActions.deleteProjectFailure({ error }))
            )
          )
        )
      )
    );

    // Load Archived Projects
    this.loadArchivedProjects$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.loadArchivedProjects),
        mergeMap(() =>
          this.projectService.getArchivedProjects().pipe(
            map((archivedData: Project[]) =>
              ProjectActions.loadArchivedProjectsSuccess({ archivedData })
            ),
            catchError((error) =>
              of(ProjectActions.loadArchivedProjectsFailure({ error }))
            )
          )
        )
      )
    );

    // Unarchive Project
    this.unarchiveProject$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.unarchiveProject),
        mergeMap((action) =>
          this.projectService.unarchiveProject(action.id).pipe(
            map(() => {
              return ProjectActions.unarchiveProjectSuccess({ id: action.id });
            }),
            catchError((error) =>
              of(ProjectActions.unarchiveProjectFailure({ error }))
            )
          )
        )
      )
    );

    this.archiveProject$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.archiveProject),
        mergeMap((action) =>
          this.projectService.archiveProject(action.id).pipe(
            map(() => {
              return ProjectActions.archiveProjectSuccess({ id: action.id });
            }),
            catchError((error) =>
              of(ProjectActions.archiveProjectFailure({ error }))
            )
          )
        )
      )
    );

    // Effect for handling imported CSV projects
    this.importCsvProjects$ = createEffect(() =>
      this.actions$.pipe(
        ofType(ProjectActions.importCsvProjects),
        mergeMap((action) =>
          this.projectService.importProjects(action.projects).pipe(
            map(() =>
              ProjectActions.importCsvProjectsSuccess({
                projects: action.projects,
              })
            ),
            catchError((error) =>
              of(ProjectActions.loadProjectsFailure({ error }))
            )
          )
        )
      )
    );
  }
}
