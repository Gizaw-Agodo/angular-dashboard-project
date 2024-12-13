import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-archive-action-buttons',
  template: `
    <div class="action-buttons">
      <button mat-button color="primary" (click)="onUnarchive()">Unarchive</button>
    </div>
  `,
  styles: [
    `
      .action-buttons {
        display: flex;
        gap: 5px;
        justify-content: center;
        align-items: center;
        margin: 5px 10px;
      }

      button {
         cursor: pointer;
         padding : 0px 0px;
         width : 40px;
      }
    `,
  ],
})
export class ArchiveActionButtonsComponent implements ICellRendererAngularComp {
  data: any;
  onUnarchiveCallback!: (id: number) => void;

  agInit(params: ICellRendererParams & { onUnarchive: any }): void {
    this.data = params.data;
    this.onUnarchiveCallback = params.onUnarchive;
  }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }

  onUnarchive() {
    this.onUnarchiveCallback(this.data.id);
  }

  
}
