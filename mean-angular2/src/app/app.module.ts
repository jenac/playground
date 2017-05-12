import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgGridModule} from "ag-grid-angular/main";
import { AppComponent } from './app.component';
import { ToolGridComponent } from './tool-grid/tool-grid.component';
import { ToolService } from './tool.service';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolGridComponent,
    DeleteButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgGridModule.withComponents([DeleteButtonComponent]),
  ],
  providers: [ToolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
