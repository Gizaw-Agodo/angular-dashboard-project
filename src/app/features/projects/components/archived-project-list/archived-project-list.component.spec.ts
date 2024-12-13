import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedProjectListComponent } from './archived-project-list.component';

describe('ArchivedProjectListComponent', () => {
  let component: ArchivedProjectListComponent;
  let fixture: ComponentFixture<ArchivedProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivedProjectListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivedProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
