import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StyleEncapsulationComponent } from './style-encapsulation/style-encapsulation.component';
import { NativeEncapsulationComponent } from './native-encapsulation/native-encapsulation.component';
import { PopupDirective } from './popup.directive';
import { PopupDemoComponent } from './popup-demo/popup-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleEncapsulationComponent,
    NativeEncapsulationComponent,
    PopupDirective,
    PopupDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
