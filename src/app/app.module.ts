import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficosDonutsComponent } from './graficos-donuts/graficos-donuts.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { RedesComponent } from './redes/redes.component';
import { LoginComponent } from './login/login.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrarComponent } from './borrar/borrar.component';
import { EditarComponent } from './editar/editar.component';
import { PaisesComponent } from './paises/paises.component';
import { ProvinciasComponent } from './provincias/provincias.component';
import { AniosComponent } from './anios/anios.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { ConfigurarComponent } from './configurar/configurar.component';
import { HabilitarComponent } from './habilitar/habilitar.component';
import { EditarGraficosComponent } from './editar-graficos/editar-graficos.component';
import { ColorComponent } from './color/color.component';
import { PorcentajeComponent } from './porcentaje/porcentaje.component';
import { AcercaDeService } from 'src/servicios/acerca-de.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GraficosDonutsComponent,
    EducacionComponent,
    ExperienciaComponent,
    AcercaDeComponent,
    PiePaginaComponent,
    RedesComponent,
    LoginComponent,
    BannerComponent,
    BorrarComponent,
    EditarComponent,
    PaisesComponent,
    ProvinciasComponent,
    AniosComponent,
    MensajeComponent,
    ConfigurarComponent,
    HabilitarComponent,
    EditarGraficosComponent,
    ColorComponent,
    PorcentajeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [AcercaDeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
