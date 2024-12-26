import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent  {
  fiscalYears: number[] = [2020, 2021, 2022, 2023, 2024];
  selectedFiscalYear: number = new Date().getFullYear();
  
}
