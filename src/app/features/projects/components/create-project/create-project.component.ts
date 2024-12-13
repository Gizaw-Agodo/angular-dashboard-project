import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Project } from '../../models/project.model';
import * as ProjectActions from '../../store/project.actions';
import * as fromProjectSelectors from '../../store/project.selectors';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  isEditMode = false;
  projectId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store,
    private router: Router
  ) {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.maxLength(500)],
      createdBy: ['', Validators.required],
      createdDate: [{ value: '', disabled: true }],
      included: [false],
      integration: ['', Validators.required],
      hours: [0, [Validators.required, Validators.min(0)]],
      timeRecords: [0, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isEditMode = true;
        this.projectId = +params['id'];
        this.store
          .select(fromProjectSelectors.selectProjectById(this.projectId))
          .subscribe((project: Project | undefined) => {
            if (project) {
              this.projectForm.patchValue(project);
            }
          });
      }
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      const projectData: Project = {
        ...this.projectForm.value,
        id: this.projectId,
      };

      if (this.isEditMode) {
        this.store.dispatch(
          ProjectActions.updateProject({ project: projectData })
        );
        console.log('Updated Project:', projectData);
      } else {
        this.store.dispatch(
          ProjectActions.createProject({ project: projectData })
        );
        console.log('Created Project:', projectData);
      }

      this.store
        .select(fromProjectSelectors.selectProjectOperationStatus)
        .pipe(
          filter((status) => status === 'success'),
          take(1)
        )
        .subscribe(() => {
          console.log('Navigation after success');
          this.router.navigate(['/projects']);
        });

      this.store
        .select(fromProjectSelectors.selectProjectOperationStatus)
        .pipe(
          filter((status) => status === 'failure'),
          take(1)
        )
        .subscribe(() => {
          console.log('Operation failed');
        });
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    this.router.navigate(['/projects']);
  }
}
