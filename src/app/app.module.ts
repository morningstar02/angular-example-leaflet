import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleLeafletModule } from './example-leaflet/example-leaflet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleLeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
