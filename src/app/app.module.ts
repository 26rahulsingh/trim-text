import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrimTextModule } from '../../projects/trim-text/src/lib/trim-text.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TrimTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
