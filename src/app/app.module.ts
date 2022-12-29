import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraficosDonutsComponent } from './graficos-donuts/graficos-donuts.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { RedesComponent } from './redes/redes.component';

@NgModule({
  declarations: [
    AppComponent,
    GraficosDonutsComponent,
    EducacionComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    PiePaginaComponent,
    RedesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
