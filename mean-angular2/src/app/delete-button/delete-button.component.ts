import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from "ag-grid-angular/main";

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent implements ICellRendererAngularComp {

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  public invokeParentMethod() {
    this.params.context.componentParent.deleteOnParent(`${this.params.value}`);
  }

}
