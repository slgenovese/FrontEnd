import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficosDonutsComponent } from './graficos-donuts/graficos-donuts.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficosDonutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
