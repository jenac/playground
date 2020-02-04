import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEncapsulationComponent } from './style-encapsulation/style-encapsulation.component';
import { NativeEncapsulationComponent } from './native-encapsulation/native-encapsulation.component';
import { PopupDirective } from './popup.directive';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';
import { PopupDemo2Component } from './popup-demo2/popup-demo2.component';
import { PopupDemo3Component } from './popup-demo3/popup-demo3.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEncapsulationComponent,
    NativeEncapsulationComponent,
    PopupDirective,
    PopupDemoComponent,
    PopupDemo2Component,
    PopupDemo3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
