import { Component } from '@angular/core';

@Component({
  selector: 'app-timesheet-summary',
  templateUrl: './timesheet-summary.component.html',
  styleUrl: './timesheet-summary.component.css'
})
export class TimesheetSummaryComponent {
  timesheetData = [
    { title: 'Timesheet Expected', number: 500, change: 20 },
    { title: 'Timesheet Created', number: 450, change: -10 },
    { title: 'Timesheet Accepted', number: 380, change: 5 },
    { title: 'Missing Timesheets', number: 120, change: -15 },
  ];
}
