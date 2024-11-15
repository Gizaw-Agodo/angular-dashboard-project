import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHoursComponent } from './dashboard-hours.component';

describe('DashboardHoursComponent', () => {
  let component: DashboardHoursComponent;
  let fixture: ComponentFixture<DashboardHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
