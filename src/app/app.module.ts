import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { GraficosDonutsComponent } from './Componentes/graficos-donuts/graficos-donuts.component';
import { EducacionComponent } from './Componentes/educacion/educacion.component';
import { ExperienciaComponent } from './Componentes/experiencia/experiencia.component';
import { AcercaDeComponent } from './Componentes/acerca-de/acerca-de.component';
import { PiePaginaComponent } from './Componentes/pie-pagina/pie-pagina.component';
import { RedesComponent } from './Componentes/redes/redes.component';
import { LoginComponent } from './Componentes/login/login.component';
import { BannerComponent } from './Componentes/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BorrarComponent } from './Componentes/borrar/borrar.component';
import { EditarComponent } from './Componentes/editar/editar.component';
import { PaisesComponent } from './Componentes/paises/paises.component';
import { ProvinciasComponent } from './Componentes/provincias/provincias.component';
import { AniosComponent } from './Componentes/anios/anios.component';
import { MensajeComponent } from './Componentes/mensaje/mensaje.component';
import { ConfigurarComponent } from './Componentes/configurar/configurar.component';
import { HabilitarComponent } from './Componentes/habilitar/habilitar.component';
import { EditarGraficosComponent } from './Componentes/editar-graficos/editar-graficos.component';
import { ColorComponent } from './Componentes/color/color.component';
import { PorcentajeComponent } from './Componentes/porcentaje/porcentaje.component';
import { AcercaDeService } from './servicios/acerca-de.service';
import { HttpClientModule } from '@angular/common/http';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { InstitucionComponent } from './Componentes/institucion/institucion.component';
import { TituloComponent } from './Componentes/titulo/titulo.component';
import { AltaComponent } from './Componentes/alta/alta.component';
import { AltaGraficosComponent } from './Componentes/alta-graficos/alta-graficos.component';
import { PersonasRedesComponent } from './Componentes/personas-redes/personas-redes.component';

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
    ProyectosComponent,
    InstitucionComponent,
    TituloComponent,
    AltaComponent,
    AltaGraficosComponent,
    PersonasRedesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  //providers: [AcercaDeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
