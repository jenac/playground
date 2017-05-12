import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid";
import { ToolService } from '../tool.service';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';


@Component({
  selector: 'app-tool-grid',
  templateUrl: './tool-grid.component.html',
  styleUrls: ['./tool-grid.component.css']
})
export class ToolGridComponent implements OnInit {
  private gridOptions: GridOptions;
  private data: any;
  private errorMessage: string;

  constructor(private toolService: ToolService) {
    this.gridOptions = <GridOptions>{
      context: {
        componentParent: this
      }
    };
    this.gridOptions.columnDefs = [
      {
        headerName: "UID",
        field: "uid",
        width: 100
      },
      {
        headerName: "Name",
        field: "name",
        width: 100
      },
      {
        headerName: "Description",
        field: "description",
        editable: true,
      },
      {
        headerName: "Link",
        field: "link",
        editable: true,
        cellEditor: 'largeText',
        cellEditorParams: {
          maxLength: '300',   // override the editor defaults
          cols: '50',
          rows: '6'
        },
      },
      {
        headerName: "",
        field: "uid",
        cellRendererFramework: DeleteButtonComponent,
        width: 120
      }
    ];
  }

  ngOnInit() {
    this.refresh();
  }

public deleteOnParent(uid): void {
    alert(`"Here should confirm delete: ${uid}!`);
    this.toolService.deleteTool(uid).subscribe(
      data => { 
        console.log(data);
        this.refresh();
      },
      error => this.errorMessage = <any>error);
  }

  public showNew(): void {
    // modal.open
  }

  private refresh(): void {
    this.toolService.getTools().subscribe(
      data => this.data = data,
      error => this.errorMessage = <any>error);
  }
}
