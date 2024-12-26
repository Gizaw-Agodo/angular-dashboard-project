import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-buttons',
  template: `
    <div class="action-buttons">
     <button mat-button color="accent" (click)="onArchive()"  class="hover-effect">
        Archive
      </button>
      <button mat-button color="primary" (click)="onEdit()"  class="hover-effect">Edit</button>
      <button mat-button color="warn" (click)="onDelete()"  class="hover-effect">
        Delete
      </button>
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
      }
    `,
  ],
})
export class ActionButtonsComponent implements ICellRendererAngularComp {
  data: any;
  onEditCallback!: (id: number) => void;
  onDeleteCallback!: (id: number) => void;
  onArchiveCallback! : (id:number) =>void;

  agInit(params: ICellRendererParams & { onEdit: any; onDelete: any ; onArchive :any}): void {
    this.data = params.data;
    this.onEditCallback = params.onEdit;
    this.onDeleteCallback = params.onDelete;
    this.onArchiveCallback = params.onArchive;
  }

  refresh(): boolean {
    return true;
  }

  onEdit() {
    this.onEditCallback(this.data.id);
  }

  onDelete() {
    this.onDeleteCallback(this.data.id);
  }

  onArchive(){
    this.onArchiveCallback(this.data.id)
  }
}
