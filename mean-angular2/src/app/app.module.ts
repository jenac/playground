import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SchemaFormModule, WidgetRegistry, DefaultWidgetRegistry } from "angular2-schema-form";

import { AppComponent } from './app.component';
import { SoapuiComponent } from './soapui/soapui.component';

@NgModule({
  declarations: [
    AppComponent,
    SoapuiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SchemaFormModule
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule { }
