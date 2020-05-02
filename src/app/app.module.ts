import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorialModule } from './example-leaflet/tutorial.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TutorialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
