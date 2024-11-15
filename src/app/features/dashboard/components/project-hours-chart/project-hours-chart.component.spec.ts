import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHoursChartComponent } from './project-hours-chart.component';

describe('ProjectHoursChartComponent', () => {
  let component: ProjectHoursChartComponent;
  let fixture: ComponentFixture<ProjectHoursChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHoursChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHoursChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
