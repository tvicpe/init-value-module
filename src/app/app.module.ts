import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AsyncInitialValueModule} from '../../projects/async-initial-value/src/lib/async-initial-value.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsyncInitialValueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
